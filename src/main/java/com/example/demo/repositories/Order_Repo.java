package com.example.demo.repositories;



import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Order;
@Repository
@Transactional
public interface Order_Repo extends JpaRepository<Order, Integer> {
	
	@Modifying
	@Query(value = "update orders set status_id=2 where id=:oid", nativeQuery = true)
	public int changeOrderStatus(int oid);
	

}
