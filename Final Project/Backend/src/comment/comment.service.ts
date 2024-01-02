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

    async create(createCommentDto: CreateCommentDto, userId: number){
        
        const user = await this.commentRepo.create({...createCommentDto, user: { id: userId }});
        return await this.commentRepo.save(user);
    }

    async update(id: number, updateCommentDto: UpdateCommentDto, userId: number){
        const com = await this.commentRepo.findOne({
            where: { id, user: { id: userId } },
        });
      
        if (!com) {
            throw new NotFoundException(`Comment with id #${id} not found for the user`);
        }
      
        await this.commentRepo.update(id, {...updateCommentDto});
        return `The comment with id #${id} has been updated`;
      }

    async delete(id: number){
        return await this.commentRepo.delete(id)
    }


    async findAllByUser(userId: number) {
        return await this.commentRepo.find({
            where: { user: { id: userId } },
        });
    }
}
