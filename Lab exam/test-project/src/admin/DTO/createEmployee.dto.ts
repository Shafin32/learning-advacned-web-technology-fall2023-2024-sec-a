import { IsString, isNumber, isString, isStrongPassword } from "class-validator";

export class CreateEmployeeDto{

    @IsString()
    eName: string;

    @IsString()
    ePhone: string;

    @IsString()
    eUname: string;

    @IsString()
    ePass: string;

}