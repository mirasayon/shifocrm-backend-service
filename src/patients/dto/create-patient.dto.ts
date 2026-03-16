import { Type } from "class-transformer";
import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePatientDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsOptional()
    @IsDateString()
    birthDate?: string | null;

    @IsOptional()
    @IsString()
    gender?: string | null;

    @IsOptional()
    @IsString()
    address?: string | null;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @IsOptional()
    @IsString()
    status?: string;

    @IsOptional()
    @IsString()
    notes?: string | null;

    @IsOptional()
    @IsDateString()
    lastVisit?: string | null;

    @IsOptional()
    @IsDateString()
    nextAppointment?: string | null;

    @IsOptional()
    @IsBoolean()
    createFirstVisit?: boolean;
}

