import {IsNotEmpty, IsString} from 'class-validator';

export class CreateTemplateDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    features: string;
    
    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    url: string;
}