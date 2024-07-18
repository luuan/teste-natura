import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from '../../../product/entities/product.entity';
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
