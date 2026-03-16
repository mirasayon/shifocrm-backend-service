// src/prisma/prisma.service.ts
import { Injectable, type OnModuleDestroy, type OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../prisma/client/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor(config: ConfigService) {
        const pool = new PrismaPg({
            connectionString: config.getOrThrow<string>("DATABASE_URL"),
        });
        super({ adapter: pool });
    }
    async onModuleInit() {
        await this.$connect().catch((err) => {
            console.error("Database connection failed:", err);
            process.exit(1);
        });
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
