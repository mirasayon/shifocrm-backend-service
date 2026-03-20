# API Routes And Bruno Requests

Source of truth: controller decorators in `src/**/*.controller.ts` with global prefix `/api`.

| Module | Method | Path | Auth | Summary | Bruno Request |
| --- | --- | --- | --- | --- | --- |
| App | GET | `/api/ping` | None | Ping (app + database + schema) | `bruno/ShifoCRM-Backend/App/Ping.yml` |
| Auth | POST | `/api/auth/login` | None | Login (JWT) | `bruno/ShifoCRM-Backend/Auth/Login.yml` |
| Clinic | GET | `/api/clinic` | Bearer | Get my clinic | `bruno/ShifoCRM-Backend/Clinic/Get Clinic.yml` |
| Clinic | PUT | `/api/clinic` | Bearer | Update my clinic (admin only) | `bruno/ShifoCRM-Backend/Clinic/Update Clinic.yml` |
| Doctors | GET | `/api/doctors` | Bearer | List doctors in my clinic | `bruno/ShifoCRM-Backend/Doctors/Get Doctors.yml` |
| Doctors | POST | `/api/doctors` | Bearer | Create doctor (admin only) | `bruno/ShifoCRM-Backend/Doctors/Create Doctor.yml` |
| Doctors | DELETE | `/api/doctors/:id` | Bearer | Deactivate doctor (admin only) | `bruno/ShifoCRM-Backend/Doctors/Deactivate Doctor.yml` |
| Doctors | GET | `/api/doctors/:id` | Bearer | Get doctor by id (admin only) | `bruno/ShifoCRM-Backend/Doctors/Get Doctor By Id.yml` |
| Doctors | PATCH | `/api/doctors/:id` | Bearer | Update doctor (admin only) | `bruno/ShifoCRM-Backend/Doctors/Update Doctor.yml` |
| Doctors | GET | `/api/doctors/me` | Bearer | Get my profile | `bruno/ShifoCRM-Backend/Doctors/Get My Profile.yml` |
| Doctors | PATCH | `/api/doctors/me` | Bearer | Update my profile | `bruno/ShifoCRM-Backend/Doctors/Update My Profile.yml` |
| Doctors | PATCH | `/api/doctors/me/password` | Bearer | Change my password | `bruno/ShifoCRM-Backend/Doctors/Change My Password.yml` |
| Patients | GET | `/api/patients` | Bearer | List patients | `bruno/ShifoCRM-Backend/Patients/Get Patients.yml` |
| Patients | POST | `/api/patients` | Bearer | Create patient | `bruno/ShifoCRM-Backend/Patients/Create Patient.yml` |
| Patients | DELETE | `/api/patients/:id` | Bearer | Archive patient (soft delete) | `bruno/ShifoCRM-Backend/Patients/Archive Patient.yml` |
| Patients | GET | `/api/patients/:id` | Bearer | Get patient by id | `bruno/ShifoCRM-Backend/Patients/Get Patient By Id.yml` |
| Patients | PATCH | `/api/patients/:id` | Bearer | Update patient | `bruno/ShifoCRM-Backend/Patients/Update Patient.yml` |
| Visits | GET | `/api/visits` | Bearer | List visits | `bruno/ShifoCRM-Backend/Visits/Get Visits.yml` |
| Visits | POST | `/api/visits` | Bearer | Create visit | `bruno/ShifoCRM-Backend/Visits/Create Visit.yml` |
| Visits | DELETE | `/api/visits/:id` | Bearer | Archive visit (soft delete) | `bruno/ShifoCRM-Backend/Visits/Archive Visit.yml` |
| Visits | GET | `/api/visits/:id` | Bearer | Get visit by id | `bruno/ShifoCRM-Backend/Visits/Get Visit By Id.yml` |
| Visits | PATCH | `/api/visits/:id` | Bearer | Update visit | `bruno/ShifoCRM-Backend/Visits/Update Visit.yml` |
| Payments | GET | `/api/payments` | Bearer | List payments | `bruno/ShifoCRM-Backend/Payments/Get Payments.yml` |
| Payments | POST | `/api/payments` | Bearer | Create payment | `bruno/ShifoCRM-Backend/Payments/Create Payment.yml` |
| Payments | DELETE | `/api/payments/:id` | Bearer | Delete payment | `bruno/ShifoCRM-Backend/Payments/Delete Payment.yml` |
| Payments | PATCH | `/api/payments/:id` | Bearer | Update payment | `bruno/ShifoCRM-Backend/Payments/Update Payment.yml` |
| Inventory | POST | `/api/inventory/consume` | Bearer | Consume material during a visit | `bruno/ShifoCRM-Backend/Inventory/Consume Material.yml` |
| Inventory | GET | `/api/inventory/consumptions` | Bearer | List consumptions (optionally by visitId) | `bruno/ShifoCRM-Backend/Inventory/Get Consumptions.yml` |
| Inventory | DELETE | `/api/inventory/consumptions/:id` | Bearer | Delete consumption (reverts stock) | `bruno/ShifoCRM-Backend/Inventory/Delete Consumption.yml` |
| Inventory | GET | `/api/inventory/expenses` | Bearer | List expenses | `bruno/ShifoCRM-Backend/Inventory/Get Expenses.yml` |
| Inventory | POST | `/api/inventory/expenses` | Bearer | Create expense | `bruno/ShifoCRM-Backend/Inventory/Create Expense.yml` |
| Inventory | DELETE | `/api/inventory/expenses/:id` | Bearer | Delete expense | `bruno/ShifoCRM-Backend/Inventory/Delete Expense.yml` |
| Inventory | GET | `/api/inventory/items` | Bearer | List inventory items | `bruno/ShifoCRM-Backend/Inventory/Get Items.yml` |
| Inventory | POST | `/api/inventory/items` | Bearer | Create inventory item | `bruno/ShifoCRM-Backend/Inventory/Create Item.yml` |
| Inventory | DELETE | `/api/inventory/items/:id` | Bearer | Delete inventory item | `bruno/ShifoCRM-Backend/Inventory/Delete Item.yml` |
| Inventory | PATCH | `/api/inventory/items/:id` | Bearer | Update inventory item | `bruno/ShifoCRM-Backend/Inventory/Update Item.yml` |
| Inventory | GET | `/api/inventory/movements` | Bearer | List inventory movements | `bruno/ShifoCRM-Backend/Inventory/Get Movements.yml` |
| Inventory | POST | `/api/inventory/movements` | Bearer | Create inventory movement (IN/OUT) | `bruno/ShifoCRM-Backend/Inventory/Create Movement.yml` |
| Inventory | DELETE | `/api/inventory/movements/:id` | Bearer | Delete inventory movement (reverts stock) | `bruno/ShifoCRM-Backend/Inventory/Delete Movement.yml` |
| Visit Services | GET | `/api/visit-services` | Bearer | List visit services | `bruno/ShifoCRM-Backend/VisitServices/Get Visit Services.yml` |
| Visit Services | POST | `/api/visit-services` | Bearer | Create visit service | `bruno/ShifoCRM-Backend/VisitServices/Create Visit Service.yml` |
| Visit Services | DELETE | `/api/visit-services/:id` | Bearer | Delete visit service by id | `bruno/ShifoCRM-Backend/VisitServices/Delete Visit Service By Id.yml` |
| Visit Services | DELETE | `/api/visit-services/by-visit/:visitId/tooth/:toothId` | Bearer | Delete visit services by visit and tooth | `bruno/ShifoCRM-Backend/VisitServices/Delete Visit Service By Visit And Tooth.yml` |
| Odontogram | POST | `/api/odontogram` | Bearer | Create odontogram snapshot (one per visit) | `bruno/ShifoCRM-Backend/Odontogram/Create Odontogram.yml` |
| Odontogram | DELETE | `/api/odontogram/:id` | Bearer | Delete odontogram snapshot | `bruno/ShifoCRM-Backend/Odontogram/Delete Odontogram.yml` |
| Odontogram | GET | `/api/odontogram/:id` | Bearer | Get odontogram by id | `bruno/ShifoCRM-Backend/Odontogram/Get Odontogram By Id.yml` |
| Odontogram | PATCH | `/api/odontogram/:id` | Bearer | Update odontogram snapshot data | `bruno/ShifoCRM-Backend/Odontogram/Update Odontogram.yml` |
| Odontogram | GET | `/api/odontogram/by-patient/:patientId` | Bearer | List odontograms by patient id | `bruno/ShifoCRM-Backend/Odontogram/Get Odontograms By Patient.yml` |
| Odontogram | GET | `/api/odontogram/by-visit/:visitId` | Bearer | Get odontogram by visit id | `bruno/ShifoCRM-Backend/Odontogram/Get Odontogram By Visit.yml` |
| Odontogram | POST | `/api/odontogram/get-or-create` | Bearer | Get existing odontogram or create from last snapshot | `bruno/ShifoCRM-Backend/Odontogram/Get Or Create Odontogram.yml` |

## Coverage

- Controller routes: 50
- Bruno requests matched by method+path: 50
- Missing Bruno routes: 0
