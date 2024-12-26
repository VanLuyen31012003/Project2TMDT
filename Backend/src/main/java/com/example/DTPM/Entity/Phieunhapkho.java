package com.example.DTPM.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "phieunhapkho")
public class Phieunhapkho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer maphieunhapkho;

    @ManyToOne
    @JoinColumn(name = "manv", referencedColumnName = "mataikhoan")
    private TaiKhoan taikhoan;

    @ManyToOne
    @JoinColumn(name = "mancc", referencedColumnName = "mancc")
    private NhaCungCap nhaCungCap;
    private String trangthaitt;
    private LocalDateTime thoigian;
    private Float tongtien;
    private String mota;
    @OneToMany(mappedBy = "phieuNhapKho", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private List<ChiTietPNK> chiTietPNK;

    // Getters and Setters


    public Integer getMaphieunhapkho() {
        return maphieunhapkho;
    }

    public void setMaphieunhapkho(Integer maphieunhapkho) {
        this.maphieunhapkho = maphieunhapkho;
    }

    public TaiKhoan getTaikhoan() {
        return taikhoan;
    }

    public void setTaikhoan(TaiKhoan taikhoan) {
        this.taikhoan = taikhoan;
    }

    public NhaCungCap getNhaCungCap() {
        return nhaCungCap;
    }

    public void setNhaCungCap(NhaCungCap nhaCungCap) {
        this.nhaCungCap = nhaCungCap;
    }

    public String getTrangthaitt() {
        return trangthaitt;
    }

    public void setTrangthaitt(String trangthaitt) {
        this.trangthaitt = trangthaitt;
    }

    public LocalDateTime getThoigian() {
        return thoigian;
    }

    public void setThoigian(LocalDateTime thoigian) {
        this.thoigian = thoigian;
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

    public List<ChiTietPNK> getChiTietPNK() {
        return chiTietPNK;
    }

    public void setChiTietPNK(List<ChiTietPNK> chiTietPNK) {
        this.chiTietPNK = chiTietPNK;
    }
}
