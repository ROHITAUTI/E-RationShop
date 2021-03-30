package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PaymentDTO;
import com.app.dto.ProductCartId;
import com.app.dto.ResponseDTO;
import com.app.pojos.Cart;
import com.app.pojos.Category;
import com.app.pojos.Orders;
import com.app.pojos.Product;
import com.app.service.CustomerServiceImpl;

@RestController
@RequestMapping("/customers")
@CrossOrigin
public class CustomerController {
	
	@Autowired
	private CustomerServiceImpl custService;
	
	public CustomerController() {
		System.out.println("in ctor of " + getClass().getName());
	}
	
	@GetMapping("/product/list/{categoryId}")
	public ResponseDTO<?> getAllProductList(@PathVariable int categoryId){
		System.out.println("in getAllProductList: "+categoryId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Product List Added", custService.getAllProduct(categoryId));
		}catch (RuntimeException e) {
			System.out.println("err in getAllProductList : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Product List Not Added", null);
		}
	}
	
	@GetMapping("/product/lowtohigh/{categoryId}")
	public ResponseDTO<?> getAllProductListlowtohigh(@PathVariable int categoryId){
		System.out.println("in getAllProductListlowtohigh: "+categoryId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Product List Added", custService.getAllProductlowtohigh(categoryId));
		}catch (RuntimeException e) {
			System.out.println("err in getAllProductListlowtohigh : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Product List Not Added", null);
		}
	}
	
	@GetMapping("/product/hightolow/{categoryId}")
	public ResponseDTO<?> getAllProductListhightolow(@PathVariable int categoryId){
		System.out.println("in getAllProductListhightolow: "+categoryId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Product List Added", custService.getAllProducthightolow(categoryId));
		}catch (RuntimeException e) {
			System.out.println("err in getAllProductListhightolow : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Product List Not Added", null);
		}
	}
	
	@GetMapping("/product/{productId}")
	public ResponseDTO<?> getProductById(@PathVariable int productId){
		System.out.println("in getProductById: "+productId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Product Added", custService.getProductById(productId));
		}catch (RuntimeException e) {
			System.out.println("err in getProductById : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Product Not Added", null);
		}
	}
	
	@PostMapping("/cart")
	public ResponseDTO<?> addProductToCart(@RequestBody ProductCartId productCartId){
		System.out.println("in addProductToCart: "+productCartId);
		try {	
			Product product = custService.getProductById(productCartId.getProductId());
			Cart c = new Cart();
			c.setDescription(product.getDescription());
			c.setDiscount(product.getDiscount());
			c.setFinalPrice(product.getFinalPrice());
			c.setGrams(product.getGrams());
			c.setPrice(product.getPrice());
			c.setQty(1);
			c.setRating(product.getRating());
			c.setUserId(productCartId.getUserId());
			c.setProductId(product.getId());
			c.setProductName(product.getProductName());
			return new ResponseDTO<>(HttpStatus.OK, "Product Added to cart", custService.addProductToCart(c));
		}catch (RuntimeException e) {
			System.out.println("err in addProductToCart : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Product Not Added to cart", null);
		}
	}
	
	@GetMapping("/cart/{userId}")
	public ResponseDTO<?> getCartByuserId(@PathVariable int userId){
		System.out.println("in getCartByuserId: "+userId);
		try {		
			List<Cart> list = custService.getCartByuserId(userId);
			System.out.println("Cart : "+list);
			return new ResponseDTO<>(HttpStatus.OK, "Cart Added", list);
		}catch (RuntimeException e) {
			System.out.println("err in getCartByuserId : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Cart Not Added", null);
		}
	}
	
	@GetMapping("/cart/tamt/{userId}")
	public ResponseDTO<?> getCartTotalAmount(@PathVariable int userId){
		System.out.println("in getCartTotalAmount: "+userId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Cart Total Amt Added", custService.getCartTotalAmt(userId));
		}catch (RuntimeException e) {
			System.out.println("err in getCartTotalAmount : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Cart Total Amt Not Added", null);
		}
	}
	
	@GetMapping("/cart/samt/{userId}")
	public ResponseDTO<?> getCartTotalSavingAmt(@PathVariable int userId){
		System.out.println("in getCartTotalSavingAmt: "+userId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Cart Total SAmt Added", custService.getCartTotalSavingAmt(userId));
		}catch (RuntimeException e) {
			System.out.println("err in getCartTotalSavingAmt : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Cart Total SAmt Not Added", null);
		}
	}
	
	@DeleteMapping("/cart/{cartId}")
	public ResponseDTO<?> deleteItemFromCart(@PathVariable int cartId){
		System.out.println("in deleteItemFromCart: "+cartId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Item deleted from Cart", custService.deleteItemFromCart(cartId));
		}catch (RuntimeException e) {
			System.out.println("err in deleteItemFromCart : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Item not deleted from Cart", null);
		}
	}
	
	@GetMapping("product/search/{productName}")
	public ResponseDTO<?> getProductListByName(@PathVariable String productName){
		System.out.println("in getProductListByName: "+productName);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Product List Added", custService.getProductListByName(productName));
		}catch (RuntimeException e) {
			System.out.println("err in getProductListByName : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Product List Not Added", null);
		}
	}
	
	@GetMapping("/orders/{userId}/{totalPrice}")
	public ResponseDTO<?> addOrder(@PathVariable int userId, @PathVariable double totalPrice){
		System.out.println("in addOrder: "+userId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Order Added", custService.addOrder(userId, totalPrice));
		}catch (RuntimeException e) {
			System.out.println("err in addOrder : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Order Not Added", null);
		}
	}
	
	@GetMapping("/orderdetails/{userId}/{orderId}")
	public ResponseDTO<?> addorderDetails(@PathVariable int userId, @PathVariable int orderId){
		System.out.println("in addorderDetails: "+userId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "order Details Added", custService.addOrdersDetails(userId, orderId));
		}catch (RuntimeException e) {
			System.out.println("err in addorderDetails : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Order Details Not Added", null);
		}
	}
	
	
	@PostMapping("/payment")
	public ResponseDTO<?> addpayment(@RequestBody PaymentDTO paymentDTO){
		System.out.println("in addpayment: "+paymentDTO);
		try {				
			return new ResponseDTO<>(HttpStatus.OK, "Payment Done", custService.addPayment(paymentDTO));
		}catch (RuntimeException e) {
			System.out.println("err in addpayment : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Payment Not Done", null);
		}
	}
	
	@GetMapping("/orders/{userId}")
	public ResponseDTO<?> getOrdersList(@PathVariable int userId){
		System.out.println("in getOrdersList: "+userId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Order List Added", custService.getOrdersList(userId));
		}catch (RuntimeException e) {
			System.out.println("err in getOrdersList : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Order List Not Added", null);
		}
	}
	
	@GetMapping("/ordersfoedb/{deliveryBoyId}")
	public ResponseDTO<?> getOrdersListdeliveryBoy(@PathVariable int deliveryBoyId){
		System.out.println("in getOrdersListdeliveryBoy: "+deliveryBoyId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Order List Added", custService.getOrdersListForDBoy(deliveryBoyId));
		}catch (RuntimeException e) {
			System.out.println("err in getOrdersListdeliveryBoy : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Order List Not Added", null);
		}
	}
	
	
	@GetMapping("/orderdetailslist/{orderId}")
	public ResponseDTO<?> getOrdersDetailsList(@PathVariable int orderId){
		System.out.println("in getOrdersDetailsList: "+orderId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Order Details List Added", custService.getOrdersDetailsList(orderId));
		}catch (RuntimeException e) {
			System.out.println("err in getOrdersDetailsList : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Order Details List Not Added", null);
		}
	}
	
	@GetMapping("/cartupdate/{userId}")
	public ResponseDTO<?> updateCartItems(@PathVariable int userId){
		System.out.println("in updateCartItems: "+userId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "Cart Updated", custService.updateCartItems(userId));
		}catch (RuntimeException e) {
			System.out.println("err in updateCartItems : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Cart Not Updated", null);
		}
	}
	
	@GetMapping("/deliveredorder/{orderId}")
	public ResponseDTO<?> deliveredOrder(@PathVariable int orderId){
		System.out.println("in shipOrder: "+orderId);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "order Delivered", custService.deliveredOrder(orderId));
		}catch (RuntimeException e) {
			System.out.println("err in shipOrder : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "order Not Delivered", null);
		}
	}
	
	@GetMapping("/orderslist")
	public ResponseDTO<?> getAllOrderList(){
		System.out.println("in getAllOrderList");
		try {		
			 List<Orders> list = custService.getAllOrderList();
			 System.out.println("list : "+list);
			return new ResponseDTO<>(HttpStatus.OK, "order List added",list);
		}catch (RuntimeException e) {
			System.out.println("err in getAllOrderList");
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "order List Not added", null);
		}
	}
	
	@GetMapping("/categorylist")
	public ResponseDTO<?> getAllCategoryList(){
		System.out.println("in getAllCategoryList");
		try {		
			 List<Category> list = custService.getAllCategoryList();
			 System.out.println("Category list : "+list);
			return new ResponseDTO<>(HttpStatus.OK, "Category List added",list);
		}catch (RuntimeException e) {
			System.out.println("err in getAllCategoryList");
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Category List Not added", null);
		}
	}
}
