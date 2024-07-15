import { DataSource } from 'typeorm';
import { PRODUCT_REPOSITORY } from './constants';
import { Product } from '../entities/product.entity';
import { DATA_SOURCE } from 'src/database/constants';

export const photoProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: [DATA_SOURCE],
  },
];
