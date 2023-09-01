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
@Table(name="plans")
public class Plans {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY )
	private int id;
	
	@Column
	private String plan_name;
	
	@Column
	private double price;
	
	@Column
	private int duration;
	

	public Plans() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Plans(int id, String plan_name, double price, int duration) {
		super();
		this.id = id;
		this.plan_name = plan_name;
		this.price = price;
		this.duration = duration;

	}

	public Plans(String plan_name, double price, int duration) {
		super();
		this.plan_name = plan_name;
		this.price = price;
		this.duration = duration;

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPlan_name() {
		return plan_name;
	}

	public void setPlan_name(String plan_name) {
		this.plan_name = plan_name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}


	@Override
	public String toString() {
		return "Plans [id=" + id + ", plan_name=" + plan_name + ", price=" + price + ", duration=" + duration + "]";
	}

	

     
 }