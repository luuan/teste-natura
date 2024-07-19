import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from '../../entities/product.entity';
import { ProductRepository } from '../../repositories';
import { ProductInMemory } from '../../repositories/in-memory';
import { FindAllProduct } from '../find-all-product';
import { RemoveProduct } from './remove-product';

describe('Remove product', () => {
  let findAllProduct: FindAllProduct;
  let removeProduct: RemoveProduct;
  let productInMemory: ProductInMemory;
  let expectedProduct: Product;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveProduct,
        FindAllProduct,
        {
          provide: getRepositoryToken(ProductRepository),
          useClass: ProductInMemory,
        },
      ],
    }).compile();

    productInMemory = module.get(getRepositoryToken(ProductRepository));

    removeProduct = module.get(RemoveProduct);

    findAllProduct = module.get(FindAllProduct);

    await productInMemory.createProduct({
      name: 'Revitalizing Foot Serum',
      price: 200,
      url: 'https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwf8548813/Produtos%20Joia/2024/C09/147421_DICAS_USO.jpg',
      description: null,
    });

    expectedProduct = await productInMemory.createProduct({
      name: 'Revitalizing hands Serum',
      price: 80,
      url: 'https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwf8548813/Produtos%20Joia/2024/C09/147421_DICAS_USO.jpg',
      description: null,
    });
  });

  it('should be defined', () => {
    expect(removeProduct).toBeDefined();
  });

  it('should able to list products', async () => {
    await removeProduct.execute(expectedProduct.id);

    const products = await findAllProduct.execute();

    expect(products.length).toBe(1);
  });
});
