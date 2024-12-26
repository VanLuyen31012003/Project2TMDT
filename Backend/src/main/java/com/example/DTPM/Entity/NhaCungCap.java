package com.example.DTPM.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "nhacungcap")
public class NhaCungCap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mancc;
    private String tenncc;
    private String diachi;

    public String getDiachi() {
        return diachi;
    }

    public void setDiachi(String diachi) {
        this.diachi = diachi;
    }

    public Integer getMancc() {
        return mancc;
    }

    public void setMancc(Integer mancc) {
        this.mancc = mancc;
    }

    public String getTenncc() {
        return tenncc;
    }

    public void setTenncc(String tenncc) {
        this.tenncc = tenncc;
    }
}
