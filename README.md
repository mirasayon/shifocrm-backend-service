## ShifoCRM Backend (NestJS + Prisma)

Prototype backend for ShifoCRM. API base prefix is `/api` and Swagger is available at `/docs`.

### Requirements
- Node.js `>= 24`
- PostgreSQL (local or Docker; see `docker-compose.yml`)
- (Optional) Docker Desktop if you want `docker compose`

### 1) Configure environment
Copy `.env.example` to `.env` and set at least:
- `DATABASE_URL` (Postgres connection string)
- `JWT_SECRET` (any long random string)
- `PORT` and `HOST` (optional; defaults are `4404` and `localhost`)

Example `DATABASE_URL`:
`postgresql://postgres:yourpassword@localhost:5432/shifocrm?schema=public`

### 2) Start Postgres
If you use Docker:
1. Start DB: `docker compose up -d`
2. The compose file exposes Postgres on `localhost:5432` with:
   - user: `postgres`
   - password: `yourpassword`
   - database: `shifocrm`

If you use a local Postgres, just make sure `DATABASE_URL` points to it.

### 3) Install dependencies
`npm install`

### 4) Create tables (Prisma)
For a prototype, the simplest is Prisma push:
`npm run prisma:db:push`

If you prefer migrations (when you start versioning schema changes), use:
`npm run prisma:mig:dev`

### 5) Seed demo data
Run the seed script (it reads `.env` automatically):
`npx tsx ./src/scripts/seed.ts`

This creates:
- Clinic: `shifo-test-clinic`
- Super admin user:
  - email: `admin@shifo.com`
  - password: `admin123456`

### 6) Run the API
Dev (TypeScript watch):
`npm run tsx:dev`

Or build + run:
1. `npm run ts:build`
2. `npm run start:dev`

### Auth
`POST /api/auth/login`
```json
{ "identifier": "admin@shifo.com", "password": "admin123456" }
```
Use `Authorization: Bearer <access_token>` for all protected endpoints.

### Notes
- Request payloads and query params must be sent in `camelCase`.
- DTO validation is strict: unknown fields are rejected with `400 Bad Request`.
- All data is scoped by `clinicId` inside the JWT, so you can’t read/update another clinic’s data.

### Implemented endpoints (high level)
- Clinic: `GET /api/clinic`, `PUT /api/clinic`
- Doctors: `GET/POST/PATCH/DELETE /api/doctors`, `GET/PATCH /api/doctors/me`, `PATCH /api/doctors/me/password`
- Patients: `GET/POST/PATCH/DELETE /api/patients`, `GET /api/patients/:id`
- Visits: `GET/POST/PATCH/DELETE /api/visits`, `GET /api/visits/:id`
- Payments: `GET/POST/PATCH/DELETE /api/payments`
- Inventory: `GET/POST/PATCH/DELETE /api/inventory/items`, `GET/POST/DELETE /api/inventory/movements`, `GET/POST/DELETE /api/inventory/expenses`, `GET/DELETE /api/inventory/consumptions`, `POST /api/inventory/consume`
- Visit services: `GET/POST/DELETE /api/visit-services`, `DELETE /api/visit-services/by-visit/:visitId/tooth/:toothId`
- Odontogram: `GET /api/odontogram/by-visit/:visitId`, `GET /api/odontogram/by-patient/:patientId`, `POST /api/odontogram`, `POST /api/odontogram/get-or-create`, `PATCH/DELETE /api/odontogram/:id`

### Quick sanity checks (curl)
1. Login:
```bash
curl -X POST http://localhost:4404/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"identifier\":\"admin@shifo.com\",\"password\":\"admin123456\"}"
```
2. Use token:
```bash
curl http://localhost:4404/api/clinic \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Swagger / API docs
Open: `http://<HOST>:<PORT>/docs`

### API collections (Bruno)
There is a Bruno collection under `bruno/ShifoCRM-Backend` you can import into Bruno and run requests quickly.
