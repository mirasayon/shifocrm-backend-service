// src/auth/jwt.strategy.ts
import { PrismaService } from "#/prisma/prisma.service.js";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET!,
        });
    }

    async validate(payload: { sub: number; clinicId: number; role: string }) {
        const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
        if (!user || !user.isActive) {
            throw new UnauthorizedException();
        }
        return { id: user.id, clinicId: user.clinicId, role: user.role };
    }
}
