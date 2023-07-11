import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class ProductCharacteristicDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  description: string;
}
