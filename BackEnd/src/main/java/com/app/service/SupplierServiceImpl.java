package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CategoryRepository;
import com.app.dao.ProductRepository;
import com.app.dao.SupplierRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.Supplier;
import com.app.pojos.User;

@Service
@Transactional
public class SupplierServiceImpl implements ISupplierService {

	@Autowired
	private SupplierRepository supplierRepository;
	
	@Autowired
	private ProductRepository productRepo;
	
	@Autowired
	private CategoryRepository categoryRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List<?> getAllProductsBySupplier(int supplierId) {
		User u = userRepo.findById(supplierId).get();
		System.out.println("User : "+u);
		Supplier s = supplierRepository.findByCurrentUser(u);
		System.out.println("Supp : "+supplierRepository.findById(1));
		System.out.println("Supplier : "+s);
		Category c = categoryRepo.findById(s.getSupplierCategory().getId()).get();
		System.out.println("Category : "+c);
		return productRepo.findBySelectedCategory(c);
	}

	@Override
	public Product getProductById(int productId) {
		return supplierRepository.getProductById(productId);
	}

	@Override
	public String updateProduct(int productId, Product products) {
		Product product = productRepo.findById(productId).get();
		product.setProductName(products.getProductName());
		product.setDescription(products.getDescription());
		product.setPrice(products.getPrice());
		product.setDiscount(products.getDiscount());
        product.setFinalPrice(products.getFinalPrice());
        product.setQty(products.getQty());
        product.setGrams(products.getGrams());
		return "product updated";
	}

	@Override
	public Product addProduct(String CategoryName, Product product) {
		Category c = categoryRepo.findByCategoryName(CategoryName);
		product.setSelectedCategory(c);
		return productRepo.save(product);
	}

	@Override
	public String deleteProduct(int productId) {
		productRepo.deleteById(productId);
		return "Product Deleted";
	}
}
