import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductRepository } from '../../repositories';
import { ProductInMemory } from '../../repositories/in-memory';
import { CreateProduct } from './create-product';

describe('Create a product', () => {
  let createProduct: CreateProduct;

  const mockedProduct = {
    name: 'Revitalizing Face Serum',
    price: 29,
    url: 'https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwf8548813/Produtos%20Joia/2024/C09/147421_DICAS_USO.jpg',
    description: null,
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateProduct,
        {
          provide: getRepositoryToken(ProductRepository),
          useClass: ProductInMemory,
        },
      ],
    }).compile();

    createProduct = module.get(CreateProduct);
  });

  it('should be defined', () => {
    expect(createProduct).toBeDefined();
  });

  it('should not be able to create a product', async () => {
    const product = await createProduct.execute(mockedProduct);
    expect(product).toHaveProperty('id');
  });

  it('should create a product', async () => {
    const product = await createProduct.execute(mockedProduct);
    expect(product).toHaveProperty('id');
  });
});
