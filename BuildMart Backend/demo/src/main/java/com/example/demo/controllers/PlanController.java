package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Plans;
import com.example.demo.services.PlanService;
import com.example.demo.services.Role_Service;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PlanController {
	
	@Autowired
	PlanService pservice;
	
	@GetMapping("/getplans")
	public List<Plans> getPlans()
	{
		return pservice.getPlans();
	}

}
