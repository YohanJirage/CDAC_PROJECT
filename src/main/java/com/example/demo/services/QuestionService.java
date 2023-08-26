package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Question;
import com.example.demo.entities.Role;
import com.example.demo.repositories.QuestionRepository;



@Service
public class QuestionService {
	@Autowired
	QuestionRepository qrepo;
	
	public List<Question> getQuestions()
	{
		return qrepo.findAll();
	}
	public Question getQuestion(int id)
	{
		 Optional<Question> or=qrepo.findById(id);
		 Question r=null;
		 try
		 {
			 if(or!=null)
			 {
				 r=or.get();
			 }
			  
		 }
		 catch(Exception e)
		 {
			 e.printStackTrace();
		 }
		 return r;
	}
	

}
