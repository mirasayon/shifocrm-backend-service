import { applyDecorators } from "@nestjs/common";
import { ApiBadRequestResponse, ApiConflictResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse } from "@nestjs/swagger";
import { ApiErrorResponseDto } from "./error-response.dto.js";

export function ApiCommonErrors() {
    return applyDecorators(
        ApiBadRequestResponse({ type: ApiErrorResponseDto, description: "Validation error or invalid request" }),
        ApiNotFoundResponse({ type: ApiErrorResponseDto, description: "Entity not found" }),
        ApiConflictResponse({ type: ApiErrorResponseDto, description: "Conflict (unique/foreign key constraint)" }),
        ApiInternalServerErrorResponse({ type: ApiErrorResponseDto, description: "Unexpected server error" }),
    );
}
