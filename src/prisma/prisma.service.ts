// src/prisma/prisma.service.ts
import { Injectable, type OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../prisma/client/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const pool = new PrismaPg({
            connectionString: process.env.DATABASE_URL!,
            ssl: { rejectUnauthorized: false },
        });
        super({ adapter: pool });
    }
    async onModuleInit() {
        console.log("Connecting to the database...");
        await this.$connect()
            .then(() => console.log("Database connection established"))
            .catch((err) => {
                console.error("Database connection failed:", err);
                process.exit(1);
            });
    }
}
