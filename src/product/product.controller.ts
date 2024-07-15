import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateProduct } from './use-cases/create-product/create-product';
import { CreateProductDto } from './use-cases/create-product/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindAllProduct } from './use-cases/find-all-product/find-all-product';
import { FindOneProduct } from './use-cases/find-one-product/find-one-product';
import { RemoveProduct } from './use-cases/remove-product/remove-product';
import { UpdateProduct } from './use-cases/update-product/update-product';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProduct: CreateProduct,
    private readonly updateProduct: UpdateProduct,
    private readonly findAllProduct: FindAllProduct,
    private readonly findOneProduct: FindOneProduct,
    private readonly removeProduct: RemoveProduct,
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.createProduct.execute(createProductDto);
  }

  @Get()
  findAll() {
    return this.findAllProduct.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.findOneProduct.execute(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.updateProduct.execute(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.removeProduct.execute(id);
  }
}
