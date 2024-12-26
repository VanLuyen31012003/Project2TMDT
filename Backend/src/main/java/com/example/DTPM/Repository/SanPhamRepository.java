package com.example.DTPM.Repository;

import com.example.DTPM.Entity.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SanPhamRepository extends JpaRepository<SanPham, Integer> {
    List<SanPham> findByTensanphamContainingIgnoreCase(String tensanpham);
}
