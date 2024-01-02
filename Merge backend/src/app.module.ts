import { MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import  config  from 'ormconfig';
import { AuthenticationMiddleware } from './authentication/authentication.middleware';
import { TemplateModule } from './template/template.module';
import { SearchModule } from './search/search.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { PaymentModule } from './payment/payment.module';
import { UserManagementModule } from './user-management/user-management.module';
import { FaqModule } from './operations/faq.module';
import { UserquestionModule } from './operations/userquestion.module';
import { RequestModule } from './request/request.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config), 
    UserModule,  
    ProfileModule, 
    TemplateModule, 
    SearchModule, 
    SubscriptionModule, 
    PaymentModule,
    AuthModule,
    UserManagementModule,
    FaqModule,
    UserquestionModule, 
    RequestModule, 
    WishlistModule,
    CommentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { path: 'user/*', method: RequestMethod.ALL},      
      { path: 'profile/*', method: RequestMethod.ALL },
      { path: 'search/*', method: RequestMethod.ALL },
      { path: 'template/*', method: RequestMethod.ALL },
      { path: 'subscription/*', method: RequestMethod.ALL },
      { path: 'payment/*', method: RequestMethod.ALL },
      { path: 'user-management/*', method: RequestMethod.ALL}, 
    );
  }

}
