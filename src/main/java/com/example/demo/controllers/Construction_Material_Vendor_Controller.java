package com.example.demo.controllers;



import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.entities.Construction_Material_Vendor;
import com.example.demo.entities.Individual_Customer;
import com.example.demo.entities.Membership_payment;
import com.example.demo.entities.Plans;
import com.example.demo.entities.User;
import com.example.demo.registration.VendorRegistration;
import com.example.demo.services.AddressService;
import com.example.demo.services.AreaService;
import com.example.demo.services.Construction_Material_Vendor_Service;
import com.example.demo.services.Membership_PaymentService;
import com.example.demo.services.PlanService;
import com.example.demo.services.QuestionService;
import com.example.demo.services.Role_Service;
import com.example.demo.services.UserService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Construction_Material_Vendor_Controller {
	@Autowired
	Construction_Material_Vendor_Service vendorService;
	@Autowired
	UserService uService;
	@Autowired
	Role_Service rService;
	@Autowired
	QuestionService qService;
	@Autowired
	AddressService addService;
	@Autowired
	AreaService aService;
	@Autowired
	PlanService pService;
	@Autowired
	Membership_PaymentService mpService;
	
	
	@PostMapping("/vendorRegister")
	public Construction_Material_Vendor registerVendor(@RequestBody VendorRegistration cm)
	{
		User u=uService.saveUser(new User(cm.getUname(),cm.getPwd(),cm.getAns(),rService.getRole(3),qService.getQuestion(cm.getQid())));
		Address a=addService.save(new Address(aService.getArea(cm.getArea()),cm.getAddline(),u));
		Construction_Material_Vendor cv=vendorService.saveVendor(new Construction_Material_Vendor(cm.getVname(),cm.getEmail(), cm.getCno(),u));
		Plans p=pService.getPlan(cm.getPlan());
		LocalDate curdate=LocalDate.now();
		LocalDate expirydate=curdate.plusMonths(p.getDuration());
		Date d1=Date.valueOf(curdate);
		Date d2=Date.valueOf(expirydate);
		Membership_payment mp=mpService.save(new Membership_payment(p,cm.getAmount(),d1,d2,cm.getTransid(),cv));
		return cv;
		
	}
	
	   @GetMapping("/getVendorEmails")
	   public String[] getVendEmails()
	   {
	    	return vendorService.getVendEmails();
	   }
	   
	   @GetMapping("/getVendors")
	   public List<Construction_Material_Vendor> getVendors()
	   {
		   return vendorService.getAllVendors();
	   }
	   
	   @GetMapping("/getVendorByUid")
		 public Construction_Material_Vendor getVendorById(@RequestParam int uid )
		 {
		   
			 return vendorService.getVendor(uid);
		 }
		 
	   
	   
	    
	


}
