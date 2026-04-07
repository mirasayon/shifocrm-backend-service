import { Injectable } from "@nestjs/common";
import { performance } from "node:perf_hooks";
import { PrismaService } from "./prisma/prisma.service.js";
import { Prisma } from "./prisma/client/client.js";

@Injectable()
export class AppService {
    constructor(private readonly prisma: PrismaService) {}
    async ping() {
        const timestamp = new Date().toISOString();

        const db = await this.runCheck(async () => {
            await this.prisma.$queryRaw`SELECT 1`;
        });

        const schema = await this.runCheck(async () => {
            const schemaRow = await this.prisma.$queryRaw<{ schema: string }[]>`SELECT current_schema() as schema`;
            const schemaName = schemaRow[0]?.schema || "public";

            const expectedTables = [
                "clinics",
                "users",
                "patients",
                "visits",
                "payments",
                "visit_services",
                "odontograms",
                "inventory_items",
                "inventory_movements",
                "inventory_consumptions",
                "expenses",
                "treatment_plans",
            ];

            const rows = await this.prisma.$queryRaw<{ table_name: string }[]>(
                Prisma.sql`
                    SELECT table_name
                    FROM information_schema.tables
                    WHERE table_schema = ${schemaName}
                      AND table_name IN (${Prisma.join(expectedTables)})
                `,
            );

            const found = new Set(rows.map((row) => row.table_name));
            const missing = expectedTables.filter((name) => !found.has(name));
            if (missing.length > 0) {
                throw new Error(`Missing tables: ${missing.join(", ")}`);
            }
        });

        return {
            ok: db.ok && schema.ok,
            timestamp,
            uptimeSeconds: Math.round(process.uptime() * 100) / 100,
            db,
            schema,
        };
    }

    private async runCheck(fn: () => Promise<void>) {
        const start = performance.now();
        try {
            await fn();
            return { ok: true, latencyMs: Math.round(performance.now() - start), error: null };
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : typeof err === "string" ? err : "Unknown error";
            return { ok: false, latencyMs: Math.round(performance.now() - start), error: message };
        }
    }
}
