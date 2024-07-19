import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductRepository } from './repositories';
import { CreateProduct } from './use-cases/create-product/create-product';
import { FindAllProduct } from './use-cases/find-all-product/find-all-product';
import { FindOneProduct } from './use-cases/find-one-product/find-one-product';
import { RemoveProduct } from './use-cases/remove-product/remove-product';
import { UpdateProduct } from './use-cases/update-product/update-product';
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [
    ProductRepository,
    CreateProduct,
    FindAllProduct,
    FindOneProduct,
    RemoveProduct,
    UpdateProduct,
  ],
})
export class ProductModule {}
