package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Order_Item;
import com.example.demo.entities.Order_Status;
import com.example.demo.repositories.Order_Status_Repo;
@Service
public class Order_Status_Service {
	@Autowired
	Order_Status_Repo orepo;
	
	
	public Order_Status getOrder_StatusById(int id)
	{
		Optional<Order_Status> pr =  orepo.findById(id);
		Order_Status p = null;
		try
		{
			p = pr.get();
		}
		catch (Exception e) {
			e.printStackTrace();// TODO: handle exception
		}
		return p;
	}

}
