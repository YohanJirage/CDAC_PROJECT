package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.repositories.Category_Repo;

@Service
public class Category_Service {
	@Autowired
	Category_Repo crepo;
	
	public List<Category> getCategories()
	{
		return crepo.findAll();
	}
	

	public Category saveCategory(Category c)
	{
		return crepo.save(c);
	}
}
