package com.example.demo.entities;

import java.sql.Blob;
import java.util.Arrays;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "product_name")
    private String productName;
    
		@Column(name = "description")
    private String description;

    @Column(name = "stock_quantity")
    private String stockQuantity;
    
    @Column(name="picture")
    private byte[] picture;
  
		@ManyToOne(cascade = CascadeType.ALL)
		@JoinColumn(name="cid")
    private Category category;
    
    @JsonIgnoreProperties("product")
 		@OneToMany(mappedBy = "product" , cascade = CascadeType.ALL)
    private List<Vendor_Product> vendorProductList;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(int id, String productName, String description, String stockQuantity, Category category,
			List<Vendor_Product> vendorProductList) {
		super();
		this.id = id;
		this.productName = productName;
		this.description = description;
		this.stockQuantity = stockQuantity;
		this.category = category;
		this.vendorProductList = vendorProductList;
	}

	public Product(String productName, String description, String stockQuantity, Category category,
			List<Vendor_Product> vendorProductList) {
		super();
		this.productName = productName;
		this.description = description;
		this.stockQuantity = stockQuantity;
		this.category = category;
		this.vendorProductList = vendorProductList;
	}
	

	public Product(String productName, String description, String stockQuantity, byte[] picture, Category category,
			List<Vendor_Product> vendorProductList) {
		super();
		this.productName = productName;
		this.description = description;
		this.stockQuantity = stockQuantity;
		this.picture = picture;
		this.category = category;
		this.vendorProductList = vendorProductList;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStockQuantity() {
		return stockQuantity;
	}

	public void setStockQuantity(String stockQuantity) {
		this.stockQuantity = stockQuantity;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<Vendor_Product> getVendorProductList() {
		return vendorProductList;
	}

	public void setVendorProductList(List<Vendor_Product> vendorProductList) {
		this.vendorProductList = vendorProductList;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

	

	
	
    
     
    
}