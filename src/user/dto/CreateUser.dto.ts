import { IsEmail, MinLength, IsNotEmpty, IsString } from 'class-validator';
import { IsMailUnique } from '../validation/unique-mail-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsMailUnique({
    message: 'There is another user with this e-mail. Try a different one!',
  })
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
