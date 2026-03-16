import { Body, Controller, Get, Put, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { RolesGuard } from "../auth/guards/roles.guard.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Role } from "../prisma/client/client.js";
import { ClinicService } from "./clinic.service.js";
import { UpdateClinicDto } from "./dto/update-clinic.dto.js";

@UseGuards(JwtAuthGuard)
@Controller("clinic")
export class ClinicController {
    constructor(private readonly clinicService: ClinicService) {}

    @Get()
    getMyClinic(@Request() req) {
        return this.clinicService.getClinicForUser(req.user.clinicId);
    }

    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN, Role.SUPER_ADMIN)
    @Put()
    updateMyClinic(@Request() req, @Body() dto: UpdateClinicDto) {
        return this.clinicService.updateClinic(req.user.clinicId, dto);
    }
}

