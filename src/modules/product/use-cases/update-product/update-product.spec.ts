import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from '../../entities/product.entity';
import { ProductRepository } from '../../repositories';
import { ProductInMemory } from '../../repositories/in-memory';
import { FindOneProduct } from '../find-one-product';
import { UpdateProduct } from './update-product';

describe('Update a product', () => {
  let updateProduct: UpdateProduct;
  let findOneProduct: FindOneProduct
  let productInMemory: ProductInMemory;
  let productToUpdate: Product;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateProduct,
        FindOneProduct,        
        {
          provide: getRepositoryToken(ProductRepository),
          useClass: ProductInMemory,
        },
      ],
    }).compile();

    productInMemory = module.get(getRepositoryToken(ProductRepository));

    updateProduct = module.get(UpdateProduct);

    findOneProduct = module.get(FindOneProduct);

    productToUpdate = await productInMemory.createProduct({
      name: 'Revitalizing hands Serum',
      price: 80,
      url: 'https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwf8548813/Produtos%20Joia/2024/C09/147421_DICAS_USO.jpg',
      description: null,
    });
  });

  it('should be defined', () => {
    expect(updateProduct).toBeDefined();
  });

  it('should able to list products', async () => {

    const updatedProduct = await updateProduct.execute(productToUpdate.id, {...productToUpdate, price: 20, description: "Teste de descrição"});

    expect(updatedProduct).toMatchObject({
        name: 'Revitalizing hands Serum',
        price: 20,
        url: 'https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwf8548813/Produtos%20Joia/2024/C09/147421_DICAS_USO.jpg',
        description: "Teste de descrição",
      })
  });
});
