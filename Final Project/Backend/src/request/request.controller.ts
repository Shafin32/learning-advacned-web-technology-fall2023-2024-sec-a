import { Body, Controller, Delete, Get, Param, Post, Put, Request, Session, UseGuards } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './DTO/createRequest.dto';
import { UpdateRequestDto } from './DTO/updateRequest.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtUserAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Template Request')
@UseGuards(JwtUserAuthGuard)
@Controller('request')
export class RequestController {

    constructor(private readonly requestService: RequestService){}


    @Get('getall')
    getAll() {
        return this.requestService.findAll();
    }

    @Get(':id')
    userId(@Param('id') id:number){
        return this.requestService.findOne(id);
    }

    @Post('create')
    create (@Body() createRequestDto: CreateRequestDto, @Request() req){
        const userid = req.user.id;
        return this.requestService.create(createRequestDto,userid);
    }


    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateRequestDto: UpdateRequestDto,@Request() req){
        const userid = req.user.id;
        return this.requestService.update(id, updateRequestDto, userid);
    }

    @Delete('delete/:id')
    delete(@Param('id') id:number){
        return this.requestService.delete(id);
    }


    @Get('seeall')
  findAll(@Request() req) {
      const userId = req.user.id;
      return this.requestService.findAllByUser(userId);
  }
}
