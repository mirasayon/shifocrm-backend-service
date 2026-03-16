import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { CreateOdontogramDto } from "./dto/create-odontogram.dto.js";
import { GetOrCreateOdontogramDto } from "./dto/get-or-create-odontogram.dto.js";
import { UpdateOdontogramDto } from "./dto/update-odontogram.dto.js";
import { OdontogramService } from "./odontogram.service.js";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiParam, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import type { AuthUser } from "../common/types/auth-user.js";

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
    getByVisit(@CurrentUser() user: AuthUser, @Param("visitId", ParseIntPipe) visitId: number) {
        return this.odontogramService.getByVisitId(user.clinicId, visitId);
    }

    @ApiOperation({ summary: "List odontograms by patient id" })
    @ApiOkResponse({ description: "Returns odontogram snapshots (latest first)" })
    @ApiParam({ name: "patientId", type: Number, description: "Patient id" })
    @Get("by-patient/:patientId")
    listByPatient(@CurrentUser() user: AuthUser, @Param("patientId", ParseIntPipe) patientId: number) {
        return this.odontogramService.listByPatientId(user.clinicId, patientId);
    }

    @ApiOperation({ summary: "Get odontogram by id" })
    @ApiParam({ name: "id", type: Number, description: "Odontogram id" })
    @Get(":id")
    getById(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.odontogramService.getById(user.clinicId, id);
    }

    @ApiOperation({ summary: "Create odontogram snapshot (one per visit)" })
    @Post()
    create(@CurrentUser() user: AuthUser, @Body() dto: CreateOdontogramDto) {
        return this.odontogramService.create(user.clinicId, dto);
    }

    @ApiOperation({ summary: "Get existing odontogram or create from last snapshot" })
    @Post("get-or-create")
    getOrCreate(@CurrentUser() user: AuthUser, @Body() dto: GetOrCreateOdontogramDto) {
        return this.odontogramService.getOrCreate(user.clinicId, dto);
    }

    @ApiOperation({ summary: "Update odontogram snapshot data" })
    @ApiParam({ name: "id", type: Number, description: "Odontogram id" })
    @Patch(":id")
    update(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdateOdontogramDto) {
        return this.odontogramService.update(user.clinicId, id, dto);
    }

    @ApiOperation({ summary: "Delete odontogram snapshot" })
    @ApiParam({ name: "id", type: Number, description: "Odontogram id" })
    @Delete(":id")
    delete(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.odontogramService.delete(user.clinicId, id);
    }
}
