package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Question;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;
@Service
public class UserService {
    @Autowired
	UserRepository urepo;
    
    public User checkLogin(String u,String p)
    {
    	return urepo.checkLogin(u, p);
    }
    
	public User saveUser(User u)
	{
		return urepo.save(u);
	}
	public String[] getUnames()
	{
		return urepo.getUnames();
	}
	public User getUserById(int id)
	{
		 Optional<User> or=urepo.findById(id);
		 User r=null;
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
