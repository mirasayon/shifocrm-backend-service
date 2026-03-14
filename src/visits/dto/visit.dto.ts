import { IsNumber, IsOptional, IsString, IsEnum, IsArray } from "class-validator";
import { VisitStatus } from "../../prisma/client/client.js";

export class CreateVisitDto {
    @IsNumber()
    patientId: number;

    @IsOptional()
    @IsNumber()
    doctorId?: number;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsNumber()
    paidAmount?: number;
}

export class UpdateVisitDto extends CreateVisitDto {
    @IsOptional()
    @IsEnum(VisitStatus)
    status?: VisitStatus;

    @IsOptional()
    @IsNumber()
    debtAmount?: number;
}
