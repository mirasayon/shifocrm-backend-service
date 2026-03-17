// src/inventory/inventory.controller.ts
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { InventoryService } from "./inventory.service.js";
import { ConsumeMaterialDto } from "./dto/consume-material.dto.js";
import { CreateInventoryItemDto } from "./dto/create-inventory-item.dto.js";
import { UpdateInventoryItemDto } from "./dto/update-inventory-item.dto.js";
import { CreateInventoryMovementDto } from "./dto/create-inventory-movement.dto.js";
import { CreateExpenseDto } from "./dto/create-expense.dto.js";
import { ListConsumptionsQuery } from "./dto/list-consumptions.query.js";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import type { AuthUser } from "../common/types/auth-user.js";
import { IdResponseDto } from "../common/dto/id.response.dto.js";
import { ApiCommonErrors } from "../common/swagger/api-common-errors.decorator.js";
import { ExpenseDto, InventoryConsumptionWithItemDto, InventoryConsumptionWithRelationsDto, InventoryItemDto, InventoryMovementWithItemDto } from "../common/swagger/models.js";

@ApiTags("Inventory")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@ApiCommonErrors()
@UseGuards(JwtAuthGuard)
@Controller("inventory")
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) {}

    @ApiOperation({ summary: "List inventory items" })
    @ApiOkResponse({ type: InventoryItemDto, isArray: true, description: "Returns clinic-scoped inventory items" })
    @Get("items")
    getItems(@CurrentUser() user: AuthUser) {
        return this.inventoryService.getItems(user.clinicId);
    }

    @ApiOperation({ summary: "Create inventory item" })
    @ApiCreatedResponse({ type: InventoryItemDto, description: "Creates an inventory item in the current clinic" })
    @Post("items")
    createItem(@CurrentUser() user: AuthUser, @Body() dto: CreateInventoryItemDto) {
        return this.inventoryService.createItem(user.clinicId, dto);
    }

    @ApiOperation({ summary: "Update inventory item" })
    @ApiParam({ name: "id", type: Number, description: "Inventory item id" })
    @ApiOkResponse({ type: InventoryItemDto, description: "Updates an inventory item in the current clinic" })
    @Patch("items/:id")
    updateItem(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdateInventoryItemDto) {
        return this.inventoryService.updateItem(user.clinicId, id, dto);
    }

    @ApiOperation({ summary: "Delete inventory item" })
    @ApiParam({ name: "id", type: Number, description: "Inventory item id" })
    @ApiOkResponse({ type: IdResponseDto, description: "Deletes an inventory item in the current clinic" })
    @Delete("items/:id")
    deleteItem(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.inventoryService.deleteItem(user.clinicId, id);
    }

    @ApiOperation({ summary: "List inventory movements" })
    @ApiOkResponse({ type: InventoryMovementWithItemDto, isArray: true, description: "Returns inventory movements for the current clinic" })
    @Get("movements")
    listMovements(@CurrentUser() user: AuthUser) {
        return this.inventoryService.listMovements(user.clinicId);
    }

    @ApiOperation({ summary: "Create inventory movement (IN/OUT)" })
    @ApiCreatedResponse({ type: InventoryMovementWithItemDto, description: "Creates an inventory movement and updates stock" })
    @Post("movements")
    createMovement(@CurrentUser() user: AuthUser, @Body() dto: CreateInventoryMovementDto) {
        return this.inventoryService.createMovement(user.clinicId, dto);
    }

    @ApiOperation({ summary: "Delete inventory movement (reverts stock)" })
    @ApiParam({ name: "id", type: Number, description: "Movement id" })
    @ApiOkResponse({ type: IdResponseDto, description: "Deletes a movement and reverts stock" })
    @Delete("movements/:id")
    deleteMovement(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.inventoryService.deleteMovement(user.clinicId, id);
    }

    @ApiOperation({ summary: "List expenses" })
    @ApiOkResponse({ type: ExpenseDto, isArray: true, description: "Returns expenses for the current clinic" })
    @Get("expenses")
    listExpenses(@CurrentUser() user: AuthUser) {
        return this.inventoryService.listExpenses(user.clinicId);
    }

    @ApiOperation({ summary: "Create expense" })
    @ApiCreatedResponse({ type: ExpenseDto, description: "Creates an expense in the current clinic" })
    @Post("expenses")
    createExpense(@CurrentUser() user: AuthUser, @Body() dto: CreateExpenseDto) {
        return this.inventoryService.createExpense(user.clinicId, dto);
    }

    @ApiOperation({ summary: "Delete expense" })
    @ApiParam({ name: "id", type: Number, description: "Expense id" })
    @ApiOkResponse({ type: IdResponseDto, description: "Deletes an expense in the current clinic" })
    @Delete("expenses/:id")
    deleteExpense(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.inventoryService.deleteExpense(user.clinicId, id);
    }

    @ApiOperation({ summary: "List consumptions (optionally by visitId)" })
    @ApiOkResponse({ type: InventoryConsumptionWithRelationsDto, isArray: true, description: "Returns consumptions for the current clinic" })
    @ApiQuery({ name: "visitId", required: false, type: Number })
    @Get("consumptions")
    listConsumptions(@CurrentUser() user: AuthUser, @Query() query: ListConsumptionsQuery) {
        return this.inventoryService.listConsumptions(user.clinicId, query.visitId);
    }

    @ApiOperation({ summary: "Delete consumption (reverts stock)" })
    @ApiParam({ name: "id", type: Number, description: "Consumption id" })
    @ApiOkResponse({ type: IdResponseDto, description: "Deletes a consumption and reverts stock" })
    @Delete("consumptions/:id")
    deleteConsumption(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.inventoryService.deleteConsumption(user.clinicId, id);
    }

    @ApiOperation({ summary: "Consume material during a visit" })
    @ApiCreatedResponse({ type: InventoryConsumptionWithItemDto, description: "Consumes material (atomic stock check + movement + consumption)" })
    @Post("consume")
    consumeMaterial(@CurrentUser() user: AuthUser, @Body() dto: ConsumeMaterialDto) {
        return this.inventoryService.consumeMaterial(user.clinicId, user.id, dto);
    }
}
