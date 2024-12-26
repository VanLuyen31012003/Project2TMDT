package com.example.DTPM.Dto.Response;

import com.example.DTPM.Entity.ChiTietPNK;

public class ChiTietPnkResponse {
  //  private Integer machitietpnk;
    private String tensp;
  //  private int maphieunhap;
    private Integer soluong;
    private Float gianhap;
    private Float tongtien;

    public String getAnh() {
        return anh;
    }

    public void setAnh(String anh) {
        this.anh = anh;
    }

    private String anh;
   // private String lohang;
 //   private String ghichu;

    public ChiTietPnkResponse(ChiTietPNK chiTietPNK) {
      //  this.machitietpnk= chiTietPNK.getMachitietpnk();
        this.tensp =chiTietPNK.getSanPham().getTensanpham();
        this.anh = chiTietPNK.getSanPham().getAnh();
       // this.maphieunhap=chiTietPNK.getPhieuNhapKho().getMaphieunhapkho();
        this.soluong=chiTietPNK.getSoluong();
        this.gianhap=chiTietPNK.getGianhap();
        this.tongtien=chiTietPNK.getTongtien();
        //this.lohang=chiTietPNK.getLohang();
      //  this.ghichu=chiTietPNK.getGhichu();
    }

//    public Integer getMachitietpnk() {
//        return machitietpnk;
//    }

//    public void setMachitietpnk(Integer machitietpnk) {
//        this.machitietpnk = machitietpnk;
//    }

    public String getTensp() {
        return tensp;
    }

    public void setTensp(String tensp) {
        this.tensp = tensp;
    }

//    public int getMaphieunhap() {
//        return maphieunhap;
//    }

//    public void setMaphieunhap(int maphieunhap) {
//        this.maphieunhap = maphieunhap;
//    }

    public Integer getSoluong() {
        return soluong;
    }

    public void setSoluong(Integer soluong) {
        this.soluong = soluong;
    }

    public Float getGianhap() {
        return gianhap;
    }

    public void setGianhap(Float gianhap) {
        this.gianhap = gianhap;
    }

    public Float getTongtien() {
        return tongtien;
    }

    public void setTongtien(Float tongtien) {
        this.tongtien = tongtien;
    }

//    public String getLohang() {
//        return lohang;
//    }

//    public void setLohang(String lohang) {
//        this.lohang = lohang;
//    }
//
//    public String getGhichu() {
//        return ghichu;
//    }

//    public void setGhichu(String ghichu) {
//        this.ghichu = ghichu;
//    }
}
