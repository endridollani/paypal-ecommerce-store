import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import AppLayout from './layout/AppLayout';
import Guest from './pages/Guest';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/" element={<AppLayout />} />
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </>
);
export default App;
