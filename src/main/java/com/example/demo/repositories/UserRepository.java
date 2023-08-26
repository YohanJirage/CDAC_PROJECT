package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("select u from User u where username=:uname and password=:pass")
	public User checkLogin(String uname,String pass);
	
	@Query("select u.username from User u")
	public String[] getUnames();


}
