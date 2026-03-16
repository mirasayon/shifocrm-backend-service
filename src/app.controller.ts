import { Controller, Get, Inject } from "@nestjs/common";
import { AppService } from "./app.service.js";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { HelloResponseDto } from "./common/swagger/models.js";

@ApiTags("App")
@Controller("/")
export class AppController {
    constructor(@Inject(AppService) private readonly appService: AppService) {}

    @ApiOperation({ summary: "Health check" })
    @ApiOkResponse({ type: HelloResponseDto, description: "API is reachable" })
    @Get("/hello")
    getHello(): HelloResponseDto {
        return this.appService.getHello();
    }
}
