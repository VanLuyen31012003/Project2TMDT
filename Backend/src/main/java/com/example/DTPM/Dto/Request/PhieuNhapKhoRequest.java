package com.example.DTPM.Dto.Request;

import java.util.List;

public class PhieuNhapKhoRequest {
    private Integer manv;  // ID nhân viên
    private Integer mancc; // ID nhà cung cấp
    private String trangthaitt;
    private Float tongtien;
    private String mota;
    private List<ChiTietPnkrequest> chiTietPNK; //
    // Chi

    public Integer getManv() {
        return manv;
    }

    public void setManv(Integer manv) {
        this.manv = manv;
    }

    public Integer getMancc() {
        return mancc;
    }

    public void setMancc(Integer mancc) {
        this.mancc = mancc;
    }

    public String getTrangthaitt() {
        return trangthaitt;
    }

    public void setTrangthaitt(String trangthaitt) {
        this.trangthaitt = trangthaitt;
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

    public List<ChiTietPnkrequest> getChiTietPNK() {
        return chiTietPNK;
    }

    public void setChiTietPNK(List<ChiTietPnkrequest> chiTietPNK) {
        this.chiTietPNK = chiTietPNK;
    }
}
