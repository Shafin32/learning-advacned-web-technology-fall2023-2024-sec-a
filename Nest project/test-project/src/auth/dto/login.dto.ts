import { IsString, IsNumber, IsEmail } from "class-validator";

export class LoginUserDto{

    @IsString()
    type: string;
    
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}