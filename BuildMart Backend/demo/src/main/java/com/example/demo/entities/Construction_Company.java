package com.example.demo.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name="construction_companies")
public class Construction_Company {
	
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY )
	private int id;
	
	@Column
	private String company_name;
	
	@Column
	private String email;
	
	@Column
	private String contact_number;
	
	@OneToOne
	@Cascade(value =CascadeType.ALL )
	@JoinColumn(name="uid")
    User user;

	public Construction_Company(String company_name, String email, String contact_number, User user) {
		super();
		this.company_name = company_name;
		this.email = email;
		this.contact_number = contact_number;
		this.user = user;
	}

	public Construction_Company(int id, String company_name, String email, String contact_number, User user) {
		super();
		this.id = id;
		this.company_name = company_name;
		this.email = email;
		this.contact_number = contact_number;
		this.user = user;
	}

	public Construction_Company() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact_number() {
		return contact_number;
	}

	public void setContact_number(String contact_number) {
		this.contact_number = contact_number;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Construction_Company [id=" + id + ", company_name=" + company_name + ", email=" + email
				+ ", contact_number=" + contact_number + ", user=" + user + "]";
	}
	
	
	

	
	
}
