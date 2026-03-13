// src/inventory/inventory.controller.ts
import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('items')
  getItems(@Request() req) {
    return this.inventoryService.getItems(req.user.clinicId);
  }

  @Post('consume')
  consumeMaterial(@Request() req, @Body() dto: any) {
    return this.inventoryService.consumeMaterial(req.user.clinicId, req.user.id, dto);
  }
}