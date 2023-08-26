package com.example.demo.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "description")
    private String description;

    @Column(name = "rating")
    private int rating;

   


    @JsonIgnoreProperties("reviewList")
  	@ManyToOne(cascade = CascadeType.ALL)
  	@JoinColumn(name="vendor_id")
    private Construction_Material_Vendor vendor;
    
    
  	@ManyToOne(cascade = CascadeType.ALL)
  	@JoinColumn(name="user_id")
    private User user;

	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Review(int id, String description, int rating, Construction_Material_Vendor vendor, User user) {
		super();
		this.id = id;
		this.description = description;
		this.rating = rating;
		this.vendor = vendor;
		this.user = user;
	}

	public Review(String description, int rating, Construction_Material_Vendor vendor, User user) {
		super();
		this.description = description;
		this.rating = rating;
		this.vendor = vendor;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public Construction_Material_Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Construction_Material_Vendor vendor) {
		this.vendor = vendor;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


	
    
}