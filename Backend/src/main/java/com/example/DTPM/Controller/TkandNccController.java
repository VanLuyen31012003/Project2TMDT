package com.example.DTPM.Controller;

import com.example.DTPM.Dto.Request.UserRequest;
import com.example.DTPM.Dto.Response.ApiResponse;
import com.example.DTPM.Entity.NhaCungCap;
import com.example.DTPM.Entity.TaiKhoan;
import com.example.DTPM.Service.TaiKhoanNccService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tkncc")

public class TkandNccController {
    @Autowired
    TaiKhoanNccService tknccService;
    @GetMapping("/getallNCC")
    public ApiResponse<List<NhaCungCap>> getAllNCC() {
        ApiResponse<List<NhaCungCap>> apiResponse = new ApiResponse<>();
        apiResponse.setData(tknccService.getallNhaCungCap());
        return apiResponse;
    }
    @GetMapping("/getaltk")
    public ApiResponse<List<TaiKhoan>> getAlltk() {
        ApiResponse<List<TaiKhoan>> apiResponse = new ApiResponse<>();
        apiResponse.setData(tknccService.getalltk());
        return apiResponse;
    }
    @PostMapping("/getiduser")
    public  ApiResponse<TaiKhoan> gettkbyname(@RequestBody UserRequest userRequest) {
        ApiResponse<TaiKhoan> apiResponse = new ApiResponse<>();
        apiResponse.setData(tknccService.getTaiKhoanByname(userRequest.getTendangnhap()));
        return apiResponse;
    }
    @PostMapping("/login")
    public ApiResponse<String>login(@RequestBody UserRequest userRequest){
        ApiResponse<String> apiResponse = new ApiResponse<>();
        if(tknccService.login(userRequest)){
            apiResponse.setData("Success");
            return apiResponse;
        }
        else
        {
            apiResponse.setData("Failure");
            return apiResponse;
        }


    }
}
