package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Order_Item;
import com.example.demo.repositories.Order_Item_Repo;

@Service
public class Order_Item_Service {
	@Autowired
	Order_Item_Repo orepo;
	
	public Order_Item getOrder_ItemByPid(int oid)
	{
		Optional<Order_Item> pr =  orepo.findById(oid);
		Order_Item p = null;
		try
		{
			p = pr.get();
		}
		catch (Exception e) {
			e.printStackTrace();// TODO: handle exception
		}
		return p;
	}
	
    public List<Order_Item> getorderitembyuid(int id)
    {
    	return orepo.getorderitembyuid(id);
    }
    
    public void save(Order_Item o)
    {
     orepo.save(o);
    }

    public List<Order_Item> getOrderItemsOfVendors(int vpid)
    {
    	return orepo.getOrderItemsOfVendor(vpid);
    }
    
//    public List<Order_Item> getAllOrderItemsOfVendors(int vpid)
//    {
//    	return orepo.getAllOrderItemsOfVendor(vpid);
//    }
}
