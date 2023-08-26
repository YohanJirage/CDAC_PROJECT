package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Order_Item;
@Repository
public interface Order_Item_Repo extends JpaRepository<Order_Item, Integer> {
	
	@Query(value="select * from order_item where order_id in (select id from orders where user_id= :uid)",nativeQuery = true)
	public List<Order_Item> getorderitembyuid(int uid);
	

}
