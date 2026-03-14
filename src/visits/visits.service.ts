// src/visits/visits.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, NotFoundException } from "@nestjs/common";
import { VisitStatus } from "../prisma/client/client.js";
import { CreateVisitDto, UpdateVisitDto } from "./dto/visit.dto.js";

@Injectable()
export class VisitsService {
    constructor(private prisma: PrismaService) {}

    async create(clinicId: number, data: CreateVisitDto) {
        const debtAmount = this.calculateDebt(data.price, data.paidAmount);

        return this.prisma.visit.create({
            data: {
                ...data,
                clinicId,
                debtAmount,
            },
        });
    }

    async update(clinicId: number, id: number, data: UpdateVisitDto) {
        const existing = await this.prisma.visit.findFirst({
            where: { id, clinicId },
        });

        if (!existing) throw new NotFoundException("Visit not found");

        const price = data.price !== undefined ? data.price : Number(existing.price);
        const paidAmount = data.paidAmount !== undefined ? data.paidAmount : Number(existing.paidAmount);
        let debtAmount = data.debtAmount !== undefined ? data.debtAmount : this.calculateDebt(price, paidAmount);
        let status = data.status || existing.status;

        // Status workflow logic derived from your VISIT_STATUS_WORKFLOW.md
        if (debtAmount === 0 && status === VisitStatus.COMPLETED_DEBT) {
            status = VisitStatus.COMPLETED_PAID;
            debtAmount = null;
        } else if (debtAmount !== null && debtAmount > 0 && status === VisitStatus.COMPLETED_PAID) {
            status = VisitStatus.COMPLETED_DEBT;
        }

        return this.prisma.visit.update({
            where: { id },
            data: {
                ...data,
                status,
                debtAmount,
            },
        });
    }

    async findAllByClinic(clinicId: number) {
        return this.prisma.visit.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
            include: { patient: true, doctor: true },
        });
    }

    private calculateDebt(price?: number, paidAmount?: number): number | null {
        if (!price || price <= 0) return null;
        const paid = paidAmount || 0;
        const debt = price - paid;
        return debt > 0 ? debt : null;
    }
}
