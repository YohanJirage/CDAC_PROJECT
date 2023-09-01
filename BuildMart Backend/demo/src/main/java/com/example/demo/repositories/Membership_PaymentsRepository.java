package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Membership_payment;

@Repository
public interface Membership_PaymentsRepository extends JpaRepository<Membership_payment, Integer> {

}
