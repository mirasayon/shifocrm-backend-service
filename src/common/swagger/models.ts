import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Role, VisitStatus } from "../../prisma/client/client.js";
export class PingCheckDto {
    @ApiProperty({ example: true })
    ok: boolean;

    @ApiProperty({ example: 12 })
    latencyMs: number;

    @ApiPropertyOptional({ example: "Missing tables: clinics, users", nullable: true })
    error: string | null;
}

export class PingResponseDto {
    @ApiProperty({ example: true })
    ok: boolean;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    timestamp: string;

    @ApiProperty({ example: 123.45, description: "Process uptime in seconds" })
    uptimeSeconds: number;

    @ApiProperty({ type: PingCheckDto })
    db: PingCheckDto;

    @ApiProperty({ type: PingCheckDto })
    schema: PingCheckDto;
}

export class ClinicDto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: "Shifo Test Clinic" })
    name: string;

    @ApiProperty({ example: "shifo-test-clinic" })
    slug: string;

    @ApiPropertyOptional({ example: "https://example.com/logo.png", nullable: true })
    logoUrl: string | null;

    @ApiProperty({ example: 5 })
    maxDoctors: number;

    @ApiProperty({ example: true })
    isActive: boolean;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    createdAt: string;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    updatedAt: string;
}

export class UserDto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiPropertyOptional({ example: 1, nullable: true })
    clinicId: number | null;

    @ApiPropertyOptional({ example: "admin@shifo.com", nullable: true })
    email: string | null;

    @ApiPropertyOptional({ example: "+998901234567", nullable: true })
    phone: string | null;

    @ApiProperty({ example: "Super Admin" })
    fullName: string;

    @ApiProperty({ enum: Role, example: Role.SUPER_ADMIN })
    role: Role;

    @ApiPropertyOptional({ example: "Dentist", nullable: true })
    specialization: string | null;

    @ApiProperty({ example: true })
    isActive: boolean;

    @ApiPropertyOptional({ type: "object", additionalProperties: true, nullable: true })
    workSchedule: Record<string, unknown> | null;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    createdAt: string;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    updatedAt: string;
}

export class PatientDto {
    @ApiProperty({ example: 10001 })
    id: number;

    @ApiProperty({ example: 1 })
    clinicId: number;

    @ApiPropertyOptional({ example: 20001, nullable: true })
    doctorId: number | null;

    @ApiProperty({ example: "Patient Name" })
    fullName: string;

    @ApiProperty({ example: "+998901234567" })
    phone: string;

    @ApiPropertyOptional({ example: "1990-01-01", format: "date", nullable: true })
    birthDate: string | null;

    @ApiPropertyOptional({ example: "male", nullable: true })
    gender: string | null;

    @ApiPropertyOptional({ example: "Tashkent", nullable: true })
    address: string | null;

    @ApiProperty({ example: "active" })
    status: string;

    @ApiPropertyOptional({ example: "Notes...", nullable: true })
    notes: string | null;

    @ApiPropertyOptional({ example: "2026-03-17", format: "date", nullable: true })
    lastVisit: string | null;

    @ApiPropertyOptional({ example: "2026-03-20", format: "date", nullable: true })
    nextAppointment: string | null;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    createdAt: string;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    updatedAt: string;
}

export class PatientWithDoctorDto extends PatientDto {
    @ApiPropertyOptional({ type: UserDto, nullable: true })
    doctor: UserDto | null;
}

export class VisitDto {
    @ApiProperty({ example: 30001 })
    id: number;

    @ApiProperty({ example: 1 })
    clinicId: number;

    @ApiProperty({ example: 10001 })
    patientId: number;

    @ApiPropertyOptional({ example: 20001, nullable: true })
    doctorId: number | null;

    @ApiProperty({ example: "2026-03-17", format: "date" })
    date: string;

    @ApiPropertyOptional({ example: "09:00", nullable: true })
    startTime: string | null;

    @ApiPropertyOptional({ example: "09:30", nullable: true })
    endTime: string | null;

    @ApiPropertyOptional({ example: 30, nullable: true })
    durationMinutes: number | null;

    @ApiProperty({ enum: VisitStatus, example: VisitStatus.PENDING })
    status: VisitStatus;

    @ApiPropertyOptional({ example: "Notes...", nullable: true })
    notes: string | null;

    @ApiPropertyOptional({ example: "500000", nullable: true, description: "Decimal as string" })
    price: string | null;

    @ApiPropertyOptional({ example: "250000", nullable: true, description: "Decimal as string" })
    paidAmount: string | null;

    @ApiPropertyOptional({ example: "250000", nullable: true, description: "Decimal as string" })
    debtAmount: string | null;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    createdAt: string;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    updatedAt: string;
}

export class VisitWithRelationsDto extends VisitDto {
    @ApiProperty({ type: PatientDto })
    patient: PatientDto;

    @ApiPropertyOptional({ type: UserDto, nullable: true })
    doctor: UserDto | null;
}

export class PaymentDto {
    @ApiProperty({ example: 40001 })
    id: number;

    @ApiProperty({ example: 1 })
    clinicId: number;

    @ApiPropertyOptional({ example: 30001, nullable: true })
    visitId: number | null;

    @ApiPropertyOptional({ example: 10001, nullable: true })
    patientId: number | null;

    @ApiPropertyOptional({ example: 20001, nullable: true })
    doctorId: number | null;

    @ApiProperty({ example: "50000", description: "Decimal as string" })
    amount: string;

    @ApiProperty({ example: "payment" })
    paymentType: string;

    @ApiPropertyOptional({ example: "cash", nullable: true })
    method: string | null;

    @ApiPropertyOptional({ example: "Note...", nullable: true })
    note: string | null;

    @ApiProperty({ example: "2026-03-17T12:00:00.000Z", format: "date-time" })
    paidAt: string;

    @ApiProperty({ example: "2026-03-17T12:00:00.000Z", format: "date-time" })
    createdAt: string;
}

export class PaymentWithRelationsDto extends PaymentDto {
    @ApiPropertyOptional({ type: PatientDto, nullable: true })
    patient: PatientDto | null;

    @ApiPropertyOptional({ type: UserDto, nullable: true })
    doctor: UserDto | null;

    @ApiPropertyOptional({ type: VisitDto, nullable: true })
    visit: VisitDto | null;
}

export class InventoryItemDto {
    @ApiProperty({ example: 50001 })
    id: number;

    @ApiProperty({ example: 1 })
    clinicId: number;

    @ApiProperty({ example: "Composite resin" })
    name: string;

    @ApiPropertyOptional({ example: "A2 shade", nullable: true })
    description: string | null;

    @ApiProperty({ example: 10 })
    quantity: number;

    @ApiProperty({ example: "25000", description: "Decimal as string" })
    unitPrice: string;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    createdAt: string;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    updatedAt: string;
}

export class InventoryMovementDto {
    @ApiProperty({ example: 60001 })
    id: number;

    @ApiProperty({ example: 1 })
    clinicId: number;

    @ApiProperty({ example: 50001 })
    itemId: number;

    @ApiProperty({ example: "IN", description: "IN or OUT" })
    movementType: string;

    @ApiProperty({ example: 5 })
    quantity: number;

    @ApiPropertyOptional({ example: "Restock", nullable: true })
    notes: string | null;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    createdAt: string;
}

export class InventoryMovementWithItemDto extends InventoryMovementDto {
    @ApiProperty({ type: InventoryItemDto })
    item: InventoryItemDto;
}

export class ExpenseDto {
    @ApiProperty({ example: 70001 })
    id: number;

    @ApiProperty({ example: 1 })
    clinicId: number;

    @ApiProperty({ example: "Gloves purchase" })
    description: string;

    @ApiProperty({ example: "120000", description: "Decimal as string" })
    amount: string;

    @ApiPropertyOptional({ example: "supplies", nullable: true })
    category: string | null;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    createdAt: string;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    updatedAt: string;
}

export class InventoryConsumptionDto {
    @ApiProperty({ example: 80001 })
    id: number;

    @ApiProperty({ example: 30001 })
    visitId: number;

    @ApiProperty({ example: 50001 })
    itemId: number;

    @ApiPropertyOptional({ example: 20001, nullable: true })
    doctorId: number | null;

    @ApiProperty({ example: 2 })
    quantity: number;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    createdAt: string;
}

export class InventoryConsumptionWithItemDto extends InventoryConsumptionDto {
    @ApiProperty({ type: InventoryItemDto })
    item: InventoryItemDto;
}

export class InventoryConsumptionWithRelationsDto extends InventoryConsumptionDto {
    @ApiProperty({ type: InventoryItemDto })
    item: InventoryItemDto;

    @ApiPropertyOptional({ type: UserDto, nullable: true })
    doctor: UserDto | null;

    @ApiProperty({ type: VisitDto })
    visit: VisitDto;
}

export class VisitServiceDto {
    @ApiProperty({ example: 90001 })
    id: number;

    @ApiProperty({ example: 1 })
    clinicId: number;

    @ApiProperty({ example: 30001 })
    visitId: number;

    @ApiProperty({ example: 10001 })
    patientId: number;

    @ApiPropertyOptional({ example: 20001, nullable: true })
    doctorId: number | null;

    @ApiPropertyOptional({ example: 11, nullable: true })
    toothId: number | null;

    @ApiProperty({ example: "Cleaning" })
    serviceName: string;

    @ApiProperty({ example: "100000", description: "Decimal as string" })
    price: string;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    createdAt: string;
}

export class OdontogramDto {
    @ApiProperty({ example: 100001 })
    id: number;

    @ApiProperty({ example: 1 })
    clinicId: number;

    @ApiProperty({ example: 10001 })
    patientId: number;

    @ApiProperty({ example: 30001 })
    visitId: number;

    @ApiProperty({ type: "object", additionalProperties: true })
    data: Record<string, unknown>;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    createdAt: string;

    @ApiProperty({ example: "2026-03-17T00:00:00.000Z", format: "date-time" })
    updatedAt: string;
}

export class VisitDetailsDto extends VisitWithRelationsDto {
    @ApiProperty({ type: [PaymentDto] })
    payments: PaymentDto[];

    @ApiProperty({ type: [VisitServiceDto] })
    services: VisitServiceDto[];

    @ApiProperty({ type: [InventoryConsumptionWithItemDto] })
    consumptions: InventoryConsumptionWithItemDto[];

    @ApiPropertyOptional({ type: OdontogramDto, nullable: true })
    odontogram: OdontogramDto | null;
}
