// src/prisma/prisma.service.ts
import { Injectable, type OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "#orm";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}
