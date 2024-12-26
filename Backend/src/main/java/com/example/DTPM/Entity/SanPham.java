package com.example.DTPM.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "SANPHAM")
public class SanPham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer masanpham;
    String tensanpham;
    String mota;
    Float giaban;
    Integer soluongton;
    String anh;

    @OneToMany(mappedBy = "sanPham", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ChiTietPNK> chiTietPNKs;
    public Integer getMasanpham() {
        return masanpham;
    }

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

    public void setMasanpham(Integer masanpham) {
        this.masanpham = masanpham;
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
    public List<ChiTietPNK> getChiTietPNKs() {
        return chiTietPNKs;
    }
    public void setChiTietPNKs(List<ChiTietPNK> chiTietPNKs) {
        this.chiTietPNKs = chiTietPNKs;
    }

    public String getAnh() {
        return anh;
    }

    public void setAnh(String anh) {
        this.anh = anh;
    }
}
