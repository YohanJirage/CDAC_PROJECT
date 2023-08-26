package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Category;
@Repository
public interface Category_Repo extends JpaRepository<Category, Integer> {
	
	
	

}
