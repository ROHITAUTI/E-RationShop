package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Orders;
import com.app.pojos.User;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer> {

	List<Orders> findByselectedCustomer(User user);
	
	List<Orders> findBySelectedDeliveryBoy(User user);

}
