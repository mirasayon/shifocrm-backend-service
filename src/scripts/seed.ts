import { parseArgs } from "node:util";
import { PrismaClient } from "../prisma/client/client.js";
import bcryptjs from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
const DEFAULT_CLINIC_SLUG = "shifo-test-clinic";
const DEFAULT_CLINIC_NAME = "Shifo Test Clinic";
type SeedCliOptions = {
    email: string;
    password: string;
};

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set.");
}
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

function parseCliOptions(): SeedCliOptions {
    const { values } = parseArgs({
        options: {
            email: {
                type: "string",
                short: "e",
            },
            password: {
                type: "string",
                short: "p",
            },
        },
        strict: true,
        allowPositionals: false,
    });

    const email = values.email?.trim();

    if (!email) {
        throw new Error('Email is required. Pass a value using --email="me@example.com".');
    }
    const password = values.password;
    if (!password) {
        throw new Error('Password is required. Pass a value using --password="myPassword".');
    }
    if (!email.includes("@")) {
        throw new Error(`Invalid email: "${email}". Pass a valid value using --email="me@example.com".`);
    }

    if (password.trim().length === 0) {
        throw new Error('Password cannot be empty. Pass a value using --password="myPassword".');
    }
    return { email, password };
}

async function main() {
    const { email, password } = parseCliOptions();
    const existingClinic = await prisma.clinic.findUnique({
        where: { slug: DEFAULT_CLINIC_SLUG },
        select: { id: true },
    });
    const existingSuperAdmin = await prisma.user.findFirst({
        where: {
            OR: [{ role: "SUPER_ADMIN" }, { email }],
        },
        select: { id: true, email: true, role: true },
    });
    if (existingClinic || existingSuperAdmin) {
        throw new Error(
            `Database is not empty. Existing data found (${existingClinic ? `clinic slug "${DEFAULT_CLINIC_SLUG}"` : ""}${existingClinic && existingSuperAdmin ? ", " : ""}${existingSuperAdmin ? `user role "${existingSuperAdmin.role}"${existingSuperAdmin.email ? ` (${existingSuperAdmin.email})` : ""}` : ""}).`,
        );
    }
    const hashedPassword = await bcryptjs.hash(password, 10);

    const clinic = await prisma.clinic.create({
        data: {
            name: DEFAULT_CLINIC_NAME,
            slug: DEFAULT_CLINIC_SLUG,
            maxDoctors: 5,
        },
    });

    await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            fullName: "Super Admin",
            role: "SUPER_ADMIN",
            clinicId: clinic.id,
        },
    });
    console.log(`✅ Database seeded: Login with ${email} / ${password}`);
}
try {
    await main();
} catch (e) {
    console.error(e);
    process.exit(1);
} finally {
    await prisma.$disconnect();
}
