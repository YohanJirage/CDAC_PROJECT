package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.*;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "membership_payments")
public class Membership_payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JsonIgnoreProperties("MembershipPaymentList")
  	@ManyToOne
  	@Cascade(value = CascadeType.ALL)
  	@JoinColumn(name="plan_id")
    Plans plan;

    @Column(name = "amount")
    private double amount;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "purchase_date")
    private Date purchaseDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "expiry_date")
    private Date expiryDate;

    @Column(name = "transaction_id")
    private String transactionId;

    
    @JsonIgnoreProperties("MembershipPayment")
  	@OneToOne
    @JoinColumn(name="vendor_id")
    @Cascade(value = CascadeType.ALL)
    Construction_Material_Vendor vendor;
    
    

	public Membership_payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Membership_payment(int id,Plans plan, double amount, Date purchaseDate, Date expiryDate,
			String transactionId, Construction_Material_Vendor vendor) {
		super();
		this.id = id;
		this.plan = plan;
		this.amount = amount;
		this.purchaseDate = purchaseDate;
		this.expiryDate = expiryDate;
		this.transactionId = transactionId;
		this.vendor = vendor;
	}

	public Membership_payment( Plans plan, double amount, Date purchaseDate, Date expiryDate,
			String transactionId, Construction_Material_Vendor vendor) {
		super();
		this.plan = plan;
		this.amount = amount;
		this.purchaseDate = purchaseDate;
		this.expiryDate = expiryDate;
		this.transactionId = transactionId;
		this.vendor = vendor;
	}

	

	public Membership_payment(Plans plan, double amount, String transactionId, Construction_Material_Vendor vendor) {
		super();
		this.plan = plan;
		this.amount = amount;
		this.transactionId = transactionId;
		this.vendor = vendor;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Plans getPlan() {
		return plan;
	}

	public void setPlan(Plans plan) {
		this.plan = plan;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Date getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public Date getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}

	public String getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}

	public Construction_Material_Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Construction_Material_Vendor vendor) {
		this.vendor = vendor;
	}

	@Override
	public String toString() {
		return "Membership_payment [id=" + id + ", plan=" + plan + ", amount=" + amount + ", purchaseDate="
				+ purchaseDate + ", expiryDate=" + expiryDate + ", transactionId=" + transactionId 
				+ "]";
	}
    
    
    
}