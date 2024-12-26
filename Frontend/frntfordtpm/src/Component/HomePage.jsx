import React from 'react';
import { Link } from 'react-router-dom';  // Import Link từ react-router-dom
import Product from './ProductComponent/Product';
import HoaDon from './HoaDon/HoaDon';

function HomePage(props) {
    return (
        <div>
            <h1>Đây là trang home page</h1>
            {/* Các liên kết để điều hướng */}
            <div>
                <Link to="/product">
                    <button className="p-2 bg-blue-500 text-white rounded">Sản phẩm</button>
                </Link>
                <Link to="/hoadon">
                    <button className="p-2 bg-green-500 text-white rounded">Phiếu nhập kho</button>
                </Link>
               
            </div>
        </div>
    );
}

export default HomePage;
