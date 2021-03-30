package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

//user_id	first_name	last_name	email	password	role	phone

@Entity
@Table(name = "users")
public class User extends BaseEntity{
	@Column(length = 20, nullable = false)
	private String firstName;
	@Column(length = 20, nullable = false)
	private String lastName;
	@Column(length = 30, nullable = false, unique = true)
	private String email;
	@Column(length = 20, nullable = false)
	private String password;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Role role;
	@Column(length = 20)
	private String phone;
	
	public User() {
		System.out.println("in ctor of "+getClass().getName());
	}

	public User(String firstName, String lastName, String email, String password, Role role, String phone) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
		this.phone = phone;
	}

	@OneToMany(mappedBy = "selectedUser", cascade = CascadeType.ALL, orphanRemoval = true)
	List<OrderDetails> orderDetails = new ArrayList<>();
	
	@OneToMany(mappedBy = "selectedCustomer", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	List<Orders> orders = new ArrayList<>();
	
	@OneToMany(mappedBy = "selectedDeliveryBoy", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	List<Orders> order = new ArrayList<>();
	
	@OneToMany(mappedBy = "selectedDeliveryBoyForPayment", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	List<Payment> payments = new ArrayList<>();

	@OneToOne(mappedBy = "currentUser", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	Supplier supplier = new Supplier();
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public List<OrderDetails> getOrderDetails() {
		return orderDetails;
	}

	@JsonIgnore
	public void setOrderDetails(List<OrderDetails> orderDetails) {
		this.orderDetails = orderDetails;
	}

	public List<Orders> getOrders() {
		return orders;
	}

	public void setOrders(List<Orders> orders) {
		this.orders = orders;
	}

	public List<Orders> getOrder() {
		return order;
	}

	public void setOrder(List<Orders> order) {
		this.order = order;
	}

	public List<Payment> getPayments() {
		return payments;
	}

	public void setPayments(List<Payment> payments) {
		this.payments = payments;
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}

	@Override
	public String toString() {
		return "User [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", role=" + role
				+ ", phone=" + phone + "]";
	}
	
}
