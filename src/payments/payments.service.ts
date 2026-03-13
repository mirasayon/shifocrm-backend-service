import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {
    constructor(private prisma: PrismaService) {}

    async create(clinicId: number, dto: any) {
        return this.prisma.$transaction(async (tx) => {
            // 1. Create the payment record
            const payment = await tx.payment.create({
                data: {
                    clinicId,
                    visitId: dto.visitId,
                    patientId: dto.patientId,
                    doctorId: dto.doctorId,
                    amount: dto.amount,
                    method: dto.method,
                    note: dto.note,
                    paymentType: dto.paymentType || 'payment',
                },
            });

            // 2. If linked to a visit, update the visit's paid/debt totals
            if (dto.visitId) {
                const visit = await tx.visit.findUnique({ where: { id: dto.visitId } });
                if (visit) {
                    const newPaidAmount = Number(visit.paidAmount || 0) + Number(dto.amount);
                    const price = Number(visit.price || 0);
                    const newDebt = price - newPaidAmount;

                    await tx.visit.update({
                        where: { id: dto.visitId },
                        data: {
                            paidAmount: newPaidAmount,
                            debtAmount: newDebt > 0 ? newDebt : null,
                            status: newDebt <= 0 ? 'COMPLETED_PAID' : 'COMPLETED_DEBT',
                        },
                    });
                }
            }

            return payment;
        });
    }

    async getClinicPayments(clinicId: number) {
        return this.prisma.payment.findMany({
            where: { clinicId },
            include: { patient: true, doctor: true },
            orderBy: { createdAt: 'desc' },
        });
    }

    findAll() {
        // return all payments; replace with real implementation

        return [];
    }
}
