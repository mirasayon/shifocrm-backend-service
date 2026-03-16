import { Type } from "class-transformer";
import { IsDateString, IsEnum, IsInt, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { VisitStatus } from "../../prisma/client/client.js";

export class CreateVisitDto {
    @Type(() => Number)
    @IsInt()
    patientId: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @IsOptional()
    @IsDateString()
    date?: string;

    @IsOptional()
    @IsString()
    startTime?: string | null;

    @IsOptional()
    @IsString()
    endTime?: string | null;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    durationMinutes?: number | null;

    @IsOptional()
    @IsString()
    notes?: string | null;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    price?: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    paidAmount?: number;
}

export class UpdateVisitDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    patientId?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @IsOptional()
    @IsDateString()
    date?: string;

    @IsOptional()
    @IsString()
    startTime?: string | null;

    @IsOptional()
    @IsString()
    endTime?: string | null;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    durationMinutes?: number | null;

    @IsOptional()
    @IsString()
    notes?: string | null;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    price?: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    paidAmount?: number;

    @IsOptional()
    @IsEnum(VisitStatus)
    status?: VisitStatus;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    debtAmount?: number | null;
}
