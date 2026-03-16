## ShifoCRM Backend (NestJS + Prisma)

Prototype backend for ShifoCRM. API base prefix is `/api` and Swagger is available at `/docs`.

### Requirements
- Node.js `>= 24`
- PostgreSQL (see `docker-compose.yml`)

### Quick start
1. Configure env: copy `.env.example` → `.env` and set `DATABASE_URL`, `JWT_SECRET`
2. Start Postgres: `docker compose up -d`
3. Create tables: `npm run prisma:db:push`
4. Seed demo clinic + admin: `npx tsx ./src/scripts/seed.ts`
5. Run API (watch): `npm run tsx:dev`

### Auth
`POST /api/auth/login`
```json
{ "identifier": "admin@shifo.com", "password": "admin123456" }
```
Use `Authorization: Bearer <access_token>` for all protected endpoints.

### Notes
- Request payloads and query params can be sent in `camelCase` or `snake_case` (backend normalizes to `camelCase`).

### Implemented endpoints (high level)
- Clinic: `GET /api/clinic`, `PUT /api/clinic`
- Doctors: `GET/POST/PATCH/DELETE /api/doctors`, `GET/PATCH /api/doctors/me`, `PATCH /api/doctors/me/password`
- Patients: `GET/POST/PATCH/DELETE /api/patients`, `GET /api/patients/:id`
- Visits: `GET/POST/PATCH/DELETE /api/visits`, `GET /api/visits/:id`
- Payments: `GET/POST/PATCH/DELETE /api/payments`
- Inventory: `GET/POST/PATCH/DELETE /api/inventory/items`, `GET/POST/DELETE /api/inventory/movements`, `GET/POST/DELETE /api/inventory/expenses`, `GET/DELETE /api/inventory/consumptions`, `POST /api/inventory/consume`
- Visit services: `GET/POST/DELETE /api/visit-services`, `DELETE /api/visit-services/by-visit/:visitId/tooth/:toothId`
- Odontogram: `GET /api/odontogram/by-visit/:visitId`, `GET /api/odontogram/by-patient/:patientId`, `POST /api/odontogram`, `POST /api/odontogram/get-or-create`, `PATCH/DELETE /api/odontogram/:id`
