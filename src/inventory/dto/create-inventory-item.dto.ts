import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateInventoryItemDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    description?: string | null;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(0)
    quantity?: number;

    @Type(() => Number)
    @IsNumber()
    @Min(0)
    unitPrice: number;
}

