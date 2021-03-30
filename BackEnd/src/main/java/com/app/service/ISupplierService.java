package com.app.service;

import java.util.List;

import com.app.pojos.Product;

public interface ISupplierService {
	List<?> getAllProductsBySupplier(int supplierId);	

	Product getProductById(int productId);
	
	String updateProduct(int productId, Product product);
	
	Product addProduct(String CategoryName, Product product);
	
	String deleteProduct(int productId);
}
