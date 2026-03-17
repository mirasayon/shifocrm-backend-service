// src/visits/visits.controller.ts
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CreateVisitDto, UpdateVisitDto } from "./dto/visit.dto.js";
import { VisitsService } from "./visits.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { ListVisitsQuery } from "./dto/list-visits.query.js";
import { VisitStatus } from "../prisma/client/client.js";
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiTags,
    ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import type { AuthUser } from "../common/types/auth-user.js";
import { ApiCommonErrors } from "../common/swagger/api-common-errors.decorator.js";
import { VisitDetailsDto, VisitDto, VisitWithRelationsDto } from "../common/swagger/models.js";

@ApiTags("Visits")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@ApiCommonErrors()
@UseGuards(JwtAuthGuard)
@Controller("visits")
export class VisitsController {
    constructor(private readonly visitsService: VisitsService) {}

    @ApiOperation({ summary: "Create visit" })
    @ApiCreatedResponse({ type: VisitWithRelationsDto, description: "Creates a visit in the current clinic" })
    @Post()
    create(@CurrentUser() user: AuthUser, @Body() createVisitDto: CreateVisitDto) {
        return this.visitsService.create(user.clinicId, createVisitDto);
    }

    @ApiOperation({ summary: "List visits" })
    @ApiOkResponse({ type: VisitWithRelationsDto, isArray: true, description: "Returns clinic-scoped visits with patient and doctor" })
    @ApiQuery({ name: "patientId", required: false, type: Number })
    @ApiQuery({ name: "doctorId", required: false, type: Number })
    @ApiQuery({ name: "status", required: false, enum: VisitStatus })
    @ApiQuery({ name: "date", required: false, type: String, description: "YYYY-MM-DD or ISO date-time" })
    @ApiQuery({ name: "startDate", required: false, type: String, description: "YYYY-MM-DD" })
    @ApiQuery({ name: "endDate", required: false, type: String, description: "YYYY-MM-DD" })
    @Get()
    findAll(@CurrentUser() user: AuthUser, @Query() query: ListVisitsQuery) {
        return this.visitsService.findAllByClinic(user.clinicId, query);
    }

    @ApiOperation({ summary: "Get visit by id" })
    @ApiParam({ name: "id", type: Number, description: "Visit id" })
    @ApiOkResponse({ type: VisitDetailsDto, description: "Returns a visit (with related entities) from the current clinic" })
    @Get(":id")
    findOne(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.visitsService.findOne(user.clinicId, id);
    }

    @ApiOperation({ summary: "Update visit" })
    @ApiParam({ name: "id", type: Number, description: "Visit id" })
    @ApiOkResponse({ type: VisitWithRelationsDto, description: "Updates a visit in the current clinic" })
    @Patch(":id")
    update(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number, @Body() updateVisitDto: UpdateVisitDto) {
        return this.visitsService.update(user.clinicId, id, updateVisitDto);
    }

    @ApiOperation({ summary: "Archive visit (soft delete)" })
    @ApiParam({ name: "id", type: Number, description: "Visit id" })
    @ApiOkResponse({ type: VisitDto, description: "Archives a visit (clinic-scoped)" })
    @Delete(":id")
    remove(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.visitsService.archive(user.clinicId, id);
    }
}
