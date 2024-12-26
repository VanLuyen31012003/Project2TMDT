package com.example.DTPM.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") .allowedOrigins("http://localhost:3000")  // Cho phép truy cập từ domain này
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Các phương thức được phép
                .allowedHeaders("*")  // Cho phép mọi header
                .allowCredentials(true);
    }
}
