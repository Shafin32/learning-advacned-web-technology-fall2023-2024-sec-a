import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import {User} from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>){
    }

    async findAll(): Promise<User[]> {
        return this.userRepo.find();
      }

    async findOne(id: number){
        return await this.userRepo.findOne({where: {id:id}});
        
    }

    async create(createUserDto: CreateUserDto){
        
        const user = await this.userRepo.create(createUserDto);
        return await this.userRepo.save(user);
    }

    async update(id: number, updateUserDto: UpdateUserDto){
        return await this.userRepo.update(id, updateUserDto);            
    }

    async delete(id: number){
        return await this.userRepo.delete(id)
    }


}
