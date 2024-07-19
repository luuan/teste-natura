import { User } from "../../entities/user.entity";
import { CreateUserDto } from "../../use-cases/create/create-user.dto";

export interface IUserRepositoryInterface {
  createUser(createUserDto: CreateUserDto): Promise<User>;
  findManyUser(): Promise<User[]>;
  findOneUser(username: string, selectSecrets: boolean): Promise<User>
}
