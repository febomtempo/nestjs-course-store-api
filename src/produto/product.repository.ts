import { Injectable } from '@nestjs/common/decorators';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  async save(product: ProductEntity) {
    this.products.push(product);
    return product;
  }

  private searchById(id: string) {
    const possibleProduct = this.products.find((product) => product.id === id);

    if (!possibleProduct) {
      throw new Error('Product not found!');
    }

    return possibleProduct;
  }

  async update(id: string, productData: Partial<ProductEntity>) {
    const idData = ['id', 'usuarioId'];
    const product = this.searchById(id);
    Object.entries(productData).forEach(([key, value]) => {
      if (idData.includes(key)) {
        return;
      }
      product[key] = value;
    });

    return product;
  }

  async remove(id: string) {
    const deletedProduct = this.searchById(id);
    this.products = this.products.filter((product) => product.id !== id);
    return deletedProduct;
  }

  async list() {
    return this.products;
  }
}
