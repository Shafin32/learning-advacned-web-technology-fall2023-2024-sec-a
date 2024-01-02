import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishlist } from 'src/entities/wishlist.entity';
import { Template } from 'src/entities/template.entity';
import { User } from 'src/entities/user.entity';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Wishlist,Template,User])],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
