package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.services.AddressService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {
	@Autowired
	AddressService addService;
	
	@GetMapping("/getAddressByUid")
	public List<Address> getAddByUid(@RequestParam int uid)
	{
		return addService.getAddByUid(uid);
	}
	

}
