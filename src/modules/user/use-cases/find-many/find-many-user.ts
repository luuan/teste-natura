import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { IUserRepositoryInterface } from '../../repositories/interfaces';

@Injectable()
export class FindManyUser {
  constructor(
    @InjectRepository(User)
    private usersRepository: IUserRepositoryInterface,
  ) {}

  async execute(): Promise<User[]> {
    return this.usersRepository.findManyUser()
  }
}
