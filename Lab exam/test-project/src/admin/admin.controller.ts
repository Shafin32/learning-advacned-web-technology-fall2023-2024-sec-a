import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { get } from 'http';
import { CreateEmployeeDto } from './DTO/createEmployee.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService){}
    
    @Get('all')
    getAlluser(){
        return this.adminService.getAll();
    }

    @Get(':id')
    userId(@Param('id') id: string){
        return {employee:{ id: id}}
    }

    @Post('create')
    createUser(@Body() createEmployeeDto: CreateEmployeeDto){
        return this.adminService.create(createEmployeeDto);
    }

    @Get('get/:id')
    GetUser(@Param('id') id: number){
        return this.adminService.get(id);
    }
}

