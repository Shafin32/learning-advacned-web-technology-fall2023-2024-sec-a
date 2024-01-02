import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateAdminDto } from './dto/create.admin.dto';
import { JwtAdminAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAdminAuthGuard)
  @Post('create')
  @UsePipes(ValidationPipe)
  create(@Body() createUserDTO: CreateAdminDto){
    return this.userService.create(createUserDTO);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get('all')
  findAll(){
    return this.userService.findAll();
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get('single/:id')
  findOne(@Param('id') id:number){
    return this.userService.findOne(id);
  }

  @Get('/')
  tempfindAll(){
    return this.userService.findAll();
  }
}

