package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.services.Category_Service;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Category_Controller {
	@Autowired
	Category_Service cservice;
	
	
	@GetMapping("/getCategories")
	public List<Category> getCatories()
	{
		return cservice.getCategories();
	}
	
	@PostMapping("/addCategory")
	public Category addcategory(@RequestBody Category c)
	{
		return cservice.saveCategory(c);
	}

}
