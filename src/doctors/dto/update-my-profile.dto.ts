import { IsEmail, IsObject, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateMyProfileDto {
    @ApiPropertyOptional({ example: "Dr. John Doe" })
    @IsOptional()
    @IsString()
    fullName?: string;

    @ApiPropertyOptional({ example: "+998901234567" })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiPropertyOptional({ example: "doctor@example.com", nullable: true })
    @IsOptional()
    @IsEmail()
    email?: string | null;

    @ApiPropertyOptional({ example: "Dentist", nullable: true })
    @IsOptional()
    @IsString()
    specialization?: string | null;

    @ApiPropertyOptional({ type: "object", additionalProperties: true, nullable: true })
    @IsOptional()
    @IsObject()
    workSchedule?: Record<string, unknown> | null;
}
