import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CreateProduct } from './use-cases/create-product/create-product';
import { FindAllProduct } from './use-cases/find-all-product/find-all-product';
import { FindOneProduct } from './use-cases/find-one-product/find-one-product';
import { RemoveProduct } from './use-cases/remove-product/remove-product';
import { UpdateProduct } from './use-cases/update-product/update-product';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [
    CreateProduct,
    FindAllProduct,
    FindOneProduct,
    RemoveProduct,
    UpdateProduct,
  ],
})
export class ProductModule {}
