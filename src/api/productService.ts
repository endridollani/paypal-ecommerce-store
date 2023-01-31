import { ProductCreateType } from '../types/Product';
import agent from './agent';

export const getAllProducts = () =>
  agent.get(
    '/products?page=1&size=5&search_query=test&sort_by=product_id&order=ASC&is_stock=true'
  );

export const createProduct = (values: ProductCreateType) =>
  agent.post('/products/create', values);
