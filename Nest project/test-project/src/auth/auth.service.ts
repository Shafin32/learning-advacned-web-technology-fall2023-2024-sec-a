import {Injectable,ConflictException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class AuthService {

  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}
  async signup(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepo.findOne({
      where: [
        { name: createUserDto.name },
       // {type: createUserDto.type},
        { email: createUserDto.email },
        {password: createUserDto.password}
      ],
    });
 
    if (existingUser) {
      throw new ConflictException('Username, email, or password is already taken');
    }
    const user =  this.userRepo.create( createUserDto);

    return await this.userRepo.save(user);
  }

  async signin(logindto: LoginUserDto, session: Record<string, any>) 
    {
      const us = await this.userRepo.findOne({ where: {email: logindto.email }});
          if (!us) {
            return 'User not found';  }
      const result = await bcrypt.compare(logindto.password, us.password);
    if(result)
    {
      session.userId = us.id;
      session.email = logindto.email;
      session.type = logindto.type;
      //console.log(session);
      if (us.type === 'admin') {
        return 'Admin login successful';
      }
       else if (us.type === 'user') {
        return 'User login successful';
    }
  
    return 'Login failed'; 
  }
  }

   async getAll(): Promise<User[]> {
      return this.userRepo.find(
        {
          select:{
            name: true,
            email: true
          
          }
          
        }
      );
      }
    
      
     
}

