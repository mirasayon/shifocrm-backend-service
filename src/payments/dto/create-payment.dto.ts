import { Type } from "class-transformer";
import { IsDateString, IsInt, IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePaymentDto {
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

    @ApiPropertyOptional({ example: 20001, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @ApiProperty({ example: 50000, description: "Payment amount (can be negative for adjustments/refunds)" })
    @Type(() => Number)
    @IsNumber()
    amount: number;

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
