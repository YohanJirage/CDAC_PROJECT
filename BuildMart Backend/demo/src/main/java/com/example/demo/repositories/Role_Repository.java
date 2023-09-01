package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Role;
@Repository
public interface Role_Repository extends JpaRepository<Role, Integer> {

}
