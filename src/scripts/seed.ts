import "dotenv/config";
import { PrismaClient } from "../prisma/client/client.js";
import bcryptjs from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL as string });
const adapter = new PrismaPg(pool as any);
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
        where: { email: "admin@shifo.com" },
        update: {},
        create: {
            email: "admin@shifo.com",
            password,
            fullName: "Super Admin",
            role: "SUPER_ADMIN",
            clinicId: clinic.id,
        },
    });
    console.log("✅ Database seeded: Login with admin@shifo.com / admin123456");
}
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
