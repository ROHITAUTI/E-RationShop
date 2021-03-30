package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.ProductImage;

@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage, Integer> {
	ProductImage findByProductName(String productName);	
}
