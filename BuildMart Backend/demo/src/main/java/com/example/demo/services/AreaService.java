package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.repositories.AreaRepository;
@Service
public class AreaService {
	@Autowired
	AreaRepository areaRepo;
	
	public List<Area> getAreas(int id)
	{
		return areaRepo.getAreas(id);
	}
	
	public Area getArea(int id)
	{
		Optional<Area> o= areaRepo.findById(id);
		Area a=null;
		if(o!=null)
		{
			a=o.get();
		}
		else
			a=null;
		
		return a;
	}

}
