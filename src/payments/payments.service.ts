import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { VisitStatus } from "../prisma/client/client.js";
import { safeUserSelect } from "../common/prisma-selects.js";
import type { CreatePaymentDto } from "./dto/create-payment.dto.js";
import type { ListPaymentsQuery } from "./dto/list-payments.query.js";
import type { UpdatePaymentDto } from "./dto/update-payment.dto.js";

@Injectable()
export class PaymentsService {
    constructor(private prisma: PrismaService) {}

    async list(clinicId: number | null | undefined, query: ListPaymentsQuery) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        const where: any = { clinicId };
        if (query.patientId) where.patientId = query.patientId;
        if (query.visitId) where.visitId = query.visitId;
        if (query.doctorId) where.doctorId = query.doctorId;
        if (query.paymentType) where.paymentType = query.paymentType;

        if (query.startDate || query.endDate) {
            const paidAt: any = {};
            if (query.startDate) paidAt.gte = new Date(this.normalizeStartDate(query.startDate));
            if (query.endDate) paidAt.lte = new Date(this.normalizeEndDate(query.endDate));
            where.paidAt = paidAt;
        }

        return this.prisma.payment.findMany({
            where,
            include: { patient: true, doctor: { select: safeUserSelect }, visit: true },
            orderBy: { paidAt: "desc" },
        });
    }

    async create(clinicId: number | null | undefined, dto: CreatePaymentDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        return this.prisma.$transaction(async (tx) => {
            let resolvedPatientId = dto.patientId ?? null;
            let resolvedDoctorId = dto.doctorId ?? null;
            let resolvedVisitId = dto.visitId ?? null;

            if (resolvedVisitId) {
                const visit = await tx.visit.findFirst({
                    where: { id: resolvedVisitId, clinicId },
                    select: { id: true, patientId: true, doctorId: true },
                });
                if (!visit) throw new NotFoundException("Visit not found");
                if (resolvedPatientId && resolvedPatientId !== visit.patientId) throw new BadRequestException("patientId does not match visit");

                resolvedPatientId = resolvedPatientId ?? visit.patientId;
                resolvedDoctorId = resolvedDoctorId ?? visit.doctorId ?? null;
            }

            if (resolvedPatientId) {
                const patient = await tx.patient.findFirst({
                    where: { id: resolvedPatientId, clinicId },
                    select: { id: true },
                });
                if (!patient) throw new NotFoundException("Patient not found");
            }

            if (resolvedDoctorId) {
                const doctor = await tx.user.findFirst({
                    where: { id: resolvedDoctorId, clinicId },
                    select: { id: true },
                });
                if (!doctor) throw new NotFoundException("Doctor not found");
            }

            const payment = await tx.payment.create({
                data: {
                    clinicId,
                    visitId: resolvedVisitId,
                    patientId: resolvedPatientId,
                    doctorId: resolvedDoctorId,
                    amount: dto.amount,
                    method: dto.method ?? null,
                    note: dto.note ?? null,
                    paymentType: dto.paymentType ?? "payment",
                    paidAt: dto.paidAt ? new Date(dto.paidAt) : undefined,
                },
                include: { patient: true, doctor: { select: safeUserSelect }, visit: true },
            });

            if (payment.visitId) {
                await this.recalculateVisitBilling(tx, clinicId, payment.visitId);
            }

            return payment;
        });
    }

    async update(clinicId: number | null | undefined, id: number, dto: UpdatePaymentDto) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        return this.prisma.$transaction(async (tx) => {
            const existing = await tx.payment.findFirst({
                where: { id, clinicId },
                select: { id: true, visitId: true, patientId: true },
            });
            if (!existing) throw new NotFoundException("Payment not found");

            const nextVisitId = dto.visitId === undefined ? existing.visitId : dto.visitId ?? null;
            const nextPatientId = dto.patientId === undefined ? existing.patientId : dto.patientId ?? null;
            const nextDoctorId = dto.doctorId === undefined ? undefined : dto.doctorId ?? null;

            if (nextVisitId) {
                const visit = await tx.visit.findFirst({
                    where: { id: nextVisitId, clinicId },
                    select: { id: true, patientId: true },
                });
                if (!visit) throw new NotFoundException("Visit not found");
                if (nextPatientId && nextPatientId !== visit.patientId) throw new BadRequestException("patientId does not match visit");
            }

            if (nextPatientId) {
                const patient = await tx.patient.findFirst({
                    where: { id: nextPatientId, clinicId },
                    select: { id: true },
                });
                if (!patient) throw new NotFoundException("Patient not found");
            }

            if (nextDoctorId) {
                const doctor = await tx.user.findFirst({
                    where: { id: nextDoctorId, clinicId },
                    select: { id: true },
                });
                if (!doctor) throw new NotFoundException("Doctor not found");
            }

            const updated = await tx.payment.update({
                where: { id },
                data: {
                    visitId: dto.visitId === undefined ? undefined : dto.visitId ?? null,
                    patientId: dto.patientId === undefined ? undefined : dto.patientId ?? null,
                    doctorId: dto.doctorId === undefined ? undefined : dto.doctorId ?? null,
                    amount: dto.amount,
                    paymentType: dto.paymentType,
                    method: dto.method === undefined ? undefined : dto.method ?? null,
                    note: dto.note === undefined ? undefined : dto.note ?? null,
                    paidAt: dto.paidAt ? new Date(dto.paidAt) : undefined,
                },
                include: { patient: true, doctor: { select: safeUserSelect }, visit: true },
            });

            const affectedVisitIds = new Set<number>();
            if (existing.visitId) affectedVisitIds.add(existing.visitId);
            if (updated.visitId) affectedVisitIds.add(updated.visitId);

            for (const visitId of affectedVisitIds) {
                await this.recalculateVisitBilling(tx, clinicId, visitId);
            }

            return updated;
        });
    }

    async delete(clinicId: number | null | undefined, id: number) {
        if (!clinicId) throw new BadRequestException("User is not associated with a clinic");

        return this.prisma.$transaction(async (tx) => {
            const existing = await tx.payment.findFirst({
                where: { id, clinicId },
                select: { id: true, visitId: true },
            });
            if (!existing) throw new NotFoundException("Payment not found");

            await tx.payment.delete({ where: { id } });

            if (existing.visitId) {
                await this.recalculateVisitBilling(tx, clinicId, existing.visitId);
            }

            return { id };
        });
    }

    private normalizeStartDate(input: string) {
        const s = input.includes("T") ? input : `${input}T00:00:00.000Z`;
        return s;
    }

    private normalizeEndDate(input: string) {
        const s = input.includes("T") ? input : `${input}T23:59:59.999Z`;
        return s;
    }

    private async recalculateVisitBilling(tx: any, clinicId: number, visitId: number) {
        const visit = await tx.visit.findFirst({
            where: { id: visitId, clinicId },
            select: { id: true, price: true, status: true },
        });
        if (!visit) return;

        const agg = await tx.payment.aggregate({
            where: { clinicId, visitId },
            _sum: { amount: true },
        });
        const totalPaid = Number(agg._sum.amount || 0);
        const price = Number(visit.price || 0);
        const debt = price - totalPaid;

        const statusLocked = [VisitStatus.CANCELLED, VisitStatus.NO_SHOW, VisitStatus.ARCHIVED].includes(visit.status);
        const nextStatus = statusLocked ? visit.status : debt <= 0 ? VisitStatus.COMPLETED_PAID : VisitStatus.COMPLETED_DEBT;

        await tx.visit.update({
            where: { id: visitId },
            data: {
                paidAmount: totalPaid,
                debtAmount: debt > 0 ? debt : null,
                status: nextStatus,
            },
        });
    }
}
