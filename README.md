## ShifoCRM Backend (NestJS + Prisma)

Backend server for ShifoCRM.

- Base prefix: `/api`
- Swagger UI: `/docs`

## Local development

### Requirements

- Node.js (recommended: use `.node-version`)
- PostgreSQL (local or Docker)

### 1) Configure environment

This repo uses stage-specific env files:

- `.env.development` (local dev)
- `.env.test`
- `.env.production`

Create `.env.development` from `.env.example` and set at least:

- `DATABASE_URL` (Postgres connection string)
- `JWT_SECRET` (any long random string)

Optional:

- `PORT` (defaults to `3000`)
- `HOST` (defaults to `0.0.0.0`)

Example `DATABASE_URL`:
`postgresql://postgres:yourpassword@localhost:5432/shifocrm?schema=public`

### 2) Start Postgres

Use your local Postgres, or run one in Docker:

```bash
docker run --name shifocrm-postgres \
  -e POSTGRES_PASSWORD=yourpassword \
  -e POSTGRES_DB=shifocrm \
  -p 5432:5432 \
  -d postgres:16
```

### 3) Install dependencies

`npm install`

### 4) Create tables (Prisma)

Prisma schema lives at `prisma/schemas/main.prisma`.

For local dev, the simplest is `db push`:
`npm run prisma:db:push:dev`

If you prefer migrations:
`npm run prisma:migrate:dev`

### 5) Seed demo data

`npm run proto:db:seed:dev`

This creates (idempotent upserts):

- Clinic: `shifo-test-clinic`
- Super admin:
  - email: `admin@shifo.com`
  - password: `admin123456`

### 6) Run the API

Dev (Nest + watch):
`npm run nest:start:dev:watch`

Build + run (Node):

1. `npm run ts:build`
2. `npm run node:start:dev`

Swagger: `http://localhost:3000/docs` (adjust host/port if you changed them)

## Auth

`POST /api/auth/login`

```json
{ "identifier": "admin@shifo.com", "password": "admin123456" }
```

Use `Authorization: Bearer <access_token>` for all protected endpoints.

## Notes

- Request payloads and query params must be sent in `camelCase`.
- DTO validation is strict: unknown fields are rejected with `400 Bad Request`.
- All data is scoped by `clinicId` inside the JWT, so you can’t read/update another clinic’s data.

## API route reference (all routes)

- Full route-by-route reference: `docs/api-routes.md`
- Includes all `50` current routes from controllers, mapped to Bruno request files by method + path.

## Quick sanity checks (curl)

1. Login:

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"identifier\":\"admin@shifo.com\",\"password\":\"admin123456\"}"
```

2. Use token:

```bash
curl http://localhost:3000/api/clinic \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Prisma cheat sheet

- Format schema: `npm run prisma:format`
- Generate client: `npm run prisma:client:generate`
- Push schema (dev): `npm run prisma:db:push:dev`
- Reset schema (dev): `npm run prisma:db:push:dev:FORCE-RESET`
- Migrate (dev): `npm run prisma:migrate:dev`
- Reset migrations (dev): `npm run prisma:migrate:dev:RESET`
- Deploy migrations (prod): `npm run prisma:migrate:deploy`
- Studio (dev): `npm run prisma:studio:dev`

## API collections (Bruno)

The Bruno OpenCollection lives under `bruno/ShifoCRM-Backend`.

Recommended flow:

1. Copy `bruno/ShifoCRM-Backend/.env.example` to `bruno/ShifoCRM-Backend/.env` and fill values
2. Run `Auth/Login` (it stores `token`, `clinicId`, `doctorId` into Bruno runtime vars for this session)
3. Run create requests (they store IDs like `patientId`, `visitId`, etc. into Bruno runtime vars for follow-up requests)
