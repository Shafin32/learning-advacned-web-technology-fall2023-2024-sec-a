import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Session } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Wishlist')
@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post('add/:templateId')
  async AddTemplate(@Session() session, @Param('templateId') templateId: number) {
    const userId = session.userId;
    return this.wishlistService.createWishlist(userId, templateId);
  }

  @Get('get')
  async getWishlist(@Session() session) {
    const userId = session.userId;
    return this.wishlistService.getWishlist(userId);
  }


  @Get('getall')
    getAll() {
        return this.wishlistService.findAll();
    }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.wishlistService.delete(id);
  }

  @Get('count/totalwishlist')
  async countTotalUsers() {
    const total = await this.wishlistService.countTotalWishlist();
    return `The total  wishlists are: ${total}`;
  }
}
