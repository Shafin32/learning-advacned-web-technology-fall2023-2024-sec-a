import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethod } from 'src/entities/payment.method.entity';
import { Repository } from 'typeorm';
import { PaymentMethodDto } from './dto/payment.method.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class PaymentService {

    constructor(
        @InjectRepository(PaymentMethod) private paymentRepo: Repository<PaymentMethod>,
        @InjectRepository(User) private userRepo: Repository<User>
    ){}


    async AddMethod(paymentMethodDto: PaymentMethodDto,userId: number){
        const user = await this.userRepo.findOne({where: {id: userId}, relations: ['payment_method']});
        if(user.payment_method == null){
            const method = await this.paymentRepo.create(paymentMethodDto);
            await this.paymentRepo.save(method); 

            user.payment_method = method;
            await this.userRepo.update(userId,user); 

            return 'Payment Method Added';
        }

        return 'Cannot Add Method!! Payment Method Already Added';
    }

    async UpdateMethod(paymentMethodDto: PaymentMethodDto,userId: number){
        const user = await this.userRepo.findOne({where: {id: userId}, relations: ['payment_method']});
        await this.paymentRepo.update(user.payment_method.id ,paymentMethodDto); 
        return "Payment Method Updated";
    }

}
