package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Individual_Customer;
import com.example.demo.entities.Question;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;
import com.example.demo.registration.CustomerRegistration;
import com.example.demo.services.Individual_Customer_Service;
import com.example.demo.services.QuestionService;
import com.example.demo.services.Role_Service;
import com.example.demo.services.UserService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Individual_Customer_Controller {
	@Autowired
	Individual_Customer_Service customerService;
	@Autowired
	UserService uservice;
	@Autowired
	Role_Service rservice;
	@Autowired
	QuestionService qservice;
	
	@PostMapping("/customerRegister")
	public Individual_Customer registerCustomer(@RequestBody CustomerRegistration cr)
	{
		User a=uservice.saveUser(new User(cr.getUname(),cr.getPwd(),cr.getAns(),rservice.getRole(1),qservice.getQuestion(cr.getQid())));
		
	    Individual_Customer c=customerService.saveCustomer(new Individual_Customer(a,cr.getFname(), cr.getLname(), cr.getEmail(), cr.getCno()));
		
	    
	    return c;
	    
	}
	 @GetMapping("/getCustEmails")
	   public String[] getCustEmails()
	    {
	    	return customerService.getCustEmails();
	   }
	    
	 
	 @GetMapping("/getCustomers")
	 public List<Individual_Customer> getAllCustomers()
	 {
		 return customerService.getAllCustomers();
	 }
	 
	 
	 @GetMapping("/getCustomerByUid")
	 public Individual_Customer getCustById(@RequestParam int uid )
	 {
		 return customerService.getCustById(uid);
	 }
	 
	 
	 
	 
	

}
