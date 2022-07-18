import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [LocalStrategy, AuthService],
})
export class AuthModule {}
