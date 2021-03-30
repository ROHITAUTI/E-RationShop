package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Category;
import com.app.pojos.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	@Query("select p from Product p join fetch p.selectedCategory where p.selectedCategory.id=:cId")
	List<Product> getAllProduct(@Param("cId")int cId);
	
	@Query("select p from Product p join fetch p.selectedCategory where p.selectedCategory.id=:cId order by p.finalPrice")
	List<Product> getAllProductlowtohigh(@Param("cId")int cId);
	
	@Query("select p from Product p join fetch p.selectedCategory where p.selectedCategory.id=:cId order by p.finalPrice desc")
	List<Product> getAllProducthightolow(@Param("cId")int cId);

	@Query("select p from Product p join fetch p.selectedCategory where p.productName LIKE :pName%")
	List<Product> getProductListByName(@Param("pName")String pName);
	
	Product findByProductNameAndGrams(String productName, int grams);
	
	List<Product> findBySelectedCategory(Category c);

}
