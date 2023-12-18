import { Body, Controller, Delete, Get, Param, Post, Put, Session } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './DTO/createRequest.dto';
import { UpdateRequestDto } from './DTO/updateRequest.dto';

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
    create (@Body() createRequestDto: CreateRequestDto, @Session() session){
        const userid = session.userId;
        return this.requestService.create(createRequestDto,userid);
    }


    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateRequestDto: UpdateRequestDto,@Session() session){
        const userid = session.userId;
        return this.requestService.update(id, updateRequestDto, userid);
    }

    @Delete('delete/:id')
    delete(@Param('id') id:number){
        return this.requestService.delete(id);
    }


    @Get('seeall')
  findAll(@Session() session) {
      const userId = session.userId;
      return this.requestService.findAllByUser(userId);
  }
}
