import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../../repositories';
import { IProductRepositoryInterface } from '../../repositories/interfaces';

@Injectable()
export class FindAllProduct {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: IProductRepositoryInterface,
  ) {}

  async execute() {
    return this.productRepository.findAllProduct();
  }
}
