import { ProductModelType } from '../../types/Product';

export enum Products {
  FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERRORED = 'FETCH_PRODUCTS_ERRORED',
}
export interface ProductsState {
  data: {
    totaItems: number;
    items: Array<ProductModelType>;
    totalPages: number;
    currentPage: number;
  };
  loading: boolean;
  loaded: boolean;
  errored: boolean;
  error: any;
}
