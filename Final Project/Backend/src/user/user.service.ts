import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create.admin.dto';
import { Subscription } from 'src/entities/subscription.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Subscription) private subscriptionRepo: Repository<Subscription>
  ){}

  async create(createUserDTO: CreateUserDto | CreateAdminDto){
  const user = this.userRepo.create(createUserDTO);  

  //Role
  if(user.role == null) user.role = 'user'; 

  //Subscription
  if(user.type == null){ 
   const subscription = await this.subscriptionRepo.findOne({
      where: {type: 'free'}
    })

    user.type = subscription.type;
    user.subscription = subscription;
  }
  else{
    const subscription = await this.subscriptionRepo.findOne({
      where: {type: user.type}
    })
    
    if (!subscription) {
      throw new NotFoundException('Subscription not found');
    }

    user.type = subscription.type;
    user.subscription = subscription;
  }

  await this.userRepo.save(user);
  return {
    message: 'User Has Been Created'
  }
  }

  async findAll() {
      return await this.userRepo.find(); 
  }

  async findOne(id:number){
    return await this.userRepo.findOne({where: {id:id}})
  }

  async findOneByEmail(email:string){
    return await this.userRepo.findOne({where: {email:email}})
  }

}
