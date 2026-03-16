// src/inventory/inventory.controller.ts
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Request, UseGuards } from "@nestjs/common";
import { InventoryService } from "./inventory.service.js";
import { ConsumeMaterialDto } from "./dto/consume-material.dto.js";
import { CreateInventoryItemDto } from "./dto/create-inventory-item.dto.js";
import { UpdateInventoryItemDto } from "./dto/update-inventory-item.dto.js";
import { CreateInventoryMovementDto } from "./dto/create-inventory-movement.dto.js";
import { CreateExpenseDto } from "./dto/create-expense.dto.js";
import { ListConsumptionsQuery } from "./dto/list-consumptions.query.js";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Inventory")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("inventory")
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) {}

    @ApiOperation({ summary: "List inventory items" })
    @ApiOkResponse({ description: "Returns clinic-scoped inventory items" })
    @Get("items")
    getItems(@Request() req) {
        return this.inventoryService.getItems(req.user.clinicId);
    }

    @ApiOperation({ summary: "Create inventory item" })
    @Post("items")
    createItem(@Request() req, @Body() dto: CreateInventoryItemDto) {
        return this.inventoryService.createItem(req.user.clinicId, dto);
    }

    @ApiOperation({ summary: "Update inventory item" })
    @Patch("items/:id")
    updateItem(@Request() req, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdateInventoryItemDto) {
        return this.inventoryService.updateItem(req.user.clinicId, id, dto);
    }

    @ApiOperation({ summary: "Delete inventory item" })
    @Delete("items/:id")
    deleteItem(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.inventoryService.deleteItem(req.user.clinicId, id);
    }

    @ApiOperation({ summary: "List inventory movements" })
    @Get("movements")
    listMovements(@Request() req) {
        return this.inventoryService.listMovements(req.user.clinicId);
    }

    @ApiOperation({ summary: "Create inventory movement (IN/OUT)" })
    @Post("movements")
    createMovement(@Request() req, @Body() dto: CreateInventoryMovementDto) {
        return this.inventoryService.createMovement(req.user.clinicId, dto);
    }

    @ApiOperation({ summary: "Delete inventory movement (reverts stock)" })
    @Delete("movements/:id")
    deleteMovement(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.inventoryService.deleteMovement(req.user.clinicId, id);
    }

    @ApiOperation({ summary: "List expenses" })
    @Get("expenses")
    listExpenses(@Request() req) {
        return this.inventoryService.listExpenses(req.user.clinicId);
    }

    @ApiOperation({ summary: "Create expense" })
    @Post("expenses")
    createExpense(@Request() req, @Body() dto: CreateExpenseDto) {
        return this.inventoryService.createExpense(req.user.clinicId, dto);
    }

    @ApiOperation({ summary: "Delete expense" })
    @Delete("expenses/:id")
    deleteExpense(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.inventoryService.deleteExpense(req.user.clinicId, id);
    }

    @ApiOperation({ summary: "List consumptions (optionally by visitId)" })
    @Get("consumptions")
    listConsumptions(@Request() req, @Query() query: ListConsumptionsQuery) {
        return this.inventoryService.listConsumptions(req.user.clinicId, query.visitId);
    }

    @ApiOperation({ summary: "Delete consumption (reverts stock)" })
    @Delete("consumptions/:id")
    deleteConsumption(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.inventoryService.deleteConsumption(req.user.clinicId, id);
    }

    @ApiOperation({ summary: "Consume material during a visit" })
    @Post("consume")
    consumeMaterial(@Request() req, @Body() dto: ConsumeMaterialDto) {
        return this.inventoryService.consumeMaterial(req.user.clinicId, req.user.id, dto);
    }
}
