import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { Role } from "../prisma/client/client.js";
import type { VisitServiceWhereInput } from "../prisma/client/models.js";
import type { CreateVisitServiceDto } from "./dto/create-visit-service.dto.js";

@Injectable()
export class VisitServicesService {
    constructor(private prisma: PrismaService) {}

    async listByClinicAndFilters(clinicId: number | null | undefined, filters: { patientId?: number; visitId?: number; visitIds?: number[] }) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const where: VisitServiceWhereInput = { clinicId };
        if (filters.patientId) where.patientId = filters.patientId;
        if (filters.visitId) where.visitId = filters.visitId;
        if (filters.visitIds?.length) where.visitId = { in: filters.visitIds };

        return this.prisma.visitService.findMany({
            where,
            orderBy: { createdAt: "desc" },
        });
    }

    async create(clinicId: number | null | undefined, userId: number, dto: CreateVisitServiceDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const visit = await this.prisma.visit.findFirst({
            where: { id: dto.visitId, clinicId },
            select: { id: true, patientId: true },
        });
        if (!visit) throw new NotFoundException("Visit not found");
        if (visit.patientId !== dto.patientId) throw new BadRequestException("patientId does not match visit");

        const patient = await this.prisma.patient.findFirst({
            where: { id: dto.patientId, clinicId },
            select: { id: true },
        });
        if (!patient) throw new NotFoundException("Patient not found");

        const resolvedDoctorId = dto.doctorId ?? userId;
        if (resolvedDoctorId) {
            const doctor = await this.prisma.user.findFirst({
                where: { id: resolvedDoctorId, clinicId, role: Role.DOCTOR },
                select: { id: true },
            });
            if (!doctor) throw new NotFoundException("Doctor not found");
        }

        return this.prisma.visitService.create({
            data: {
                clinicId,
                visitId: dto.visitId,
                patientId: dto.patientId,
                doctorId: resolvedDoctorId,
                toothId: dto.toothId ?? null,
                serviceName: dto.serviceName,
                price: dto.price ?? 0,
            },
        });
    }

    async deleteById(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.visitService.findFirst({
            where: { id, clinicId },
            select: { id: true },
        });
        if (!existing) throw new NotFoundException("Visit service not found");

        await this.prisma.visitService.delete({ where: { id } });
        return { id };
    }

    async deleteByVisitAndTooth(clinicId: number | null | undefined, visitId: number, toothId: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        const res = await this.prisma.visitService.deleteMany({
            where: { clinicId, visitId, toothId },
        });
        return { deleted: res.count };
    }
}
