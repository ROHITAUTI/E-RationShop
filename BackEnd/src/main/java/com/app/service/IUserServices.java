package com.app.service;

import java.util.List;

import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.User;

public interface IUserServices {
	User authenticateUser(LoginRequest loginRequest);
	
	String createAccount(User user);
	
	User editProfile(int userId, UserDTO userDTO);
	
	String changePassword(int userId, String pwd);
	
	Address getAddress(int userId);
	
	String editAddress(int userId, Address address);
	
	List<User> getAllSupplier();
	
	List<User> getAllDeliveryBoy();
	
	String addSupplierAccount(String categoryName, User user);
	
	Address getAddressDetails(int orderId);
}
