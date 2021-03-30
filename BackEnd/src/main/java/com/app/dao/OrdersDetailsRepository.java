package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.OrderDetails;
import com.app.pojos.Orders;

@Repository
public interface OrdersDetailsRepository extends JpaRepository<OrderDetails, Integer> {
	List<OrderDetails> findBySelectedOrder(Orders odr);
	
	
}
