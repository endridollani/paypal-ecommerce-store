import { Dispatch } from 'redux';
import { getAllProducts } from '../../api/productService';
import { QueryParams } from '../../types/QueryParams';
import { Products } from './types';

export const fetchProducts =
  (queryParams: QueryParams) => (dispatch: Dispatch) => {
    dispatch({
      type: Products.FETCH_PRODUCTS_START,
    });
    getAllProducts(queryParams)
      .then((response) => {
        dispatch({
          type: Products.FETCH_PRODUCTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: Products.FETCH_PRODUCTS_ERRORED,
          payload: error,
        });
      });
  };
