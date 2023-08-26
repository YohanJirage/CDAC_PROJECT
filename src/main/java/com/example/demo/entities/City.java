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
@Table(name="cities")
public class City {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY )
	private int id;
	@Column
	private String city_name;
//	@JsonIgnoreProperties("city")
//	@OneToMany(mappedBy = "city")
//	@Cascade(value=CascadeType.ALL)
//	Set<Area>areas;
	public City() {
		super();
		// TODO Auto-generated constructor stub
	}
	public City(int id, String city_name) {
		super();
		this.id = id;
		this.city_name = city_name;
	}
	public City(String city_name) {
		super();
		this.city_name = city_name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCity_name() {
		return city_name;
	}
	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}
	@Override
	public String toString() {
		return "City [id=" + id + ", city_name=" + city_name + "]";
	}
	
	

}
