import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { IUserRepositoryInterface } from '../../repositories/interfaces';

@Injectable()
export class FindOneUser {
  constructor(
    @InjectRepository(User)
    private usersRepository: IUserRepositoryInterface,
  ) {}

  async execute(
    username: string,
    selectSecrets: boolean = false,
  ): Promise<User> {
    return this.usersRepository.findOneUser(username, selectSecrets)
  }
}
