package com.app.pojos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//product_id	product_name	category_id	rating	description	product_img
@Entity
@Table(name = "products")
public class Product extends BaseEntity{
	@Column(length = 20)
	private String productName;
	@Column(length = 100)
	private String description;
	private int rating;
	private double price;
	private int discount;
	private double finalPrice;
	private int qty;
	private int grams;
	
	public Product() {
		System.out.println("in ctor of "+getClass().getName());
	}


	public Product(String productName, String description, int rating, double price, int discount, double finalPrice,
			int qty, int grams) {
		super();
		this.productName = productName;
		this.description = description;
		this.rating = rating;
		this.price = price;
		this.discount = discount;
		this.finalPrice = finalPrice;
		this.qty = qty;
		this.grams = grams;
	}


	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id", nullable = false)
	@JsonIgnoreProperties("products")
	private Category selectedCategory;

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
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

	public Category getSelectedCategory() {
		return selectedCategory;
	}

	public void setSelectedCategory(Category selectedCategory) {
		this.selectedCategory = selectedCategory;
	}

	@Override
	public String toString() {
		return "Product [productName=" + productName + ", description=" + description + ", rating=" + rating
				+ ", price=" + price + ", discount=" + discount + ", finalPrice=" + finalPrice + ", qty=" + qty
				+ ", grams=" + grams + "]";
	}

}
