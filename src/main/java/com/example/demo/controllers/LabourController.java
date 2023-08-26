package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Individual_Customer;
import com.example.demo.entities.Labour;
import com.example.demo.entities.User;
import com.example.demo.registration.CustomerRegistration;
import com.example.demo.registration.LabourRegistration;
import com.example.demo.services.LabourService;
import com.example.demo.services.QuestionService;
import com.example.demo.services.Role_Service;
import com.example.demo.services.UserService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LabourController {
	@Autowired
	LabourService labourService;
	@Autowired
	UserService uservice;
	@Autowired
	Role_Service rservice;
	@Autowired
	QuestionService qservice;

	 @GetMapping("/getLabEmails")
	   public String[] getLabEmails()
	    {
	    	return labourService.getLabEmails();
	   }
	    
	 
	 @PostMapping("/labourRegister")
		public Labour registerCustomer(@RequestBody LabourRegistration cr)
		{
			User a=uservice.saveUser(new User(cr.getUname(),cr.getPwd(),cr.getAns(),rservice.getRole(4),qservice.getQuestion(cr.getQid())));
			
		    Labour l=labourService.registerLabour(new Labour(cr.getFname(), cr.getLname(), cr.getEmail(), cr.getCno(),cr.getExp(),a,cr.getStat(),cr.getRates()));
			
		    
		    return l;
		    
		}

}
