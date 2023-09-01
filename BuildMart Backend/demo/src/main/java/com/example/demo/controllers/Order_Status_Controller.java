package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.Order_Status_Service;
@RestController
@CrossOrigin(origins = "*")
public class Order_Status_Controller {
	@Autowired
	Order_Status_Service oservice;
	
	

}
