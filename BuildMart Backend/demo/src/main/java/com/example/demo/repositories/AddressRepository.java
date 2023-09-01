package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Address;
@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {

	@Query("select a from Address a where user_id=:uid")
	public List<Address> getAddByUid(int uid);
}
