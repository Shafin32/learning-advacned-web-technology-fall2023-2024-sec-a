import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { JwtAdminAuthGuard, JwtUserAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtUserAuthGuard)
  @Get('user')
  welcomeUser(@Request() req){
    return {'User': this.profileService.home(req)};
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get('admin')
  welcomeAdmin(@Request() req){
    return {'Admin': this.profileService.home(req)};
  }
}
