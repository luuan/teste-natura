import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from './update-product.dto';
import { Equal, Repository } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UpdateProduct {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async execute(id: number, updateProductDto: UpdateProductDto) {
    const oldProduct = await this.productRepository.findOne({
      where: { id: Equal(id) },
    });

    if (!oldProduct) {
      throw new NotFoundException('Erro ao Atualizar Registro.');
    }

    return await this.productRepository.save({
      id,
      ...oldProduct,
      ...updateProductDto,
    });
  }
}
