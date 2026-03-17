import type { Role } from "../../prisma/client/client.js";

export type AuthUser = {
    id: number;
    clinicId: number | null;
    role: Role;
};
