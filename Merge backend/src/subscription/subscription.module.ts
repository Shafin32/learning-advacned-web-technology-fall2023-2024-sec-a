import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { Subscription } from 'src/entities/subscription.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { PaymentMethod } from 'src/entities/payment.method.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Subscription,PaymentMethod])],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
})
export class SubscriptionModule {}
