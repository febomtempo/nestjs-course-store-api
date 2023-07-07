import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class ProductRepository {
  private products = [];

  async save(product) {
    this.products.push(product);
  }

  async list() {
    return this.products;
  }
}
