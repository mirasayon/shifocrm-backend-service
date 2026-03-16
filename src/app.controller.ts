import { Controller, Get, Inject } from "@nestjs/common";
import { AppService } from "./app.service.js";

@Controller("/")
export class AppController {
    constructor(@Inject(AppService) private readonly appService: AppService) {}
    @Get("/hello")
    getHello(): { message: string } {
        return this.appService.getHello();
    }
}
