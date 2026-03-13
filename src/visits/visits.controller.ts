// src/visits/visits.controller.ts
import { Controller, Get, Post, Body, Patch, Param, UseGuards, Request } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { CreateVisitDto, UpdateVisitDto } from './dto/visit.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('visits')
export class VisitsController {
  constructor(private readonly visitsService: VisitsService) {}

  @Post()
  create(@Request() req, @Body() createVisitDto: CreateVisitDto) {
    return this.visitsService.create(req.user.clinicId, createVisitDto);
  }

  @Get()
  findAll(@Request() req) {
    return this.visitsService.findAllByClinic(req.user.clinicId);
  }

  @Patch(':id')
  update(@Request() req, @Param('id') id: string, @Body() updateVisitDto: UpdateVisitDto) {
    return this.visitsService.update(req.user.clinicId, +id, updateVisitDto);
  }
}