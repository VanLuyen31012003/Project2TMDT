package com.example.DTPM.Service;

import com.example.DTPM.Dto.Request.ChiTietPnkrequest;
import com.example.DTPM.Dto.Request.PhieuNhapKhoRequest;
import com.example.DTPM.Dto.Response.PhieuNhapKhoResponse;
import com.example.DTPM.Entity.*;
import com.example.DTPM.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class PhieuNhapKhoService {
    @Autowired
    PhieuNhapKhoRepository phieuNhapKhoRepository;
    @Autowired
    TaiKhoanRepository taiKhoanRepository;
    @Autowired
    NhaCungCapRepository nhaCungCapRepository;
    @Autowired
    private SanPhamRepository sanPhamRepository;
    @Autowired
    private ChiTietPnkRepository chiTietPnkRepository;

    public List<PhieuNhapKhoResponse> getallphieuNhapKho() {
        return phieuNhapKhoRepository.findAll().stream().map(t->new PhieuNhapKhoResponse(t)).toList();
    }
    public String deletepnl(int id){
        String s="xóa thất bại ";
        if (phieuNhapKhoRepository.existsById(id)) {
            phieuNhapKhoRepository.deleteById(id);
            s="xóa thành công pnk: "+id;
        } else {
            s="xóa thất bại";
        }
        return s;
    }


    public List<Phieunhapkho> getphnk(){
        return phieuNhapKhoRepository.findAll();
    }
    public PhieuNhapKhoResponse getbyid(Integer id) {
        return new PhieuNhapKhoResponse(phieuNhapKhoRepository.findById(id).get());
    }
    public PhieuNhapKhoResponse updatepnk(Integer pnkId, PhieuNhapKhoRequest phieuNhapKhoRequest) {
        // Tìm phiếu nhập kho theo ID
        Phieunhapkho pnk = phieuNhapKhoRepository.findById(pnkId)
                .orElseThrow(() -> new RuntimeException("Phiếu nhập kho không tồn tại"));

        // Tìm tài khoản nhân viên theo ID
        TaiKhoan taiKhoan = taiKhoanRepository.findById(phieuNhapKhoRequest.getManv())
                .orElseThrow(() -> new RuntimeException("Nhân viên không tồn tại"));

        // Tìm nhà cung cấp theo ID
        NhaCungCap nhaCungCap = nhaCungCapRepository.findById(phieuNhapKhoRequest.getMancc())
                .orElseThrow(() -> new RuntimeException("Nhà cung cấp không tồn tại"));

        // Cập nhật thông tin phiếu nhập kho
        pnk.setTaikhoan(taiKhoan);
        pnk.setNhaCungCap(nhaCungCap);
        pnk.setTrangthaitt(phieuNhapKhoRequest.getTrangthaitt());
        pnk.setTongtien(phieuNhapKhoRequest.getTongtien());
        pnk.setMota(phieuNhapKhoRequest.getMota());
        pnk.setThoigian(LocalDateTime.now()); // Cập nhật thời gian hiện tại

        // Lấy danh sách chi tiết PNK cũ
        List<ChiTietPNK> oldChiTietPNKList = pnk.getChiTietPNK();

//        // Hoàn trả số lượng tồn kho từ danh sách cũ
//        for (ChiTietPNK oldChiTiet : oldChiTietPNKList) {
//            SanPham oldSanPham = oldChiTiet.getSanPham();
//            oldSanPham.setSoluongton(oldSanPham.getSoluongton() - oldChiTiet.getSoluong()); // Hoàn trả số lượng
//            sanPhamRepository.save(oldSanPham); // Lưu lại sản phẩm với số lượng cập nhật
//        }
//        for (ChiTietPnkrequest chiTietRequest : phieuNhapKhoRequest.getChiTietPNK()) {
//            SanPham sanPham = sanPhamRepository.findById(chiTietRequest.getMasanpham())
//                    .orElseThrow(() -> new RuntimeException("Sản phẩm không tồn tại"));
//            sanPham.setSoluongton(sanPham.getSoluongton() + chiTietRequest.getSoluong());
//            sanPhamRepository.save(sanPham);
//        }
//        for(ChiTietPNK newChiTiet : p.getChiTietPNK()){}

        // Xóa chi tiết PNK cũ
//        pnk.getChiTietPNK().clear();  // Xóa các chi tiết trong danh sách
//        chiTietPnkRepository.deleteAll(oldChiTietPNKList);  // Xóa các chi tiết khỏi cơ sở dữ liệu

        // Tạo danh sách chi tiết PNK mới
//        List<ChiTietPNK> newChiTietPNKList = new ArrayList<>();
//        for (ChiTietPnkrequest chiTietRequest : phieuNhapKhoRequest.getChiTietPNK()) {
//            SanPham sanPham = sanPhamRepository.findById(chiTietRequest.getMasanpham())
//                    .orElseThrow(() -> new RuntimeException("Sản phẩm không tồn tại"));
//
//            // Cập nhật số lượng tồn kho mới
//            sanPham.setSoluongton(sanPham.getSoluongton() + chiTietRequest.getSoluong()); // Thêm số lượng
//            sanPhamRepository.save(sanPham); // Lưu lại sản phẩm
//
//            // Tạo chi tiết PNK mới
//            ChiTietPNK chiTietPNK = new ChiTietPNK();
//            chiTietPNK.setPhieuNhapKho(pnk); // Liên kết với phiếu nhập kho
//            chiTietPNK.setSoluong(chiTietRequest.getSoluong());
//            chiTietPNK.setGianhap(chiTietRequest.getGianhap());
//            chiTietPNK.setTongtien(chiTietRequest.getSoluong() * chiTietRequest.getGianhap());
//            chiTietPNK.setSanPham(sanPham); // Liên kết với sản phẩm
//
//            newChiTietPNKList.add(chiTietPNK); // Thêm chi tiết PNK vào danh sách mới
//        }

        // Gán danh sách chi tiết mới vào PNK
//        pnk.setChiTietPNK(newChiTietPNKList);

        // Lưu phiếu nhập kho và trả về kết quả
        return new PhieuNhapKhoResponse(phieuNhapKhoRepository.save(pnk));
    }

    public PhieuNhapKhoResponse addpnk(PhieuNhapKhoRequest phieuNhapKhoRequest) {
        TaiKhoan taiKhoan = taiKhoanRepository.findById(phieuNhapKhoRequest.getManv())
                .orElseThrow(() -> new RuntimeException("Nhân viên không tồn tại"));

        // Tìm nhà cung cấp theo ID
        NhaCungCap nhaCungCap = nhaCungCapRepository.findById(phieuNhapKhoRequest.getMancc())
                .orElseThrow(() -> new RuntimeException("Nhà cung cấp không tồn tại"));

        // Tạo đối tượng PNK
        Phieunhapkho pnk = new Phieunhapkho();
        pnk.setTaikhoan(taiKhoan);
        pnk.setNhaCungCap(nhaCungCap);
        pnk.setTrangthaitt(phieuNhapKhoRequest.getTrangthaitt());
        pnk.setTongtien(phieuNhapKhoRequest.getTongtien());
        pnk.setMota(phieuNhapKhoRequest.getMota());
        pnk.setThoigian(LocalDateTime.now());

        // Tạo danh sách chi tiết PNK
        List<ChiTietPNK> chiTietPNKList = new ArrayList<>();
        for (ChiTietPnkrequest chiTietRequest : phieuNhapKhoRequest.getChiTietPNK()) {
            SanPham sanPham = sanPhamRepository.findById(chiTietRequest.getMasanpham())
                    .orElseThrow(() -> new RuntimeException("Sản phẩm không tồn tại"));
            sanPham.setSoluongton(sanPham.getSoluongton()+ chiTietRequest.getSoluong());
            sanPhamRepository.save(sanPham);
            ChiTietPNK chiTietPNK = new ChiTietPNK();
            chiTietPNK.setPhieuNhapKho(pnk);
            chiTietPNK.setSoluong(chiTietRequest.getSoluong());
            chiTietPNK.setGianhap(chiTietRequest.getGianhap());
            chiTietPNK.setTongtien(chiTietRequest.getSoluong() * chiTietRequest.getGianhap());
            chiTietPNK.setSanPham(sanPham);

            chiTietPNKList.add(chiTietPNK);
        }

        pnk.setChiTietPNK(chiTietPNKList);


        // Lưu PNK và danh sách chi tiết vào DB
        return  new PhieuNhapKhoResponse(phieuNhapKhoRepository.save(pnk));
    }
}
