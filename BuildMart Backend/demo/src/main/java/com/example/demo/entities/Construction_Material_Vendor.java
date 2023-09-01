package com.example.demo.entities;

import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "construction_material_vendors")
public class Construction_Material_Vendor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "shop_name")
    private String shopName;

    @Column(name = "email")
    private String email;

    @Column(name = "contact_number")
    private String contactNumber; 

    @JsonIgnoreProperties({"vendor","company","customer","labour"})
    @OneToOne
    @Cascade(value = CascadeType.ALL)
	@JoinColumn(name="uid")
    User user;

//	@JsonIgnoreProperties("vendor")
//	@OneToOne(mappedBy = "vendor")
//	@Cascade(value = CascadeType.ALL)
//	Membership_payment MembershipPayment;
	
	
	

	public Construction_Material_Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Construction_Material_Vendor(int id, String shopName, String email, String contactNumber, User user
			) {
		super();
		this.id = id;
		this.shopName = shopName;
		this.email = email;
		this.contactNumber = contactNumber;
		this.user = user;
//		MembershipPayment = membershipPayment;
	}

	public Construction_Material_Vendor(String shopName, String email, String contactNumber, User user) {
		super();
		this.shopName = shopName;
		this.email = email;
		this.contactNumber = contactNumber;
		this.user = user;
	}
	public Construction_Material_Vendor(String shopName, String email, String contactNumber) {
		super();
		this.shopName = shopName;
		this.email = email;
		this.contactNumber = contactNumber;
//		MembershipPayment = membershipPayment;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
//
//	public Membership_payment getMembershipPayment() {
//		return MembershipPayment;
//	}
//
//	public void setMembershipPayment(Membership_payment membershipPayment) {
//		MembershipPayment = membershipPayment;
//	}

//	@Override
//	public String toString() {
//		return "Construction_Material_Vendor [id=" + id + ", shopName=" + shopName + ", email=" + email
//				+ ", contactNumber=" + contactNumber + ", user=" + user + ", MembershipPayment=" + MembershipPayment
//				+ "]";
//	}

	

	



	




	
	

//	public Construction_Material_Vendor() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//
//	public Construction_Material_Vendor(int id, String shopName, String email, String contactNumber, User user,
//			Set<Membership_payment> membershipPaymentSet) {
//		super();
//		this.id = id;
//		this.shopName = shopName;
//		this.email = email;
//		this.contactNumber = contactNumber;
//		this.user = user;
//		MembershipPaymentSet = membershipPaymentSet;
//	}
//
//	public Construction_Material_Vendor(String shopName, String email, String contactNumber, User user,
//			Set<Membership_payment> membershipPaymentSet) {
//		super();
//		this.shopName = shopName;
//		this.email = email;
//		this.contactNumber = contactNumber;
//		this.user = user;
//		MembershipPaymentSet = membershipPaymentSet;
//	}
//	
//
//	public Construction_Material_Vendor(String shopName, String email, String contactNumber) {
//		super();
//		this.shopName = shopName;
//		this.email = email;
//		this.contactNumber = contactNumber;
//	}
//	
//
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getShopName() {
//		return shopName;
//	}
//
//	public void setShopName(String shopName) {
//		this.shopName = shopName;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getContactNumber() {
//		return contactNumber;
//	}
//
//	public void setContactNumber(String contactNumber) {
//		this.contactNumber = contactNumber;
//	}
//
//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}
//
//	public Set<Membership_payment> getMembershipPaymentSet() {
//		return MembershipPaymentSet;
//	}
//
//	public void setMembershipPaymentSet(Set<Membership_payment> membershipPaymentSet) {
//		MembershipPaymentSet = membershipPaymentSet;
//	}
//    
    
	
}