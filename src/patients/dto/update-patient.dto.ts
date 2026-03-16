import { Type } from "class-transformer";
import { IsBoolean, IsDateString, IsInt, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdatePatientDto {
    @ApiPropertyOptional({ example: "Patient Name" })
    @IsOptional()
    @IsString()
    fullName?: string;

    @ApiPropertyOptional({ example: "+998901234567" })
    @IsOptional()
    @IsString()
    phone?: string;

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

    @ApiPropertyOptional({ example: false, description: "Ignored on update (kept for compatibility)" })
    @IsOptional()
    @IsBoolean()
    createFirstVisit?: boolean;
}
