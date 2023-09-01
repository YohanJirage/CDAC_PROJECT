package com.example.demo.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Cart;
import com.example.demo.repositories.Cart_Repo;
@Transactional
@Service
public class Cart_Service {
	@Autowired
	Cart_Repo crepo;
	
	public Cart addToCart(Cart c)
	{
		return crepo.save(c);
	}


	public List<Cart>  getAllItems(int uid)
	{
		return crepo.getAllItems(uid);
	}
	
	@Modifying
	public int  deleteAllItems(int uid)
	{
		return crepo.deleteAllItems(uid);
	}
}
