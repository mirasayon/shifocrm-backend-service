import { Type } from "class-transformer";
import { IsDateString, IsInt, IsNumber, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdatePaymentDto {
    @ApiPropertyOptional({ example: 30001, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    visitId?: number | null;

    @ApiPropertyOptional({ example: 10001, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    patientId?: number | null;

    @ApiPropertyOptional({ example: 20001, nullable: true, description: "Doctor id (must belong to the same clinic and have DOCTOR role)" })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @ApiPropertyOptional({ example: 50000 })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    amount?: number;

    @ApiPropertyOptional({ example: "payment" })
    @IsOptional()
    @IsString()
    paymentType?: string;

    @ApiPropertyOptional({ example: "cash", nullable: true })
    @IsOptional()
    @IsString()
    method?: string | null;

    @ApiPropertyOptional({ example: "Note...", nullable: true })
    @IsOptional()
    @IsString()
    note?: string | null;

    @ApiPropertyOptional({ example: "2026-03-17T12:00:00Z" })
    @IsOptional()
    @IsDateString()
    paidAt?: string;
}
