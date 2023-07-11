class ProductCharacteristcListDTO {
  name: string;
  description: string;
}

class ProductImageListDTO {
  url: string;
  description: string;
}

export class ProductListDTO {
  id: string;
  userId: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  characteristics: ProductCharacteristcListDTO[];
  images: ProductImageListDTO[];
  category: string;
}
