import { randomInt } from 'crypto';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../../use-cases/create/create-user.dto';
import { IUserRepositoryInterface } from '../interfaces';

export class UserInMemory implements IUserRepositoryInterface {
  users: User[] = [];

  async createUser(
    data: CreateUserDto | Partial<CreateUserDto>,
  ): Promise<User> {
    const userPlain = new User();

    if (data?.id) {
      const user = this.users.find((user) => user.id === data.id);

      const userIndex = this.users.findIndex(
        (user) => user.id === data.id,
      );

      Object.assign(user, {
        ...user,
        ...data,
        updatedAt: new Date(),
      });

      this.users[userIndex] = user;

      return user;
    }

    Object.assign(userPlain, {
      ...data,
      id: randomInt(256),
    });

    this.users.push(userPlain);

    return userPlain;
  }
  async findManyUser(): Promise<User[]> {
    const users = this.users.map((user) => user);

    return users;
  }
  async findOneUser(username: string,
    selectSecrets: boolean = false,
  ): Promise<User> {
    const user = this.users.find((user) => user.username === username);

    return user;
  }
}
