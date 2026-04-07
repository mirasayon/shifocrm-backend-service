# API Routes And Bruno Requests

Source of truth: controller decorators in `src/**/*.controller.ts` with global prefix `/api`.

| Module | Method | Path | Auth | Summary | Bruno Request |
| --- | --- | --- | --- | --- | --- |
| App | GET | `/api/ping` | None | Ping (app + database + schema) | `docs/bruno/App/Ping.yml` |
| Auth | POST | `/api/auth/login` | None | Login (JWT) | `docs/bruno/Auth/Login.yml` |
| Clinic | GET | `/api/clinic` | Bearer | Get my clinic | `docs/bruno/Clinic/Get Clinic.yml` |
| Clinic | PUT | `/api/clinic` | Bearer | Update my clinic (admin only) | `docs/bruno/Clinic/Update Clinic.yml` |
| Doctors | GET | `/api/doctors` | Bearer | List doctors in my clinic | `docs/bruno/Doctors/Get Doctors.yml` |
| Doctors | POST | `/api/doctors` | Bearer | Create doctor (admin only) | `docs/bruno/Doctors/Create Doctor.yml` |
| Doctors | DELETE | `/api/doctors/:id` | Bearer | Deactivate doctor (admin only) | `docs/bruno/Doctors/Deactivate Doctor.yml` |
| Doctors | GET | `/api/doctors/:id` | Bearer | Get doctor by id (admin only) | `docs/bruno/Doctors/Get Doctor By Id.yml` |
| Doctors | PATCH | `/api/doctors/:id` | Bearer | Update doctor (admin only) | `docs/bruno/Doctors/Update Doctor.yml` |
| Doctors | GET | `/api/doctors/me` | Bearer | Get my profile | `docs/bruno/Doctors/Get My Profile.yml` |
| Doctors | PATCH | `/api/doctors/me` | Bearer | Update my profile | `docs/bruno/Doctors/Update My Profile.yml` |
| Doctors | PATCH | `/api/doctors/me/password` | Bearer | Change my password | `docs/bruno/Doctors/Change My Password.yml` |
| Patients | GET | `/api/patients` | Bearer | List patients | `docs/bruno/Patients/Get Patients.yml` |
| Patients | POST | `/api/patients` | Bearer | Create patient | `docs/bruno/Patients/Create Patient.yml` |
| Patients | DELETE | `/api/patients/:id` | Bearer | Archive patient (soft delete) | `docs/bruno/Patients/Archive Patient.yml` |
| Patients | GET | `/api/patients/:id` | Bearer | Get patient by id | `docs/bruno/Patients/Get Patient By Id.yml` |
| Patients | PATCH | `/api/patients/:id` | Bearer | Update patient | `docs/bruno/Patients/Update Patient.yml` |
| Visits | GET | `/api/visits` | Bearer | List visits | `docs/bruno/Visits/Get Visits.yml` |
| Visits | POST | `/api/visits` | Bearer | Create visit | `docs/bruno/Visits/Create Visit.yml` |
| Visits | DELETE | `/api/visits/:id` | Bearer | Archive visit (soft delete) | `docs/bruno/Visits/Archive Visit.yml` |
| Visits | GET | `/api/visits/:id` | Bearer | Get visit by id | `docs/bruno/Visits/Get Visit By Id.yml` |
| Visits | PATCH | `/api/visits/:id` | Bearer | Update visit | `docs/bruno/Visits/Update Visit.yml` |
| Payments | GET | `/api/payments` | Bearer | List payments | `docs/bruno/Payments/Get Payments.yml` |
| Payments | POST | `/api/payments` | Bearer | Create payment | `docs/bruno/Payments/Create Payment.yml` |
| Payments | DELETE | `/api/payments/:id` | Bearer | Delete payment | `docs/bruno/Payments/Delete Payment.yml` |
| Payments | PATCH | `/api/payments/:id` | Bearer | Update payment | `docs/bruno/Payments/Update Payment.yml` |
| Inventory | POST | `/api/inventory/consume` | Bearer | Consume material during a visit | `docs/bruno/Inventory/Consume Material.yml` |
| Inventory | GET | `/api/inventory/consumptions` | Bearer | List consumptions (optionally by visitId) | `docs/bruno/Inventory/Get Consumptions.yml` |
| Inventory | DELETE | `/api/inventory/consumptions/:id` | Bearer | Delete consumption (reverts stock) | `docs/bruno/Inventory/Delete Consumption.yml` |
| Inventory | GET | `/api/inventory/expenses` | Bearer | List expenses | `docs/bruno/Inventory/Get Expenses.yml` |
| Inventory | POST | `/api/inventory/expenses` | Bearer | Create expense | `docs/bruno/Inventory/Create Expense.yml` |
| Inventory | DELETE | `/api/inventory/expenses/:id` | Bearer | Delete expense | `docs/bruno/Inventory/Delete Expense.yml` |
| Inventory | GET | `/api/inventory/items` | Bearer | List inventory items | `docs/bruno/Inventory/Get Items.yml` |
| Inventory | POST | `/api/inventory/items` | Bearer | Create inventory item | `docs/bruno/Inventory/Create Item.yml` |
| Inventory | DELETE | `/api/inventory/items/:id` | Bearer | Delete inventory item | `docs/bruno/Inventory/Delete Item.yml` |
| Inventory | PATCH | `/api/inventory/items/:id` | Bearer | Update inventory item | `docs/bruno/Inventory/Update Item.yml` |
| Inventory | GET | `/api/inventory/movements` | Bearer | List inventory movements | `docs/bruno/Inventory/Get Movements.yml` |
| Inventory | POST | `/api/inventory/movements` | Bearer | Create inventory movement (IN/OUT) | `docs/bruno/Inventory/Create Movement.yml` |
| Inventory | DELETE | `/api/inventory/movements/:id` | Bearer | Delete inventory movement (reverts stock) | `docs/bruno/Inventory/Delete Movement.yml` |
| Visit Services | GET | `/api/visit-services` | Bearer | List visit services | `docs/bruno/VisitServices/Get Visit Services.yml` |
| Visit Services | POST | `/api/visit-services` | Bearer | Create visit service | `docs/bruno/VisitServices/Create Visit Service.yml` |
| Visit Services | DELETE | `/api/visit-services/:id` | Bearer | Delete visit service by id | `docs/bruno/VisitServices/Delete Visit Service By Id.yml` |
| Visit Services | DELETE | `/api/visit-services/by-visit/:visitId/tooth/:toothId` | Bearer | Delete visit services by visit and tooth | `docs/bruno/VisitServices/Delete Visit Service By Visit And Tooth.yml` |
| Odontogram | POST | `/api/odontogram` | Bearer | Create odontogram snapshot (one per visit) | `docs/bruno/Odontogram/Create Odontogram.yml` |
| Odontogram | DELETE | `/api/odontogram/:id` | Bearer | Delete odontogram snapshot | `docs/bruno/Odontogram/Delete Odontogram.yml` |
| Odontogram | GET | `/api/odontogram/:id` | Bearer | Get odontogram by id | `docs/bruno/Odontogram/Get Odontogram By Id.yml` |
| Odontogram | PATCH | `/api/odontogram/:id` | Bearer | Update odontogram snapshot data | `docs/bruno/Odontogram/Update Odontogram.yml` |
| Odontogram | GET | `/api/odontogram/by-patient/:patientId` | Bearer | List odontograms by patient id | `docs/bruno/Odontogram/Get Odontograms By Patient.yml` |
| Odontogram | GET | `/api/odontogram/by-visit/:visitId` | Bearer | Get odontogram by visit id | `docs/bruno/Odontogram/Get Odontogram By Visit.yml` |
| Odontogram | POST | `/api/odontogram/get-or-create` | Bearer | Get existing odontogram or create from last snapshot | `docs/bruno/Odontogram/Get Or Create Odontogram.yml` |

## Coverage

- Controller routes: 50
- Bruno requests matched by method+path: 50
- Missing Bruno routes: 0

