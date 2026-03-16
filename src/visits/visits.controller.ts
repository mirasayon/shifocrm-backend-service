// src/visits/visits.controller.ts
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Request, UseGuards } from "@nestjs/common";
import { CreateVisitDto, UpdateVisitDto } from "./dto/visit.dto.js";
import { VisitsService } from "./visits.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { ListVisitsQuery } from "./dto/list-visits.query.js";
import { VisitStatus } from "../prisma/client/client.js";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";

@ApiTags("Visits")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@UseGuards(JwtAuthGuard)
@Controller("visits")
export class VisitsController {
    constructor(private readonly visitsService: VisitsService) {}

    @ApiOperation({ summary: "Create visit" })
    @Post()
    create(@Request() req, @Body() createVisitDto: CreateVisitDto) {
        return this.visitsService.create(req.user.clinicId, createVisitDto);
    }

    @ApiOperation({ summary: "List visits" })
    @ApiOkResponse({ description: "Returns clinic-scoped visits with patient and doctor" })
    @ApiQuery({ name: "patientId", required: false, type: Number })
    @ApiQuery({ name: "doctorId", required: false, type: Number })
    @ApiQuery({ name: "status", required: false, enum: VisitStatus })
    @ApiQuery({ name: "date", required: false, type: String, description: "YYYY-MM-DD or ISO date-time" })
    @ApiQuery({ name: "startDate", required: false, type: String, description: "YYYY-MM-DD" })
    @ApiQuery({ name: "endDate", required: false, type: String, description: "YYYY-MM-DD" })
    @Get()
    findAll(@Request() req, @Query() query: ListVisitsQuery) {
        return this.visitsService.findAllByClinic(req.user.clinicId, query);
    }

    @ApiOperation({ summary: "Get visit by id" })
    @ApiParam({ name: "id", type: Number, description: "Visit id" })
    @Get(":id")
    findOne(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.visitsService.findOne(req.user.clinicId, id);
    }

    @ApiOperation({ summary: "Update visit" })
    @ApiParam({ name: "id", type: Number, description: "Visit id" })
    @Patch(":id")
    update(@Request() req, @Param("id", ParseIntPipe) id: number, @Body() updateVisitDto: UpdateVisitDto) {
        return this.visitsService.update(req.user.clinicId, id, updateVisitDto);
    }

    @ApiOperation({ summary: "Archive visit (soft delete)" })
    @ApiParam({ name: "id", type: Number, description: "Visit id" })
    @Delete(":id")
    remove(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.visitsService.archive(req.user.clinicId, id);
    }
}
