import { IsBoolean, IsEmail, IsNotEmpty, IsObject, IsOptional, IsString, MinLength } from "class-validator";

export class CreateDoctorDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsOptional()
    @IsString()
    specialization?: string;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @IsOptional()
    @IsObject()
    workSchedule?: Record<string, unknown>;
}

