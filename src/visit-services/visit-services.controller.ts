import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { CreateVisitServiceDto } from "./dto/create-visit-service.dto.js";
import { ListVisitServicesQuery } from "./dto/list-visit-services.query.js";
import { VisitServicesService } from "./visit-services.service.js";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";

@ApiTags("Visit Services")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@UseGuards(JwtAuthGuard)
@Controller("visit-services")
export class VisitServicesController {
    constructor(private readonly visitServicesService: VisitServicesService) {}

    @ApiOperation({ summary: "List visit services" })
    @ApiOkResponse({ description: "Returns clinic-scoped visit services (filterable)" })
    @ApiQuery({ name: "patientId", required: false, type: Number })
    @ApiQuery({ name: "visitId", required: false, type: Number })
    @ApiQuery({ name: "visitIds", required: false, type: String, description: "Comma-separated list of visit ids (e.g. 30001,30002)" })
    @Get()
    list(@Request() req, @Query() query: ListVisitServicesQuery) {
        return this.visitServicesService.listByClinicAndFilters(req.user.clinicId, query);
    }

    @ApiOperation({ summary: "Create visit service" })
    @Post()
    create(@Request() req, @Body() dto: CreateVisitServiceDto) {
        return this.visitServicesService.create(req.user.clinicId, req.user.id, dto);
    }

    @ApiOperation({ summary: "Delete visit service by id" })
    @ApiParam({ name: "id", type: Number, description: "Visit service id" })
    @Delete(":id")
    deleteById(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.visitServicesService.deleteById(req.user.clinicId, id);
    }

    @ApiOperation({ summary: "Delete visit services by visit and tooth" })
    @ApiParam({ name: "visitId", type: Number, description: "Visit id" })
    @ApiParam({ name: "toothId", type: Number, description: "Tooth id" })
    @Delete("by-visit/:visitId/tooth/:toothId")
    deleteByVisitAndTooth(@Request() req, @Param("visitId", ParseIntPipe) visitId: number, @Param("toothId", ParseIntPipe) toothId: number) {
        return this.visitServicesService.deleteByVisitAndTooth(req.user.clinicId, visitId, toothId);
    }
}
