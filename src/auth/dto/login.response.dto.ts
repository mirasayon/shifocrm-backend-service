import { ApiProperty } from "@nestjs/swagger";
import type { Role } from "../../prisma/client/client.js";

class LoginUserDto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: "Super Admin" })
    fullName: string;

    @ApiProperty({ example: "SUPER_ADMIN" })
    role: Role;

    @ApiProperty({ example: 1 })
    clinicId: number | null;
}

export class LoginResponseDto {
    @ApiProperty({ example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." })
    access_token: string;

    @ApiProperty({ type: LoginUserDto })
    user: LoginUserDto;
}

