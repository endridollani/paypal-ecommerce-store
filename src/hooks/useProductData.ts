import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/products/action';

export function useProductData() {
  const { data, loaded, loading } = useSelector((state: any) => state.products);

  const dispatch = useDispatch();

  const fetch = () => {
    dispatch(
      fetchProducts({
        search_query: 'Laptop',
        is_stock: true,
        category: 'Laptop',
      })
    );
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    products: data?.items || [],
    totalPages: data?.totalPages || 1,
    currentPages: data?.currentPages || 1,
    totalItems: data?.totalItems || 0,
    loaded,
    loading,
    fetch,
  };
}
