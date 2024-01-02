import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Template } from 'src/entities/template.entity';
import { User } from 'src/entities/user.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        @InjectRepository(Template) private templateRepo: Repository<Template>
        ){}

    async GetUserByRole(role: string){
        return await this.userRepo.find({where: {role: role}});
    }

    async GetUserByType(type: string){
        return await this.userRepo.find({where: {type: type}});
    }

    async GetUsersByNameSegment(segment: string){
        return await this.userRepo.find({
          where: { name: Like(`%${segment}%`) },
        });
    }

    async GetTemplateByType(type: string){
        return await this.templateRepo.find({where: {type: type}});
    }

    async GetTemplatesByNameSegment(segment: string){
        return await this.templateRepo.find({
          where: { name: Like(`%${segment}%`) },
        });
    }
}
