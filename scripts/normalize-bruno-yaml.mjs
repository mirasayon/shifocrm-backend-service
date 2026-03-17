import { promises as fs } from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const COLLECTION_ROOT = path.resolve("bruno", "ShifoCRM-Backend");

function isRequestFile(filePath) {
    if (!filePath.endsWith(".yml")) return false;
    if (filePath.endsWith(`${path.sep}opencollection.yml`)) return false;
    if (filePath.includes(`${path.sep}environments${path.sep}`)) return false;
    return true;
}

async function listFilesRecursive(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) files.push(...(await listFilesRecursive(fullPath)));
        else files.push(fullPath);
    }
    return files;
}

function normalizeAuth(request) {
    const http = request.http ?? {};
    const httpAuth = http.auth;

    if (!httpAuth && request.auth?.type === "bearer" && request.auth?.bearer?.token) {
        return { type: "bearer", token: request.auth.bearer.token };
    }

    if (typeof httpAuth === "string") {
        if (httpAuth === "bearer" && request.auth?.type === "bearer" && request.auth?.bearer?.token) {
            return { type: "bearer", token: request.auth.bearer.token };
        }
        return httpAuth;
    }

    if (httpAuth && typeof httpAuth === "object") return httpAuth;
    return undefined;
}

function normalizeBody(request) {
    const http = request.http ?? {};

    const candidate = http.body ?? request.body;
    if (!candidate) return undefined;

    const type = candidate.type;
    const data = candidate.data ?? candidate.json;

    if (!type || typeof data !== "string") return undefined;
    return { type, data };
}

function normalizeRequest(request) {
    if (!request?.info || !request?.http) return null;

    const normalized = {
        info: request.info,
        http: {
            method: request.http.method,
            url: request.http.url,
        },
    };

    const auth = normalizeAuth(request);
    if (auth !== undefined) normalized.http.auth = auth;

    const body = normalizeBody(request);
    if (body) normalized.http.body = body;

    if (request.runtime) normalized.runtime = request.runtime;
    if (request.settings) normalized.settings = request.settings;
    if (request.docs) normalized.docs = request.docs;

    return normalized;
}

async function main() {
    const allFiles = await listFilesRecursive(COLLECTION_ROOT);
    const requestFiles = allFiles.filter(isRequestFile);

    let changed = 0;

    for (const filePath of requestFiles) {
        const raw = await fs.readFile(filePath, "utf8");
        const parsed = yaml.load(raw);

        const normalized = normalizeRequest(parsed);
        if (!normalized) continue;

        const dumped = yaml.dump(normalized, {
            noRefs: true,
            lineWidth: -1,
            sortKeys: false,
        });

        if (dumped !== raw) {
            await fs.writeFile(filePath, dumped, "utf8");
            changed += 1;
        }
    }

    process.stdout.write(`Normalized ${changed} file(s)\n`);
}

await main();

