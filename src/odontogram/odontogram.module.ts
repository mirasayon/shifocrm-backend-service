import { Module } from "@nestjs/common";
import { OdontogramController } from "./odontogram.controller.js";
import { OdontogramService } from "./odontogram.service.js";

@Module({
    controllers: [OdontogramController],
    providers: [OdontogramService],
})
export class OdontogramModule {}
