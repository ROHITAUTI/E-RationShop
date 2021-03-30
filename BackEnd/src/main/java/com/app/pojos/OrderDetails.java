package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

//order_details_id	user_id / customer_id	product_name	final_price	qty	grams	
//order_id
@Entity
@Table(name = "order_details")
public class OrderDetails extends BaseEntity{
	@Column(length = 20)
	private String productName;
	private double finalPrice;
	private int qty;
	private int grams;
	
	public OrderDetails() {
		System.out.println("in ctor of "+getClass().getName());
	}
	
	
	
	public OrderDetails(String productName, double finalPrice, int qty, int grams) {
		super();
		this.productName = productName;
		this.finalPrice = finalPrice;
		this.qty = qty;
		this.grams = grams;
	}



	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "order_id", nullable = false)
	private Orders selectedOrder;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id", nullable = false)
	private User selectedUser;

	public String getProductName() {
		return productName;
	}



	public void setProductName(String productName) {
		this.productName = productName;
	}



	public double getFinalPrice() {
		return finalPrice;
	}



	public void setFinalPrice(double finalPrice) {
		this.finalPrice = finalPrice;
	}



	public int getQty() {
		return qty;
	}



	public void setQty(int qty) {
		this.qty = qty;
	}



	public int getGrams() {
		return grams;
	}



	public void setGrams(int grams) {
		this.grams = grams;
	}



	public Orders getSelectedOrder() {
		return selectedOrder;
	}



	public void setSelectedOrder(Orders selectedOrder) {
		this.selectedOrder = selectedOrder;
	}


	
	public User getSelectedUser() {
		return selectedUser;
	}


	@JsonIgnore
	public void setSelectedUser(User selectedUser) {
		this.selectedUser = selectedUser;
	}



	@Override
	public String toString() {
		return "OrderDetails [productName=" + productName + ", finalPrice=" + finalPrice + ", qty=" + qty + ", grams="
				+ grams + "]";
	}
	
}
