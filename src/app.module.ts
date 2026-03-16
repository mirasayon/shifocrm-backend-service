import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module.js";
import { AuthModule } from "./auth/auth.module.js";
import { InventoryModule } from "./inventory/inventory.module.js";
import { PatientsModule } from "./patients/patients.module.js";
import { PaymentsModule } from "./payments/payments.module.js";
import { VisitsModule } from "./visits/visits.module.js";
import { ClinicModule } from "./clinic/clinic.module.js";
import { DoctorsModule } from "./doctors/doctors.module.js";
import { VisitServicesModule } from "./visit-services/visit-services.module.js";
import { OdontogramModule } from "./odontogram/odontogram.module.js";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
        }),
        PrismaModule,
        AuthModule,
        ClinicModule,
        DoctorsModule,
        VisitsModule,
        VisitServicesModule,
        OdontogramModule,
        InventoryModule,
        PatientsModule,
        PaymentsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
