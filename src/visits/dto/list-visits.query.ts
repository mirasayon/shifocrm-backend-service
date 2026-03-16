import { Type } from "class-transformer";
import { IsDateString, IsEnum, IsInt, IsOptional } from "class-validator";
import { VisitStatus } from "../../prisma/client/client.js";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class ListVisitsQuery {
    @ApiPropertyOptional({ example: 10001 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    patientId?: number;

    @ApiPropertyOptional({ example: 20001 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number;

    @ApiPropertyOptional({ enum: VisitStatus, example: VisitStatus.PENDING })
    @IsOptional()
    @IsEnum(VisitStatus)
    status?: VisitStatus;

    @ApiPropertyOptional({ example: "2026-03-17" })
    @IsOptional()
    @IsDateString()
    date?: string;

    @ApiPropertyOptional({ example: "2026-03-01" })
    @IsOptional()
    @IsDateString()
    startDate?: string;

    @ApiPropertyOptional({ example: "2026-03-31" })
    @IsOptional()
    @IsDateString()
    endDate?: string;
}
