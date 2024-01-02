import {IsEmail, IsEmpty, IsNotEmpty, IsString} from 'class-validator';

export class CreateAdminDto{

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    phonenumber: string;

    @IsString()
    @IsNotEmpty()
    dob: string;

    @IsString()
    @IsNotEmpty()
    gender: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    confirmpassword: string;

    @IsString()
    @IsNotEmpty()
    role: string;

    @IsString()
    @IsNotEmpty()
    type: string;
}