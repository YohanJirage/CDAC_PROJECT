package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Cart;
import com.example.demo.entities.User;
import com.example.demo.entities.Vendor_Product;
import com.example.demo.pojo.AddToCart;
import com.example.demo.repositories.VendorProduct_Repo;
import com.example.demo.services.Cart_Service;
import com.example.demo.services.UserService;
import com.example.demo.services.VendorProduct_Service;

@RestController
@CrossOrigin("*")
public class Cart_Controller {
	@Autowired
	Cart_Service cservice;
	@Autowired
	UserService uservice;
	@Autowired
	VendorProduct_Service vpservice;
	
	@GetMapping("/addToCart")
	public Cart addtoCart(@RequestParam int vpid,@RequestParam int uid,@RequestParam int qty)
	{
		System.out.println(qty);
		User u= uservice.getUserById(uid);
		Vendor_Product vp=vpservice.getVendor_ProductById(vpid);
		Cart cr=cservice.addToCart(new Cart(vp,qty,u));
		return cr;
	}
	
	@GetMapping("/getCart")
	public List<Cart> getCartByUserId(@RequestParam int userid)
	{
		return cservice.getAllItems(userid);
	}

}
