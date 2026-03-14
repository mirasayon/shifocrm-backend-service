// src/patients/patients.controller.ts
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { Controller, Get, Post, Body, UseGuards, Request } from "@nestjs/common";
import type { PatientsService } from "./patients.service.js";

@UseGuards(JwtAuthGuard)
@Controller("patients")
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @Get()
    findAll(@Request() req) {
        return this.patientsService.findAll(req.user.clinicId);
    }

    @Post()
    create(@Request() req, @Body() dto: any) {
        return this.patientsService.create(req.user.clinicId, dto);
    }
}
