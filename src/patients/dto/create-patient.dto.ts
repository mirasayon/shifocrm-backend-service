import { Type } from "class-transformer";
import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePatientDto {
    @ApiProperty({ example: "Patient Name" })
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty({ example: "+998901234567" })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiPropertyOptional({ example: "1990-01-01", nullable: true })
    @IsOptional()
    @IsDateString()
    birthDate?: string | null;

    @ApiPropertyOptional({ example: "male", nullable: true })
    @IsOptional()
    @IsString()
    gender?: string | null;

    @ApiPropertyOptional({ example: "Tashkent", nullable: true })
    @IsOptional()
    @IsString()
    address?: string | null;

    @ApiPropertyOptional({ example: 123, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @ApiPropertyOptional({ example: "active" })
    @IsOptional()
    @IsString()
    status?: string;

    @ApiPropertyOptional({ example: "Notes...", nullable: true })
    @IsOptional()
    @IsString()
    notes?: string | null;

    @ApiPropertyOptional({ example: "2026-03-17", nullable: true })
    @IsOptional()
    @IsDateString()
    lastVisit?: string | null;

    @ApiPropertyOptional({ example: "2026-03-20", nullable: true })
    @IsOptional()
    @IsDateString()
    nextAppointment?: string | null;

    @ApiPropertyOptional({ example: true, description: "If true, creates the first pending visit automatically" })
    @IsOptional()
    @IsBoolean()
    createFirstVisit?: boolean;
}
