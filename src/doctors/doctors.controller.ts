import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { RolesGuard } from "../auth/guards/roles.guard.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Role } from "../prisma/client/client.js";
import { DoctorsService } from "./doctors.service.js";
import { ChangePasswordDto } from "./dto/change-password.dto.js";
import { CreateDoctorDto } from "./dto/create-doctor.dto.js";
import { UpdateDoctorDto } from "./dto/update-doctor.dto.js";
import { UpdateMyProfileDto } from "./dto/update-my-profile.dto.js";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Doctors")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("doctors")
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) {}

    @ApiOperation({ summary: "List doctors in my clinic" })
    @ApiOkResponse({ description: "Returns doctors without password hash" })
    @Get()
    list(@Request() req) {
        return this.doctorsService.listDoctors(req.user.clinicId);
    }

    @ApiOperation({ summary: "Get my profile" })
    @Get("me")
    me(@Request() req) {
        return this.doctorsService.getMyProfile(req.user.id, req.user.clinicId);
    }

    @ApiOperation({ summary: "Update my profile" })
    @Patch("me")
    updateMe(@Request() req, @Body() dto: UpdateMyProfileDto) {
        return this.doctorsService.updateMyProfile(req.user.id, req.user.clinicId, dto);
    }

    @ApiOperation({ summary: "Change my password" })
    @Patch("me/password")
    changePassword(@Request() req, @Body() dto: ChangePasswordDto) {
        return this.doctorsService.changeMyPassword(req.user.id, req.user.clinicId, dto);
    }

    @ApiOperation({ summary: "Create doctor (admin only)" })
    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN, Role.SUPER_ADMIN)
    @Post()
    create(@Request() req, @Body() dto: CreateDoctorDto) {
        return this.doctorsService.createDoctor(req.user.clinicId, dto);
    }

    @ApiOperation({ summary: "Get doctor by id (admin only)" })
    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN, Role.SUPER_ADMIN)
    @Get(":id")
    getById(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.doctorsService.getDoctorById(req.user.clinicId, id);
    }

    @ApiOperation({ summary: "Update doctor (admin only)" })
    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN, Role.SUPER_ADMIN)
    @Patch(":id")
    update(@Request() req, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdateDoctorDto) {
        return this.doctorsService.updateDoctor(req.user.clinicId, id, dto);
    }

    @ApiOperation({ summary: "Deactivate doctor (admin only)" })
    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN, Role.SUPER_ADMIN)
    @Delete(":id")
    deactivate(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.doctorsService.deactivateDoctor(req.user.clinicId, id);
    }
}
