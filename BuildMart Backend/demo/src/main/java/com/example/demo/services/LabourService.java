package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Labour;
import com.example.demo.registration.LabourRegistration;
import com.example.demo.repositories.LabourRepository;
@Service
public class LabourService {
	@Autowired
	LabourRepository labourRepo;
	
	public String[] getLabEmails()
	{
		return labourRepo.getLabEmails();
	}
	
	public Labour registerLabour(Labour lr)
	{
		return labourRepo.save(lr);
	}

    
}
