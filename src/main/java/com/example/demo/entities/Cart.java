package com.example.demo.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JsonIgnoreProperties("cartList")
    @ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="vendor_product_id")
    private Vendor_Product vendorProduct;


    @Column(name = "Quantity")
    private int quantity;

		@JsonIgnoreProperties("cartList")
    @ManyToOne(cascade = CascadeType.ALL)
		@JoinColumn(name="user_id")
    private User user;

		public Cart() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Cart(int id, Vendor_Product vendorProduct, int quantity, User user) {
			super();
			this.id = id;
			this.vendorProduct = vendorProduct;
			this.quantity = quantity;
			this.user = user;
		}

		public Cart(Vendor_Product vendorProduct, int quantity, User user) {
			super();
			this.vendorProduct = vendorProduct;
			this.quantity = quantity;
			this.user = user;
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

		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}

		@Override
		public String toString() {
			return "Cart [id=" + id + ", vendorProduct=" + vendorProduct + ", quantity=" + quantity + ", user=" + user
					+ "]";
		}

	
     
}