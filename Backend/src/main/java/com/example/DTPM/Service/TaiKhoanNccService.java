package com.example.DTPM.Service;

import com.example.DTPM.Dto.Request.UserRequest;
import com.example.DTPM.Entity.NhaCungCap;
import com.example.DTPM.Entity.TaiKhoan;
import com.example.DTPM.Repository.NhaCungCapRepository;
import com.example.DTPM.Repository.TaiKhoanRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaiKhoanNccService {
    @Autowired
    TaiKhoanRepository taikhoanRepository;
    @Autowired
    NhaCungCapRepository nhaCungCapRepository;
    public List<NhaCungCap> getallNhaCungCap() {
        return nhaCungCapRepository.findAll();
    }
    public  TaiKhoan getTaiKhoanByname(String name) {
        return taikhoanRepository.findByTendangnhap(name).get();
    }
    public  List<TaiKhoan> getalltk() {
        return taikhoanRepository.findAll();
    }
    public boolean login(UserRequest userRequest) {
        try {
            if(taikhoanRepository.findByTendangnhap(userRequest.getTendangnhap()) != null) {
                TaiKhoan taiKhoan =taikhoanRepository.findByTendangnhap(userRequest.getTendangnhap()).get();
                if (taiKhoan.getMatkhau().equals(userRequest.getMatkhau())) {
                    return true;
                }
                else return false;
            }
            else return false;
        }catch (Exception e) {
            return false;
        }


    }

}
