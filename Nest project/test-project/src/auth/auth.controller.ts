import { Body, Controller, Get, HttpException, HttpStatus, Post, Session, UnauthorizedException, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { LoginUserDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('index')
  @UseGuards(AuthGuard)
  getIndex(@Session() session) {
console.log(session.email);
    return this.authService.getAll();
  }


  @Post('signup')
  create (@Body() createUserDto: CreateUserDto){
      return this.authService.signup(createUserDto);
  }

  @Post('login')
  async login(@Body() logindto:LoginUserDto, @Session() session)
  {
    const authresult = await this.authService.signin(logindto,session)
    if (authresult.includes('successful')) {
      session.email = logindto.email; // Set the session username 
      session.type = logindto.type;
  
       return   authresult;
    } 
    else {
      throw new HttpException('login failed', HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('signout')
  async signout(@Session() session) {
    if(session.destroy()) {
      return await { message: 'Successfully signed out' };
    }
  
  else{
    throw new UnauthorizedException('invalid action!');
  }

  }
}

