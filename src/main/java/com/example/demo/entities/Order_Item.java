package com.example.demo.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "order_item")
public class Order_Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JsonIgnoreProperties("orderItemList")
    @ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="vendor_product_id")
    private Vendor_Product vendorProduct;

    @Column(name = "quantity")
    private int quantity;

    
    @JsonIgnoreProperties("orderitemList")
    @ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="order_id")
    private Order order;


	public Order_Item() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Order_Item(int id, Vendor_Product vendorProduct, int quantity, Order order) {
		super();
		this.id = id;
		this.vendorProduct = vendorProduct;
		this.quantity = quantity;
		this.order = order;
	}


	public Order_Item(Vendor_Product vendorProduct, int quantity, Order order) {
		super();
		this.vendorProduct = vendorProduct;
		this.quantity = quantity;
		this.order = order;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public Vendor_Product getVendorProduct() {
		return vendorProduct;
	}


	public void setVendorProduct(Vendor_Product vendorProduct) {
		this.vendorProduct = vendorProduct;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public Order getOrder() {
		return order;
	}


	public void setOrder(Order order) {
		this.order = order;
	}

  
}
