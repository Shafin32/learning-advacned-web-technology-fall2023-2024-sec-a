import { IsString } from "class-validator";

export class UpdateRequestDto{

    @IsString()
    tmpname: string;

    @IsString()
    catagory: string;


    @IsString()
    description: string;


}