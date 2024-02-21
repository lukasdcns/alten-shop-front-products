import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { PRODUCTS } from '../datas/mock-products';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const products = PRODUCTS;

    return { products };
  }

}
