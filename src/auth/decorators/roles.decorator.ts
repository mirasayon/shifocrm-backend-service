import { SetMetadata } from "@nestjs/common";
import type { Role } from "../../prisma/client/client.js";

export const Roles = (...roles: Role[]) => SetMetadata("roles", roles);
