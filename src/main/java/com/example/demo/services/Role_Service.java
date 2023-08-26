package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Role;
import com.example.demo.repositories.Role_Repository;

@Service
public class Role_Service {
	@Autowired
	Role_Repository roleRepo;
	
	public Role getRole(int id)
	{
		 Optional<Role> or=roleRepo.findById(id);
		 Role r=null;
		 try
		 {
			 if(or!=null)
			 {
				 r=or.get();
			 }
			  
		 }
		 catch(Exception e)
		 {
			 e.printStackTrace();
		 }
		 return r;
	}

}
