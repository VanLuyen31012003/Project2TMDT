    package com.example.DTPM.Entity;

    import com.fasterxml.jackson.annotation.JsonBackReference;
    import jakarta.persistence.*;

    @Entity
    @Table(name = "chitietpnk")
    public class ChiTietPNK {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer machitietpnk;

        @ManyToOne
        @JoinColumn(name = "masanpham", nullable = false)
        private SanPham sanPham;

        @ManyToOne
        @JoinColumn(name = "maphieunhap", nullable = false)
        @JsonBackReference
        private Phieunhapkho phieuNhapKho;

        public Phieunhapkho getPhieuNhapKho() {
            return phieuNhapKho;
        }

        public void setPhieuNhapKho(Phieunhapkho phieuNhapKho) {
            this.phieuNhapKho = phieuNhapKho;
        }

        private Integer soluong;
        private Float gianhap;
        private Float tongtien;
        private String lohang;
        private String ghichu;

        public Integer getMachitietpnk() {
            return machitietpnk;
        }

        public void setMachitietpnk(Integer machitietpnk) {
            this.machitietpnk = machitietpnk;
        }

        public SanPham getSanPham() {
            return sanPham;
        }

        public void setSanPham(SanPham sanPham) {
            this.sanPham = sanPham;
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

        public Float getTongtien() {
            return tongtien;
        }

        public void setTongtien(Float tongtien) {
            this.tongtien = tongtien;
        }

        public String getLohang() {
            return lohang;
        }

        public void setLohang(String lohang) {
            this.lohang = lohang;
        }

        public String getGhichu() {
            return ghichu;
        }

        public void setGhichu(String ghichu) {
            this.ghichu = ghichu;
        }
    }
