import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestModule } from './request/request.module';
import { WishlistModule } from './wishlist/wishlist.module';
import config from 'ormconfig';
import { AuthModule } from './auth/auth.module';
import { Middleware } from './middleware/middleware.middleware';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [UserModule,AuthModule, CommentModule, TypeOrmModule.forRoot(config), RequestModule, WishlistModule],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
     consumer
     .apply(Middleware)
     .forRoutes(UserController,AuthController)
  }
}