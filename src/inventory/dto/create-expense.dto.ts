import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateExpenseDto {
    @IsString()
    @IsNotEmpty()
    description: string;

    @Type(() => Number)
    @IsNumber()
    amount: number;

    @IsOptional()
    @IsString()
    category?: string | null;
}

