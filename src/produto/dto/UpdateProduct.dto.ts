import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProductCharacteristicDTO } from './ProductCharacteristic.dto';
import { ProductImageDTO } from './ProductImage.dto';

export class UpdateProductDTO {
  @IsUUID(undefined, { message: 'Invalid Product ID!' })
  id: string;

  @IsUUID(undefined, { message: 'Invalid User ID!' })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @IsOptional()
  @Min(1)
  @IsOptional()
  price: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  quantity: number;

  @IsString()
  @IsOptional()
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductCharacteristicDTO)
  @IsOptional()
  characteristics: ProductCharacteristicDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImageDTO)
  @IsOptional()
  images: ProductImageDTO[];

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  category: string;
}
