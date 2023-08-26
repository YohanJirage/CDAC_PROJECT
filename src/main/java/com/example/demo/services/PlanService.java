package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Plans;
import com.example.demo.repositories.PlanRepository;

@Service
public class PlanService {
	@Autowired
	PlanRepository prepo;
	
	public Plans getPlan(int id)
	{
		Optional<Plans> o= prepo.findById(id);
		Plans p;
		if(o!=null)
		{
			p=o.get();
		}
		else
			p=null;
		
		return p;
	}
	
	public List<Plans> getPlans()
	{
		return prepo.findAll();
	}

}
