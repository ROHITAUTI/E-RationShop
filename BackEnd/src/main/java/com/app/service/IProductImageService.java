package com.app.service;

import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.ProductImage;

public interface IProductImageService {
	ProductImage findByProductName(String pName, MultipartFile imageFile);
	
	ProductImage getImageByName(String productName);
}
