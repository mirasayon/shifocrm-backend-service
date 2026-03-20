// src/inventory/inventory.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { safeUserSelect } from "../common/prisma-selects.js";
import { Prisma } from "../prisma/client/client.js";
import type { ConsumeMaterialDto } from "./dto/consume-material.dto.js";
import type { CreateExpenseDto } from "./dto/create-expense.dto.js";
import type { CreateInventoryItemDto } from "./dto/create-inventory-item.dto.js";
import type { CreateInventoryMovementDto } from "./dto/create-inventory-movement.dto.js";
import type { UpdateInventoryItemDto } from "./dto/update-inventory-item.dto.js";

@Injectable()
export class InventoryService {
    constructor(private prisma: PrismaService) {}

    async getItems(clinicId: number | null | undefined) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        return this.prisma.inventoryItem.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
        });
    }

    async createItem(clinicId: number | null | undefined, dto: CreateInventoryItemDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        return this.prisma.inventoryItem.create({
            data: {
                clinicId,
                name: dto.name,
                description: dto.description ?? null,
                quantity: dto.quantity ?? 0,
                unitPrice: dto.unitPrice,
            },
        });
    }

    async updateItem(clinicId: number | null | undefined, id: number, dto: UpdateInventoryItemDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.inventoryItem.findFirst({
            where: { id, clinicId },
            select: { id: true },
        });
        if (!existing) throw new NotFoundException("Inventory item not found");

        return this.prisma.inventoryItem.update({
            where: { id },
            data: {
                name: dto.name,
                description: dto.description === undefined ? undefined : (dto.description ?? null),
                quantity: dto.quantity,
                unitPrice: dto.unitPrice,
            },
        });
    }

    async deleteItem(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.inventoryItem.findFirst({
            where: { id, clinicId },
            select: { id: true },
        });
        if (!existing) throw new NotFoundException("Inventory item not found");

        try {
            await this.prisma.inventoryItem.delete({ where: { id } });
            return { id };
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError && ["P2003", "P2014"].includes(err.code)) {
                throw new ConflictException("Cannot delete item with existing movements/consumptions");
            }
            throw err;
        }
    }

    async listMovements(clinicId: number | null | undefined) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        return this.prisma.inventoryMovement.findMany({
            where: { clinicId },
            include: { item: true },
            orderBy: { createdAt: "desc" },
        });
    }

    async createMovement(clinicId: number | null | undefined, dto: CreateInventoryMovementDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        return this.prisma.$transaction(async (tx) => {
            const item = await tx.inventoryItem.findFirst({
                where: { id: dto.itemId, clinicId },
            });
            if (!item) throw new NotFoundException("Inventory item not found");

            if (dto.movementType === "OUT" && item.quantity < dto.quantity) {
                throw new BadRequestException(`Not enough stock. Available: ${item.quantity}`);
            }

            await tx.inventoryItem.update({
                where: { id: dto.itemId },
                data: {
                    quantity: dto.movementType === "IN" ? { increment: dto.quantity } : { decrement: dto.quantity },
                },
            });

            return tx.inventoryMovement.create({
                data: {
                    clinicId,
                    movementType: dto.movementType,
                    itemId: dto.itemId,
                    quantity: dto.quantity,
                    notes: dto.notes ?? null,
                },
                include: { item: true },
            });
        });
    }

    async deleteMovement(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        return this.prisma.$transaction(async (tx) => {
            const movement = await tx.inventoryMovement.findFirst({
                where: { id, clinicId },
                select: { id: true, itemId: true, movementType: true, quantity: true },
            });
            if (!movement) throw new NotFoundException("Movement not found");

            const item = await tx.inventoryItem.findFirst({
                where: { id: movement.itemId, clinicId },
                select: { id: true, quantity: true },
            });
            if (!item) throw new NotFoundException("Inventory item not found");
            if (movement.movementType === "IN" && item.quantity < movement.quantity) {
                throw new ConflictException("Cannot delete IN movement because stock has already been consumed");
            }

            await tx.inventoryItem.update({
                where: { id: movement.itemId },
                data: {
                    quantity: movement.movementType === "IN" ? { decrement: movement.quantity } : { increment: movement.quantity },
                },
            });

            await tx.inventoryMovement.delete({ where: { id } });
            return { id };
        });
    }

    async listExpenses(clinicId: number | null | undefined) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        return this.prisma.expense.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
        });
    }

    async createExpense(clinicId: number | null | undefined, dto: CreateExpenseDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");
        return this.prisma.expense.create({
            data: {
                clinicId,
                description: dto.description,
                amount: dto.amount,
                category: dto.category ?? null,
            },
        });
    }

    async deleteExpense(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const existing = await this.prisma.expense.findFirst({
            where: { id, clinicId },
            select: { id: true },
        });
        if (!existing) throw new NotFoundException("Expense not found");

        await this.prisma.expense.delete({ where: { id } });
        return { id };
    }

    async listConsumptions(clinicId: number | null | undefined, visitId?: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const where: any = { visit: { clinicId } };
        if (visitId) where.visitId = visitId;

        return this.prisma.inventoryConsumption.findMany({
            where,
            include: { item: true, doctor: { select: safeUserSelect }, visit: true },
            orderBy: { createdAt: "desc" },
        });
    }

    async deleteConsumption(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        return this.prisma.$transaction(async (tx) => {
            const consumption = await tx.inventoryConsumption.findFirst({
                where: { id, visit: { clinicId } },
                include: { item: true, visit: true },
            });
            if (!consumption) throw new NotFoundException("Consumption not found");

            await tx.inventoryItem.update({
                where: { id: consumption.itemId },
                data: { quantity: { increment: consumption.quantity } },
            });

            await tx.inventoryMovement.create({
                data: {
                    clinicId,
                    movementType: "IN",
                    itemId: consumption.itemId,
                    quantity: consumption.quantity,
                    notes: "Reverted consumption",
                },
            });

            await tx.inventoryConsumption.delete({ where: { id } });
            return { id };
        });
    }

    // This replaces the stock trigger (atomic stock check + movement + consumption)
    async consumeMaterial(clinicId: number | null | undefined, doctorId: number, dto: ConsumeMaterialDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        return this.prisma.$transaction(async (tx) => {
            const visit = await tx.visit.findFirst({
                where: { id: dto.visitId, clinicId },
                select: { id: true },
            });
            if (!visit) throw new NotFoundException("Visit not found");

            // 1. Check stock (scoped to clinic)
            const item = await tx.inventoryItem.findFirst({
                where: { id: dto.itemId, clinicId },
            });

            if (!item) throw new NotFoundException("Material not found");
            if (item.quantity < dto.quantity) {
                throw new BadRequestException(`Not enough stock. Available: ${item.quantity}`);
            }

            // 2. Deduct stock
            await tx.inventoryItem.update({
                where: { id: dto.itemId },
                data: { quantity: { decrement: dto.quantity } },
            });

            // 3. Log movement (Out)
            await tx.inventoryMovement.create({
                data: {
                    clinicId,
                    movementType: "OUT",
                    itemId: dto.itemId,
                    quantity: dto.quantity,
                    notes: dto.note || "Consumption during visit",
                },
            });

            // 4. Record consumption
            return tx.inventoryConsumption.create({
                data: {
                    itemId: dto.itemId,
                    visitId: dto.visitId,
                    doctorId,
                    quantity: dto.quantity,
                },
                include: { item: true },
            });
        });
    }
}
