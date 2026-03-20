type RawEnv = Record<string, unknown>;
const REQUIRED_ENV_VARS = ["FRONTEND_URL", "JWT_SECRET", "DATABASE_URL", "NODE_ENV", "HOST", "ENV_FILE", "PORT"] as const;
type RequiredEnvVar = (typeof REQUIRED_ENV_VARS)[number];
type ValidatedEnv = RawEnv & Record<RequiredEnvVar, string>;

function asNonEmptyString(value: unknown): string | null {
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
}

export function validateEnv(env: RawEnv): ValidatedEnv {
    const missing: string[] = [];

    const validated = { ...env } as RawEnv;
    for (const key of REQUIRED_ENV_VARS) {
        const value = asNonEmptyString(env[key]);
        if (!value) missing.push(key);
        else validated[key] = value;
    }

    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
    }

    return validated as ValidatedEnv;
}
