import { randomInt } from 'crypto';
import { Product } from '../../entities/product.entity';
import { CreateProductDto } from '../../use-cases/create-product/create-product.dto';
import { UpdateProductDto } from '../../use-cases/update-product/update-product.dto';
import { IProductRepositoryInterface } from '../interfaces';

export class ProductInMemory implements IProductRepositoryInterface {
  products: Product[] = [];

  async createProduct(
    data: CreateProductDto | Partial<CreateProductDto>,
  ): Promise<Product> {
    const productPlain = new Product();

    if (data?.id) {
      const product = this.products.find((product) => product.id === data.id);

      const productIndex = this.products.findIndex(
        (product) => product.id === data.id,
      );

      Object.assign(product, {
        ...product,
        ...data,
        updatedAt: new Date(),
      });

      this.products[productIndex] = product;

      return product;
    }

    Object.assign(productPlain, {
      ...data,
      id: randomInt(256),
    });

    this.products.push(productPlain);

    return productPlain;
  }
  async findAllProduct(): Promise<Product[]> {
    const products = this.products.map((product) => product);

    return products;
  }
  async findOneProduct(id: number): Promise<Product> {
    const product = this.products.find((product) => product.id === id);

    return product;
  }
  async updateProduct(
    id: number,
    data: UpdateProductDto | Partial<UpdateProductDto>,
  ): Promise<Product> {
    const product = this.products.find((product) => product.id === data.id);

    const productIndex = this.products.findIndex(
      (product) => product.id === data.id,
    );

    Object.assign(product, {
      ...data,
      updatedAt: new Date(),
    });

    this.products[productIndex] = product;

    return product;
  }
  async removeProduct(id: number) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    this.products.splice(productIndex);
  }
}
