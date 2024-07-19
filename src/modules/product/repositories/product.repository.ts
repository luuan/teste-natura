import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Equal, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../use-cases/create-product/create-product.dto';
import { UpdateProductDto } from '../use-cases/update-product/update-product.dto';
import { IProductRepositoryInterface } from './interfaces';

@Injectable()
export class ProductRepository
  extends Repository<Product>
  implements IProductRepositoryInterface
{
  constructor(private dataSource: DataSource) {
    super(Product, dataSource.createEntityManager())
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return await this.save(createProductDto);
  }
  async findAllProduct(): Promise<Product[]> {
    return await this.find({select:[
      "id",
      "name",
      "price",
      "url",
      "description", 
      "createdAt", 
      "updatedAt"
    ]})
  }

  async findOneProduct(id: number): Promise<Product> {
    const product = await this.findOne({
      where: { id: Equal(id) },
    });

    if (!product) {
      throw new NotFoundException('Erro ao Buscar Registro.');
    }

    return product;
  }

  async updateProduct(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const oldProduct = await this.findOne({
      where: { id: Equal(id) },
    });

    if (!oldProduct) {
      throw new NotFoundException('Erro ao Atualizar Registro.');
    }

    return await this.save({
      id,
      ...oldProduct,
      ...updateProductDto,
    });
  }
  
  async removeProduct(id: number) {
    const productToDelete = await this.exists({
      where: { id: Equal(id) },
    });

    if (!productToDelete) {
      throw new NotFoundException('Erro ao Remover Registro.');
    }

    await this.delete({ id });
  }
}
