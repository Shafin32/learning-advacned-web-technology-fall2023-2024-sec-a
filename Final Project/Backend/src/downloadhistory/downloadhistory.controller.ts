import { Controller, Get, Post, Body, Patch, Param, Delete, Session } from '@nestjs/common';
import { DownloadhistoryService } from './downloadhistory.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { TemplateService } from 'src/template/template.service';

@Controller('downloadhistory')
export class DownloadhistoryController {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>,
  private readonly templateService: TemplateService, 
  private readonly downloadService: DownloadhistoryService,) {} 

  @Post('download/:templateId')
  //@UseGuards(AuthUserGuard,AuthGuard)
  async downloadTemplate(@Session() session, @Param('templateId') templateId: number) {
    const userId = session.userId;
    return this.downloadService.downloadTemplate(userId, templateId);
  }

  @Get('download/history')
  //@UseGuards(AuthUserGuard,AuthGuard)
  async getDownloadHistory(@Session() session) {
    const userId = session.userId;
    return this.downloadService.getDownloadHistory(userId);
  }

  
}
