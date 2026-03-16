import { Type } from "class-transformer";
import { IsDateString, IsEnum, IsInt, IsOptional } from "class-validator";
import { VisitStatus } from "../../prisma/client/client.js";

export class ListVisitsQuery {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    patientId?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number;

    @IsOptional()
    @IsEnum(VisitStatus)
    status?: VisitStatus;

    @IsOptional()
    @IsDateString()
    date?: string;

    @IsOptional()
    @IsDateString()
    startDate?: string;

    @IsOptional()
    @IsDateString()
    endDate?: string;
}

