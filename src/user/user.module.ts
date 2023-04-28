import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sys_user } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([sys_user])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
