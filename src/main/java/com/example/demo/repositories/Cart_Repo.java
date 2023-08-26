package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Cart;
@Repository
@Transactional
public interface Cart_Repo extends JpaRepository<Cart, Integer> {
	

	@Query("select c from Cart c where user_id=:uid")
	public List<Cart> getAllItems(int uid);
	
	@Modifying
	@Query("delete from Cart c where user_id=:uid")
	public int deleteAllItems(int uid);
}
