// src/visits/visits.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Role, VisitStatus } from "../prisma/client/client.js";
import { safeUserSelect } from "../common/prisma-selects.js";
import type { VisitWhereInput } from "../prisma/client/models.js";
import { CreateVisitDto, UpdateVisitDto } from "./dto/visit.dto.js";
import type { ListVisitsQuery } from "./dto/list-visits.query.js";

@Injectable()
export class VisitsService {
    constructor(private prisma: PrismaService) {}

    async create(clinicId: number | null | undefined, data: CreateVisitDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const patient = await this.prisma.patient.findFirst({
            where: { id: data.patientId, clinicId },
            select: { id: true },
        });
        if (!patient) throw new NotFoundException("Patient not found");

        if (data.doctorId !== undefined && data.doctorId !== null) {
            const doctor = await this.prisma.user.findFirst({
                where: { id: data.doctorId, clinicId, role: Role.DOCTOR },
                select: { id: true },
            });
            if (!doctor) throw new NotFoundException("Doctor not found");
        }

        const debtAmount = this.calculateDebt(data.price, data.paidAmount);

        return this.prisma.visit.create({
            data: {
                clinicId,
                patientId: data.patientId,
                doctorId: data.doctorId ?? null,
                date: data.date ? new Date(data.date) : undefined,
                startTime: data.startTime ?? null,
                endTime: data.endTime ?? null,
                durationMinutes: data.durationMinutes ?? null,
                status: VisitStatus.PENDING,
                notes: data.notes ?? null,
                price: data.price,
                paidAmount: data.paidAmount,
                debtAmount,
            },
            include: { patient: true, doctor: { select: safeUserSelect } },
        });
    }

    async update(clinicId: number | null | undefined, id: number, data: UpdateVisitDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.visit.findFirst({
            where: { id, clinicId },
        });

        if (!existing) throw new NotFoundException("Visit not found");

        if (data.patientId !== undefined) {
            const patient = await this.prisma.patient.findFirst({
                where: { id: data.patientId, clinicId },
                select: { id: true },
            });
            if (!patient) throw new NotFoundException("Patient not found");
        }
        if (data.doctorId !== undefined && data.doctorId !== null) {
            const doctor = await this.prisma.user.findFirst({
                where: { id: data.doctorId, clinicId, role: Role.DOCTOR },
                select: { id: true },
            });
            if (!doctor) throw new NotFoundException("Doctor not found");
        }

        const price = data.price !== undefined ? data.price : Number(existing.price || 0);
        const paidAmount = data.paidAmount !== undefined ? data.paidAmount : Number(existing.paidAmount || 0);
        let debtAmount = data.debtAmount !== undefined ? data.debtAmount : this.calculateDebt(price, paidAmount);
        let status = data.status || existing.status;

        // Keep completed payment statuses aligned with the current billing totals.
        if (debtAmount === 0 && status === VisitStatus.COMPLETED_DEBT) {
            status = VisitStatus.COMPLETED_PAID;
            debtAmount = null;
        } else if (debtAmount !== null && debtAmount > 0 && status === VisitStatus.COMPLETED_PAID) {
            status = VisitStatus.COMPLETED_DEBT;
        }

        return this.prisma.visit.update({
            where: { id },
            data: {
                patientId: data.patientId,
                doctorId: data.doctorId === undefined ? undefined : (data.doctorId ?? null),
                date: data.date ? new Date(data.date) : undefined,
                startTime: data.startTime === undefined ? undefined : (data.startTime ?? null),
                endTime: data.endTime === undefined ? undefined : (data.endTime ?? null),
                durationMinutes: data.durationMinutes === undefined ? undefined : (data.durationMinutes ?? null),
                notes: data.notes === undefined ? undefined : (data.notes ?? null),
                price: data.price,
                paidAmount: data.paidAmount,
                status,
                debtAmount,
            },
            include: { patient: true, doctor: { select: safeUserSelect } },
        });
    }

    async findAllByClinic(clinicId: number | null | undefined, query?: ListVisitsQuery) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const where: VisitWhereInput = { clinicId };
        if (query?.patientId) where.patientId = query.patientId;
        if (query?.doctorId) where.doctorId = query.doctorId;
        if (query?.status) where.status = query.status;

        if (query?.date) {
            where.date = new Date(query.date);
        } else if (query?.startDate || query?.endDate) {
            const range: NonNullable<VisitWhereInput["date"]> = {};
            if (query.startDate) range.gte = new Date(this.normalizeStartDate(query.startDate));
            if (query.endDate) range.lte = new Date(this.normalizeEndDate(query.endDate));
            where.date = range;
        }

        return this.prisma.visit.findMany({
            where,
            orderBy: { createdAt: "desc" },
            include: { patient: true, doctor: { select: safeUserSelect } },
        });
    }

    async findOne(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const visit = await this.prisma.visit.findFirst({
            where: { clinicId, id },
            include: {
                patient: true,
                doctor: { select: safeUserSelect },
                payments: true,
                services: true,
                consumptions: { include: { item: true } },
                odontogram: true,
            },
        });
        if (!visit) throw new NotFoundException("Visit not found");
        return visit;
    }

    async archive(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.visit.findFirst({
            where: { id, clinicId },
            select: { id: true },
        });
        if (!existing) throw new NotFoundException("Visit not found");

        return this.prisma.visit.update({
            where: { id },
            data: { status: VisitStatus.ARCHIVED },
        });
    }

    private calculateDebt(price?: number, paidAmount?: number): number | null {
        if (!price || price <= 0) return null;
        const paid = paidAmount || 0;
        const debt = price - paid;
        return debt > 0 ? debt : null;
    }

    private normalizeStartDate(input: string) {
        return input.includes("T") ? input : `${input}T00:00:00.000Z`;
    }

    private normalizeEndDate(input: string) {
        return input.includes("T") ? input : `${input}T23:59:59.999Z`;
    }
}
