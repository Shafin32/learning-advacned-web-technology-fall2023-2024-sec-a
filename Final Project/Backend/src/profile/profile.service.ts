import { Injectable, NotFoundException,ConflictException,Session, Param } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { EditProfileDto } from './dto/editprofile.dto';




@Injectable()
export class ProfileService {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

 

async getUserProfile(userid: number) {
  return await this.userRepo.findOne({ where:{id:userid} });
}

async editUserProfile(id: number, editProfileDto: EditProfileDto) {
  const user = await this.userRepo.findOne({ where: { id } });
  

  if (!user) {
    throw new NotFoundException('User not found');
  }


  if (editProfileDto.password) {
    user.password = await bcrypt.hash(editProfileDto.password, 10);
  }

  user.username = editProfileDto.username;
  user.email = editProfileDto.email;
  user.phonenumber = editProfileDto.phonenumber;
  user.dob = editProfileDto.dob;
  user.gender = editProfileDto.gender;

  return await this.userRepo.save(user);
}




  }