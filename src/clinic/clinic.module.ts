import { Module } from "@nestjs/common";
import { ClinicController } from "./clinic.controller.js";
import { ClinicService } from "./clinic.service.js";

@Module({
    controllers: [ClinicController],
    providers: [ClinicService],
})
export class ClinicModule {}

