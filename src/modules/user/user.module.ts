import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories';
import { CreateUser } from './use-cases/create/create-user';
import { FindManyUser } from './use-cases/find-many/find-many-user';
import { FindOneUser } from './use-cases/find-one/find-one-user';
import { UsersController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserRepository, CreateUser, FindManyUser, FindOneUser],
  exports: [CreateUser, FindManyUser, FindOneUser],
})
export class UserModule {}
