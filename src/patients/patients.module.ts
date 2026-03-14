import { Module } from "@nestjs/common";
import { PatientsController } from "./patients.controller.js";
import { PatientsService } from "./patients.service.js";

@Module({
    providers: [PatientsService],
    controllers: [PatientsController],
})
export class PatientsModule {}
