package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Construction_Company;
import com.example.demo.repositories.Construction_Company_Repository;
@Service
public class Construction_Company_Service {
	@Autowired
	Construction_Company_Repository construction_company_repo;
	
	public Construction_Company saveCompany(Construction_Company cc)
	{
		return construction_company_repo.save(cc);
	}
	
	public String[] getCompEmails()
	{
		return construction_company_repo.getCompEmails();
	}

}
