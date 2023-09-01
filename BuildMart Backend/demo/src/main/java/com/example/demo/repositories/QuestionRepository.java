package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Question;
@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

}
