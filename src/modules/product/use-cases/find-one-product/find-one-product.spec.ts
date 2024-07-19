import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from '../../entities/product.entity';
import { ProductRepository } from '../../repositories';
import { ProductInMemory } from '../../repositories/in-memory';
import { FindOneProduct } from './find-one-product';

describe('Find One product', () => {
  let findOneProduct: FindOneProduct;
  let productInMemory: ProductInMemory;
  let expectedProduct: Product;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneProduct,
        {
          provide: getRepositoryToken(ProductRepository),
          useClass: ProductInMemory,
        },
      ],
    }).compile();

    productInMemory = module.get(getRepositoryToken(ProductRepository));

    findOneProduct = module.get(FindOneProduct);

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

    expectedProduct = await productInMemory.createProduct({
      name: 'Revitalizing hands Serum',
      price: 80,
      url: 'https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwf8548813/Produtos%20Joia/2024/C09/147421_DICAS_USO.jpg',
      description: null,
    });
  });

  it('should be defined', () => {
    expect(findOneProduct).toBeDefined();
  });

  it('should able to list products', async () => {
    const product = await findOneProduct.execute(expectedProduct.id);

    expect(product).toEqual(expectedProduct);
  });
});
