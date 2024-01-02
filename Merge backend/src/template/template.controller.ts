import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create.template.dto';
import { JwtAdminAuthGuard, JwtUserAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Template')
@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @UseGuards(JwtAdminAuthGuard)
  @Post('create')
  @UsePipes(ValidationPipe)
  CreateTemplate(@Body() createTemplateDto: CreateTemplateDto){
    return this.templateService.create(createTemplateDto);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Put('update/:id')
  @UsePipes(ValidationPipe)
  UpdateTemplate(@Param('id') id:number,@Body() createTemplateDto: CreateTemplateDto){
    return this.templateService.update(id,createTemplateDto);
  }

  @UseGuards(JwtUserAuthGuard)
  @Get('all')
  AllTemplates()
  {
    return this.templateService.getAll();
  }
  
  @UseGuards(JwtUserAuthGuard)
  @Get('get/:id')
  GetTemplate(@Param('id') id:number)
  {
    return this.templateService.get(id);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Delete('delete/:id')
  DeleteTemplate(@Param('id') id:number)
  {
    return this.templateService.delete(id);
  }
}
