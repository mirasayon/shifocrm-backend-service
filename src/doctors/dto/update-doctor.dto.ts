import { IsBoolean, IsEmail, IsObject, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateDoctorDto {
    @IsOptional()
    @IsString()
    fullName?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsEmail()
    email?: string | null;

    @IsOptional()
    @MinLength(6)
    password?: string;

    @IsOptional()
    @IsString()
    specialization?: string | null;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @IsOptional()
    @IsObject()
    workSchedule?: Record<string, unknown> | null;
}

