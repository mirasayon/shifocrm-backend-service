import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { PaymentsService } from "./payments.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { CreatePaymentDto } from "./dto/create-payment.dto.js";
import { ListPaymentsQuery } from "./dto/list-payments.query.js";
import { UpdatePaymentDto } from "./dto/update-payment.dto.js";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import type { AuthUser } from "../common/types/auth-user.js";
import { IdResponseDto } from "../common/dto/id.response.dto.js";
import { PaymentWithRelationsDto } from "../common/swagger/models.js";

@ApiTags("Payments")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@UseGuards(JwtAuthGuard)
@Controller("payments")
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @ApiOperation({ summary: "List payments" })
    @ApiOkResponse({ type: PaymentWithRelationsDto, isArray: true, description: "Returns clinic-scoped payments" })
    @ApiQuery({ name: "patientId", required: false, type: Number })
    @ApiQuery({ name: "visitId", required: false, type: Number })
    @ApiQuery({ name: "doctorId", required: false, type: Number })
    @ApiQuery({ name: "paymentType", required: false, type: String })
    @ApiQuery({ name: "startDate", required: false, type: String, description: "YYYY-MM-DD" })
    @ApiQuery({ name: "endDate", required: false, type: String, description: "YYYY-MM-DD" })
    @Get()
    list(@CurrentUser() user: AuthUser, @Query() query: ListPaymentsQuery) {
        return this.paymentsService.list(user.clinicId, query);
    }

    @ApiOperation({ summary: "Create payment" })
    @ApiCreatedResponse({ type: PaymentWithRelationsDto, description: "Creates a payment in the current clinic" })
    @Post()
    create(@CurrentUser() user: AuthUser, @Body() dto: CreatePaymentDto) {
        return this.paymentsService.create(user.clinicId, dto);
    }

    @ApiOperation({ summary: "Update payment" })
    @ApiParam({ name: "id", type: Number, description: "Payment id" })
    @ApiOkResponse({ type: PaymentWithRelationsDto, description: "Updates a payment in the current clinic" })
    @Patch(":id")
    update(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdatePaymentDto) {
        return this.paymentsService.update(user.clinicId, id, dto);
    }

    @ApiOperation({ summary: "Delete payment" })
    @ApiParam({ name: "id", type: Number, description: "Payment id" })
    @ApiOkResponse({ type: IdResponseDto, description: "Deletes a payment in the current clinic" })
    @Delete(":id")
    delete(@CurrentUser() user: AuthUser, @Param("id", ParseIntPipe) id: number) {
        return this.paymentsService.delete(user.clinicId, id);
    }
}
