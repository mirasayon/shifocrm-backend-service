import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ChangePasswordDto {
    @ApiProperty({ example: "old-password" })
    @IsString()
    @IsNotEmpty()
    currentPassword: string;

    @ApiProperty({ example: "new-password-123" })
    @IsString()
    @MinLength(6)
    newPassword: string;
}
