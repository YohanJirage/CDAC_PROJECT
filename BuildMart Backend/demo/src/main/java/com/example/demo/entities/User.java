package com.example.demo.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY )
	private int id;
	
	@Column
	private String username;
	
	@Column
	private String password;


	@Column(name = "answer")
	 private String answer;

	@ManyToOne
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name="role_id")
	Role role;
	
	
   
  	@ManyToOne
 	@Cascade(value = CascadeType.ALL)
 	@JoinColumn(name="question_id")
    private Question question ;
	
	@Column
	private String active_status;

	
	@JsonIgnoreProperties("user")
	@OneToOne(mappedBy = "user")
	@Cascade(value = CascadeType.ALL)
	Construction_Material_Vendor vendor;
	
	@JsonIgnoreProperties("user")
	@OneToOne(mappedBy = "user")
	@Cascade(value = CascadeType.ALL)
	Construction_Company company;
	
	@JsonIgnoreProperties("user")
	@OneToOne(mappedBy = "user")
	@Cascade(value = CascadeType.ALL)
	Individual_Customer customer;
	
	@JsonIgnoreProperties("user")
	@OneToOne(mappedBy = "user")
	@Cascade(value = CascadeType.ALL)
	Labour labour;
	
//	@JsonIgnoreProperties("user")
//	@OneToMany(mappedBy = "user")
//	@Cascade(value = CascadeType.ALL)
//	Set<Address>addresses;
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}


	

	public User(int id, String username, String password, String answer, Role role, Question question,
			String active_status,Construction_Material_Vendor vendor,
			Construction_Company company, Individual_Customer customer, Labour labour) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.answer = answer;
		this.role = role;
		this.question = question;
		this.active_status = active_status;
		this.vendor = vendor;
		this.company = company;
		this.customer = customer;
		this.labour = labour;
	
	}




	
	

	public User(String username, String password, String answer, Role role, Question question, String active_status,
			 Construction_Material_Vendor vendor, Construction_Company company,
			Individual_Customer customer, Labour labour) {
		super();
		this.username = username;
		this.password = password;
		this.answer = answer;
		this.role = role;
		this.question = question;
		this.active_status = active_status;
	
		this.vendor = vendor;
		this.company = company;
		this.customer = customer;
		this.labour = labour;
		
	}




	public User(String username, String password, String answer, Role role, Question question) {
		super();
		this.username = username;
		this.password = password;
		this.answer = answer;
		this.role = role;
		this.question = question;
	}




	public int getId() {
		return id;
	}




	public void setId(int id) {
		this.id = id;
	}




	public String getUsername() {
		return username;
	}




	public void setUsername(String username) {
		this.username = username;
	}




	public String getPassword() {
		return password;
	}




	public void setPassword(String password) {
		this.password = password;
	}




	public String getAnswer() {
		return answer;
	}




	public void setAnswer(String answer) {
		this.answer = answer;
	}




	public Role getRole() {
		return role;
	}




	public void setRole(Role role) {
		this.role = role;
	}




	public Question getQuestion() {
		return question;
	}




	public void setQuestion(Question question) {
		this.question = question;
	}




	public String getActive_status() {
		return active_status;
	}




	public void setActive_status(String active_status) {
		this.active_status = active_status;
	}






	public Construction_Material_Vendor getVendor() {
		return vendor;
	}




	public void setVendor(Construction_Material_Vendor vendor) {
		this.vendor = vendor;
	}




	public Construction_Company getCompany() {
		return company;
	}




	public void setCompany(Construction_Company company) {
		this.company = company;
	}




	public Individual_Customer getCustomer() {
		return customer;
	}




	public void setCustomer(Individual_Customer customer) {
		this.customer = customer;
	}




	public Labour getLabour() {
		return labour;
	}




	public void setLabour(Labour labour) {
		this.labour = labour;
	}







	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", answer=" + answer + ", role="
				+ role + ", question=" + question + ", active_status=" + active_status + "]";
	}



    
	
	

}
