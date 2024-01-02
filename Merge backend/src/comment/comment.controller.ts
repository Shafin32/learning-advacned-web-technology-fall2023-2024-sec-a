import { Body, Controller, Delete, Get, Param, Post, Put, Session } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './DTO/createComment.dto';
import { UpdateCommentDto } from './DTO/updateComment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Comment')
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
    create (@Body() createCommentDto: CreateCommentDto,@Session() session){
        const userid = session.userId;
        return this.commentService.create(createCommentDto,userid);
    }


    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto,@Session() session){
        const userid = session.userId;
        return this.commentService.update(id, updateCommentDto,userid);
    }

    @Delete('delete/:id')
    delete(@Param('id') id:string){
        return this.commentService.delete(id);
    }

    @Get('seeall')
  findAll(@Session() session) {
      const userId = session.userId;
      return this.commentService.findAllByUser(userId);
  }

}
