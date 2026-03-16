import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class ListConsumptionsQuery {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    visitId?: number;
}

