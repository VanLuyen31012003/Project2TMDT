package com.example.DTPM.Dto.Request;

public class ChiTietPnkrequest {
        private Integer masanpham; // ID sản phẩm
        private Integer soluong;
        private Float gianhap;

        // Getters and Setters


    public Integer getMasanpham() {
        return masanpham;
    }

    public void setMasanpham(Integer masanpham) {
        this.masanpham = masanpham;
    }

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
}
