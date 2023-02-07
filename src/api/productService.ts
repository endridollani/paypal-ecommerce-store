import { ProductCreateType, ProductUpdateType } from '../types/Product';
import { QueryParams } from '../types/QueryParams';
import agent from './agent';

export const getAllProducts = (queryParams: QueryParams) => {
  if (queryParams.category) {
    return agent.get(`/products/category/${queryParams.category}`);
  }
  return agent.get(
    `/products/?page=1&size=3&search_query=${queryParams.search_query}&sort_by=product_id&order=ASC&is_stock=${queryParams.is_stock}`
  );
};

export const createProduct = (values: ProductCreateType) =>
  agent.post('/products/create', values);

export const updateProduct = (id: number, values: ProductUpdateType) =>
  agent.patch(`/products/${id}`, values);

export const deleteProduct = (id: number) => agent.delete(`/products/${id}`);
