import { Product } from '../../entities/product.entity';
import { CreateProductDto } from '../../use-cases/create-product/create-product.dto';
import { UpdateProductDto } from '../../use-cases/update-product/update-product.dto';

export interface IProductRepositoryInterface {
  createProduct(createProductDto: CreateProductDto): Promise<Product>;
  findAllProduct(): Promise<Product[]>;
  findOneProduct(id: number): Promise<Product>;
  updateProduct(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product>;
  removeProduct(id: number): void;
}
