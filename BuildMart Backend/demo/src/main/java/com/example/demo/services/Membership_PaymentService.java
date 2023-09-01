package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Membership_payment;
import com.example.demo.repositories.Membership_PaymentsRepository;

@Service
public class Membership_PaymentService {
	@Autowired
	Membership_PaymentsRepository mprepo;
	
	public Membership_payment save(Membership_payment mp)
	{
		return mprepo.save(mp);
	}

}
