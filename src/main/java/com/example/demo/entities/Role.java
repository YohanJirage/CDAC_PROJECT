package com.example.demo.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name="roles")
public class Role {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY )
	private int id;
	
	@Column
	private String role;


	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Role(int id, String role) {
		super();
		this.id = id;
		this.role = role;
	
	}
	
	public Role(String role, Set<User> users) {
		super();
		this.role = role;
	
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	

	
	
	
	

}
