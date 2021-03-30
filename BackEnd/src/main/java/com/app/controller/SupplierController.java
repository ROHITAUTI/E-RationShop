package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.pojos.Product;
import com.app.service.ISupplierService;

@RestController
@RequestMapping("/supplier")
@CrossOrigin
public class SupplierController {
	
	@Autowired
	private ISupplierService supplierServices;
	
	@GetMapping("/showproducts/{supplierId}")
	public ResponseDTO<?> getAllProductsBySupplier(@PathVariable int supplierId) {
		System.out.println("in getAllProductsBySupplier " + supplierId);
		try {
			return new ResponseDTO<>(HttpStatus.OK, "Product List", supplierServices.getAllProductsBySupplier(supplierId));
		} catch (RuntimeException e) {
			System.out.println("err in getAllProductsBySupplier : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Product List Not Added", null);
		}
	}
	
	@GetMapping("/product/{productId}")
	public ResponseDTO<?> getProductById(@PathVariable int productId){
		System.out.println("in getProductById: "+productId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Product Added", supplierServices.getProductById(productId));
		}catch (RuntimeException e) {
			System.out.println("err in getProductById : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Product Not Added", null);
		}
	}
	
	@PutMapping("/updateproduct/{productId}")
	public ResponseDTO<?> updateProduct(@PathVariable int productId,@RequestBody Product product){
		System.out.println("in update product : "+product);
		try {	
			return new ResponseDTO<>(HttpStatus.OK, "Update Product Success", supplierServices.updateProduct(productId, product));
		}catch (RuntimeException e) {
			System.out.println("err in update product : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Update  Product Failed", null);
		}
	}
	
	@PutMapping("/addproduct/{CategoryName}")
	public ResponseDTO<?> addProduct(@PathVariable String CategoryName, @RequestBody Product product) {
		System.out.println("in add product : "+product);
		try {
			return new ResponseDTO<>(HttpStatus.OK, "Added Product Successfully", supplierServices.addProduct(CategoryName, product));
		}catch (RuntimeException e) {
			System.out.println("error in add product : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Add Product Failed", null);
		}
	}
	
	@DeleteMapping("/product/{productId}")
	public ResponseDTO<?> deleteItemFromCart(@PathVariable int productId){
		System.out.println("in product delete: "+productId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Product deleted ", supplierServices.deleteProduct(productId));
		}catch (RuntimeException e) {
			System.out.println("err in product delete : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Product not deleted", null);
		}
	}
	
}
