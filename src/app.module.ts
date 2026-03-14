// src/app.module.ts
import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module.js";
import { AuthModule } from "./auth/auth.module.js";
import { InventoryModule } from "./inventory/inventory.module.js";
import { PatientsModule } from "./patients/patients.module.js";
import { PaymentsModule } from "./payments/payments.module.js";
import { VisitsModule } from "./visits/visits.module.js";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
        }),
        PrismaModule,

        AuthModule,
        // VisitsModule,
        //  InventoryModule,
        //  PatientsModule,
        PaymentsModule,
    ],
})
export class AppModule {}
