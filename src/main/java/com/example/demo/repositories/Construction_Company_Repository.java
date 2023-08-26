package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Construction_Company;
@Repository
public interface Construction_Company_Repository extends JpaRepository<Construction_Company, Integer> {
   
	 @Query("select c.email from Construction_Company c")
	 public String[] getCompEmails();
	
}
