package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Construction_Material_Vendor;
@Repository
public interface Construction_Material_Vendor_Repo extends JpaRepository<Construction_Material_Vendor, Integer> {
		
	@Query("select v.email from Construction_Material_Vendor v")
	 public String[] getVendorEmails();
	
	@Query(value = "select * from construction_material_vendors where uid=:uid",nativeQuery = true)
	public Construction_Material_Vendor getVendorById(int uid);
}
