import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../../repositories';
import { IProductRepositoryInterface } from '../../repositories/interfaces';
import { UpdateProductDto } from './update-product.dto';

@Injectable()
export class UpdateProduct {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: IProductRepositoryInterface,
  ) {}

  async execute(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepository.updateProduct(id, updateProductDto);
  }
}
