import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello from a pure ESM NestJS app!.js";
    }
}
