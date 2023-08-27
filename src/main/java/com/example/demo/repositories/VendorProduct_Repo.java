package com.example.demo.repositories;

import java.sql.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Construction_Material_Vendor;
import com.example.demo.entities.Product;
import com.example.demo.entities.Vendor_Product;

@Transactional
@Repository
public interface VendorProduct_Repo extends JpaRepository<Vendor_Product, Integer> {
	
	@Query("select v from Vendor_Product v where vendor_id=:vid")
	public List<Vendor_Product> getVendorProductsForVendors(int vid);
	
	@Query("select v from Vendor_Product v where product_id=:pid")
	public List<Vendor_Product> getVendorProductsForCustomers(int pid);
	
	@Modifying
	@Query("UPDATE Vendor_Product e SET e.quantity=:quantity, e.price =:price, e.offerPercentage=:offerPercentage, e.offerValidDate =:offerValidDate  WHERE e.id = :vid")
	public int updateVendorProduct(int quantity,double price,int offerPercentage,Date offerValidDate,int vid );
	

	@Modifying
	@Query("delete from Vendor_Product u where id=:vid")
	public int deleteVendorProduct(int vid);
	


	

}
