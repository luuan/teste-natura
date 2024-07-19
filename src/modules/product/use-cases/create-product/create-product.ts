import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../../repositories';
import { IProductRepositoryInterface } from '../../repositories/interfaces';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class CreateProduct {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: IProductRepositoryInterface,
  ) {}

  async execute(createProductDto: CreateProductDto) {
    return this.productRepository.createProduct(createProductDto);
  }
}
