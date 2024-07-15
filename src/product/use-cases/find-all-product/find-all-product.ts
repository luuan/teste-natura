import { Inject, Injectable } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from 'src/product/providers/constants';
import { Repository } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindAllProduct {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async execute() {
    return this.productRepository.find();
  }
}
