import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { CreateOdontogramDto } from "./dto/create-odontogram.dto.js";
import { GetOrCreateOdontogramDto } from "./dto/get-or-create-odontogram.dto.js";
import { UpdateOdontogramDto } from "./dto/update-odontogram.dto.js";
import { OdontogramService } from "./odontogram.service.js";

@UseGuards(JwtAuthGuard)
@Controller("odontogram")
export class OdontogramController {
    constructor(private readonly odontogramService: OdontogramService) {}

    @Get("by-visit/:visitId")
    getByVisit(@Request() req, @Param("visitId", ParseIntPipe) visitId: number) {
        return this.odontogramService.getByVisitId(req.user.clinicId, visitId);
    }

    @Get("by-patient/:patientId")
    listByPatient(@Request() req, @Param("patientId", ParseIntPipe) patientId: number) {
        return this.odontogramService.listByPatientId(req.user.clinicId, patientId);
    }

    @Get(":id")
    getById(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.odontogramService.getById(req.user.clinicId, id);
    }

    @Post()
    create(@Request() req, @Body() dto: CreateOdontogramDto) {
        return this.odontogramService.create(req.user.clinicId, dto);
    }

    @Post("get-or-create")
    getOrCreate(@Request() req, @Body() dto: GetOrCreateOdontogramDto) {
        return this.odontogramService.getOrCreate(req.user.clinicId, dto);
    }

    @Patch(":id")
    update(@Request() req, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdateOdontogramDto) {
        return this.odontogramService.update(req.user.clinicId, id, dto);
    }

    @Delete(":id")
    delete(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.odontogramService.delete(req.user.clinicId, id);
    }
}
