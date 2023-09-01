package com.example.demo.entities;

import java.sql.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

	@JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "order_date")
    private Date orderDate;

	@JsonIgnoreProperties("orders")
    @ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
    private User user;

    @Column(name = "total_price")
    private Double totalPrice;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private Address address;

    @Column(name = "initial_payment_amount")
    private Double initialPaymentAmount;

    @Column(name = "initial_payment_mode")
    private String initialPaymentMode;

	@JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "initial_payment_date")
    private Date initialPaymentDate;

    @Column(name = "initial_payment_transaction_id")
    private String initialPaymentTransactionId;

    @Column(name = "final_payment_amount")
    private Double finalPaymentAmount;

    @Column(name = "final_payment_mode")
    private String finalPaymentMode;

	@JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "final_payment_date")
    private Date finalPaymentDate;

    @Column(name = "final_payment_transaction_id")
    private String finalPaymentTransactionId;

    
	@OneToOne
	@JoinColumn(name="status_id")
    private Order_Status orderStatus;

    @JsonIgnoreProperties("order")
	@OneToMany(mappedBy = "order" , cascade = CascadeType.ALL)
    private List<Order_Item> orderitemList;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(int id, Date orderDate, User user, Double totalPrice, Address address, Double initialPaymentAmount,
			String initialPaymentMode, Date initialPaymentDate, String initialPaymentTransactionId,
			Double finalPaymentAmount, String finalPaymentMode, Date finalPaymentDate, String finalPaymentTransactionId,
			Order_Status orderStatus, List<Order_Item> orderitemList) {
		super();
		this.id = id;
		this.orderDate = orderDate;
		this.user = user;
		this.totalPrice = totalPrice;
		this.address = address;
		this.initialPaymentAmount = initialPaymentAmount;
		this.initialPaymentMode = initialPaymentMode;
		this.initialPaymentDate = initialPaymentDate;
		this.initialPaymentTransactionId = initialPaymentTransactionId;
		this.finalPaymentAmount = finalPaymentAmount;
		this.finalPaymentMode = finalPaymentMode;
		this.finalPaymentDate = finalPaymentDate;
		this.finalPaymentTransactionId = finalPaymentTransactionId;
		this.orderStatus = orderStatus;
		this.orderitemList = orderitemList;
	}

	public Order(Date orderDate, User user, Double totalPrice, Address address, Double initialPaymentAmount,
			String initialPaymentMode, Date initialPaymentDate, String initialPaymentTransactionId,
			Double finalPaymentAmount, String finalPaymentMode, Date finalPaymentDate, String finalPaymentTransactionId,
			Order_Status orderStatus, List<Order_Item> orderitemList) {
		super();
		this.orderDate = orderDate;
		this.user = user;
		this.totalPrice = totalPrice;
		this.address = address;
		this.initialPaymentAmount = initialPaymentAmount;
		this.initialPaymentMode = initialPaymentMode;
		this.initialPaymentDate = initialPaymentDate;
		this.initialPaymentTransactionId = initialPaymentTransactionId;
		this.finalPaymentAmount = finalPaymentAmount;
		this.finalPaymentMode = finalPaymentMode;
		this.finalPaymentDate = finalPaymentDate;
		this.finalPaymentTransactionId = finalPaymentTransactionId;
		this.orderStatus = orderStatus;
		this.orderitemList = orderitemList;
	}

	
	public Order(User user, Double totalPrice, Address address, Double initialPaymentAmount, String initialPaymentMode,
			String initialPaymentTransactionId) {
		super();
		this.user = user;
		this.totalPrice = totalPrice;
		this.address = address;
		this.initialPaymentAmount = initialPaymentAmount;
		this.initialPaymentMode = initialPaymentMode;
		this.initialPaymentTransactionId = initialPaymentTransactionId;
	}

	
	public Order(User user, Double totalPrice, Address address, Double initialPaymentAmount, String initialPaymentMode,
			 String initialPaymentTransactionId, Order_Status orderStatus) {
		super();
		this.user = user;
		this.totalPrice = totalPrice;
		this.address = address;
		this.initialPaymentAmount = initialPaymentAmount;
		this.initialPaymentMode = initialPaymentMode;
		this.initialPaymentTransactionId = initialPaymentTransactionId;
		this.orderStatus = orderStatus;
	}
	

	public Order(Date orderDate, User user, Double totalPrice, Address address, Double initialPaymentAmount,
			String initialPaymentMode, Date initialPaymentDate, String initialPaymentTransactionId,
			Order_Status orderStatus) {
		super();
		this.orderDate = orderDate;
		this.user = user;
		this.totalPrice = totalPrice;
		this.address = address;
		this.initialPaymentAmount = initialPaymentAmount;
		this.initialPaymentMode = initialPaymentMode;
		this.initialPaymentDate = initialPaymentDate;
		this.initialPaymentTransactionId = initialPaymentTransactionId;
		this.orderStatus = orderStatus;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Double getInitialPaymentAmount() {
		return initialPaymentAmount;
	}

	public void setInitialPaymentAmount(Double initialPaymentAmount) {
		this.initialPaymentAmount = initialPaymentAmount;
	}

	public String getInitialPaymentMode() {
		return initialPaymentMode;
	}

	public void setInitialPaymentMode(String initialPaymentMode) {
		this.initialPaymentMode = initialPaymentMode;
	}

	public Date getInitialPaymentDate() {
		return initialPaymentDate;
	}

	public void setInitialPaymentDate(Date initialPaymentDate) {
		this.initialPaymentDate = initialPaymentDate;
	}

	public String getInitialPaymentTransactionId() {
		return initialPaymentTransactionId;
	}

	public void setInitialPaymentTransactionId(String initialPaymentTransactionId) {
		this.initialPaymentTransactionId = initialPaymentTransactionId;
	}

	public Double getFinalPaymentAmount() {
		return finalPaymentAmount;
	}

	public void setFinalPaymentAmount(Double finalPaymentAmount) {
		this.finalPaymentAmount = finalPaymentAmount;
	}

	public String getFinalPaymentMode() {
		return finalPaymentMode;
	}

	public void setFinalPaymentMode(String finalPaymentMode) {
		this.finalPaymentMode = finalPaymentMode;
	}

	public Date getFinalPaymentDate() {
		return finalPaymentDate;
	}

	public void setFinalPaymentDate(Date finalPaymentDate) {
		this.finalPaymentDate = finalPaymentDate;
	}

	public String getFinalPaymentTransactionId() {
		return finalPaymentTransactionId;
	}

	public void setFinalPaymentTransactionId(String finalPaymentTransactionId) {
		this.finalPaymentTransactionId = finalPaymentTransactionId;
	}

	public Order_Status getOrder_Status() {
		return orderStatus;
	}

	public void setOrder_Status(Order_Status orderStatus) {
		this.orderStatus = orderStatus;
	}

	public List<Order_Item> getOrderitemList() {
		return orderitemList;
	}

	public void setOrderitemList(List<Order_Item> orderitemList) {
		this.orderitemList = orderitemList;
	}
    
    
    
}
