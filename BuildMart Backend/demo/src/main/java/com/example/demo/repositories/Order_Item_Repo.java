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
	
	
    @Query(value="select oi.id,oi.quantity,oi.order_id, oi.vendor_product_id from order_item oi , vendor_product vp, orders o where oi.vendor_product_id=vp.id and oi.order_id=o.id and vp.vendor_id=:vid and o.status_id=1",nativeQuery = true)
    public List<Order_Item> getOrderItemsOfVendor(int vid);
    
//    @Query(value="select oi.id,oi.quantity,oi.order_id from order_item oi , vendor_product vp, orders o where oi.vendor_product_id=vp.id and oi.order_id=o.id  and vp.vendor_id=:vid",nativeQuery = true)
//    public List<Order_Item> getAllOrderItemsOfVendor(int vid);

}
