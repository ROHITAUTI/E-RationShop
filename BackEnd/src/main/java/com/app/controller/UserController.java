package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.ResponseDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.User;
import com.app.service.UserServiceImpl;

@RestController
@RequestMapping("/customers")
@CrossOrigin
public class UserController {
	@Autowired
	private UserServiceImpl userService;
	
	public UserController() {
		System.out.println("in ctor of "+getClass().getName());
	}
	
	@PostMapping("/login")
	public ResponseDTO<?> authenticateUser(@RequestBody LoginRequest loginRequest){
		System.out.println("in authenticateUser: "+loginRequest);
		try {		
			User u = userService.authenticateUser(loginRequest);
			System.out.println("User : "+u);
			return new ResponseDTO<>(HttpStatus.OK, "User Added", u);
		}catch (RuntimeException e) {
			System.out.println("err in authenticateUser : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "User Not Added", null);
		}
	}
	
	@PostMapping("/signup")
	public ResponseDTO<?> createAccount(@RequestBody User user){
		System.out.println("in createAccount: "+user);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "User Added", userService.createAccount(user));
		}catch (RuntimeException e) {
			System.out.println("err in createAccount : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "User Not Added", null);
		}
	}
	
	@PutMapping("/signup/{categoryName}")
	public ResponseDTO<?> addSupplierAccount(@PathVariable String categoryName, @RequestBody User user){
		System.out.println("in addSupplierAccount: "+user);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "User Added", userService.addSupplierAccount(categoryName, user));
		}catch (RuntimeException e) {
			System.out.println("err in addSupplierAccount : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "User Not Added", null);
		}
	}
	
	@PutMapping("/edit-profile/{userId}")
	public ResponseDTO<?> editProfile(@PathVariable int userId,@RequestBody UserDTO userDTO){
		System.out.println("in editProfile: "+userDTO);
		try {	
			return new ResponseDTO<>(HttpStatus.OK, "Edit User Success", userService.editProfile(userId, userDTO));
		}catch (RuntimeException e) {
			System.out.println("err in editProfile : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Edit User Failed", null);
		}
	}
	
	@PutMapping("/change_pwd/{userId}/{pwd}")
	public ResponseDTO<?> changePassword(@PathVariable int userId,@PathVariable String pwd){
		System.out.println("in changePassword: "+userId + "Pass : "+pwd);
		try {	
			return new ResponseDTO<>(HttpStatus.OK, "Password Changed successfully", userService.changePassword(userId, pwd));
		}catch (RuntimeException e) {
			System.out.println("err in changePassword : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Password Changed Failed", null);
		}
	}
	
	@GetMapping("/address/{userId}")
	public ResponseDTO<?> getAddress(@PathVariable int userId){
		System.out.println("in userId: "+userId);
		try {	
			return new ResponseDTO<>(HttpStatus.OK, "Address Added", userService.getAddress(userId));
		}catch (RuntimeException e) {
			System.out.println("err in userId : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Address Not Added", null);
		}
	}
	
	@PutMapping("/address/{userId}")
	public ResponseDTO<?> editAddress(@PathVariable int userId,@RequestBody Address address){
		System.out.println("in editAddress: "+userId + "Address : "+address);
		try {	
			return new ResponseDTO<>(HttpStatus.OK, "Address Changed successfully", userService.editAddress(userId, address));
		}catch (RuntimeException e) {
			System.out.println("err in editAddress : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Address Changed Failed", null);
		}
	}
	
	@GetMapping("/supplierlist")
	public ResponseDTO<?> getSupplierList(){
		System.out.println("in getSupplierList");
		try {	
			return new ResponseDTO<>(HttpStatus.OK, "Supplier List added successfully", userService.getAllSupplier());
		}catch (RuntimeException e) {
			System.out.println("err in getSupplierList : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Supplier List Not Added", null);
		}
	}
	
	@GetMapping("/deliveryboylist")
	public ResponseDTO<?> getDeliveryBoyList(){
		System.out.println("in getDeliveryBoyList");
		try {	
			return new ResponseDTO<>(HttpStatus.OK, "DeliveryBoy List added successfully", userService.getAllDeliveryBoy());
		}catch (RuntimeException e) {
			System.out.println("err in getDeliveryBoyList : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "DeliveryBoy List Not Added", null);
		}
	}
	
	@GetMapping("/addressdetails/{orderId}")
	public ResponseDTO<?> getAddressDetails(@PathVariable int orderId){
		System.out.println("in getAddressDetails: "+orderId);
		try {	
			return new ResponseDTO<>(HttpStatus.OK, "Address Added", userService.getAddressDetails(orderId));
		}catch (RuntimeException e) {
			System.out.println("err in getAddressDetails : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Address Not Added", null);
		}
	}
}
