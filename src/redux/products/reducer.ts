import { Reducer } from 'react';
import { Action } from 'redux';
import { Products, ProductsState } from './types';

const initialState: ProductsState = {
  data: {
    totaItems: 0,
    items: [],
    totalPages: 0,
    currentPage: 0,
  },
  loading: false,
  loaded: false,
  errored: false,
  error: null,
};
const ProductsReducer: Reducer<ProductsState, Action> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case Products.FETCH_PRODUCTS_START:
      state = { ...state, loading: true };
      break;
    case Products.FETCH_PRODUCTS_SUCCESS:
      state = { ...state, loading: false, loaded: true, data: action.payload };
      break;
    case Products.FETCH_PRODUCTS_ERRORED:
      state = {
        ...state,
        loading: false,
        loaded: false,
        errored: true,
        error: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export { ProductsReducer };
