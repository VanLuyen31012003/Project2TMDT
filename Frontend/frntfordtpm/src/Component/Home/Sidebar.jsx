import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-xl mb-4">Menu</h2>
      <Link to="/home" className="block py-2 px-4 rounded hover:bg-gray-600">Home</Link>
      <Link to="/sanpham" className="block py-2 px-4 rounded hover:bg-gray-600">Sản phẩm</Link>
      <Link to="/hoadon" className="block py-2 px-4 rounded hover:bg-gray-600">Hóa đơn</Link>
    </div>
  );
}

export default Sidebar;
