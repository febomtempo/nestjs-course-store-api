import {
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';
import { IsMailUnique } from '../validation/unique-mail-validator';

export class UpdateUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsMailUnique({
    message: 'There is another user with this e-mail. Try a different one!',
  })
  @IsOptional()
  email: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  password: string;
}
