import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtAdminStrategy, JwtUserStrategy } from './jwt.strategy';
import { Download } from 'src/entities/download.entity';
import { Template } from 'src/entities/template.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DownloadhistoryService } from 'src/downloadhistory/downloadhistory.service';

@Module({
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({
      secret: 'FAHIM', // JWT Token Setup
      signOptions: { expiresIn: '30m' },
    }),
    TypeOrmModule.forFeature([Template, Download]),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy,JwtUserStrategy, JwtAdminStrategy, DownloadhistoryService],
  exports: [AuthService]
})
export class AuthModule {}
