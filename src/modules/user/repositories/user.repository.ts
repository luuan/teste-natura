import * as bcrypt from 'bcryptjs';
import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../use-cases/create/create-user.dto';
import { IUserRepositoryInterface } from './interfaces';

@Injectable()
export class UserRepository
  extends Repository<User>
  implements IUserRepositoryInterface
{
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, name } = createUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.create({
      username,
      password: hashedPassword,
      name,
    });

    const newUser = await this.save(user);

    delete newUser.password;

    return newUser;
  }
  async findManyUser(): Promise<User[]> {
    return await this.find({
      select: ['id', 'name', 'createdAt', 'updatedAt'],
    });
  }
  async findOneUser(
    username: string,
    selectSecrets: boolean = false,
  ): Promise<User> {
    return this.findOne({
      where: { username },
      select: {
        id: true,
        username: true,
        name: true,
        accountStatus: true,
        password: selectSecrets,
      },
    });
  }
}
