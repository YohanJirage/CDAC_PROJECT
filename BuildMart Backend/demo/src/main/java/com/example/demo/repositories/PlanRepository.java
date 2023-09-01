package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Plans;
@Repository
public interface PlanRepository extends JpaRepository<Plans, Integer> {

}
