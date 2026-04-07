import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import type { AuthUser } from "../../common/types/auth-user.js";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
    handleRequest<TUser = AuthUser>(userError: unknown, user: TUser | false | null, _info: unknown): TUser {
        if (userError || !user) {
            throw userError || new UnauthorizedException("Siz ushbu amalni bajarish uchun tizimga kirmagansiz");
        }
        return user;
    }
}
