import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import AppLayout from './layout/AppLayout';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<AppLayout />} />
      <Route path="/*" element={<AppLayout />} />
    </Routes>
  </BrowserRouter>
);
export default App;
