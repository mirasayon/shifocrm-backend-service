function toCamelCaseKey(key: string) {
    return key.replace(/_([a-z0-9])/gi, (_, ch: string) => ch.toUpperCase());
}

export function camelizeKeys<T>(input: T): T {
    if (!input) return input;
    if (Array.isArray(input)) return input.map((v) => camelizeKeys(v)) as any;
    if (typeof input !== "object") return input;
    if (input instanceof Date) return input;

    const obj = input as any;
    const out: any = Object.create(null);
    for (const [key, value] of Object.entries(obj)) {
        // Prevent prototype pollution
        if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
        out[toCamelCaseKey(key)] = camelizeKeys(value);
    }
    return out;
}
