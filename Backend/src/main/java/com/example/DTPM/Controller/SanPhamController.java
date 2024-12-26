package com.example.DTPM.Controller;

import com.example.DTPM.Dto.Request.SanPhamRequest;
import com.example.DTPM.Dto.Response.ApiResponse;
import com.example.DTPM.Dto.Response.SanPhamResponse;
import com.example.DTPM.Entity.SanPham;
import com.example.DTPM.Service.SanPhamService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.hibernate.annotations.DialectOverride;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/sanpham")
public class SanPhamController {
    @Autowired
    SanPhamService sanPhamService;
    @GetMapping("/hello1")
    String hello() {
        return "hello đặc tả phần mềm";
    }
    @GetMapping("/getallsp")
    ApiResponse<List<SanPhamResponse>> getAllSanPham() {
        ApiResponse<List<SanPhamResponse>> apiResponse= new ApiResponse<>();
        apiResponse.setData(sanPhamService.getallsanpham());

        return apiResponse ;
    }
    @GetMapping("/getsp/{id}")
    ApiResponse<SanPhamResponse> getSanPhamById(@PathVariable int id) {
        ApiResponse<SanPhamResponse> apiResponse= new ApiResponse<>();
        apiResponse.setData(sanPhamService.getsanpham(id));
        return apiResponse;
    }
        @GetMapping("/searchSp")
    ApiResponse<List<SanPhamResponse>> searchSanPham(@RequestParam("ten")  String tensp) {
        ApiResponse<List<SanPhamResponse>> apiResponse= new ApiResponse<>();
        apiResponse.setData(sanPhamService.searchsp(tensp));
        return apiResponse;
    }
    @PostMapping("/addsp")
    ApiResponse<SanPhamResponse> addSanPham(
            @RequestParam("tensanpham") String tensanpham,
            @RequestParam("mota") String mota,
            @RequestParam("giaban") Float giaban,
            @RequestParam("soluongton") Integer soluongton,
            @RequestParam("anh") MultipartFile anh) {
        ApiResponse<SanPhamResponse> apiResponse= new ApiResponse<>();
        SanPhamRequest sanPhamRequest = new SanPhamRequest(tensanpham,mota,giaban,soluongton);
       apiResponse.setData(sanPhamService.addsp(sanPhamRequest,anh));
        return apiResponse;
    }
    @DeleteMapping("/removesp/{id}")
    public ApiResponse<String> removeSanPham(@PathVariable int id) {
        ApiResponse<String> apiResponse = new ApiResponse<>();
        apiResponse.setMessage(sanPhamService.removesp(id));
        return apiResponse;
    }
    @PutMapping("/updatesp/{id}")
    public ApiResponse<SanPhamResponse> updatesp(@RequestParam("tensanpham") String tensanpham,
                                                 @RequestParam("mota") String mota,
                                                 @RequestParam("giaban") Float giaban,
                                                 @RequestParam("soluongton") Integer soluongton,
                                                 @RequestParam("anh") MultipartFile anh,
                                                 @PathVariable int id    ) {
        ApiResponse<SanPhamResponse> apiResponse= new ApiResponse<>();
        SanPhamRequest sanPhamRequest = new SanPhamRequest(tensanpham,mota,giaban,soluongton);
        apiResponse.setData(sanPhamService.updatesp(id,sanPhamRequest,anh));
        apiResponse.setMessage("Sửa thành công sản phẩm: "+id);
        return apiResponse;
    }
    @GetMapping("/{filename:.+}")
    public ResponseEntity<Resource> getImage(@PathVariable String filename) {
        String uploadDir = "E:/Springboot/DTPM/uploads/";
        try {
            Path filePath = Paths.get(uploadDir + filename);
            Resource resource = (Resource) new UrlResource(filePath.toUri());
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_JPEG) // Sử dụng loại hình phù hợp với ảnh
                        .body(resource);

        } catch (MalformedURLException e) {
            throw new RuntimeException("Error retrieving file", e);
        }
    }



}
