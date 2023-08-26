package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Construction_Company;
import com.example.demo.entities.Question;
import com.example.demo.entities.User;
import com.example.demo.registration.CompanyRegistration;
import com.example.demo.services.Construction_Company_Service;
import com.example.demo.services.QuestionService;
import com.example.demo.services.Role_Service;
import com.example.demo.services.UserService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Construction_Company_Controller {
	@Autowired
	Construction_Company_Service construction_service;
	@Autowired
	UserService uservice;
	@Autowired
	Role_Service rservice;
	@Autowired
	QuestionService qservice;
	
	
	@PostMapping("/companyRegister")
	public Construction_Company saveCompany(@RequestBody CompanyRegistration ccr)
	{
		User u=uservice.saveUser(new User(ccr.getUname(),ccr.getPwd(),ccr.getAns(),rservice.getRole(2),qservice.getQuestion(ccr.getQid())));
		Construction_Company cc=construction_service.saveCompany(new Construction_Company(ccr.getCname(), ccr.getCno(),ccr.getEmail() , u));
		return cc;
	}
	
	@GetMapping("/getCompEmails")
	public String[] getCompEmails()
	{
	   return  construction_service.getCompEmails();
	}
	
}
