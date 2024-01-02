import { Body, Controller, Delete, Get, Param, Post, Put, Request, Session, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './DTO/createComment.dto';
import { UpdateCommentDto } from './DTO/updateComment.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtUserAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Comment')
@UseGuards(JwtUserAuthGuard)
@Controller('comment')
export class CommentController {

    constructor(private readonly commentService: CommentService){}

    @Get('getall')
    getAll() {
        return this.commentService.findAll();
    }

    @Get(':id')
    userId(@Param('id') id:number){
        return this.commentService.findOne(id);
    }

    @Post('create')
    create (@Body() createCommentDto: CreateCommentDto,@Request() req){
        const userid = req.user.id;
        return this.commentService.create(createCommentDto,userid);
    }


    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto,@Request() req){
        const userid = req.user.id;
        return this.commentService.update(id, updateCommentDto,userid);
    }

    @Delete('delete/:id')
    delete(@Param('id') id:number){
        return this.commentService.delete(id);
    }

    @Get('seeall')
  findAll(@Request() req) {
      const userId = req.user.id;
      return this.commentService.findAllByUser(userId);
  }

}
