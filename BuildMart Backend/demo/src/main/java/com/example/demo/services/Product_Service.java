package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Product;
import com.example.demo.repositories.Product_Repo;

@Service
public class Product_Service {
	@Autowired
	Product_Repo prepo;
	
	public List<Product> getProducts()
	{
		return prepo.findAll();
	}
	public List<Product> getPrductsByCid(int cid)
	{
		return prepo.getProductsByCid(cid);
	}
	
	public Product getProductByPid(int pid)
	{
		Optional<Product> pr =  prepo.findById(pid);
		Product p = null;
		try
		{
			p = pr.get();
		}
		catch (Exception e) {
			e.printStackTrace();// TODO: handle exception
		}
		return p;
	}
	public List<Product> getAvailableProducts(int ccid)
	{
		return prepo.getAvailableProducts(ccid);
	}

	
}
