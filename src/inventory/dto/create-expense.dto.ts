import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateExpenseDto {
    @ApiProperty({ example: "Office rent" })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: 100000 })
    @Type(() => Number)
    @IsNumber()
    amount: number;

    @ApiPropertyOptional({ example: "rent", nullable: true })
    @IsOptional()
    @IsString()
    category?: string | null;
}
