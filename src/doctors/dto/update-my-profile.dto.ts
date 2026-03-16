import { IsEmail, IsObject, IsOptional, IsString } from "class-validator";

export class UpdateMyProfileDto {
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
    @IsString()
    specialization?: string | null;

    @IsOptional()
    @IsObject()
    workSchedule?: Record<string, unknown> | null;
}

