package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Construction_Material_Vendor;
import com.example.demo.entities.Individual_Customer;
import com.example.demo.entities.Order_Status;
import com.example.demo.repositories.Individual_Customer_Repository;
@Service
public class Individual_Customer_Service {
	@Autowired
	Individual_Customer_Repository customerRepo;
	
	public Individual_Customer saveCustomer(Individual_Customer c)
	{
		return customerRepo.save(c);
	}
	
	public String[] getCustEmails()
	{
		return customerRepo.getCustEmails();
	}
	public List<Individual_Customer> getAllCustomers()
	{
		return customerRepo.findAll();
	}
	
	public Individual_Customer getCustomerById(int id)
	{
		Optional<Individual_Customer> pr =  customerRepo.findById(id);
		Individual_Customer p = null;
		try
		{
			p = pr.get();
		}
		catch (Exception e) {
			e.printStackTrace();// TODO: handle exception
		}
		return p;
	}
	
	public Individual_Customer getCustById(int uid)
	{
		return customerRepo.getCustById(uid);
	}
	

}
