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
@Table(name="labours")
public class Labour {
	
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
	
	@Column
	private int experience;
	

	@OneToOne
	@Cascade(value =CascadeType.ALL )
	@JoinColumn(name="uid")
    User user;
	
	@Column
	private String status;
	
	@Column
	private double rates;

	public Labour(int id, String first_name, String last_name, String email, String contact_number, int experience,
			User user, String status, double rates) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_number = contact_number;
		this.experience = experience;
		this.user = user;
		this.status = status;
		this.rates = rates;
	}

	public Labour() {
		super();
	}

	public Labour(String first_name, String last_name, String email, String contact_number, int experience, User user,
			String status, double rates) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_number = contact_number;
		this.experience = experience;
		this.user = user;
		this.status = status;
		this.rates = rates;
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

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	

	public double getRates() {
		return rates;
	}

	public void setRates(double rates) {
		this.rates = rates;
	}

	@Override
	public String toString() {
		return "Labour [id=" + id + ", first_name=" + first_name + ", last_name=" + last_name + ", email=" + email
				+ ", contact_number=" + contact_number + ", experience=" + experience + ", user=" + user + ", status="
				+ status + ", rates=" + rates + "]";
	}
	
	
	
	
	
	

}
