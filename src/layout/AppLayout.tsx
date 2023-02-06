import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { IS_LOGGEDIN } from '../utils/constants';
import { getAuthUser } from '../redux/authUser/actions';
import Admin from '../pages/Admin';
import { isAdmin, isUser } from '../utils/utilFunctions';

export enum SCREE_SIZE {
  SMALL = 'sm',
  MEDIUM = 'md',
}

export function getWindowSize() {
  const { innerWidth } = window;
  if (innerWidth < 1200) {
    return SCREE_SIZE.SMALL;
  }
  return SCREE_SIZE.MEDIUM;
}

export default function App() {
  const authUserState = useSelector((state: any) => state.authUser);
  const isUserLoggedIn = localStorage.getItem(IS_LOGGEDIN);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(getAuthUser());
    }
  }, []);
  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate('/guest');
    }
    if (isAdmin(authUserState) || true) {
      navigate('/admin');
    }
    if (isUser(authUserState)) {
      navigate('user/');
    }
  }, [authUserState]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Routes>
        <Route path="/admin">
          <Route path="" element={<Admin />} />
        </Route>
      </Routes>
    </Layout>
  );
}
