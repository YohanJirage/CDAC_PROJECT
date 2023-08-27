package com.example.demo.pojo;

import java.sql.Date;

public class OrderPlacePOJO {
	
	private int user_id;
	private double total_price;
	private int city;
	private int area;
	private String addline;
	private double initial_Payment_Amount;
	private String initial_Payment_Mode;
	private String initial_Payment_Transid;
	private int active_status;
	private Date initial_Payment_Date;
	private Date order_Date;
	public OrderPlacePOJO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderPlacePOJO(int user_id, double total_price, int city, int area, String addline,
			double initial_Payment_Amount, String initial_Payment_Mode, String initial_Payment_Transid) {
		super();
		this.user_id = user_id;
		this.total_price = total_price;
		this.city = city;
		this.area = area;
		this.addline = addline;
		this.initial_Payment_Amount = initial_Payment_Amount;
		this.initial_Payment_Mode = initial_Payment_Mode;
		this.initial_Payment_Transid = initial_Payment_Transid;
	}
	
	
	public OrderPlacePOJO(int user_id, double total_price, int city, int area, String addline,
			double initial_Payment_Amount, String initial_Payment_Mode, String initial_Payment_Transid,
			int active_status,Date initial_Payment_Date,Date order_Date ) {
		super();
		this.user_id = user_id;
		this.total_price = total_price;
		this.city = city;
		this.area = area;
		this.addline = addline;
		this.initial_Payment_Amount = initial_Payment_Amount;
		this.initial_Payment_Mode = initial_Payment_Mode;
		this.initial_Payment_Transid = initial_Payment_Transid;
		this.active_status = active_status;
		this.initial_Payment_Date=initial_Payment_Date;
		this.order_Date=order_Date;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public double getTotal_price() {
		return total_price;
	}
	public void setTotal_price(double total_price) {
		this.total_price = total_price;
	}
	public int getCity() {
		return city;
	}
	public void setCity(int city) {
		this.city = city;
	}
	public int getArea() {
		return area;
	}
	public void setArea(int area) {
		this.area = area;
	}
	public String getAddline() {
		return addline;
	}
	public void setAddline(String addline) {
		this.addline = addline;
	}
	public double getInitial_Payment_Amount() {
		return initial_Payment_Amount;
	}
	public void setInitial_Payment_Amount(double initial_Payment_Amount) {
		this.initial_Payment_Amount = initial_Payment_Amount;
	}
	public String getInitial_Payment_Mode() {
		return initial_Payment_Mode;
	}
	public void setInitial_Payment_Mode(String initial_Payment_Mode) {
		this.initial_Payment_Mode = initial_Payment_Mode;
	}
	public String getInitial_Payment_Transid() {
		return initial_Payment_Transid;
	}
	public void setInitial_Payment_Transid(String initial_Payment_Transid) {
		this.initial_Payment_Transid = initial_Payment_Transid;
	}
	public int getActive_status() {
		return active_status;
	}
	public void setActive_status(int active_status) {
		this.active_status = active_status;
	}
	public Date getInitial_Payment_Date() {
		return initial_Payment_Date;
	}
	public void setInitial_Payment_Date(Date initial_Payment_Date) {
		this.initial_Payment_Date = initial_Payment_Date;
	}
	public Date getOrder_Date() {
		return order_Date;
	}
	public void setOrder_Date(Date order_Date) {
		this.order_Date = order_Date;
	}
	
	
}
