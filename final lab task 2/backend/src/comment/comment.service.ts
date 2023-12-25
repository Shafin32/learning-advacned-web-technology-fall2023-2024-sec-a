import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/entities/comment.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './DTO/createComment.dto';
import { UpdateCommentDto } from './DTO/updateComment.dto';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(Comment) private readonly commentRepo: Repository<Comment>){
    }

    async findAll(): Promise<Comment[]> {
        return this.commentRepo.find();
      }
    async findOne(id: number){
        return await this.commentRepo.findOne({where: {id:id}});
    }

    async create(createCommentDto: CreateCommentDto){
        
        const user = await this.commentRepo.create(createCommentDto);
        return await this.commentRepo.save(user);
    }

    async update(id: number, updateCommentDto: UpdateCommentDto){
        return await this.commentRepo.update(id, updateCommentDto);            

      }

    async delete(id: number){
        return await this.commentRepo.delete(id)
    }


    
}
