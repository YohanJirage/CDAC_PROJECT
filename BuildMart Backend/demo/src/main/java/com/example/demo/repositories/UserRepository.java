package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;
@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("select u from User u where username=:uname and password=:pass")
	public User checkLogin(String uname,String pass);
	
	@Query("select u.username from User u")
	public String[] getUnames();
	
	@Query(value = "select * from Users where username=:uname",nativeQuery = true)
	public User getUserByUsername(String uname);
	
	@Modifying
	@Query(value ="update  users set password=:pass where username=:uname",nativeQuery = true)
	public int changePass(String uname,String pass);


}
