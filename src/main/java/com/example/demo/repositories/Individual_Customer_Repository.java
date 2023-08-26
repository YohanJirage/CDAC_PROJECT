package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Individual_Customer;
@Repository
public interface Individual_Customer_Repository extends JpaRepository<Individual_Customer, Integer> {
	
	@Query("select e.email from Individual_Customer e ")
	public String[] getCustEmails();
	
	

}
