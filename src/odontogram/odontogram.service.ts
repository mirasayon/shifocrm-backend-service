import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateOdontogramDto } from "./dto/create-odontogram.dto.js";
import type { GetOrCreateOdontogramDto } from "./dto/get-or-create-odontogram.dto.js";
import type { UpdateOdontogramDto } from "./dto/update-odontogram.dto.js";

@Injectable()
export class OdontogramService {
    constructor(private prisma: PrismaService) {}

    async getByVisitId(clinicId: number | null | undefined, visitId: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        const foundOdontogram = await this.prisma.odontogram.findFirst({
            where: { clinicId, visitId },
        });
        if (!foundOdontogram) throw new NotFoundException("Odontogram not found for this visit");
        return foundOdontogram;
    }

    async listByPatientId(clinicId: number | null | undefined, patientId: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        return this.prisma.odontogram.findMany({
            where: { clinicId, patientId },
            orderBy: { createdAt: "desc" },
        });
    }

    async getById(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        const odontogram = await this.prisma.odontogram.findFirst({
            where: { clinicId, id },
        });
        if (!odontogram) throw new NotFoundException("Odontogram not found");
        return odontogram;
    }

    async create(clinicId: number | null | undefined, dto: CreateOdontogramDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const visit = await this.prisma.visit.findFirst({
            where: { id: dto.visitId, clinicId },
            select: { id: true, patientId: true },
        });
        if (!visit) throw new NotFoundException("Visit not found");
        if (visit.patientId !== dto.patientId) throw new BadRequestException("patientId does not match visit");

        const existing = await this.prisma.odontogram.findFirst({
            where: { clinicId, visitId: dto.visitId },
            select: { id: true },
        });
        if (existing) throw new ConflictException("Odontogram already exists for this visit");

        return this.prisma.odontogram.create({
            data: {
                clinicId,
                patientId: dto.patientId,
                visitId: dto.visitId,
                data: dto.data ?? { teeth: {} },
            },
        });
    }

    async update(clinicId: number | null | undefined, id: number, dto: UpdateOdontogramDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.odontogram.findFirst({
            where: { clinicId, id },
            select: { id: true },
        });
        if (!existing) throw new NotFoundException("Odontogram not found");

        return this.prisma.odontogram.update({
            where: { id },
            data: { data: dto.data },
        });
    }

    async delete(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.odontogram.findFirst({
            where: { clinicId, id },
            select: { id: true },
        });
        if (!existing) throw new NotFoundException("Odontogram not found");

        await this.prisma.odontogram.delete({ where: { id } });
        return { id };
    }

    async getOrCreate(clinicId: number | null | undefined, dto: GetOrCreateOdontogramDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const visit = await this.prisma.visit.findFirst({
            where: { id: dto.visitId, clinicId },
            select: { id: true, patientId: true },
        });
        if (!visit) throw new NotFoundException("Visit not found");
        if (visit.patientId !== dto.patientId) throw new BadRequestException("patientId does not match visit");

        const existing = await this.getByVisitId(clinicId, dto.visitId);
        if (existing) return existing;

        const lastSnapshot = await this.prisma.odontogram.findFirst({
            where: { clinicId, patientId: dto.patientId },
            orderBy: { createdAt: "desc" },
            select: { data: true },
        });
        const initial = (lastSnapshot?.data as any) ?? { teeth: {} };

        return this.prisma.odontogram.create({
            data: {
                clinicId,
                patientId: dto.patientId,
                visitId: dto.visitId,
                data: initial,
            },
        });
    }
}
