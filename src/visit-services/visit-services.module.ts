import { Module } from "@nestjs/common";
import { VisitServicesController } from "./visit-services.controller.js";
import { VisitServicesService } from "./visit-services.service.js";

@Module({
    controllers: [VisitServicesController],
    providers: [VisitServicesService],
})
export class VisitServicesModule {}
