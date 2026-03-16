import { IsBoolean, IsEmail, IsObject, IsOptional, IsString, MinLength } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateDoctorDto {
    @ApiPropertyOptional({ example: "Dr. Jane Doe" })
    @IsOptional()
    @IsString()
    fullName?: string;

    @ApiPropertyOptional({ example: "+998901234567" })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiPropertyOptional({ example: "doctor@example.com", nullable: true })
    @IsOptional()
    @IsEmail()
    email?: string | null;

    @ApiPropertyOptional({ example: "newpassword123", minLength: 6 })
    @IsOptional()
    @MinLength(6)
    password?: string;

    @ApiPropertyOptional({ example: "Dentist", nullable: true })
    @IsOptional()
    @IsString()
    specialization?: string | null;

    @ApiPropertyOptional({ example: true })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @ApiPropertyOptional({ type: "object", additionalProperties: true, nullable: true })
    @IsOptional()
    @IsObject()
    workSchedule?: Record<string, unknown> | null;
}
