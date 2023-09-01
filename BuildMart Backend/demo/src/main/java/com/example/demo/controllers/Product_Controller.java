package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.services.Product_Service;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Product_Controller {
	@Autowired
	Product_Service pservice;
	
	@GetMapping("/getProducts")
	public List<Product> getProducts()
	{
		return pservice.getProducts();
	}
	
	@GetMapping("/getProductsByCid")
	public List<Product> getProductsByCid(@RequestParam int cid)
	{
		return pservice.getPrductsByCid(cid);
	}
	
	@GetMapping("/getAvailableProducts")
	public List<Product> getAvailableProducts(@RequestParam int cid )
	{
		return pservice.getAvailableProducts(cid);
	}
	
	@GetMapping("/getProductById")
	public Product getProductById(@RequestParam int pid )
	{
		return pservice.getProductByPid(pid);
	}
	
	
}
