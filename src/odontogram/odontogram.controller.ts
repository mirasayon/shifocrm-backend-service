import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { CreateOdontogramDto } from "./dto/create-odontogram.dto.js";
import { GetOrCreateOdontogramDto } from "./dto/get-or-create-odontogram.dto.js";
import { UpdateOdontogramDto } from "./dto/update-odontogram.dto.js";
import { OdontogramService } from "./odontogram.service.js";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiParam, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";

@ApiTags("Odontogram")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@UseGuards(JwtAuthGuard)
@Controller("odontogram")
export class OdontogramController {
    constructor(private readonly odontogramService: OdontogramService) {}

    @ApiOperation({ summary: "Get odontogram by visit id" })
    @ApiParam({ name: "visitId", type: Number, description: "Visit id" })
    @Get("by-visit/:visitId")
    getByVisit(@Request() req, @Param("visitId", ParseIntPipe) visitId: number) {
        return this.odontogramService.getByVisitId(req.user.clinicId, visitId);
    }

    @ApiOperation({ summary: "List odontograms by patient id" })
    @ApiOkResponse({ description: "Returns odontogram snapshots (latest first)" })
    @ApiParam({ name: "patientId", type: Number, description: "Patient id" })
    @Get("by-patient/:patientId")
    listByPatient(@Request() req, @Param("patientId", ParseIntPipe) patientId: number) {
        return this.odontogramService.listByPatientId(req.user.clinicId, patientId);
    }

    @ApiOperation({ summary: "Get odontogram by id" })
    @ApiParam({ name: "id", type: Number, description: "Odontogram id" })
    @Get(":id")
    getById(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.odontogramService.getById(req.user.clinicId, id);
    }

    @ApiOperation({ summary: "Create odontogram snapshot (one per visit)" })
    @Post()
    create(@Request() req, @Body() dto: CreateOdontogramDto) {
        return this.odontogramService.create(req.user.clinicId, dto);
    }

    @ApiOperation({ summary: "Get existing odontogram or create from last snapshot" })
    @Post("get-or-create")
    getOrCreate(@Request() req, @Body() dto: GetOrCreateOdontogramDto) {
        return this.odontogramService.getOrCreate(req.user.clinicId, dto);
    }

    @ApiOperation({ summary: "Update odontogram snapshot data" })
    @ApiParam({ name: "id", type: Number, description: "Odontogram id" })
    @Patch(":id")
    update(@Request() req, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdateOdontogramDto) {
        return this.odontogramService.update(req.user.clinicId, id, dto);
    }

    @ApiOperation({ summary: "Delete odontogram snapshot" })
    @ApiParam({ name: "id", type: Number, description: "Odontogram id" })
    @Delete(":id")
    delete(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.odontogramService.delete(req.user.clinicId, id);
    }
}
