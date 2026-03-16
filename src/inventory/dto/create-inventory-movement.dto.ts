import { Type } from "class-transformer";
import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateInventoryMovementDto {
    @ApiProperty({ example: 1 })
    @Type(() => Number)
    @IsInt()
    itemId: number;

    @ApiProperty({ enum: ["IN", "OUT"], example: "IN" })
    @IsString()
    @IsIn(["IN", "OUT"])
    movementType: "IN" | "OUT";

    @ApiProperty({ example: 5, minimum: 1 })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    quantity: number;

    @ApiPropertyOptional({ example: "Initial stock" })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    notes?: string;
}
