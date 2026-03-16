import { Transform, Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class ListVisitServicesQuery {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    patientId?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    visitId?: number;

    @IsOptional()
    @Transform(({ value }) => {
        if (Array.isArray(value)) return value.map((v) => Number(v)).filter(Number.isFinite);
        if (typeof value !== "string") return [];
        return value
            .split(",")
            .map((v) => Number(v.trim()))
            .filter(Number.isFinite);
    })
    visitIds?: number[];
}

