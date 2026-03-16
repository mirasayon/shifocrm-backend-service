import { Type } from "class-transformer";
import { IsDateString, IsInt, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class ListPaymentsQuery {
    @ApiPropertyOptional({ example: 10001 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    patientId?: number;

    @ApiPropertyOptional({ example: 30001 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    visitId?: number;

    @ApiPropertyOptional({ example: 20001 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number;

    @ApiPropertyOptional({ example: "payment" })
    @IsOptional()
    @IsString()
    paymentType?: string;

    @ApiPropertyOptional({ example: "2026-03-01" })
    @IsOptional()
    @IsDateString()
    startDate?: string;

    @ApiPropertyOptional({ example: "2026-03-31" })
    @IsOptional()
    @IsDateString()
    endDate?: string;
}
