import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SearchService } from './search.service';
import { JwtAdminAuthGuard, JwtUserAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @UseGuards(JwtAdminAuthGuard)
  @Get('user/role=:role')
  GetUserByRole(@Param('role') role:string){
    return this.searchService.GetUserByRole(role);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get('user/type=:type')
  GetUserByType(@Param('type') type:string){
    return this.searchService.GetUserByType(type);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get('user/:segment')
  GetUsersByNameSegment(@Param('segment') segment:string){
    return this.searchService.GetUsersByNameSegment(segment);
  }

  @UseGuards(JwtUserAuthGuard)
  @Get('template/type=:type')
  GetTemplateByType(@Param('type') type:string){
    return this.searchService.GetTemplateByType(type);
  }

  @UseGuards(JwtUserAuthGuard)
  @Get('template/:segment')
  GetTemplateByNameSegment(@Param('segment') segment:string){
    return this.searchService.GetTemplatesByNameSegment(segment);
  }
}
