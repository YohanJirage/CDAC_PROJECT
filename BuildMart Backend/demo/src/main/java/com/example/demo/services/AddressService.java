package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Address;
import com.example.demo.entities.Area;
import com.example.demo.repositories.AddressRepository;
@Service
public class AddressService {
	@Autowired
	AddressRepository addRepo;
	
	public Address save(Address a)
	{
		return addRepo.save(a);
	}
	
	public Address getAddress(int id)
	{
		Optional<Address> o= addRepo.findById(id);
		Address a=null;
		if(o!=null)
		{
			a=o.get();
		}
		else
			a=null;
		
		return a;
	}
	
	public List<Address> getAddByUid(int id)
	{
		return addRepo.getAddByUid(id);
	}


}
