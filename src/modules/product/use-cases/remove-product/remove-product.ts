import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../../repositories';
import { IProductRepositoryInterface } from '../../repositories/interfaces';

@Injectable()
export class RemoveProduct {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: IProductRepositoryInterface,
  ) {}

  async execute(id: number) {
    await this.productRepository.removeProduct(id);
  }
}
