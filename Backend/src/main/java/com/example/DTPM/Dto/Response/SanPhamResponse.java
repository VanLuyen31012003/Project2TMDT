package com.example.DTPM.Dto.Response;

import com.example.DTPM.Entity.SanPham;

import java.util.ArrayList;
import java.util.List;

public class SanPhamResponse {
    private Integer masanpham;
    private String tensanpham;
    private String mota;
    private Float giaban;
    private Integer soluongton;
    private String anh;

    public Integer getMasanpham() {
        return masanpham;
    }

    public void setMasanpham(Integer masanpham) {
        this.masanpham = masanpham;
    }


    // Constructor
    public SanPhamResponse(String tensanpham, String mota, Float giaban, Integer soluongton, Integer masanpham,String anh) {
        this.tensanpham = tensanpham;
        this.mota = mota;
        this.giaban = giaban;
        this.soluongton = soluongton;
        this.masanpham =   masanpham;
        this.anh = anh;
    }
    public SanPhamResponse(SanPham sanPham) {
        this.tensanpham = sanPham.getTensanpham();
        this.mota = sanPham.getMota();
        this.giaban = sanPham.getGiaban();
        this.soluongton = sanPham.getSoluongton();
        this.masanpham = sanPham.getMasanpham();
        this.anh = sanPham.getAnh();
    }

    // Getters
    public String getTensanpham() {
        return tensanpham;
    }

    public String getMota() {
        return mota;
    }

    public Float getGiaban() {
        return giaban;
    }

    public Integer getSoluongton() {
        return soluongton;
    }

    public void setTensanpham(String tensanpham) {
        this.tensanpham = tensanpham;
    }

    public void setMota(String mota) {
        this.mota = mota;
    }

    public void setGiaban(Float giaban) {
        this.giaban = giaban;
    }

    public void setSoluongton(Integer soluongton) {
        this.soluongton = soluongton;
    }

    public String getAnh() {
        return anh;
    }

    public void setAnh(String anh) {
        this.anh = anh;
    }
}
