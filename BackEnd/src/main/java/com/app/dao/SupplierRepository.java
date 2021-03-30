package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Product;
import com.app.pojos.Supplier;
import com.app.pojos.User;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Integer> {
	@Query("select p from Product p join fetch p.selectedCategory where p.selectedCategory.id=:sId")
	List<Product> getAllProductBySupplier(@Param("sId")int sId);

	@Query("select p from Product p join fetch p.selectedCategory where p.id=:pId")
	Product getProductById(@Param("pId")int pId);
	
	Supplier findByCurrentUser(User user);
}
