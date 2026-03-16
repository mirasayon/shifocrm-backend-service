// src/patients/patients.controller.ts
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { PatientsService } from "./patients.service.js";
import { CreatePatientDto } from "./dto/create-patient.dto.js";
import { ListPatientsQuery } from "./dto/list-patients.query.js";
import { UpdatePatientDto } from "./dto/update-patient.dto.js";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import type { AuthUser } from "../common/types/auth-user.js";
import { PatientDto, PatientWithDoctorDto } from "../common/swagger/models.js";

@ApiTags("Patients")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@UseGuards(JwtAuthGuard)
@Controller("patients")
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @ApiOperation({ summary: "List patients" })
    @ApiOkResponse({ type: PatientWithDoctorDto, isArray: true, description: "Returns clinic-scoped patients" })
    @ApiQuery({ name: "doctorId", required: false, type: Number })
    @ApiQuery({ name: "status", required: false, type: String })
    @Get()
    findAll(@CurrentUser() user: AuthUser, @Query() query: ListPatientsQuery) {
        return this.patientsService.findAll(user.clinicId, query);
    }

    @ApiOperation({ summary: "Create patient" })
    @ApiCreatedResponse({ type: PatientDto, description: "Creates a patient in the current clinic" })
    @Post()
    create(@CurrentUser() user: AuthUser, @Body() dto: CreatePatientDto) {
        return this.patientsService.create(user.clinicId, dto);
    }

    @ApiOperation({ summary: "Get patient by id" })
    @ApiParam({ name: "id", type: Number, description: "Patient id" })
    @ApiOkResponse({ type: PatientWithDoctorDto, description: "Returns a patient from the current clinic" })
    @Get(":id")
    findOne(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.patientsService.findOne(user.clinicId, id);
    }

    @ApiOperation({ summary: "Update patient" })
    @ApiParam({ name: "id", type: Number, description: "Patient id" })
    @ApiOkResponse({ type: PatientDto, description: "Updates a patient in the current clinic" })
    @Patch(":id")
    update(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdatePatientDto) {
        return this.patientsService.update(user.clinicId, id, dto);
    }

    @ApiOperation({ summary: "Archive patient (soft delete)" })
    @ApiParam({ name: "id", type: Number, description: "Patient id" })
    @ApiOkResponse({ type: PatientDto, description: "Archives a patient (clinic-scoped)" })
    @Delete(":id")
    remove(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.patientsService.archive(user.clinicId, id);
    }
}
