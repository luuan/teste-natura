import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { FindOneUser } from '../../../user/use-cases/find-one/find-one-user';
import { LoginDto } from '../../dto/login.dto';

@Injectable()
export class ValidateUser {
  constructor(private findOneUser: FindOneUser) {}

  async execute({ username, password }: LoginDto) {
    const user = await this.findOneUser.execute(username, true);
    if (!user) {
      return null;
    }

    try {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return null;
      }
    } catch (error) {
      return null;
    }

    delete user.password;

    return user;
  }
}
