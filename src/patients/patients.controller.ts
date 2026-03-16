// src/patients/patients.controller.ts
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Request, UseGuards } from "@nestjs/common";
import { PatientsService } from "./patients.service.js";
import { CreatePatientDto } from "./dto/create-patient.dto.js";
import { ListPatientsQuery } from "./dto/list-patients.query.js";
import { UpdatePatientDto } from "./dto/update-patient.dto.js";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";

@ApiTags("Patients")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@UseGuards(JwtAuthGuard)
@Controller("patients")
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @ApiOperation({ summary: "List patients" })
    @ApiOkResponse({ description: "Returns clinic-scoped patients" })
    @ApiQuery({ name: "doctorId", required: false, type: Number })
    @ApiQuery({ name: "status", required: false, type: String })
    @Get()
    findAll(@Request() req, @Query() query: ListPatientsQuery) {
        return this.patientsService.findAll(req.user.clinicId, query);
    }

    @ApiOperation({ summary: "Create patient" })
    @Post()
    create(@Request() req, @Body() dto: CreatePatientDto) {
        return this.patientsService.create(req.user.clinicId, dto);
    }

    @ApiOperation({ summary: "Get patient by id" })
    @ApiParam({ name: "id", type: Number, description: "Patient id" })
    @Get(":id")
    findOne(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.patientsService.findOne(req.user.clinicId, id);
    }

    @ApiOperation({ summary: "Update patient" })
    @ApiParam({ name: "id", type: Number, description: "Patient id" })
    @Patch(":id")
    update(@Request() req, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdatePatientDto) {
        return this.patientsService.update(req.user.clinicId, id, dto);
    }

    @ApiOperation({ summary: "Archive patient (soft delete)" })
    @ApiParam({ name: "id", type: Number, description: "Patient id" })
    @Delete(":id")
    remove(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.patientsService.archive(req.user.clinicId, id);
    }
}
