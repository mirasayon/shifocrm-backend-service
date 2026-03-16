import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class ConsumeMaterialDto {
    @Type(() => Number)
    @IsInt()
    itemId: number;

    @Type(() => Number)
    @IsInt()
    visitId: number;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    quantity: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    note?: string;
}

