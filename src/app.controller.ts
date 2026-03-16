import { Controller, Get, Inject } from "@nestjs/common";
import { AppService } from "./app.service.js";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("App")
@Controller("/")
export class AppController {
    constructor(@Inject(AppService) private readonly appService: AppService) {}

    @ApiOperation({ summary: "Health check" })
    @ApiOkResponse({ description: "API is reachable" })
    @Get("/hello")
    getHello(): { message: string } {
        return this.appService.getHello();
    }
}
