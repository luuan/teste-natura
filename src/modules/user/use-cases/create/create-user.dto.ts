import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsOptional()
    id?: number;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    name?: string;
}
