import { IsObject } from "class-validator";

export class UpdateOdontogramDto {
    @IsObject()
    data: any;
}
