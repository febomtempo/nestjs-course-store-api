import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { IsMailUniqueValidator } from './validation/unique-mail-validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, IsMailUniqueValidator],
})
export class UserModule {}
