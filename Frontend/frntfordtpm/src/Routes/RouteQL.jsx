import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../Component/LoginAndRegisComponent/Login';
import HomePage from '../Component/HomePage';
import Product from '../Component/ProductComponent/Product';
import HoaDon from '../Component/HoaDon/HoaDon';
import TaoHoaDon from '../Component/HoaDon/TaoHoaDon';
import ChiTietHoaDon from '../Component/HoaDon/ChiTietHoaDon';

const Routesql = () => (
  <Routes>
    <Route path="/" element={<Login />} />  {/* Sử dụng element và dấu <> */}
    <Route path="/home" element={<HomePage />} />  {/* Đặt lại đường dẫn */}
    <Route path="/product" element={<Product />} />  {/* Sửa component thành element */}
    <Route path="/hoadon" element={<HoaDon />} />  {/* Sửa component thành element */}
    {/* <Route path="/taohd" element={<TaoHoaDon/>}/> */}
    <Route path="/taohd" element={<TaoHoaDon />} />
    <Route path="/cthoadon/:id" element={<ChiTietHoaDon />} />

  </Routes>
);

export default Routesql;
