import { IsString, IsNumber, IsEmail } from "class-validator";

export class CreateUserDto{

    @IsString()
    name: string;

    @IsString()
    type: string;
    
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}