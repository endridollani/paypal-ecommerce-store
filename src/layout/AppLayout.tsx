import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { IS_LOGGEDIN } from '../utils/constants';
import { getAuthUser } from '../redux/authUser/actions';
import Guest from '../pages/Guest';
import User from '../pages/User';

export default function App() {
  const isUserLoggedIn = localStorage.getItem(IS_LOGGEDIN);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(getAuthUser());
      navigate('/user');
    }
  }, []);

  if (isUserLoggedIn && pathname === '/') {
    navigate('/user');
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<Guest />} />
        <Route path="/*" element={<Guest />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Layout>
  );
}
