import { IsObject } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateOdontogramDto {
    @ApiProperty({ type: "object", additionalProperties: true })
    @IsObject()
    data: Record<string, unknown>;
}
