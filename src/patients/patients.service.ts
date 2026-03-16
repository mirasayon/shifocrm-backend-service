// src/patients/patients.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { safeUserSelect } from "../common/prisma-selects.js";
import type { CreatePatientDto } from "./dto/create-patient.dto.js";
import type { ListPatientsQuery } from "./dto/list-patients.query.js";
import type { UpdatePatientDto } from "./dto/update-patient.dto.js";

@Injectable()
export class PatientsService {
    constructor(private prisma: PrismaService) {}

    async findAll(clinicId: number | null | undefined, query?: ListPatientsQuery) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const where: any = { clinicId };
        if (query?.doctorId) where.doctorId = query.doctorId;
        if (query?.status) where.status = query.status;

        return this.prisma.patient.findMany({
            where,
            orderBy: { createdAt: "desc" },
            include: { doctor: { select: safeUserSelect } },
        });
    }

    async findOne(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        const patient = await this.prisma.patient.findFirst({
            where: { clinicId, id },
            include: { doctor: { select: safeUserSelect } },
        });
        if (!patient) throw new NotFoundException("Patient not found");
        return patient;
    }

    async create(clinicId: number | null | undefined, dto: CreatePatientDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        return this.prisma.$transaction(async (tx) => {
            // 1. Create Patient
            const patient = await tx.patient.create({
                data: {
                    clinicId,
                    fullName: dto.fullName,
                    phone: dto.phone,
                    birthDate: dto.birthDate ? new Date(dto.birthDate) : null,
                    gender: dto.gender ?? null,
                    address: dto.address ?? null,
                    doctorId: dto.doctorId ?? null,
                    status: dto.status || "active",
                    notes: dto.notes ?? null,
                    lastVisit: dto.lastVisit ? new Date(dto.lastVisit) : null,
                    nextAppointment: dto.nextAppointment ? new Date(dto.nextAppointment) : null,
                },
            });

            // 2. Auto-create first visit if requested (matches frontend logic)
            if (dto.createFirstVisit) {
                await tx.visit.create({
                    data: {
                        clinicId,
                        patientId: patient.id,
                        doctorId: dto.doctorId ?? null,
                        status: "PENDING",
                        notes: "Birinchi tashrif (avtomatik yaratilgan)",
                    },
                });
            }

            return patient;
        });
    }

    async update(clinicId: number | null | undefined, id: number, dto: UpdatePatientDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.patient.findFirst({
            where: { clinicId, id },
            select: { id: true },
        });
        if (!existing) throw new NotFoundException("Patient not found");

        const { createFirstVisit: _ignore, ...data } = dto;

        return this.prisma.patient.update({
            where: { id },
            data: {
                fullName: data.fullName,
                phone: data.phone,
                birthDate: data.birthDate === undefined ? undefined : data.birthDate ? new Date(data.birthDate) : null,
                gender: data.gender === undefined ? undefined : (data.gender ?? null),
                address: data.address === undefined ? undefined : (data.address ?? null),
                doctorId: data.doctorId === undefined ? undefined : (data.doctorId ?? null),
                status: data.status,
                notes: data.notes === undefined ? undefined : (data.notes ?? null),
                lastVisit: data.lastVisit === undefined ? undefined : data.lastVisit ? new Date(data.lastVisit) : null,
                nextAppointment: data.nextAppointment === undefined ? undefined : data.nextAppointment ? new Date(data.nextAppointment) : null,
            },
        });
    }

    async archive(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.patient.findFirst({
            where: { clinicId, id },
            select: { id: true },
        });
        if (!existing) throw new NotFoundException("Patient not found");

        return this.prisma.patient.update({
            where: { id },
            data: { status: "archived" },
        });
    }
}
