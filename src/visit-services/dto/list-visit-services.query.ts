import { Transform, Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class ListVisitServicesQuery {
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

    @ApiPropertyOptional({ example: "30001,30002", description: "Comma-separated list of visit ids" })
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
