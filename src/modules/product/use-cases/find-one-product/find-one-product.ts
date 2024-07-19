import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../../repositories';
import { IProductRepositoryInterface } from '../../repositories/interfaces';

@Injectable()
export class FindOneProduct {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: IProductRepositoryInterface,
  ) {}

  async execute(id: number) {
    return this.productRepository.findOneProduct(id);
  }
}
