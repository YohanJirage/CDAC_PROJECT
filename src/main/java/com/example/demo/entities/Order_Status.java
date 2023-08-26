package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "order_status")
public class Order_Status {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="status")
    private String status;

	public Order_Status() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order_Status(int id, String status) {
		super();
		this.id = id;
		this.status = status;
	}

	
	public Order_Status(String status) {
		super();
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

  
    
}