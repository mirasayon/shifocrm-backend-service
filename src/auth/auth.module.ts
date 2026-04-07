// src/auth/auth.module.ts
import { PrismaModule } from "../prisma/prisma.module.js";
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { JwtStrategy } from "./jwt.strategy.js";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import type { StringValue } from "ms";

@Module({
    imports: [
        PrismaModule,
        PassportModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                const rawExpiresIn = config.get<string>("JWT_EXPIRES_IN") ?? "1d";
                const expiresIn: number | StringValue = /^\d+$/.test(rawExpiresIn) ? Number(rawExpiresIn) : (rawExpiresIn as StringValue);

                return {
                    secret: config.getOrThrow<string>("JWT_SECRET"),
                    signOptions: { expiresIn },
                };
            },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
