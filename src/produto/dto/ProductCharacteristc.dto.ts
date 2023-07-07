import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class ProductCharacteristcDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  description: string;
}
