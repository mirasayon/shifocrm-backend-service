import { Type } from "class-transformer";
import { IsDateString, IsInt, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdatePaymentDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    visitId?: number | null;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    patientId?: number | null;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    amount?: number;

    @IsOptional()
    @IsString()
    paymentType?: string;

    @IsOptional()
    @IsString()
    method?: string | null;

    @IsOptional()
    @IsString()
    note?: string | null;

    @IsOptional()
    @IsDateString()
    paidAt?: string;
}

