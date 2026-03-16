import { Type } from "class-transformer";
import { IsDateString, IsInt, IsOptional, IsString } from "class-validator";

export class ListPaymentsQuery {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    patientId?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    visitId?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number;

    @IsOptional()
    @IsString()
    paymentType?: string;

    @IsOptional()
    @IsDateString()
    startDate?: string;

    @IsOptional()
    @IsDateString()
    endDate?: string;
}

