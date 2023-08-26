package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Individual_Customer;
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
	

}
