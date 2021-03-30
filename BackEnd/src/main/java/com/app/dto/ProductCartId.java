package com.app.dto;

public class ProductCartId {
	private int userId;
	private int productId;
	public ProductCartId() {
		// TODO Auto-generated constructor stub
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	@Override
	public String toString() {
		return "ProductCartId [userId=" + userId + ", productId=" + productId + "]";
	}
	
}
