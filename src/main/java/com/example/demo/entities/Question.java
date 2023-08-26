package com.example.demo.entities;


import javax.persistence.*;

@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "question")
    private String question;

	
    

	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Question(int id, String question) {
		super();
		this.id = id;
		this.question = question;
		
	}

	public Question(String question) {
		super();
		this.question = question;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	

	

	

	
	
    
	
    

   
}