import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Template } from 'src/entities/template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Template])],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
