import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [AuthModule, UserModule, AdminModule],
  controllers: [AppController,AuthController],
  providers: [AppService,AuthService]
})

export class AppModule {}