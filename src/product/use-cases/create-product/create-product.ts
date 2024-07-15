import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { Repository } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateProduct {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async execute(createProductDto: CreateProductDto) {
    return await this.productRepository.save(createProductDto);
  }
}
