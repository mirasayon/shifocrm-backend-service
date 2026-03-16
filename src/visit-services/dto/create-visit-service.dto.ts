import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateVisitServiceDto {
    @ApiProperty({ example: 30001 })
    @Type(() => Number)
    @IsInt()
    visitId: number;

    @ApiProperty({ example: 10001 })
    @Type(() => Number)
    @IsInt()
    patientId: number;

    @ApiPropertyOptional({ example: 20001, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @ApiPropertyOptional({ example: 11, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    toothId?: number | null;

    @ApiProperty({ example: "Filling" })
    @IsString()
    @IsNotEmpty()
    serviceName: string;

    @ApiPropertyOptional({ example: 50000, minimum: 0 })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    price?: number;
}
