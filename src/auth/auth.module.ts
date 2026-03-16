// src/auth/auth.module.ts
import { PrismaModule } from "../prisma/prisma.module.js";
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { JwtStrategy } from "./jwt.strategy.js";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Module({
    imports: [
        PrismaModule,
        PassportModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                const rawExpiresIn = config.get<string>("JWT_EXPIRES_IN") ?? "1d";
                const expiresIn = /^\d+$/.test(rawExpiresIn) ? Number(rawExpiresIn) : rawExpiresIn;

                return {
                    secret: config.getOrThrow<string>("JWT_SECRET"),
                    signOptions: { expiresIn: expiresIn as any },
                };
            },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
