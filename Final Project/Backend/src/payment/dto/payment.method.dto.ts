import {IsString} from 'class-validator';

export class PaymentMethodDto{

    @IsString()
    cardno: string;

    @IsString()
    cvc: string;

    @IsString()
    expdate: string;
}