import { ProductCreateType, ProductUpdateType } from '../types/Product';
import agent from './agent';

export const getAllProducts = () => agent.get('/products/category/test');

export const createProduct = (values: ProductCreateType) =>
  agent.post('/products/create', values);

export const updateProduct = (id: number, values: ProductUpdateType) =>
  agent.patch(`/products/${id}`, values);

export const deleteProduct = (id: number) => agent.delete(`/products/${id}`);
