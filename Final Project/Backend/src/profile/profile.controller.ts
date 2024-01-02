import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe, Session, UnauthorizedException, UseGuards, HttpException, HttpStatus, Request } from '@nestjs/common';
import { EditProfileDto } from '../profile/dto/editprofile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { ProfileService } from './profile.service';
import { TemplateService } from 'src/template/template.service';
import { DownloadhistoryService } from 'src/downloadhistory/downloadhistory.service';
import { JwtAdminAuthGuard, JwtUserAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtUserAuthGuard)
@Controller('profile')
export class ProfileController {

  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>,
             private readonly profileService: ProfileService,
             private readonly templateService: TemplateService, 
             private readonly downloadhistoryService: DownloadhistoryService,) {} 

 


@Get('/')
async getProfile(@Request() req) {
  const user = await this.profileService.getUserProfile(req.user.id);
  console.log(user);
  return { success: true, user };
}


@Put('profile/edit')
@UsePipes(ValidationPipe)
async editProfile(@Body() editProfileDto: EditProfileDto, @Request() req) {
  const updatedUser = await this.profileService.editUserProfile(req.user.id, editProfileDto);
  return { success: true, user: updatedUser };
}


  
}