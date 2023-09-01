package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.services.AreaService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AreaController {
	@Autowired
	AreaService areaService;
	
	@GetMapping("/getareas")
	public List<Area> getAreas(@RequestParam int cityid)
	{
		return areaService.getAreas(cityid);
	}

}
