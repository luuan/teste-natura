import { Injectable, NotFoundException } from '@nestjs/common';
import { Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class RemoveProduct {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async execute(id: number) {
    const productToDelete = await this.productRepository.exists({
      where: { id: Equal(id) },
    });

    if (!productToDelete) {
      throw new NotFoundException('Erro ao Remover Registro.');
    }

    await this.productRepository.delete({ id });
  }
}
