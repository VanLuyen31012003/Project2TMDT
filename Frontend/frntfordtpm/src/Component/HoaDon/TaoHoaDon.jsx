import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateHoaDon() {
  const navigate = useNavigate();

  const [newHoaDon, setNewHoaDon] = useState({
    manv: localStorage.getItem("mataikhoan"), // Mã nhân viên
    mancc: "", // Mã nhà cung cấp
    trangthaitt: "Thành công", // Trạng thái thanh toán
    tongtien: 0, // Tổng tiền
    mota: "", // Mô tả
    chiTietPNK: [], // Chi tiết phiếu nhập kho
  });

  const [nhaCungCaps, setNhaCungCaps] = useState([]);
  const [loadingNCC, setLoadingNCC] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const [error, setError] = useState("");
  const [image,setImage]=useState([]);

  // Gọi API lấy danh sách nhà cung cấp
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tkncc/getallNCC")
      .then((response) => {
        if (response.data.code === 200) {
          setNhaCungCaps(response.data.data);
        } else {
          setError("Không thể tải dữ liệu nhà cung cấp.");
        }
        setLoadingNCC(false);
      })
      .catch((err) => {
        setError("Lỗi kết nối API.");
        console.error(err);
        setLoadingNCC(false);
      });
  }, []);

  // Tìm kiếm sản phẩm
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    setLoadingSearch(true);
    axios
      .get(`http://localhost:8080/api/sanpham/searchSp?ten=${query}`)
      .then((response) => {
        if (response.data.code === 200) {
          setSearchResults(response.data.data);
        } else {
          setSearchResults([]);
        }
        setLoadingSearch(false);
      })
      .catch((err) => {
        setError("Lỗi khi tìm kiếm sản phẩm.");
        console.error(err);
        setLoadingSearch(false);
      });
  };

  // Thêm sản phẩm vào chi tiết phiếu nhập kho
  const handleAddProduct = (product) => {
    const exists = newHoaDon.chiTietPNK.some(
      (item) => item.masanpham === product.masanpham
    );
    if (exists) {
      alert("Sản phẩm này đã có trong phiếu nhập.");
      return;
    }

    const newDetail = {
      masanpham: product.masanpham,
      tensanpham: product.tensanpham,
      soluong: 1,
      gianhap: product.giaban,
      thanhTien: product.giaban,
      
    };
    let newitem=product.anh
    setImage((prevItem)=>[...prevItem,newitem])

    setNewHoaDon((prevState) => ({
      ...prevState,
      chiTietPNK: [...prevState.chiTietPNK, newDetail],
    }));

    setSearchResults([]); // Xóa kết quả tìm kiếm sau khi chọn sản phẩm
    setSearchQuery("");
  };

  // Cập nhật số lượng hoặc giá nhập của sản phẩm
  const handleDetailChange = (index, field, value) => {
    const updatedDetails = newHoaDon.chiTietPNK.map((item, idx) =>
      idx === index
        ? {
            ...item,
            [field]: value,
            thanhTien:
              field === "gianhap" || field === "soluong"
                ? value * (field === "soluong" ? item.gianhap : item.soluong)
                : item.thanhTien,
          }
        : item
    );

    setNewHoaDon((prevState) => ({
      ...prevState,
      chiTietPNK: updatedDetails,
      tongtien: updatedDetails.reduce((sum, item) => sum + item.thanhTien, 0),
    }));
  };

  // Xóa sản phẩm khỏi chi tiết phiếu nhập kho
  const handleRemoveProduct = (index) => {
    const updatedDetails = newHoaDon.chiTietPNK.filter(
      (_, idx) => idx !== index
    );

    setNewHoaDon((prevState) => ({
      ...prevState,
      chiTietPNK: updatedDetails,
      tongtien: updatedDetails.reduce((sum, item) => sum + item.thanhTien, 0),
    }));
  };

  const handleCreateHoaDon = () => {
    axios
      .post("http://localhost:8080/api/pnk/addpnk", newHoaDon)
      .then((response) => {
        if (response.data.code === 200) {
          alert("Tạo hóa đơn thành công!");
          navigate("/hoadon");
        } else {
          alert("Không thể tạo hóa đơn.");
        }
      })
      .catch((error) => {
        alert("Lỗi khi tạo hóa đơn.");
        console.error(error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tạo mới hóa đơn</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form>
        <div className="mb-4">
          <label className="block font-medium">Nhân viên tạo</label>
          <input
            type="text"
            name="manv"
            value={localStorage.getItem("tendangnhap")}
            className="border border-gray-300 rounded w-full p-2"
            placeholder="Nhập mã nhân viên"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Nhà cung cấp</label>
          {loadingNCC ? (
            <p>Đang tải danh sách nhà cung cấp...</p>
          ) : (
            <select
              name="mancc"
              value={newHoaDon.mancc}
              onChange={(e) =>
                setNewHoaDon((prevState) => ({
                  ...prevState,
                  mancc: e.target.value,
                }))
              }
              className="border border-gray-300 rounded w-full p-2"
            >
              <option value="">Chọn nhà cung cấp</option>
              {nhaCungCaps.map((ncc) => (
                <option key={ncc.mancc} value={ncc.mancc}>
                  {ncc.tenncc}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium">Mô tả</label>
          <textarea
            name="mota"
            value={newHoaDon.mota}
            onChange={(e) =>
              setNewHoaDon((prevState) => ({
                ...prevState,
                mota: e.target.value,
              }))
            }
            className="border border-gray-300 rounded w-full p-2"
            placeholder="Nhập mô tả cho hóa đơn"
          />
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Chi tiết phiếu nhập kho</h3>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Tìm kiếm sản phẩm"
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
          {loadingSearch ? (
            <p>Đang tìm kiếm...</p>
          ) : (
            <ul className="border border-gray-300 rounded p-2">
              {searchResults.map((product,index) => (
                <li
                  key={product.masanpham}
                  className="p-2 cursor-pointer hover:bg-gray-100 flex items-center gap-4"
                  onClick={() => handleAddProduct(product)}
                >
                  {product.anh && (
                    <img
                      src={product.anh}
                      alt={product.tensanpham}
                      className="w-12 h-12 object-cover rounded"
                    />
                  )}
                  <span>{product.tensanpham}</span>
                </li>
              ))}
            </ul>
          )}

          {newHoaDon.chiTietPNK.map((detail, index) => (
            <div key={index} className="mb-2 border-b pb-2">
              <p className="font-bold flex justify-between">
                {detail.tensanpham}
                <button
                  type="button"
                  onClick={() => handleRemoveProduct(index)}
                  className="text-red-500"
                >
                  &#10005;
                </button>
              </p>
              <div className="flex gap-4">
                <img
                      src={image[index]}
                      alt={detail.tensanpham}
                      className="w-12 h-12 object-cover rounded"
                    />
                  
                <input
                  type="number"
                  value={detail.soluong}
                  onChange={(e) =>
                    handleDetailChange(index, "soluong", e.target.value)
                  }
                  placeholder="Số lượng"
                  className="border border-gray-300 rounded p-2"
                />
                <input
                  type="number"
                  value={detail.gianhap}
                  onChange={(e) =>
                    handleDetailChange(index, "gianhap", e.target.value)
                  }
                  placeholder="Giá nhập"
                  className="border border-gray-300 rounded p-2"
                />
                <p>Tổng: {detail.thanhTien}</p>
              </div>
            </div>
          ))}

          <p className="font-bold">Tổng tiền: {newHoaDon.tongtien}</p>
        </div>

        <button
          type="button"
          onClick={handleCreateHoaDon}
          className="bg-blue-500 text-white rounded py-2 px-4"
        >
          Tạo hóa đơn
        </button>
      </form>
    </div>
  );
}

export default CreateHoaDon;
