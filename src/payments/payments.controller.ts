import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Request, UseGuards } from "@nestjs/common";
import { PaymentsService } from "./payments.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { CreatePaymentDto } from "./dto/create-payment.dto.js";
import { ListPaymentsQuery } from "./dto/list-payments.query.js";
import { UpdatePaymentDto } from "./dto/update-payment.dto.js";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";

@ApiTags("Payments")
@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: "Missing or invalid JWT" })
@UseGuards(JwtAuthGuard)
@Controller("payments")
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @ApiOperation({ summary: "List payments" })
    @ApiOkResponse({ description: "Returns clinic-scoped payments" })
    @ApiQuery({ name: "patientId", required: false, type: Number })
    @ApiQuery({ name: "visitId", required: false, type: Number })
    @ApiQuery({ name: "doctorId", required: false, type: Number })
    @ApiQuery({ name: "paymentType", required: false, type: String })
    @ApiQuery({ name: "startDate", required: false, type: String, description: "YYYY-MM-DD" })
    @ApiQuery({ name: "endDate", required: false, type: String, description: "YYYY-MM-DD" })
    @Get()
    list(@Request() req, @Query() query: ListPaymentsQuery) {
        return this.paymentsService.list(req.user.clinicId, query);
    }

    @ApiOperation({ summary: "Create payment" })
    @Post()
    create(@Request() req, @Body() dto: CreatePaymentDto) {
        return this.paymentsService.create(req.user.clinicId, dto);
    }

    @ApiOperation({ summary: "Update payment" })
    @ApiParam({ name: "id", type: Number, description: "Payment id" })
    @Patch(":id")
    update(@Request() req, @Param("id", ParseIntPipe) id: number, @Body() dto: UpdatePaymentDto) {
        return this.paymentsService.update(req.user.clinicId, id, dto);
    }

    @ApiOperation({ summary: "Delete payment" })
    @ApiParam({ name: "id", type: Number, description: "Payment id" })
    @Delete(":id")
    delete(@Request() req, @Param("id", ParseIntPipe) id: number) {
        return this.paymentsService.delete(req.user.clinicId, id);
    }
}
