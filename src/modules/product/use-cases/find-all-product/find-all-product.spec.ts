import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductRepository } from '../../repositories';
import { ProductInMemory } from '../../repositories/in-memory';
import { FindAllProduct } from './find-all-product';

describe('Find All product', () => {
  let findAllProduct: FindAllProduct;
  let productInMemory: ProductInMemory;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllProduct,
        {
          provide: getRepositoryToken(ProductRepository),
          useClass: ProductInMemory,
        },
      ],
    }).compile();

    productInMemory = module.get(getRepositoryToken(ProductRepository));

    findAllProduct = module.get(FindAllProduct);

    await productInMemory.createProduct({
      name: 'Revitalizing Face Serum',
      price: 29,
      url: 'https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwf8548813/Produtos%20Joia/2024/C09/147421_DICAS_USO.jpg',
      description: null,
    });

    await productInMemory.createProduct({
      name: 'Revitalizing Foot Serum',
      price: 200,
      url: 'https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwf8548813/Produtos%20Joia/2024/C09/147421_DICAS_USO.jpg',
      description: null,
    });

    await productInMemory.createProduct({
      name: 'Revitalizing hands Serum',
      price: 80,
      url: 'https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwf8548813/Produtos%20Joia/2024/C09/147421_DICAS_USO.jpg',
      description: null,
    });
  });

  it('should be defined', () => {
    expect(findAllProduct).toBeDefined();
  });

  it('should able to list products', async () => {
    const products = await findAllProduct.execute();

    expect(products.length).toBeGreaterThanOrEqual(3);
  });
});
