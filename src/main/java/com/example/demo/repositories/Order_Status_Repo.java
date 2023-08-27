package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Order_Status;
@Repository
public interface Order_Status_Repo extends JpaRepository<Order_Status, Integer> {

}
