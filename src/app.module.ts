import { Module, RequestMethod, type MiddlewareConsumer, type NestModule } from "@nestjs/common";
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
import { validateEnv } from "./config/env.validation.js";
import { RequestIdMiddleware } from "./common/middleware/request-id.middleware.js";
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: process.env.ENV_FILE ?? ".env",
            validate: validateEnv,
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
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(RequestIdMiddleware).forRoutes({ path: "*path", method: RequestMethod.ALL });
    }
}
