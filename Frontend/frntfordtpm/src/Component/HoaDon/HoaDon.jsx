import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function HoaDon() {
    const [hoaDons, setHoaDons] = useState([]);
    const [nhaCungCaps, setNhaCungCaps] = useState([]);
    const [nhanViens, setNhanViens] = useState([]);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedHoaDon, setSelectedHoaDon] = useState(null);
    const navigate =useNavigate()
    const [formData, setFormData] = useState({
        manv: 6,
        mancc: 1,
        trangthaitt: '',
        tongtien: '',
        mota: '',
        chiTietPNK: []
    });

    useEffect(() => {
        // Fetch data from the hóa đơn API
        axios
            .get('http://localhost:8080/api/pnk/getallpnk')
            .then(response => {
                if (response.data.code === 200) {
                    setHoaDons(response.data.data);
                } else {
                    setError('Không thể tải dữ liệu hóa đơn.');
                }
            })
            .catch(error => {
                setError('Lỗi kết nối API.');
                console.error(error);
            });

        // Fetch data from the nhà cung cấp API
        axios
            .get('http://localhost:8080/api/tkncc/getallNCC')
            .then(response => {
                if (response.data.code === 200) {
                    setNhaCungCaps(response.data.data);
                } else {
                    setError('Không thể tải danh sách nhà cung cấp.');
                }
            })
            .catch(error => {
                setError('Lỗi kết nối API nhà cung cấp.');
                console.error(error);
            });

        // Fetch data from the nhân viên API
        axios
            .get('http://localhost:8080/api/tkncc/getaltk')
            .then(response => {
                if (response.data.code === 200) {
                    setNhanViens(response.data.data);
                } else {
                    setError('Không thể tải danh sách nhân viên.');
                }
            })
            .catch(error => {
                setError('Lỗi kết nối API nhân viên.');
                console.error(error);
            });
    }, [isModalOpen]);

    const handleEdit = id => {
        // Find the selected invoice
        const hoaDonToEdit = hoaDons.find(hoaDon => hoaDon.maphieunhapkho === id);
        if (hoaDonToEdit) {
            setSelectedHoaDon(hoaDonToEdit);
            setFormData({
                manv: hoaDonToEdit.manv,
                mancc: hoaDonToEdit.mancc,
                trangthaitt: hoaDonToEdit.trangthaitt,
                tongtien: hoaDonToEdit.tongtien,
                mota: hoaDonToEdit.mota,
                chiTietPNK: hoaDonToEdit.chiTietPNK
            });
            setIsModalOpen(true);
        }
    };

    const handleDelete = async id => {
        try {
            await axios.delete(`http://localhost:8080/api/pnk/deletepnk/${id}`);
            setHoaDons(hoaDons.filter(hoaDon => hoaDon.maphieunhapkho !== id));
            alert("Sản phẩm đã bị xóa");
        } catch (error) {
            console.error("Lỗi khi xóa sản phẩm:", error);
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = () => {
        let url = `http://localhost:8080/api/pnk/updatepnl/${selectedHoaDon.maphieunhapkho}`;
        // alert("url:"+url)
        console.log(formData)
        axios
            .put(url, formData)
            .then(response => {
                if (response.data.code === 200) {
                    // Update the invoice in the list
                    setHoaDons(prevHoaDons =>
                        prevHoaDons.map(hoaDon =>
                            hoaDon.maphieunhapkho === selectedHoaDon.maphieunhapkho ? { ...hoaDon, ...formData } : hoaDon
                        )
                    );
                    setIsModalOpen(false);
                    alert("Hóa đơn đã được cập nhật");
                } else {
                    alert("Không thể cập nhật hóa đơn");
                }
            })
            .catch(error => {
                console.error("Lỗi khi cập nhật hóa đơn:", error);
                alert("loi rồi")
            });
    };
   
    const handleRowClick = (hoaDon) => {
       // alert(`Bạn đã click vào dòng hóa đơn với mã: ${hoaDon.maphieunhapkho}`);
       let b =hoaDon.maphieunhapkho
        navigate(`/cthoadon/${b}`)
        
      };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Danh sách phiếu nhập kho</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <Link
                to="/taohd"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-4 inline-block"
            >
                Tạo mới phiếu nhập kho
            </Link>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Mã phiếu</th>
                            <th className="border border-gray-300 px-4 py-2">Người tạocd</th>
                            <th className="border border-gray-300 px-4 py-2">Nhà cung cấp</th>
                            <th className="border border-gray-300 px-4 py-2">Trạng thái</th>
                            <th className="border border-gray-300 px-4 py-2">Thời gian</th>
                            <th className="border border-gray-300 px-4 py-2">Tổng tiền</th>
                            <th className="border border-gray-300 px-4 py-2">Mô tả</th>
                            <th className="border border-gray-300 px-4 py-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hoaDons.map(hoaDon => (
                            <tr key={hoaDon.maphieunhapkho} onClick={() => handleRowClick(hoaDon)} >
                                <td className="border border-gray-300 px-4 py-2">{hoaDon.maphieunhapkho}</td>
                                <td className="border border-gray-300 px-4 py-2">{hoaDon.taikhoan}</td>
                                <td className="border border-gray-300 px-4 py-2">{hoaDon.nhaCungCap}</td>
                                <td className="border border-gray-300 px-4 py-2">{hoaDon.trangthaitt}</td>
                                <td className="border border-gray-300 px-4 py-2">{new Date(hoaDon.thoiGian).toLocaleString()}</td>
                                <td className="border border-gray-300 px-4 py-2">{hoaDon.tongtien.toLocaleString()} VND</td>
                                <td className="border border-gray-300 px-4 py-2">{hoaDon.mota}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 mr-2 rounded hover:bg-blue-700"
                                        onClick={(e) => {e.stopPropagation();handleEdit(hoaDon.maphieunhapkho)}}
                                    >
                                        Cập nhật
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                                        onClick={(e) =>{ e.stopPropagation();handleDelete(hoaDon.maphieunhapkho)}}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for Editing Invoice */}
            {isModalOpen && selectedHoaDon && (
                <div className="modal">
                    <div className="modal-content">
                        <h2 className="text-xl font-bold mb-4">Chỉnh sửa hóa đơn</h2>
                        <label>Nhân viên tạo</label>
                        <select
                            name="manv"
                            value={formData.manv}
                            onChange={handleFormChange}
                            className="border border-gray-300 p-2 mb-4"
                        >
                            {nhanViens.map(nv => (
                                <option key={nv.mataikhoan} value={nv.mataikhoan}>
                                    {nv.tendangnhap} 
                                </option>
                            ))}
                        </select>
                        <label>Nhà cung cấp</label>
                        <select
                            name="mancc"
                            value={formData.mancc}
                            onChange={handleFormChange}
                            className="border border-gray-300 p-2 mb-4"
                        >
                            {nhaCungCaps.map(ncc => (
                                <option key={ncc.mancc} value={ncc.mancc}>
                                    {ncc.tenncc}
                                </option>
                            ))}
                        </select>
                        <label>Trạng thái thanh toán</label>
                        <input
                            type="text"
                            name="trangthaitt"
                            value={formData.trangthaitt}
                            onChange={handleFormChange}
                            className="border border-gray-300 p-2 mb-4"
                        />
                        <label>Tổng tiền</label>
                        <input
                            type="number"
                            name="tongtien"
                            value={formData.tongtien}
                            onChange={handleFormChange}
                            className="border border-gray-300 p-2 mb-4"
                        />
                        <label>Mô tả</label>
                        <input
                            type="text"
                            name="mota"
                            value={formData.mota}
                            onChange={handleFormChange}
                            className="border border-gray-300 p-2 mb-4"
                        />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                            onClick={handleUpdate}
                        >
                            Cập nhật
                        </button>
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HoaDon;
