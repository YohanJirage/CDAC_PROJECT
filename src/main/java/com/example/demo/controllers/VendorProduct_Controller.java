package com.example.demo.controllers;


import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Construction_Material_Vendor;
import com.example.demo.entities.Product;
import com.example.demo.entities.User;
import com.example.demo.entities.Vendor_Product;
import com.example.demo.pojo.VendorProductPOJO;
import com.example.demo.services.Construction_Material_Vendor_Service;
import com.example.demo.services.Product_Service;
import com.example.demo.services.UserService;
import com.example.demo.services.VendorProduct_Service;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VendorProduct_Controller {
	@Autowired
	VendorProduct_Service vpservice;
	
	@Autowired
	Product_Service pservice;
	
	@Autowired
	Construction_Material_Vendor_Service cvservice;
	@Autowired
	UserService uservice;
	


	
	@GetMapping("/getVendorProductsVendors")
	public List<Vendor_Product> getVendorProductsForVendors(@RequestParam int uid)
	{
		User u=uservice.getUserById(uid);
		Construction_Material_Vendor cv=cvservice.getVendorById(u.getVendor().getId());
		
		
		List<Vendor_Product>  newlist = vpservice.getVendorProductsForVendors(cv.getId());
		if(newlist == null)
		{
			newlist = new ArrayList<>();
		}
		
		return newlist;
	}
	@GetMapping("/getVendorProductsCustomer")
	public List<Vendor_Product> getVendorProductsForCustomers(@RequestParam int pid)
	{
		return vpservice.getVendorProductsForCustomers(pid);
	}
	@PostMapping("/addVendorProduct")
	public Vendor_Product addVendorProduct(@RequestBody VendorProductPOJO v)
	{
		User u=uservice.getUserById(v.getVid());
		Construction_Material_Vendor cv=cvservice.getVendorById(u.getVendor().getId());
		Product p = pservice.getProductByPid(v.getProduct_id());
		LocalDate date = LocalDate.parse(v.getOffer_valid_date());
		Date d = Date.valueOf(date);
		Vendor_Product vp = new Vendor_Product(v.getQuantity(),v.getPrice(), v.getOffer_percentage(),d,cv,p);
		
		return vpservice.addProduct(vp);
	}
	
	@PostMapping("/editExistingProduct")
	public int updateVendorProduct(@RequestBody VendorProductPOJO v )
	{
		Product p = pservice.getProductByPid(v.getProduct_id());
//		System.out.println(p);
		Vendor_Product vp = vpservice.getVendor_ProductById(v.getVpid());
		Construction_Material_Vendor cv = cvservice.getVendorById(vp.getVendor().getId());
		LocalDate ld=LocalDate.parse(v.getOffer_valid_date());
		Date d = java.sql.Date.valueOf(ld);
		return vpservice.updateVendorProduct(v.getQuantity(), v.getPrice(), v.getOffer_percentage(),d,p,cv,v.getVpid());
	}
	@GetMapping("/deleteVendorProduct")
	public int deleteVendorProduct(@RequestParam int vpid)
	{
		return vpservice.deleteVendorProduct(vpid);
	}
	
	@GetMapping("/getVendorProduct")
	public Vendor_Product getVendorProduct(@RequestParam int vpid)
	{
	
		return vpservice.getVendor_ProductById(vpid);
	}
	
}
