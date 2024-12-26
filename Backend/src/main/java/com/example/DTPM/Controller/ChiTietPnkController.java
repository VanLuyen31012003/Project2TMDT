package com.example.DTPM.Controller;

import com.example.DTPM.Dto.Response.ApiResponse;
import com.example.DTPM.Dto.Response.ChiTietPnkResponse;
import com.example.DTPM.Entity.ChiTietPNK;
import com.example.DTPM.Service.ChiTietPnkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.convert.ReadingConverter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/chitietPNK")
public class ChiTietPnkController {
    @Autowired
    ChiTietPnkService chiTietPnkService;
    @GetMapping("/getallpnk")
    public ApiResponse<List<ChiTietPnkResponse>> getAllchitietPnk() {
        ApiResponse<List<ChiTietPnkResponse>> apiResponse = new ApiResponse<>();
        apiResponse.setData(chiTietPnkService.getallpnk());
        return apiResponse;
    }

}
