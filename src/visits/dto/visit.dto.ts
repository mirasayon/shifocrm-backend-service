import { Type } from "class-transformer";
import { IsDateString, IsEnum, IsInt, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { VisitStatus } from "../../prisma/client/client.js";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateVisitDto {
    @ApiProperty({ example: 10001 })
    @Type(() => Number)
    @IsInt()
    patientId: number;

    @ApiPropertyOptional({ example: 20001, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @ApiPropertyOptional({ example: "2026-03-17", description: "Visit date (YYYY-MM-DD or ISO)" })
    @IsOptional()
    @IsDateString()
    date?: string;

    @ApiPropertyOptional({ example: "09:00", nullable: true })
    @IsOptional()
    @IsString()
    startTime?: string | null;

    @ApiPropertyOptional({ example: "09:30", nullable: true })
    @IsOptional()
    @IsString()
    endTime?: string | null;

    @ApiPropertyOptional({ example: 30, minimum: 1, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    durationMinutes?: number | null;

    @ApiPropertyOptional({ example: "Notes...", nullable: true })
    @IsOptional()
    @IsString()
    notes?: string | null;

    @ApiPropertyOptional({ example: 100000 })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    price?: number;

    @ApiPropertyOptional({ example: 50000 })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    paidAmount?: number;
}

export class UpdateVisitDto {
    @ApiPropertyOptional({ example: 10001 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    patientId?: number;

    @ApiPropertyOptional({ example: 20001, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @ApiPropertyOptional({ example: "2026-03-17" })
    @IsOptional()
    @IsDateString()
    date?: string;

    @ApiPropertyOptional({ example: "09:00", nullable: true })
    @IsOptional()
    @IsString()
    startTime?: string | null;

    @ApiPropertyOptional({ example: "09:30", nullable: true })
    @IsOptional()
    @IsString()
    endTime?: string | null;

    @ApiPropertyOptional({ example: 30, minimum: 1, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    durationMinutes?: number | null;

    @ApiPropertyOptional({ example: "Notes...", nullable: true })
    @IsOptional()
    @IsString()
    notes?: string | null;

    @ApiPropertyOptional({ example: 100000 })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    price?: number;

    @ApiPropertyOptional({ example: 50000 })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    paidAmount?: number;

    @ApiPropertyOptional({ enum: VisitStatus, example: VisitStatus.PENDING })
    @IsOptional()
    @IsEnum(VisitStatus)
    status?: VisitStatus;

    @ApiPropertyOptional({ example: 50000, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    debtAmount?: number | null;
}
