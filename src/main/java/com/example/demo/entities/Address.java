package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="address")
public class Address {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY )
	private int id;

	@ManyToOne()
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="area_id")
	private Area area;
	
	@Column
	private String add_line;
	
	

	@ManyToOne()
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User user;
	
	

	public Address(int id, Area area, String add_line, User user) {
		super();
		this.id = id;
		this.area = area;
		this.add_line = add_line;
		this.user = user;
	}
	
	

	public Address(Area area, String add_line, User user) {
		super();
		this.area = area;
		this.add_line = add_line;
		this.user = user;
	}



	public Address() {
		super();
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Area getArea() {
		return area;
	}

	public void setArea(Area area) {
		this.area = area;
	}

	public String getAdd_line() {
		return add_line;
	}

	public void setAdd_line(String add_line) {
		this.add_line = add_line;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Address [id=" + id + ", area=" + area + ", add_line=" + add_line + ", user=" + user + "]";
	}
	
	
	
	
	
	

	

	
	

}

