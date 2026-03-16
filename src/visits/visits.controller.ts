// src/visits/visits.controller.ts
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Request, UseGuards } from "@nestjs/common";
import { CreateVisitDto, UpdateVisitDto } from "./dto/visit.dto.js";
import { VisitsService } from "./visits.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { ListVisitsQuery } from "./dto/list-visits.query.js";

@UseGuards(JwtAuthGuard)
@Controller("visits")
export class VisitsController {
    constructor(private readonly visitsService: VisitsService) {}

    @Post()
    create(@Request() req, @Body() createVisitDto: CreateVisitDto) {
        return this.visitsService.create(req.user.clinicId, createVisitDto);
    }

    @Get()
    findAll(@Request() req, @Query() query: ListVisitsQuery) {
        return this.visitsService.findAllByClinic(req.user.clinicId, query);
    }

    @Get(":id")
    findOne(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.visitsService.findOne(req.user.clinicId, id);
    }

    @Patch(":id")
    update(@Request() req, @Param("id", ParseIntPipe) id: number, @Body() updateVisitDto: UpdateVisitDto) {
        return this.visitsService.update(req.user.clinicId, id, updateVisitDto);
    }

    @Delete(":id")
    remove(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.visitsService.archive(req.user.clinicId, id);
    }
}
