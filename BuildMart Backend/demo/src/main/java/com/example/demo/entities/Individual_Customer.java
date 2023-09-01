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
@Table(name="individual_customer")
public class Individual_Customer {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY )
	private int id;
	
	@Column
	private String first_name;
	
	@Column
	private String last_name;
	
	@Column
	private String email;
	
	@Column
	private String contact_number;
	
	@OneToOne
	@Cascade(value =CascadeType.ALL )
	@JoinColumn(name="user_id")
    User user;
	
	
	

	public Individual_Customer(int id, String first_name, String last_name, String email, String contact_number,
			User user) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_number = contact_number;
		this.user = user;
	}

	public Individual_Customer() {
		super();
	}

	public Individual_Customer(String first_name, String last_name, String email, String contact_number, User user) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_number = contact_number;
		this.user = user;
	}
	

	public Individual_Customer(User u,String first_name, String last_name, String email, String contact_number) {
		super();
		this.user=u;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_number = contact_number;
	}
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
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
		return "Individual_Customer [id=" + id + ", first_name=" + first_name + ", last_name=" + last_name + ", email="
				+ email + ", contact_number=" + contact_number + ", user=" + user + "]";
	}
	
	
	
	

}
