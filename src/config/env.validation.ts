type RawEnv = Record<string, unknown>;

function asNonEmptyString(value: unknown): string | null {
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
}

export function validateEnv(env: RawEnv) {
    const missing: string[] = [];

    const databaseUrl = asNonEmptyString(env.DATABASE_URL);
    if (!databaseUrl) missing.push("DATABASE_URL");

    const jwtSecret = asNonEmptyString(env.JWT_SECRET);
    if (!jwtSecret) missing.push("JWT_SECRET");

    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
    }

    return env;
}
