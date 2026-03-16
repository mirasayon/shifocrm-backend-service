import { Type } from "class-transformer";
import { IsInt, IsObject, IsOptional } from "class-validator";

export class CreateOdontogramDto {
    @Type(() => Number)
    @IsInt()
    patientId: number;

    @Type(() => Number)
    @IsInt()
    visitId: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @IsOptional()
    @IsObject()
    data?: any;
}
