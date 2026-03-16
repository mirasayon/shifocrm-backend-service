import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class ListConsumptionsQuery {
    @ApiPropertyOptional({ example: 30001 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    visitId?: number;
}
