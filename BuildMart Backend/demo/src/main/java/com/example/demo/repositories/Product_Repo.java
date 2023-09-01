package com.example.demo.repositories;

import java.lang.StackWalker.Option;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Product;
@Repository
public interface Product_Repo extends JpaRepository<Product, Integer> {
	
	
	@Query("select p from Product p where cid=:cid")
	public List<Product> getProductsByCid(int cid);
	
	
	@Query(value = "select * from products p,vendor_product v where p.cid=:ccid and (v.product_id=p.id)",nativeQuery = true)
	public List<Product> getAvailableProducts(int ccid);
	

	
	

}
