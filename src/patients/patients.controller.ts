// src/patients/patients.controller.ts
import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('patients')
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