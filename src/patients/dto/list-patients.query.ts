import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class ListPatientsQuery {
    @ApiPropertyOptional({ example: 123 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number;

    @ApiPropertyOptional({ example: "active" })
    @IsOptional()
    @IsString()
    status?: string;
}
