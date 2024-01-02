import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist } from 'src/entities/wishlist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WishlistService {

  constructor(@InjectRepository(Wishlist) private readonly wishlistrepo: Repository<Wishlist>){
  }

  async createWishlist(userId: number, templateId: number): Promise<Wishlist> {
    const list = this.wishlistrepo.create({ user: { id: userId }, template: { id: templateId } });
    return await this.wishlistrepo.save(list);
  }

  async getWishlist(userId: number): Promise<Wishlist[]> {
    return await this.wishlistrepo.find({ where: { user: { id: userId } },
                                         relations: ['template'], });
  }

  async findAll() {
    return await this.wishlistrepo.find();;
  }

  async delete(id: number) {
    return await this.wishlistrepo.delete(id)
  }

  async countTotalWishlist() {
    return await this.wishlistrepo.count();
    
  }
}
