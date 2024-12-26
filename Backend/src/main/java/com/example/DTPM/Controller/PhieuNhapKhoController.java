package com.example.DTPM.Controller;

import com.example.DTPM.Dto.Request.PhieuNhapKhoRequest;
import com.example.DTPM.Dto.Response.ApiResponse;
import com.example.DTPM.Dto.Response.PhieuNhapKhoResponse;
import com.example.DTPM.Entity.Phieunhapkho;
import com.example.DTPM.Service.PhieuNhapKhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pnk")
public class PhieuNhapKhoController {
    @Autowired
    private PhieuNhapKhoService phieuNhapKhoService;
    @GetMapping("/getallpnk")
    public ApiResponse<List<PhieuNhapKhoResponse>>getallpnk(){
        ApiResponse<List<PhieuNhapKhoResponse>> apiResponse = new ApiResponse<>();
        apiResponse.setData(phieuNhapKhoService.getallphieuNhapKho());
        return apiResponse;
    }
    @PutMapping("/updatepnl/{id}")
    public  ApiResponse<PhieuNhapKhoResponse> updatepnl(@PathVariable int id,@RequestBody PhieuNhapKhoRequest pnl){
        ApiResponse<PhieuNhapKhoResponse> apiResponse = new ApiResponse<>();
        apiResponse.setData(phieuNhapKhoService.updatepnk(id,pnl));
        return apiResponse;
    }
    @GetMapping("/getpnkbyid/{pnkid}")
    public ApiResponse<PhieuNhapKhoResponse>getpnkbyid(@PathVariable int pnkid){
        ApiResponse<PhieuNhapKhoResponse> apiResponse = new ApiResponse<>();
        apiResponse.setData(phieuNhapKhoService.getbyid(pnkid));
        return apiResponse;

    }
    @PostMapping("/addpnk")
    public ApiResponse<PhieuNhapKhoResponse>addpnk(@RequestBody PhieuNhapKhoRequest phieuNhapKhoRequest){
        ApiResponse<PhieuNhapKhoResponse> apiResponse = new ApiResponse<>();
        apiResponse.setData(phieuNhapKhoService.addpnk(phieuNhapKhoRequest));
        return apiResponse;
    }
    @GetMapping("/get")
    public List<Phieunhapkho> getphieunhapkho(){
        return phieuNhapKhoService.getphnk();

    }
    @DeleteMapping("/deletepnk/{id}")
    public ApiResponse<String> deletepnk(@PathVariable int id){
        ApiResponse<String> apiResponse = new ApiResponse<>();
        apiResponse.setData(phieuNhapKhoService.deletepnl(id));
        return apiResponse;
    }



}
