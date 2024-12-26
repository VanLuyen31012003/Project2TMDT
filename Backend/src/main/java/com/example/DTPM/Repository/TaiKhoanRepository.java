package com.example.DTPM.Repository;

import com.example.DTPM.Entity.TaiKhoan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TaiKhoanRepository extends JpaRepository<TaiKhoan, Integer> {
    Optional<TaiKhoan> findByTendangnhap(String taikhoan);
}
