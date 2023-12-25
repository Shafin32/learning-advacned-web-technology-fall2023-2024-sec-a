import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { get } from 'http';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Get('getall')
    getAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    userId(@Param('id') id:number){
        return this.userService.findOne(id);
    }

    @Post('create')
    create (@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    }

    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto){
        return this.userService.update(id, updateUserDto);
    }

    @Delete('delete/:id')
    delete(@Param('id') id:number){
        return this.userService.delete(id);
    }

}



