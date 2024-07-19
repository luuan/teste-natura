import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ValidateUser } from '../use-cases/validate-user/validate-user';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private validateUser: ValidateUser) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.validateUser.execute({ username, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
