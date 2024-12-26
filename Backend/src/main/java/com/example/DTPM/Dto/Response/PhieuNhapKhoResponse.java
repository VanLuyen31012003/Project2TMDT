package com.example.DTPM.Dto.Response;

import com.example.DTPM.Entity.Phieunhapkho;

import java.time.LocalDateTime;
import java.util.List;

public class PhieuNhapKhoResponse {
    private Integer maphieunhapkho;
    private String taikhoan;
    private String nhaCungCap;
    private String trangthaitt;
    private LocalDateTime thoiGian;
    private Float tongtien;
    private String mota;
    private List<ChiTietPnkResponse> chiTietPNK;
    public PhieuNhapKhoResponse(Phieunhapkho phieunhapkho) {
        this.maphieunhapkho=phieunhapkho.getMaphieunhapkho();
        this.taikhoan=phieunhapkho.getTaikhoan().getTendangnhap();
        this.nhaCungCap=phieunhapkho.getNhaCungCap().getTenncc();
        this.trangthaitt=phieunhapkho.getTrangthaitt();
        this.thoiGian=phieunhapkho.getThoigian();
        this.tongtien=phieunhapkho.getTongtien();
        this.mota=phieunhapkho.getMota();
        this.chiTietPNK=phieunhapkho.getChiTietPNK().stream().map(t->new ChiTietPnkResponse(t)).toList();
    }

    public Integer getMaphieunhapkho() {
        return maphieunhapkho;
    }

    public void setMaphieunhapkho(Integer maphieunhapkho) {
        this.maphieunhapkho = maphieunhapkho;
    }

    public String getTaikhoan() {
        return taikhoan;
    }

    public void setTaikhoan(String taikhoan) {
        this.taikhoan = taikhoan;
    }

    public String getNhaCungCap() {
        return nhaCungCap;
    }

    public void setNhaCungCap(String nhaCungCap) {
        this.nhaCungCap = nhaCungCap;
    }

    public String getTrangthaitt() {
        return trangthaitt;
    }

    public void setTrangthaitt(String trangthaitt) {
        this.trangthaitt = trangthaitt;
    }

    public LocalDateTime getThoiGian() {
        return thoiGian;
    }

    public void setThoiGian(LocalDateTime thoiGian) {
        this.thoiGian = thoiGian;
    }

    public Float getTongtien() {
        return tongtien;
    }

    public void setTongtien(Float tongtien) {
        this.tongtien = tongtien;
    }

    public String getMota() {
        return mota;
    }

    public void setMota(String mota) {
        this.mota = mota;
    }

    public List<ChiTietPnkResponse> getChiTietPNK() {
        return chiTietPNK;
    }

    public void setChiTietPNK(List<ChiTietPnkResponse> chiTietPNK) {
        this.chiTietPNK = chiTietPNK;
    }
}
