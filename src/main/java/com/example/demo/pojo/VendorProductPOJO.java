package com.example.demo.pojo;


public class VendorProductPOJO {
	
	private int category_id;
	private int product_id;
	private int vpid;
	private int quantity;
	private double price;
	private int offer_percentage;
	private String offer_valid_date;
	private int vid; //consider it as user id

	
	public VendorProductPOJO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public VendorProductPOJO(int category_id, int product_id, int vpid, int quantity, double price,
			int offer_percentage, String offer_valid_date) {
		super();
		this.category_id = category_id;
		this.product_id = product_id;
		this.vpid = vpid;
		this.quantity = quantity;
		this.price = price;
		this.offer_percentage = offer_percentage;
		this.offer_valid_date = offer_valid_date;
	}

	
	
	
	public VendorProductPOJO(int category_id, int product_id, int vpid, int quantity, double price,
			int offer_percentage, String offer_valid_date, int vid) {
		super();
		this.category_id = category_id;
		this.product_id = product_id;
		this.vpid = vpid;
		this.quantity = quantity;
		this.price = price;
		this.offer_percentage = offer_percentage;
		this.offer_valid_date = offer_valid_date;
		this.vid = vid;
	}
	
	

	public int getVid() {
		return vid;
	}

	public void setVid(int vid) {
		this.vid = vid;
	}

	public int getCategory_id() {
		return category_id;
	}
	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getOffer_percentage() {
		return offer_percentage;
	}
	public void setOffer_percentage(int offer_percentage) {
		this.offer_percentage = offer_percentage;
	}
	public String getOffer_valid_date() {
		return offer_valid_date;
	}
	public void setOffer_valid_date(String offer_valid_date) {
		this.offer_valid_date = offer_valid_date;
	}

	public int getVpid() {
		return vpid;
	}

	public void setVpid(int vpid) {
		this.vpid = vpid;
	}

	public VendorProductPOJO(int category_id, int product_id, int quantity, double price, int offer_percentage,
			String offer_valid_date) {
		super();
		this.category_id = category_id;
		this.product_id = product_id;
		this.quantity = quantity;
		this.price = price;
		this.offer_percentage = offer_percentage;
		this.offer_valid_date = offer_valid_date;
	}
	
	
	

}
