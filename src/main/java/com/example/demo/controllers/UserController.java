package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
    @Autowired
	UserService uservice;
    
    @PostMapping("/checkLogin")
    public User checkLogin(@RequestBody Login l)
    {
    	String uname=l.getUsername();
    	String pass=l.getPassword();
    	return uservice.checkLogin(uname, pass);
    }
   
    @GetMapping("/getusernames")
	   public String[] getUsernames()
	    {
	    	return uservice.getUnames();
	   }
	    
    @GetMapping("/getUserById" )
    public User getUserByID(@RequestParam int id)
    {
    	return uservice.getUserById(id);
    }
    @GetMapping("/getUserByUsername")
    public User getUserByUsername(@RequestParam String username)
    {
    	return uservice.getUserByUsername(username);
    }
    
    @GetMapping("/changePassword")
    public int changePass(@RequestParam String username,@RequestParam String password )
    {
    	User u = uservice.getUserByUsername(username); 
    	return uservice.changePass(username, password);
    }
}
