package com.example.DTPM.Dto.Request;

public class SanPhamRequest {
    private String tensanpham;
    private String mota;
    private Float giaban;
    private Integer soluongton;

    public SanPhamRequest(String tensanpham, String mota, Float giaban, Integer soluongton) {
        this.tensanpham = tensanpham;
        this.mota = mota;
        this.giaban = giaban;
        this.soluongton = soluongton;
    }
    public SanPhamRequest() {}
    // Getters và Setters
    public String getTensanpham() {
        return tensanpham;
    }

    public void setTensanpham(String tensanpham) {
        this.tensanpham = tensanpham;
    }

    public String getMota() {
        return mota;
    }

    public void setMota(String mota) {
        this.mota = mota;
    }

    public Float getGiaban() {
        return giaban;
    }

    public void setGiaban(Float giaban) {
        this.giaban = giaban;
    }

    public Integer getSoluongton() {
        return soluongton;
    }

    public void setSoluongton(Integer soluongton) {
        this.soluongton = soluongton;
    }
}
