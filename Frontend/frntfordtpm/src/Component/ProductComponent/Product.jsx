import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Modal thêm sản phẩm
  const [currentProduct, setCurrentProduct] = useState(null);
  const [selectedFile, setSelectedFile] = useState(true);

  const [newProduct, setNewProduct] = useState({ // Thông tin sản phẩm mới
    tensanpham: "",
    mota: "",
    giaban: 0,
    soluongton: 0,
    anh: null,
  });

  // Lấy danh sách sản phẩm
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/sanpham/getallsp");
      if (response.data.code === 200) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu sản phẩm:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("effect")
  },[selectedFile]);

  // Mở modal cập nhật thông tin sản phẩm
  const handleProductClick = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
   // setSelectedFile(null); // Reset file khi mở modal

  };

  // Mở modal thêm sản phẩm mới
  const openAddProductModal = () => {
    setIsAddModalOpen(true);
  };

  // Đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
    setIsAddModalOpen(false);
    setCurrentProduct(null);
 //   setSelectedFile(null); // Reset file khi đóng modal

    setNewProduct({
      tensanpham: "",
      mota: "",
      giaban: 0,
      soluongton: 0,
      anh: null,
    });
  };

  // Cập nhật sản phẩm
  const handleSave = async () => {
    console.log("Đang chạy hàm lưu");

    if (!currentProduct.tensanpham || currentProduct.giaban <= 0 || currentProduct.soluongton < 0) {
      alert("Vui lòng nhập thông tin hợp lệ");
      console.log("Đang chạy hàm lưu1");

      return;
    }
    try {
      const formData = new FormData();
      formData.append("tensanpham", currentProduct.tensanpham);
      formData.append("mota", currentProduct.mota);
      formData.append("giaban", currentProduct.giaban);
      formData.append("soluongton", currentProduct.soluongton);
      if (currentProduct.anh) {
        formData.append("anh", currentProduct.anh);  // Đây có thể là tệp ảnh
      }
     
      const response = await axios.put(
        `http://localhost:8080/api/sanpham/updatesp/${currentProduct.masanpham}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.code === 200) {
     //   products.anh = URL.createObjectURL(selectedFile); // Tạo URL mới cho ảnh đã chọn

        setProducts(
          products.map((product) =>
            product.masanpham === currentProduct.masanpham ? currentProduct : product
          )
        );
        setSelectedFile(!selectedFile)
        closeModal();
        alert("Cập nhật sản phẩm thành công");
      } else {
        console.error("Lỗi khi cập nhật sản phẩm");
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu cập nhật sản phẩm:", error);
    }
  };

  // Thêm sản phẩm
  const handleAddProduct = async () => {
    if (!newProduct.tensanpham || newProduct.giaban <= 0 || newProduct.soluongton < 0) {
      alert("Vui lòng nhập thông tin hợp lệ");
      return;
    }

    const formData = new FormData();
    formData.append("tensanpham", newProduct.tensanpham);
    formData.append("mota", newProduct.mota);
    formData.append("giaban", newProduct.giaban);
    formData.append("soluongton", newProduct.soluongton);
    if (newProduct.anh) {
      formData.append("anh", newProduct.anh);
    }

    try {
      const response = await axios.post("http://localhost:8080/api/sanpham/addsp", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.code === 200) {
        
        setProducts([...products, response.data.data]);
        closeModal();
        alert("Thêm sản phẩm thành công");
      } else {
        console.error("Lỗi khi thêm sản phẩm");
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu thêm sản phẩm:", error);
    }
  };

  // Xóa sản phẩm
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/sanpham/removesp/${currentProduct.masanpham}`);
      setProducts(products.filter((product) => product.masanpham !== currentProduct.masanpham));
      closeModal();
      alert("Sản phẩm đã bị xóa");
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };

  return (
    <div className="max-w-7xl border mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Danh sách sản phẩm</h2>

      {/* Nút thêm sản phẩm */}
      <button
        onClick={openAddProductModal}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
      >
        Thêm sản phẩm
      </button>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.masanpham}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.anh || "https://via.placeholder.com/150"}
              alt={product.tensanpham}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{product.tensanpham}</h3>
            <p className="text-gray-600">Giá: {product.giaban.toLocaleString()} VND</p>
            <p className="text-gray-600">SL: {product.soluongton}</p>
          </div>
        ))}
      </div>

      {/* Modal cập nhật sản phẩm */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Thông tin sản phẩm</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Ảnh</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCurrentProduct({ ...currentProduct, anh: e.target.files[0] })}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
              <input
                type="text"
                value={currentProduct.tensanpham}
                onChange={(e) =>
                  setCurrentProduct({ ...currentProduct, tensanpham: e.target.value })
                }
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Mô tả</label>
              <textarea
                value={currentProduct.mota}
                onChange={(e) =>
                  setCurrentProduct({ ...currentProduct, mota: e.target.value })
                }
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Giá bán</label>
              <input
                type="number"
                value={currentProduct.giaban}
                onChange={(e) =>
                  setCurrentProduct({ ...currentProduct, giaban: e.target.value })
                }
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Số lượng tồn</label>
              <input
                type="number"
                value={currentProduct.soluongton}
                onChange={(e) =>
                  setCurrentProduct({ ...currentProduct, soluongton: e.target.value })
                }
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Lưu
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Xóa
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-white rounded-lg hover:bg-gray-400"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal thêm sản phẩm */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Thêm sản phẩm mới</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
              <input
                type="text"
                value={newProduct.tensanpham}
                onChange={(e) => setNewProduct({ ...newProduct, tensanpham: e.target.value })}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Mô tả</label>
              <textarea
                value={newProduct.mota}
                onChange={(e) => setNewProduct({ ...newProduct, mota: e.target.value })}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Giá bán</label>
              <input
                type="number"
                value={newProduct.giaban}
                onChange={(e) => setNewProduct({ ...newProduct, giaban: e.target.value })}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Số lượng tồn</label>
              <input
                type="number"
                value={newProduct.soluongton}
                onChange={(e) => setNewProduct({ ...newProduct, soluongton: e.target.value })}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Ảnh sản phẩm</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setNewProduct({ ...newProduct, anh: e.target.files[0] })
                }
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleAddProduct}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Thêm sản phẩm
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-white rounded-lg hover:bg-gray-400"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
