import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import bcryptjs from "bcryptjs";
import { PrismaService } from "../prisma/prisma.service.js";
import { Prisma, Role } from "../prisma/client/client.js";
import type { UserUncheckedCreateInput, UserUpdateInput } from "../prisma/client/models.js";
import type { ChangePasswordDto } from "./dto/change-password.dto.js";
import type { CreateDoctorDto } from "./dto/create-doctor.dto.js";
import type { UpdateDoctorDto } from "./dto/update-doctor.dto.js";
import type { UpdateMyProfileDto } from "./dto/update-my-profile.dto.js";

const doctorSelect = {
    id: true,
    clinicId: true,
    email: true,
    phone: true,
    fullName: true,
    role: true,
    specialization: true,
    isActive: true,
    workSchedule: true,
    createdAt: true,
    updatedAt: true,
} as const;

@Injectable()
export class DoctorsService {
    constructor(private prisma: PrismaService) {}

    private toNullableJson(value: Record<string, unknown> | null | undefined) {
        if (value === undefined) return undefined;
        if (value === null) return Prisma.DbNull;
        return value as Prisma.InputJsonObject;
    }

    async listDoctors(clinicId: number | null | undefined) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        return this.prisma.user.findMany({
            where: { clinicId, role: Role.DOCTOR },
            select: doctorSelect,
            orderBy: { createdAt: "desc" },
        });
    }

    async getDoctorById(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        const doctor = await this.prisma.user.findFirst({
            where: { id, clinicId, role: Role.DOCTOR },
            select: doctorSelect,
        });
        if (!doctor) throw new NotFoundException("Doctor not found");
        return doctor;
    }

    async createDoctor(clinicId: number | null | undefined, dto: CreateDoctorDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const clinic = await this.prisma.clinic.findUnique({
            where: { id: clinicId },
            select: { maxDoctors: true },
        });
        if (!clinic) throw new NotFoundException("Clinic not found");

        const existingDoctorsCount = await this.prisma.user.count({
            where: { clinicId, role: Role.DOCTOR, isActive: true },
        });
        if (existingDoctorsCount >= clinic.maxDoctors) {
            throw new BadRequestException(`Doctors limit reached (max ${clinic.maxDoctors})`);
        }

        const passwordHash = await bcryptjs.hash(dto.password, 10);

        try {
            const createData: UserUncheckedCreateInput = {
                clinicId,
                email: dto.email ?? null,
                phone: dto.phone,
                password: passwordHash,
                fullName: dto.fullName,
                role: Role.DOCTOR,
                specialization: dto.specialization ?? null,
                isActive: dto.isActive ?? true,
                workSchedule: dto.workSchedule as Prisma.InputJsonObject | undefined,
            };

            return await this.prisma.user.create({
                data: createData,
                select: doctorSelect,
            });
        } catch (err: unknown) {
            // Prisma unique constraint (email/phone)
            const code = err instanceof Prisma.PrismaClientKnownRequestError ? err.code : undefined;
            if (code === "P2002") throw new ConflictException("Doctor with this email/phone already exists");
            throw err;
        }
    }

    async updateDoctor(clinicId: number | null | undefined, id: number, dto: UpdateDoctorDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.user.findFirst({
            where: { id, clinicId, role: Role.DOCTOR },
            select: { id: true, password: true, isActive: true },
        });
        if (!existing) throw new NotFoundException("Doctor not found");

        if (dto.isActive === true && existing.isActive === false) {
            const clinic = await this.prisma.clinic.findUnique({
                where: { id: clinicId },
                select: { maxDoctors: true },
            });
            if (!clinic) throw new NotFoundException("Clinic not found");

            const activeDoctorsCount = await this.prisma.user.count({
                where: { clinicId, role: Role.DOCTOR, isActive: true },
            });
            if (activeDoctorsCount >= clinic.maxDoctors) {
                throw new BadRequestException(`Doctors limit reached (max ${clinic.maxDoctors})`);
            }
        }

        const passwordHash = dto.password ? await bcryptjs.hash(dto.password, 10) : undefined;

        try {
            const updateData: UserUpdateInput = {
                fullName: dto.fullName,
                phone: dto.phone,
                email: dto.email === undefined ? undefined : dto.email,
                specialization: dto.specialization === undefined ? undefined : dto.specialization,
                isActive: dto.isActive,
                workSchedule: this.toNullableJson(dto.workSchedule),
                password: passwordHash,
            };

            return await this.prisma.user.update({
                where: { id },
                data: updateData,
                select: doctorSelect,
            });
        } catch (err: unknown) {
            const code = err instanceof Prisma.PrismaClientKnownRequestError ? err.code : undefined;
            if (code === "P2002") throw new ConflictException("Doctor with this email/phone already exists");
            throw err;
        }
    }

    async deactivateDoctor(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.user.findFirst({
            where: { id, clinicId, role: Role.DOCTOR },
            select: { id: true },
        });
        if (!existing) throw new NotFoundException("Doctor not found");

        return this.prisma.user.update({
            where: { id },
            data: { isActive: false },
            select: doctorSelect,
        });
    }

    async getMyProfile(userId: number, clinicId: number | null | undefined) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        const user = await this.prisma.user.findFirst({
            where: { id: userId, clinicId },
            select: doctorSelect,
        });
        if (!user) throw new NotFoundException("User not found");
        return user;
    }

    async updateMyProfile(userId: number, clinicId: number | null | undefined, dto: UpdateMyProfileDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.user.findFirst({
            where: { id: userId, clinicId },
            select: { id: true },
        });
        if (!existing) throw new NotFoundException("User not found");

        try {
            const updateData: UserUpdateInput = {
                fullName: dto.fullName,
                phone: dto.phone,
                email: dto.email === undefined ? undefined : dto.email,
                specialization: dto.specialization === undefined ? undefined : dto.specialization,
                workSchedule: this.toNullableJson(dto.workSchedule),
            };

            return await this.prisma.user.update({
                where: { id: userId },
                data: updateData,
                select: doctorSelect,
            });
        } catch (err: unknown) {
            const code = err instanceof Prisma.PrismaClientKnownRequestError ? err.code : undefined;
            if (code === "P2002") throw new ConflictException("User with this email/phone already exists");
            throw err;
        }
    }

    async changeMyPassword(userId: number, clinicId: number | null | undefined, dto: ChangePasswordDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const user = await this.prisma.user.findFirst({
            where: { id: userId, clinicId },
            select: { id: true, password: true, isActive: true },
        });
        if (!user) throw new NotFoundException("User not found");
        if (!user.isActive) throw new ForbiddenException("User is inactive");

        const ok = await bcryptjs.compare(dto.currentPassword, user.password);
        if (!ok) throw new ForbiddenException("Current password is incorrect");

        const passwordHash = await bcryptjs.hash(dto.newPassword, 10);
        await this.prisma.user.update({
            where: { id: userId },
            data: { password: passwordHash },
            select: { id: true },
        });
        return { ok: true };
    }
}
