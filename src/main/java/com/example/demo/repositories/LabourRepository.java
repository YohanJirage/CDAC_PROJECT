package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Labour;
@Repository
public interface LabourRepository extends JpaRepository<Labour, Integer> {
	
	
	@Query("select l.email from Labour l")
	 public String[] getLabEmails();
}
