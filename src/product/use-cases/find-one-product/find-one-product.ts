import { Injectable, NotFoundException } from '@nestjs/common';
import { Equal, Repository } from 'typeorm';
import { Product } from '../../../product/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindOneProduct {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async execute(id: number) {
    const product = await this.productRepository.findOne({
      where: { id: Equal(id) },
    });

    if (!product) {
      throw new NotFoundException('Erro ao Buscar Registro.');
    }

    return product;
  }
}
