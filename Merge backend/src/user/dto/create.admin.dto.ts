import {IsEmail, IsEmpty, IsNotEmpty, IsString} from 'class-validator';

export class CreateAdminDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    role: string;

    @IsString()
    @IsNotEmpty()
    type: string;
}