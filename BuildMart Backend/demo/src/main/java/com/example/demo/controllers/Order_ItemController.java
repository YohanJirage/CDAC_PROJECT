package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Order_Item;
import com.example.demo.services.Order_Item_Service;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Order_ItemController {
	@Autowired
	Order_Item_Service oiService;
	
	@GetMapping("/getOrderItemByUid")
	public List<Order_Item> getOrderItemByUid(@RequestParam int uid)
	{
		return oiService.getorderitembyuid(uid);
	}
	
	@GetMapping("/getVendorOrderItems")
	public List<Order_Item> getOrderItemOfVendor(@RequestParam int vid)
	{
		return oiService.getOrderItemsOfVendors(vid);
	}
	
//	@GetMapping("/getAllVendorOrders")
//	public List<Order_Item> getAllOrderItemOfVendor(@RequestParam int vid)
//	{
//		return oiService.getAllOrderItemsOfVendors(vid);
//	}

}
