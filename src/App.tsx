import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import AppLayout from './layout/AppLayout';

import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<AppLayout />} />
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </>
);
export default App;
