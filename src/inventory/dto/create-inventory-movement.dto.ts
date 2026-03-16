import { Type } from "class-transformer";
import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateInventoryMovementDto {
    @Type(() => Number)
    @IsInt()
    itemId: number;

    @IsString()
    @IsIn(["IN", "OUT"])
    movementType: "IN" | "OUT";

    @Type(() => Number)
    @IsInt()
    @Min(1)
    quantity: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    notes?: string;
}

