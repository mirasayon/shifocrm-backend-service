import { Controller, Get } from "@nestjs/common";
import type { PaymentsService } from "./payments.service.js";

@Controller("payments")
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @Get()
    findAll() {
        return this.paymentsService.findAll();
    }
}
