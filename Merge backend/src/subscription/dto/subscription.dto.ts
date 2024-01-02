import {IsString} from 'class-validator';

export class SubscriptionDto{

    @IsString()
    type: string;

    @IsString()
    download_limit: string;

    @IsString()
    price: string;
}