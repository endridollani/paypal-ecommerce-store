import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/users/actions';

export function useUsersData() {
  const { data, loaded, loading } = useSelector((state: any) => state.users);

  const dispatch = useDispatch();

  const fetch = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    users: data?.items || [],
    totalPages: data?.totalPages || 1,
    currentPages: data?.currentPages || 1,
    totalItems: data?.totalItems || 0,
    loaded,
    loading,
    fetch,
  };
}
