import { createParamDecorator, type ExecutionContext } from "@nestjs/common";
import type { AuthUser } from "../../common/types/auth-user.js";

export const CurrentUser = createParamDecorator((_: unknown, context: ExecutionContext): AuthUser => {
    const request = context.switchToHttp().getRequest();
    return request.user as AuthUser;
});
