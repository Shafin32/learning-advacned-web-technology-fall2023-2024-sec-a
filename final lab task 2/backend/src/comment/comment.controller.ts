import { Body, Controller, Delete, Get, Param, Post, Put, Session } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './DTO/createComment.dto';
import { UpdateCommentDto } from './DTO/updateComment.dto';

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
    create (@Body() createCommentDto: CreateCommentDto ){
        return this.commentService.create(createCommentDto);
    }


    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto){
        return this.commentService.update(id, updateCommentDto);
    }

    @Delete('delete/:id')
    delete(@Param('id') id:number){
        return this.commentService.delete(id);
    }

   

}
