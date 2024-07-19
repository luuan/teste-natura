import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { UserRepository } from '../../repositories';
import { IUserRepositoryInterface } from '../../repositories/interfaces';

@Injectable()
export class FindManyUser {
  constructor(
    @InjectRepository(UserRepository)
    private usersRepository: IUserRepositoryInterface,
  ) {}

  async execute(): Promise<User[]> {
    return this.usersRepository.findManyUser();
  }
}
