import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetOrCreateOdontogramDto {
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
}

