import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethod } from 'src/entities/payment.method.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethod,User])],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
