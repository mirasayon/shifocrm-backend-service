// src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { VisitsModule } from './visits/visits.module';
import { InventoryModule } from './inventory/inventory.module';
import { PatientsModule } from './patients/patients.module';
import { PaymentsModule } from './payments/payments.module'; // Add this

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    VisitsModule,
    InventoryModule,
    PatientsModule,
    PaymentsModule, // Register it here
  ],
})
export class AppModule {}