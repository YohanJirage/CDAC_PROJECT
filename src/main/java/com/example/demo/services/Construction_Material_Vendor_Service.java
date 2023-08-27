package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Construction_Material_Vendor;
import com.example.demo.entities.Product;
import com.example.demo.repositories.Construction_Material_Vendor_Repo;
@Service
public class Construction_Material_Vendor_Service {
	@Autowired
	Construction_Material_Vendor_Repo vendorRepo;
	
	public Construction_Material_Vendor saveVendor(Construction_Material_Vendor cm)
	{
		return vendorRepo.save(cm);
	}

	public String[] getVendEmails()
	{
		return vendorRepo.getVendorEmails();
	}
	
	public Construction_Material_Vendor getVendorById(int vid)
	{
		Optional<Construction_Material_Vendor> pr =  vendorRepo.findById(vid);
		Construction_Material_Vendor p = null;
		try
		{
			if(pr!=null)
			p = pr.get();
		}
		catch (Exception e) {
			e.printStackTrace();// TODO: handle exception
		}
		return p;
	}
	public List<Construction_Material_Vendor> getAllVendors()
	{
		return vendorRepo.findAll();
	}
	
	public Construction_Material_Vendor getVendor(int uid)
	{
		return vendorRepo.getVendorById(uid);
	}
	

}
