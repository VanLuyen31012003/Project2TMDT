package com.example.DTPM.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "taikhoan")
public class TaiKhoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mataikhoan;
    private String tendangnhap;
    private String matkhau;
    private String loaitaikhoan;

    public Integer getMataikhoan() {
        return mataikhoan;
    }

    public void setMataikhoan(Integer mataikhoan) {
        this.mataikhoan = mataikhoan;
    }

    public String getTendangnhap() {
        return tendangnhap;
    }

    public void setTendangnhap(String tendangnhap) {
        this.tendangnhap = tendangnhap;
    }

    public String getMatkhau() {
        return matkhau;
    }

    public void setMatkhau(String matkhau) {
        this.matkhau = matkhau;
    }

    public String getLoaitaikhoan() {
        return loaitaikhoan;
    }

    public void setLoaitaikhoan(String loaitaikhoan) {
        this.loaitaikhoan = loaitaikhoan;
    }
}
