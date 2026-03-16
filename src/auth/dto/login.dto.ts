import { IsString, IsNotEmpty, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({ example: "admin@shifo.com", description: "Email or phone number" })
    @IsString()
    @IsNotEmpty({ message: "Email yoki telefon raqami kiritilishi shart" })
    identifier: string;

    @ApiProperty({ example: "admin123456" })
    @IsString()
    @IsNotEmpty({ message: "Parol kiritilishi shart" })
    @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" })
    password: string;
}
