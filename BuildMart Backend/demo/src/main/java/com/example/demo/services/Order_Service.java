package com.example.demo.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Order;
import com.example.demo.repositories.Order_Repo;

@Service
@Transactional
public class Order_Service {
	@Autowired
	Order_Repo orepo;
	
	
	public Order placeOrder(Order o)
	{
		return orepo.save(o);
	}
	
	@Modifying
	public boolean changeOrderStatus(int oid)
	{
		boolean flag=false;
		int f= orepo.changeOrderStatus(oid);
		if(f>0)
			flag=true;
		else
			flag=false;
		
		return flag;
	}
	

}
