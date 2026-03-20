import { existsSync } from "node:fs";
import { loadEnvFile } from "node:process";
import { PrismaClient } from "../prisma/client/client.js";
import bcryptjs from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";

function getDatabaseUrl(): string {
    if (process.env.DATABASE_URL) return process.env.DATABASE_URL;

    const candidates = [process.env.ENV_FILE, ".env.development", ".env", ".env.test", ".env.production"].filter(
        (value): value is string => typeof value === "string" && value.trim().length > 0,
    );

    const envFile = candidates.find((file) => existsSync(file));
    if (envFile) loadEnvFile(envFile);

    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
        throw new Error("DATABASE_URL is not set. Create `.env.development` from `.env.example` or pass DATABASE_URL via the environment.");
    }

    return databaseUrl;
}

const databaseUrl = getDatabaseUrl();

const adapter = new PrismaPg({ connectionString: databaseUrl });
const prisma = new PrismaClient({ adapter });

async function main() {
    const password = await bcryptjs.hash("admin123456", 10);
    // 1. Create a Default Clinic
    const clinic = await prisma.clinic.upsert({
        where: { slug: "shifo-test-clinic" },
        update: {},
        create: {
            name: "Shifo Test Clinic",
            slug: "shifo-test-clinic",
            maxDoctors: 5,
        },
    });
    // 2. Create a Super Admin
    await prisma.user.upsert({
        where: { email: "superadmin@shifocrm.app" },
        update: {},
        create: {
            email: "superadmin@shifocrm.app",
            password,
            fullName: "Super Admin",
            role: "SUPER_ADMIN",
            clinicId: clinic.id,
        },
    });
    console.log("✅ Database seeded: Login with superadmin@shifocrm.app / admin123456");
}
try {
    await main();
} catch (e) {
    console.error(e);
    process.exit(1);
} finally {
    await prisma.$disconnect();
}
