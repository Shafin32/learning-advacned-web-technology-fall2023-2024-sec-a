import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Template } from 'src/entities/template.entity';
import { TemplateService } from 'src/template/template.service';
import { DownloadhistoryService } from 'src/downloadhistory/downloadhistory.service';
import { Download } from 'src/entities/download.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Template,Download])],
  controllers: [ProfileController],
  providers: [ProfileService,TemplateService,DownloadhistoryService],
})
export class ProfileModule {}
