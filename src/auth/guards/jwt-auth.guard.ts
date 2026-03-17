import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
    handleRequest(err: any, user: any, _info: any) {
        // You can throw a custom exception or return the user
        if (err || !user) {
            throw err || new UnauthorizedException("Siz ushbu amalni bajarish uchun tizimga kirmagansiz");
        }
        return user;
    }
}
