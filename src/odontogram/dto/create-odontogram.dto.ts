import { Type } from "class-transformer";
import { IsInt, IsObject, IsOptional } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateOdontogramDto {
    @ApiProperty({ example: 10001 })
    @Type(() => Number)
    @IsInt()
    patientId: number;

    @ApiProperty({ example: 30001 })
    @Type(() => Number)
    @IsInt()
    visitId: number;

    @ApiPropertyOptional({ example: 20001, nullable: true })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number | null;

    @ApiPropertyOptional({ type: "object", additionalProperties: true, nullable: true })
    @IsOptional()
    @IsObject()
    data?: any;
}
