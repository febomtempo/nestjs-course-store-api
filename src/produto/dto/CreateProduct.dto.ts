import {
  IsNotEmpty,
  IsNumber,
  Min,
  IsInt,
  MaxLength,
  IsArray,
  ValidateNested,
  ArrayMinSize,
  IsString,
} from 'class-validator';
import { ProductCharacteristcDTO } from './ProductCharacteristc.dto';
import { Type } from 'class-transformer';
import { ProductImageDTO } from './ProductImage.dto';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber({
    maxDecimalPlaces: 2,
    allowNaN: false,
    allowInfinity: false,
  })
  @Min(0.01)
  price: number;

  @IsInt()
  @Min(0)
  quantity: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductCharacteristcDTO)
  characteristics: ProductCharacteristcDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImageDTO)
  images: ProductImageDTO[];

  @IsString()
  @IsNotEmpty()
  category: string;
}
