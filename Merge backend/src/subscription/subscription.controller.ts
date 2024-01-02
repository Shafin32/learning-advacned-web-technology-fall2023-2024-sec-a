import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionDto } from './dto/subscription.dto';
import { JwtAdminAuthGuard, JwtUserAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Subscription')
@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @UseGuards(JwtAdminAuthGuard)
  @Post('create')
  @UsePipes(ValidationPipe)
  Create(@Body() subscriptionDTO: SubscriptionDto){
    return this.subscriptionService.create(subscriptionDTO);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Put('update/:id')
  @UsePipes(ValidationPipe)
  Update(@Param('id') id:number,@Body() subscriptionDTO: SubscriptionDto){
    return this.subscriptionService.update(id,subscriptionDTO);
  }

  @UseGuards(JwtUserAuthGuard)
  @Get('get/:id')
  GetOne(@Param('id') id:number)
  {
    return this.subscriptionService.Get(id);
  }

  @UseGuards(JwtUserAuthGuard)
  @Get('all')
  GetAll()
  {
    return this.subscriptionService.GetAll();
  }

  @UseGuards(JwtAdminAuthGuard)
  @Delete('delete/:id')
  Delete(@Param('id') id:number)
  {
    return this.subscriptionService.delete(id);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get('user/:id')
  GetUsers(@Param('id') id:number){
    return this.subscriptionService.FindUsers(id);
  }

  @UseGuards(JwtUserAuthGuard)
  @Get('subscribe/:id')
  welcomeUser(@Param('id') id:number,@Request() req){
    return this.subscriptionService.subscribe(id,req.user.id);
  }

}
