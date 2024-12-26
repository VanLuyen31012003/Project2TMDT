import React, { useEffect, useState } from "react";
import axios from "axios";

const ChiTietHoaDon = () => {
  const [phieuNhapKho, setPhieuNhapKho] = useState(null);

  useEffect(() => {
    // Gọi API để lấy dữ liệu
    axios
      .get("http://localhost:8080/api/pnk/getpnkbyid/10")
      .then((response) => {
        if (response.data.code === 200) {
          setPhieuNhapKho(response.data.data);
        } else {
          console.error("Lỗi lấy dữ liệu phiếu nhập kho");
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi gọi API", error);
      });
  }, []);

  if (!phieuNhapKho) {
    return <div>Đang tải dữ liệu...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Thông tin phiếu nhập kho</h1>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Mã phiếu nhập kho:</span>
            <span>{phieuNhapKho.maphieunhapkho}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Tài khoản:</span>
            <span>{phieuNhapKho.taikhoan}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Nhà cung cấp:</span>
            <span>{phieuNhapKho.nhaCungCap}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Trạng thái thanh toán:</span>
            <span>{phieuNhapKho.trangthaitt}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Thời gian:</span>
            <span>{new Date(phieuNhapKho.thoiGian).toLocaleString()}</span>
          </div>
         
          <div className="flex justify-between">
            <span className="font-medium">Mô tả:</span>
            <span>{phieuNhapKho.mota}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Tổng tiền:</span>
            <span>{phieuNhapKho.tongtien.toLocaleString()} VND</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">Chi tiết phiếu nhập kho</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b text-left font-semibold text-sm text-gray-700">Tên sản phẩm</th>
              <th className="px-6 py-3 border-b text-left font-semibold text-sm text-gray-700">Số lượng</th>
              <th className="px-6 py-3 border-b text-left font-semibold text-sm text-gray-700">Giá nhập</th>
              <th className="px-6 py-3 border-b text-left font-semibold text-sm text-gray-700">Tổng tiền</th>
              <th className="px-6 py-3 border-b text-left font-semibold text-sm text-gray-700">Ảnh sản phẩm</th>
            </tr>
          </thead>
          <tbody>
            {phieuNhapKho.chiTietPNK.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-3 border-b">{item.tensp}</td>
                <td className="px-6 py-3 border-b">{item.soluong}</td>
                <td className="px-6 py-3 border-b">{item.gianhap.toLocaleString()} VND</td>
                <td className="px-6 py-3 border-b">{item.tongtien.toLocaleString()} VND</td>
                <td className="px-6 py-3 border-b">
                  <img
                    src={item.anh}
                    alt={item.tensp}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChiTietHoaDon;
