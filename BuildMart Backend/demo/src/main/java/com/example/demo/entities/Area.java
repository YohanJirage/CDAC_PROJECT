package com.example.demo.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;


@Entity
@Table(name="area")
public class Area {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY )
	private int id;
	@Column
	private String name;
	@Column
	private String pincode;
	
	
	@ManyToOne()
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="city_id")
	private City city;
	
//	@OneToMany(mappedBy = "area")
//	@Cascade(value=CascadeType.ALL)
//	Set<Address>addresses;
	
	
	
	public Area() {
		super();
		// TODO Auto-generated constructor stub
	}




	public Area(int id, String name, String pincode, City city) {
		super();
		this.id = id;
		this.name = name;
		this.pincode = pincode;
		this.city = city;
	}




	public Area(String name, String pincode, City city) {
		super();
		this.name = name;
		this.pincode = pincode;
		this.city = city;
	}




	public int getId() {
		return id;
	}




	public void setId(int id) {
		this.id = id;
	}




	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public String getPincode() {
		return pincode;
	}




	public void setPincode(String pincode) {
		this.pincode = pincode;
	}




	public City getCity() {
		return city;
	}




	public void setCity(City city) {
		this.city = city;
	}




	@Override
	public String toString() {
		return "Area [id=" + id + ", name=" + name + ", pincode=" + pincode + ", city=" + city + "]";
	}
	
	

}
