import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { UpdateClinicDto } from "./dto/update-clinic.dto.js";

@Injectable()
export class ClinicService {
    constructor(private prisma: PrismaService) {}

    async getClinicForUser(clinicId?: number | null) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const clinic = await this.prisma.clinic.findUnique({ where: { id: clinicId } });
        if (!clinic) throw new NotFoundException("Clinic not found");
        return clinic;
    }

    async updateClinic(clinicId: number | null | undefined, data: UpdateClinicDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        try {
            return await this.prisma.clinic.update({
                where: { id: clinicId },
                data,
            });
        } catch (err) {
            // Preserve NotFound semantics if the clinic disappeared
            const existing = await this.prisma.clinic.findUnique({ where: { id: clinicId } });
            if (!existing) throw new NotFoundException("Clinic not found");
            throw err;
        }
    }
}

