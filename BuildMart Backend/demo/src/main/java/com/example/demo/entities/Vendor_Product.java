package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "vendor_product")
public class Vendor_Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

		@Column(name = "quantity")
    private int quantity;

		@Column(name = "price")
    private double price;

    @Column(name = "offer_percentage")
    private int offerPercentage;

	@JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "offer_valid_date")
    private Date offerValidDate;

    @JsonIgnoreProperties("vendorProductList")
    @ManyToOne(cascade = CascadeType.ALL)
	  @JoinColumn(name="vendor_id")
    private Construction_Material_Vendor vendor;
    
    @JsonIgnoreProperties("vendorProductList")
    @ManyToOne(cascade = CascadeType.ALL)
	  @JoinColumn(name="product_id")
    private Product product;

	public Vendor_Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vendor_Product(int id, int quantity, double price, int offerPercentage, Date offerValidDate,
			Construction_Material_Vendor vendor, Product product) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.price = price;
		this.offerPercentage = offerPercentage;
		this.offerValidDate = offerValidDate;
		this.vendor = vendor;
		this.product = product;
	}

	public Vendor_Product(int quantity, double price, int offerPercentage, Date offerValidDate,
			Construction_Material_Vendor vendor, Product product) {
		super();
		this.quantity = quantity;
		this.price = price;
		this.offerPercentage = offerPercentage;
		this.offerValidDate = offerValidDate;
		this.vendor = vendor;
		this.product = product;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public int getOfferPercentage() {
		return offerPercentage;
	}

	public void setOfferPercentage(int offerPercentage) {
		this.offerPercentage = offerPercentage;
	}

	public Date getOfferValidDate() {
		return offerValidDate;
	}

	public void setOfferValidDate(Date offerValidDate) {
		this.offerValidDate = offerValidDate;
	}

	public Construction_Material_Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Construction_Material_Vendor vendor) {
		this.vendor = vendor;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "Vendor_Product [id=" + id + ", quantity=" + quantity + ", price=" + price + ", offerPercentage="
				+ offerPercentage + ", offerValidDate=" + offerValidDate + ", vendor=" + vendor + ", product=" + product
				+ "]";
	}
    
       
}
