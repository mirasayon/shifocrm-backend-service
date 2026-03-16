import { IsBoolean, IsInt, IsOptional, IsString, Min } from "class-validator";

export class UpdateClinicDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    logoUrl?: string;

    @IsOptional()
    @IsInt()
    @Min(1)
    maxDoctors?: number;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}

