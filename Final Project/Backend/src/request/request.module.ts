import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from 'src/entities/request.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Request,User])],
  controllers: [RequestController],
  providers: [RequestService]
})
export class RequestModule {}
