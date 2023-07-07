import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './produto/product.module';

@Module({
  imports: [UserModule, ProductModule],
})
export class AppModule {}
