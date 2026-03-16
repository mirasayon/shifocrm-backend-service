import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { RolesGuard } from "../auth/guards/roles.guard.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Role } from "../prisma/client/client.js";
import { DoctorsService } from "./doctors.service.js";
import { ChangePasswordDto } from "./dto/change-password.dto.js";
import { CreateDoctorDto } from "./dto/create-doctor.dto.js";
import { UpdateDoctorDto } from "./dto/update-doctor.dto.js";
import { UpdateMyProfileDto } from "./dto/update-my-profile.dto.js";
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import type { AuthUser } from "../common/types/auth-user.js";
import { OkResponseDto } from "../common/dto/ok.response.dto.js";
import { UserDto } from "../common/swagger/models.js";

@ApiTags("Doctors")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@ApiForbiddenResponse({ description: "Insufficient permissions" })
@UseGuards(JwtAuthGuard)
@Controller("doctors")
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) {}

    @ApiOperation({ summary: "List doctors in my clinic" })
    @ApiOkResponse({ type: UserDto, isArray: true, description: "Returns doctors without password hash" })
    @Get()
    list(@CurrentUser() user: AuthUser) {
        return this.doctorsService.listDoctors(user.clinicId);
    }

    @ApiOperation({ summary: "Get my profile" })
    @ApiOkResponse({ type: UserDto, description: "Returns the current user profile (clinic-scoped)" })
    @Get("me")
    me(@CurrentUser() user: AuthUser) {
        return this.doctorsService.getMyProfile(user.id, user.clinicId);
    }

    @ApiOperation({ summary: "Update my profile" })
    @ApiOkResponse({ type: UserDto, description: "Updates the current user profile (clinic-scoped)" })
    @Patch("me")
    updateMe(@CurrentUser() user: AuthUser, @Body() dto: UpdateMyProfileDto) {
        return this.doctorsService.updateMyProfile(user.id, user.clinicId, dto);
    }

    @ApiOperation({ summary: "Change my password" })
    @ApiOkResponse({ type: OkResponseDto, description: "Changes current user password" })
    @Patch("me/password")
    changePassword(@CurrentUser() user: AuthUser, @Body() dto: ChangePasswordDto) {
        return this.doctorsService.changeMyPassword(user.id, user.clinicId, dto);
    }

    @ApiOperation({ summary: "Create doctor (admin only)" })
    @ApiCreatedResponse({ type: UserDto, description: "Creates a doctor in the current clinic" })
    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN, Role.SUPER_ADMIN)
    @Post()
    create(@CurrentUser() user: AuthUser, @Body() dto: CreateDoctorDto) {
        return this.doctorsService.createDoctor(user.clinicId, dto);
    }

    @ApiOperation({ summary: "Get doctor by id (admin only)" })
    @ApiOkResponse({ type: UserDto, description: "Returns a doctor from the current clinic" })
    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN, Role.SUPER_ADMIN)
    @ApiParam({ name: "id", type: Number, description: "Doctor id" })
    @Get(":id")
    getById(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.doctorsService.getDoctorById(user.clinicId, id);
    }

    @ApiOperation({ summary: "Update doctor (admin only)" })
    @ApiOkResponse({ type: UserDto, description: "Updates a doctor in the current clinic" })
    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN, Role.SUPER_ADMIN)
    @ApiParam({ name: "id", type: Number, description: "Doctor id" })
    @Patch(":id")
    update(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdateDoctorDto) {
        return this.doctorsService.updateDoctor(user.clinicId, id, dto);
    }

    @ApiOperation({ summary: "Deactivate doctor (admin only)" })
    @ApiOkResponse({ type: UserDto, description: "Sets doctor.isActive=false (clinic-scoped)" })
    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN, Role.SUPER_ADMIN)
    @ApiParam({ name: "id", type: Number, description: "Doctor id" })
    @Delete(":id")
    deactivate(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.doctorsService.deactivateDoctor(user.clinicId, id);
    }
}
