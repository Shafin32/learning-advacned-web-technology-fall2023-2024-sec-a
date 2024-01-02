import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'src/entities/request.entity';
import { Repository } from 'typeorm';
import { CreateRequestDto } from './DTO/createRequest.dto';
import { UpdateRequestDto } from './DTO/updateRequest.dto';

@Injectable()
export class RequestService {

    constructor(@InjectRepository(Request) private readonly requestRepo: Repository<Request>){
    }

    async findAll(): Promise<Request[]> {
        return this.requestRepo.find();
      }

    async findOne(id: number){
        return await this.requestRepo.findOne({where: {id:id}});
    }

    async create(createRequestDto: CreateRequestDto, userId: number){
    
        const us = await this.requestRepo.create({...createRequestDto, user: { id: userId }});
        return this.requestRepo.save(us);
    }

    async update(id: number, updateRequestDto: UpdateRequestDto, userId: number){
        const req = await this.requestRepo.findOne({
            where: { id, user: { id: userId } },
        });
      
        if (!req) {
            throw new NotFoundException(`Request template with id #${id} not found for the user`);
        }
      
        await this.requestRepo.update(id, {...updateRequestDto});
        return `The request template with id #${id} has been updated`;
      }
      

    async delete(id: number){
        return await this.requestRepo.delete(id)
    }

    async findAllByUser(userId: number) {
        return await this.requestRepo.find({
            where: { user: { id: userId } },
        });
    }
}
