package com.example.demo.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.entities.Area;
import com.example.demo.entities.Cart;
import com.example.demo.entities.Order;
import com.example.demo.entities.Order_Item;
import com.example.demo.entities.User;
import com.example.demo.entities.Vendor_Product;
import com.example.demo.pojo.OrderPlacePOJO;
import com.example.demo.services.AddressService;
import com.example.demo.services.AreaService;
import com.example.demo.services.Cart_Service;
import com.example.demo.services.Order_Item_Service;
import com.example.demo.services.Order_Service;
import com.example.demo.services.UserService;
import com.example.demo.services.VendorProduct_Service;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Order_Controller {
	@Autowired
	Order_Service oservice;
	@Autowired
	Order_Item_Service oiservice;
	@Autowired
	UserService uservice;
	@Autowired
	AreaService aservice;
	@Autowired
	AddressService adservice;
	@Autowired
	Cart_Service cservice;
	@Autowired
	VendorProduct_Service vpservice;
	@PostMapping("/placeOrder")
	public Order placeOrder(@RequestBody OrderPlacePOJO op)
	{
        System.out.println("in place order");
		User u=uservice.getUserById(op.getUser_id());
		Area a=aservice.getArea(op.getArea());
		System.out.println(a);
		Address ad= new Address(a, op.getAddline(), u);
		System.out.println(ad);
		Address ad1= adservice.save(ad);
		List<Cart>CartList=cservice.getAllItems(op.getUser_id());
		for(Cart cart: CartList)
		{
			System.out.println(cart);
		}
		Order o=oservice.placeOrder(new Order(u,op.getTotal_price(),ad1,op.getInitial_Payment_Amount(),op.getInitial_Payment_Mode(),op.getInitial_Payment_Transid()));
//		Map<Integer, Integer> vp=vpservice.getVendorIds(op);
//		System.out.println(vp);
		List<Cart> c= cservice.getAllItems(op.getUser_id());
		for(Cart c1 : c)
		{
			Order_Item oi=new Order_Item(c1.getVendorProduct(),c1.getQuantity(),o);
			oiservice.save(oi);
		}
		int n = cservice.deleteAllItems(op.getUser_id());
		return o;
	}

}
