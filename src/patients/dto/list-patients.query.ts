import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class ListPatientsQuery {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    doctorId?: number;

    @IsOptional()
    @IsString()
    status?: string;
}

