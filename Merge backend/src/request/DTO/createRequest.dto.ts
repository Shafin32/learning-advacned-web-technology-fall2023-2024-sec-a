import { IsString } from "class-validator";

export class CreateRequestDto{

    @IsString()
    tmpname: string;

    @IsString()
    catagory: string;


    @IsString()
    description: string;


}