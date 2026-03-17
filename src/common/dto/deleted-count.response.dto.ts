import { ApiProperty } from "@nestjs/swagger";

export class DeletedCountResponseDto {
    @ApiProperty({ example: 1 })
    deleted: number;
}
