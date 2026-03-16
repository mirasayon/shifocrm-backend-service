import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { CreateVisitServiceDto } from "./dto/create-visit-service.dto.js";
import { ListVisitServicesQuery } from "./dto/list-visit-services.query.js";
import { VisitServicesService } from "./visit-services.service.js";

@UseGuards(JwtAuthGuard)
@Controller("visit-services")
export class VisitServicesController {
    constructor(private readonly visitServicesService: VisitServicesService) {}

    @Get()
    list(@Request() req, @Query() query: ListVisitServicesQuery) {
        return this.visitServicesService.listByClinicAndFilters(req.user.clinicId, query);
    }

    @Post()
    create(@Request() req, @Body() dto: CreateVisitServiceDto) {
        return this.visitServicesService.create(req.user.clinicId, req.user.id, dto);
    }

    @Delete(":id")
    deleteById(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.visitServicesService.deleteById(req.user.clinicId, id);
    }

    @Delete("by-visit/:visitId/tooth/:toothId")
    deleteByVisitAndTooth(@Request() req, @Param("visitId", ParseIntPipe) visitId: number, @Param("toothId", ParseIntPipe) toothId: number) {
        return this.visitServicesService.deleteByVisitAndTooth(req.user.clinicId, visitId, toothId);
    }
}
