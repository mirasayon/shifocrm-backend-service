import { Type } from "class-transformer";
import { IsInt, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateInventoryItemDto {
    @ApiPropertyOptional({ example: "Composite resin" })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ example: "A2 shade", nullable: true })
    @IsOptional()
    @IsString()
    description?: string | null;

    @ApiPropertyOptional({ example: 10, minimum: 0 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(0)
    quantity?: number;

    @ApiPropertyOptional({ example: 25000, minimum: 0 })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    unitPrice?: number;
}
