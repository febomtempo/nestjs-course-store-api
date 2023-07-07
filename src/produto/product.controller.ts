import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createUser(@Body() productData) {
    this.productRepository.save(productData);
    return productData;
  }

  @Get()
  async listUsers() {
    return this.productRepository.list();
  }
}
