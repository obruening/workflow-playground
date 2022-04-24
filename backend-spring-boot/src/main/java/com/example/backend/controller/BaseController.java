package com.example.backend.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;

public class BaseController {
    
    public ResponseEntity<String> getUnautorizedResposeEntity() {
        
        return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
    }
    
    @ModelAttribute
    public void setResponseHeader(HttpServletResponse response) {
        
        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        response.setHeader("Pragma", "no-cache");
        response.setDateHeader("Expires", 0);
    }
}
