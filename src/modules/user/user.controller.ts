import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Public } from '../auth/decorators/public.decorator';
import { User } from './entities/user.entity';
import { FindManyUser } from './use-cases/find-many/find-many-user';

@Controller('users')
export class UsersController {
  constructor(private findManyUser: FindManyUser) {}

  @Public() //esta anotação está aqui para facilitar o uso, caso seja removida, irá bloquear pelo token
  @Get()
  findMany() {
    return this.findManyUser.execute();
  }

  @Public() //esta anotação está aqui para facilitar o uso, caso seja removida, irá bloquear pelo token
  @Get('profile')
  getProfile(@CurrentUser() user: User) {
    return user;
  }
}
