package com.app.pojos;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;


//category_id	category_name	category_img
@Entity
public class Category extends BaseEntity{
	@Column(length = 20)
	private String categoryName;
	
	public Category() {
		System.out.println("in ctor of "+getClass().getName());
	}

	public Category(String categoryName, byte[] categoryImage) {
		super();
		this.categoryName = categoryName;
	}

	
	@OneToMany(mappedBy = "selectedCategory", cascade = CascadeType.ALL, orphanRemoval = true)
	List<Product> products = new ArrayList<>();
	
	@OneToOne(mappedBy = "supplierCategory", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	Supplier supplierC = new Supplier();
	
	public String getCategoryName() {
		return categoryName;
	}


	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}


	public List<Product> getProducts() {
		return products;
	}

	@JsonIgnore
	public void setProducts(List<Product> products) {
		this.products = products;
	}


	public Supplier getSupplierC() {
		return supplierC;
	}

	public void setSupplierC(Supplier supplierC) {
		this.supplierC = supplierC;
	}

	@Override
	public String toString() {
		return "Category [categoryName=" + categoryName + "]";
	}

}
