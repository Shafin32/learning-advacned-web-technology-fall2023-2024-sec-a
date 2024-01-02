import { Module } from '@nestjs/common';
import { DownloadhistoryService } from './downloadhistory.service';
import { DownloadhistoryController } from './downloadhistory.controller';

@Module({
  controllers: [DownloadhistoryController],
  providers: [DownloadhistoryService],
})
export class DownloadhistoryModule {}
