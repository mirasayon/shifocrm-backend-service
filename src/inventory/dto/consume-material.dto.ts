import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ConsumeMaterialDto {
    @ApiProperty({ example: 1 })
    @Type(() => Number)
    @IsInt()
    itemId: number;

    @ApiProperty({ example: 30001 })
    @Type(() => Number)
    @IsInt()
    visitId: number;

    @ApiProperty({ example: 1, minimum: 1 })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    quantity: number;

    @ApiPropertyOptional({ example: "Used during visit" })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    note?: string;
}
