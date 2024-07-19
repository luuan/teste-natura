import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { FindOneUser } from '../../user/use-cases/find-one/find-one-user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private fndOneUser: FindOneUser,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, //para facilitar o uso essa variavel ficará true
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    const user = await this.fndOneUser.execute(payload.username);

    if (!user) {
      throw new UnauthorizedException();
    }

    if (user.accountStatus !== 'active') {
      throw new UnauthorizedException(
        `${user.username}, account ${user.accountStatus}`,
      );
    }

    return { userId: payload.sub, username: payload.username };
  }
}
