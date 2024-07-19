import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { CreateProduct } from './use-cases/create-product/create-product';
import { CreateProductDto } from './use-cases/create-product/create-product.dto';
import { FindAllProduct } from './use-cases/find-all-product/find-all-product';
import { FindOneProduct } from './use-cases/find-one-product/find-one-product';
import { RemoveProduct } from './use-cases/remove-product/remove-product';
import { UpdateProduct } from './use-cases/update-product/update-product';
import { UpdateProductDto } from './use-cases/update-product/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProduct: CreateProduct,
    private readonly updateProduct: UpdateProduct,
    private readonly findAllProduct: FindAllProduct,
    private readonly findOneProduct: FindOneProduct,
    private readonly removeProduct: RemoveProduct,
  ) {}

  @Public() //esta anotação está aqui para facilitar o uso, caso seja removida, irá bloquear pelo token
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.createProduct.execute(createProductDto);
  }

  @Public() //esta anotação está aqui para facilitar o uso, caso seja removida, irá bloquear pelo token
  @Get()
  findAll() {  
    return this.findAllProduct.execute();
  }

  @Public() //esta anotação está aqui para facilitar o uso, caso seja removida, irá bloquear pelo token
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.findOneProduct.execute(id);
  }

  @Public() //esta anotação está aqui para facilitar o uso, caso seja removida, irá bloquear pelo token
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.updateProduct.execute(id, updateProductDto);
  }

  @Public() //esta anotação está aqui para facilitar o uso, caso seja removida, irá bloquear pelo token
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.removeProduct.execute(id);
  }
}
