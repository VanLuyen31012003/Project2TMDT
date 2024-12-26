package com.example.DTPM.Service;

import com.example.DTPM.Dto.Response.ChiTietPnkResponse;
import com.example.DTPM.Entity.ChiTietPNK;
import com.example.DTPM.Repository.ChiTietPnkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChiTietPnkService {
    @Autowired
    ChiTietPnkRepository chiTietPnkRepository;
    public List<ChiTietPnkResponse> getallpnk()
    {
        return chiTietPnkRepository.findAll().stream().map(t->new ChiTietPnkResponse(t)).toList();
    }

}
