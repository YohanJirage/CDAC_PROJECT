package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Order;
import com.example.demo.repositories.Order_Repo;

@Service
public class Order_Service {
	@Autowired
	Order_Repo orepo;
	
	
	public Order placeOrder(Order o)
	{
		return orepo.save(o);
	}

}
