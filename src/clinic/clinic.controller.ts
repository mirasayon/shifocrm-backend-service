import { Body, Controller, Get, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { RolesGuard } from "../auth/guards/roles.guard.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Role } from "../prisma/client/client.js";
import { ClinicService } from "./clinic.service.js";
import { UpdateClinicDto } from "./dto/update-clinic.dto.js";
import { ApiBearerAuth, ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import type { AuthUser } from "../common/types/auth-user.js";

@ApiTags("Clinic")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@ApiForbiddenResponse({ description: "Insufficient permissions" })
@UseGuards(JwtAuthGuard)
@Controller("clinic")
export class ClinicController {
    constructor(private readonly clinicService: ClinicService) {}

    @ApiOperation({ summary: "Get my clinic" })
    @ApiOkResponse({ description: "Returns clinic details for the current JWT clinicId" })
    @Get()
    getMyClinic(@CurrentUser() user: AuthUser) {
        return this.clinicService.getClinicForUser(user.clinicId);
    }

    @ApiOperation({ summary: "Update my clinic (admin only)" })
    @ApiOkResponse({ description: "Updates clinic fields" })
    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN, Role.SUPER_ADMIN)
    @Put()
    updateMyClinic(@CurrentUser() user: AuthUser, @Body() dto: UpdateClinicDto) {
        return this.clinicService.updateClinic(user.clinicId, dto);
    }
}
