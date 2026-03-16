import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): { message: string } {
        return { message: "Hello from a pure ESM NestJS app!" };
    }
}
