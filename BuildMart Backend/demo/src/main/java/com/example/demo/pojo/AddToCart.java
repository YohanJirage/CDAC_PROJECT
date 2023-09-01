package com.example.demo.pojo;

public class AddToCart {
	
	private int id;
	private int vpid;
	private int quantity;
	private int uid;
	public AddToCart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AddToCart(int id, int vpid, int quantity, int uid) {
		super();
		this.id = id;
		this.vpid = vpid;
		this.quantity = quantity;
		this.uid = uid;
	}
	public AddToCart(int vpid, int quantity, int uid) {
		super();
		this.vpid = vpid;
		this.quantity = quantity;
		this.uid = uid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getVpid() {
		return vpid;
	}
	public void setVpid(int vpid) {
		this.vpid = vpid;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	
	

}
