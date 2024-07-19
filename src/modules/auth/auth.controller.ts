import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUser } from '../user/use-cases/create/create-user';
import { CreateUserDto } from '../user/use-cases/create/create-user.dto';
import { Public } from './decorators/public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Login } from './use-cases/login/login';

@Controller('auth')
export class AuthController {
  constructor(
    private loginUseCase: Login,
    private createUser: CreateUser,
  ) {}

  @Public() //essa aqui é pública mesmo
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: Express.Request) {
    return this.loginUseCase.execute(req.user);
  }

  @Public() //esta anotação está aqui para facilitar o uso, caso seja removida, irá bloquear pelo token

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    const user = await this.createUser.execute(body);
    return user;
  }
}
