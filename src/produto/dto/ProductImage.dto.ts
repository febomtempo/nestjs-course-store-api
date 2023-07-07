import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';

export class ProductImageDTO {
  @IsUrl()
  url: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
