import { IsBoolean, IsInt, IsOptional, IsString, Min } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateClinicDto {
    @ApiPropertyOptional({ example: "Shifo Clinic" })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ example: "https://example.com/logo.png" })
    @IsOptional()
    @IsString()
    logoUrl?: string;

    @ApiPropertyOptional({ example: 4, minimum: 1 })
    @IsOptional()
    @IsInt()
    @Min(1)
    maxDoctors?: number;

    @ApiPropertyOptional({ example: true })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}
