// src/auth/auth.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { LoginDto } from "./dto/login.dto.js";
import { ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { LoginResponseDto } from "./dto/login.response.dto.js";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ summary: "Login (JWT)" })
    @ApiOkResponse({ type: LoginResponseDto, description: "Returns access token and basic user info" })
    @ApiUnauthorizedResponse({ description: "Invalid credentials" })
    @Post("login")
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginDto) {
        return await this.authService.login(loginDto);
    }
}
