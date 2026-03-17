import { Controller, Get, HttpException, HttpStatus, Inject } from "@nestjs/common";
import { AppService } from "./app.service.js";
import { ApiOkResponse, ApiOperation, ApiServiceUnavailableResponse, ApiTags } from "@nestjs/swagger";
import { ApiCommonErrors } from "./common/swagger/api-common-errors.decorator.js";
import { PingResponseDto } from "./common/swagger/models.js";

@ApiTags("App")
@ApiCommonErrors()
@Controller("/")
export class AppController {
    constructor(@Inject(AppService) private readonly appService: AppService) {}

    @ApiOperation({ summary: "Ping (app + database + schema)" })
    @ApiOkResponse({ type: PingResponseDto, description: "All checks passed" })
    @ApiServiceUnavailableResponse({ type: PingResponseDto, description: "One or more checks failed" })
    @Get("/ping")
    async ping(): Promise<PingResponseDto> {
        const result = await this.appService.ping();
        if (!result.ok) throw new HttpException(result, HttpStatus.SERVICE_UNAVAILABLE);
        return result;
    }
}
