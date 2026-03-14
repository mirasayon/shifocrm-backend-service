// src/inventory/inventory.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class InventoryService {
    constructor(private prisma: PrismaService) {}

    async getItems(clinicId: number) {
        return this.prisma.inventoryItem.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
        });
    }

    // This perfectly replaces the SQL trigger from your Supabase migration
    async consumeMaterial(clinicId: number, doctorId: number, dto: any) {
        return this.prisma.$transaction(async (tx) => {
            // 1. Check stock
            const item = await tx.inventoryItem.findUnique({ where: { id: dto.itemId } });

            if (!item) throw new BadRequestException("Material not found");
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
            });
        });
    }
}
