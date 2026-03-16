import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateInventoryItemDto {
    @ApiProperty({ example: "Composite resin" })
    @IsString()
    @IsNotEmpty()
    name: string;

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

    @ApiProperty({ example: 25000, minimum: 0 })
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    unitPrice: number;
}
