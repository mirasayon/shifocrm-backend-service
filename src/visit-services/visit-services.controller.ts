import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { CreateVisitServiceDto } from "./dto/create-visit-service.dto.js";
import { ListVisitServicesQuery } from "./dto/list-visit-services.query.js";
import { VisitServicesService } from "./visit-services.service.js";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import type { AuthUser } from "../common/types/auth-user.js";
import { DeletedCountResponseDto } from "../common/dto/deleted-count.response.dto.js";
import { IdResponseDto } from "../common/dto/id.response.dto.js";
import { VisitServiceDto } from "../common/swagger/models.js";

@ApiTags("Visit Services")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@UseGuards(JwtAuthGuard)
@Controller("visit-services")
export class VisitServicesController {
    constructor(private readonly visitServicesService: VisitServicesService) {}

    @ApiOperation({ summary: "List visit services" })
    @ApiOkResponse({ type: VisitServiceDto, isArray: true, description: "Returns clinic-scoped visit services (filterable)" })
    @ApiQuery({ name: "patientId", required: false, type: Number })
    @ApiQuery({ name: "visitId", required: false, type: Number })
    @ApiQuery({ name: "visitIds", required: false, type: String, description: "Comma-separated list of visit ids (e.g. 30001,30002)" })
    @Get()
    list(@CurrentUser() user: AuthUser, @Query() query: ListVisitServicesQuery) {
        return this.visitServicesService.listByClinicAndFilters(user.clinicId, query);
    }

    @ApiOperation({ summary: "Create visit service" })
    @ApiCreatedResponse({ type: VisitServiceDto, description: "Creates a visit service in the current clinic" })
    @Post()
    create(@CurrentUser() user: AuthUser, @Body() dto: CreateVisitServiceDto) {
        return this.visitServicesService.create(user.clinicId, user.id, dto);
    }

    @ApiOperation({ summary: "Delete visit service by id" })
    @ApiParam({ name: "id", type: Number, description: "Visit service id" })
    @ApiOkResponse({ type: IdResponseDto, description: "Deletes a visit service in the current clinic" })
    @Delete(":id")
    deleteById(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.visitServicesService.deleteById(user.clinicId, id);
    }

    @ApiOperation({ summary: "Delete visit services by visit and tooth" })
    @ApiParam({ name: "visitId", type: Number, description: "Visit id" })
    @ApiParam({ name: "toothId", type: Number, description: "Tooth id" })
    @ApiOkResponse({ type: DeletedCountResponseDto, description: "Deletes visit services by visit and tooth (clinic-scoped)" })
    @Delete("by-visit/:visitId/tooth/:toothId")
    deleteByVisitAndTooth(@CurrentUser() user: AuthUser, @Param("visitId", ParseIntPipe) visitId: number, @Param("toothId", ParseIntPipe) toothId: number) {
        return this.visitServicesService.deleteByVisitAndTooth(user.clinicId, visitId, toothId);
    }
}
