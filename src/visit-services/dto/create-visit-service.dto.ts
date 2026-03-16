import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateVisitServiceDto {
    @Type(() => Number)
    @IsInt()
    visitId: number;

    @Type(() => Number)
    @IsInt()
    patientId: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    toothId?: number | null;

    @IsString()
    @IsNotEmpty()
    serviceName: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    price?: number;
}

