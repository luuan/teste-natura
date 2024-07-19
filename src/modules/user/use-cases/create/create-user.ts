import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { UserRepository } from '../../repositories';
import { IUserRepositoryInterface } from '../../repositories/interfaces';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class CreateUser {
  constructor(
    @InjectRepository(UserRepository)
    private readonly usersRepository: IUserRepositoryInterface,
  ) {}

  async execute(dto: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser(dto)
  }
}
