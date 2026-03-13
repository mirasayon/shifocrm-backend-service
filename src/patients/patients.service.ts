// src/patients/patients.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  async findAll(clinicId: number) {
    return this.prisma.patient.findMany({
      where: { clinicId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async create(clinicId: number, dto: any) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Create Patient
      const patient = await tx.patient.create({
        data: {
          clinicId,
          fullName: dto.fullName,
          phone: dto.phone,
          birthDate: dto.birthDate ? new Date(dto.birthDate) : null,
          gender: dto.gender,
          address: dto.address,
          doctorId: dto.doctorId,
          status: dto.status || 'active',
          notes: dto.notes
        }
      });

      // 2. Auto-create first visit if requested (matches frontend logic)
      if (dto.createFirstVisit) {
        await tx.visit.create({
          data: {
            clinicId,
            patientId: patient.id,
            doctorId: dto.doctorId,
            status: 'PENDING',
            notes: 'Birinchi tashrif (avtomatik yaratilgan)'
          }
        });
      }

      return patient;
    });
  }
}