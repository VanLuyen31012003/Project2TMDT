package com.example.DTPM.Service;

import com.example.DTPM.Dto.Request.SanPhamRequest;
import com.example.DTPM.Dto.Response.SanPhamResponse;
import com.example.DTPM.Entity.SanPham;
import com.example.DTPM.Repository.SanPhamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class SanPhamService  {
    @Autowired
    SanPhamRepository sanPhamRepository;

    public List<SanPhamResponse> getallsanpham() {
        return sanPhamRepository.findAll().stream().map(t->new SanPhamResponse(t)).toList();
    };
//    String tensanpham, String mota, Float giaban, Integer soluongton
    public SanPhamResponse getsanpham(int id) {
        SanPham sanPham = sanPhamRepository.findById(id).get();
        return new SanPhamResponse(sanPham.getTensanpham(),sanPham.getMota(),sanPham.getGiaban(),sanPham.getSoluongton(), sanPham.getMasanpham(),sanPham.getAnh());
    }
    public List<SanPhamResponse> searchsp(String tensanpham) {
        return sanPhamRepository.findByTensanphamContainingIgnoreCase(tensanpham).stream().map(t->new SanPhamResponse(t)).toList();

    }
    public SanPhamResponse addsp(SanPhamRequest sanPhamDto, MultipartFile image) {
        SanPham sanPham= new SanPham();
        sanPham.setTensanpham(sanPhamDto.getTensanpham());
        sanPham.setMota(sanPhamDto.getMota());
        sanPham.setGiaban(sanPhamDto.getGiaban());
        sanPham.setSoluongton(sanPhamDto.getSoluongton());
        String s="http://localhost:8080/api/sanpham/";
        sanPham.setAnh(s+uploadImage(image));
        SanPham sanPham1= sanPhamRepository.save(sanPham);


        return new SanPhamResponse(
                sanPham1.getTensanpham(),
                sanPham1.getMota(),
                sanPham1.getGiaban(),
                sanPham1.getSoluongton(),
                sanPham1.getMasanpham(),
                sanPham1.getAnh()
        );    }
    public SanPhamResponse updatesp( int id,SanPhamRequest sanPhamRequest, MultipartFile image) {
        SanPham sanPham= sanPhamRepository.findById(id).get();
        sanPham.setTensanpham(sanPhamRequest.getTensanpham());
        sanPham.setMota(sanPhamRequest.getMota());
        sanPham.setGiaban(sanPhamRequest.getGiaban());
        sanPham.setSoluongton(sanPhamRequest.getSoluongton());
        String s="http://localhost:8080/api/sanpham/";

        sanPham.setAnh(s+uploadImage(image));
        SanPham sanPham1= sanPhamRepository.save(sanPham);

        return new SanPhamResponse(
                sanPham1.getTensanpham(),
                sanPham1.getMota(),
                sanPham1.getGiaban(),
                sanPham1.getSoluongton(),
                sanPham1.getMasanpham(),
                sanPham1.getAnh()
        );
    }
    public String uploadImage( MultipartFile image) {
        // Đường dẫn lưu ảnh
        String uploadDir = "E:/Springboot/DTPM/uploads/";  // Hoặc sử dụng một đường dẫn tương đối như "uploads/"
        try {
            // Tạo đường dẫn cho tệp
            Path path = Paths.get(uploadDir + image.getOriginalFilename());

            // Tạo thư mục nếu chưa tồn tại
            Files.createDirectories(path.getParent());

            // Lưu tệp
            image.transferTo(path.toFile());

            return image.getOriginalFilename();
        } catch (IOException e) {
            return "";
        }
    }
    public String removesp(int id) {
        String s="xóa thất bại ";
        if (sanPhamRepository.existsById(id)) {
            sanPhamRepository.deleteById(id);
            s="xóa thành công";
        } else {
           s="xóa thất bại";
        }
        return s;
    }



}
