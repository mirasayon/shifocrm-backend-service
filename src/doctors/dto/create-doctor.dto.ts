import { IsBoolean, IsEmail, IsNotEmpty, IsObject, IsOptional, IsString, MinLength } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateDoctorDto {
    @ApiProperty({ example: "Dr. John Doe" })
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty({ example: "+998901234567" })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiPropertyOptional({ example: "doctor@example.com" })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({ example: "password123", minLength: 6 })
    @IsString()
    @MinLength(6)
    password: string;

    @ApiPropertyOptional({ example: "Dentist" })
    @IsOptional()
    @IsString()
    specialization?: string;

    @ApiPropertyOptional({ example: true })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @ApiPropertyOptional({ type: "object", additionalProperties: true, description: "Arbitrary JSON schedule" })
    @IsOptional()
    @IsObject()
    workSchedule?: Record<string, unknown>;
}
