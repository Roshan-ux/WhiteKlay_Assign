package com.whiteklay.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.whiteklay.model.Admin_Details;

@Repository
public interface Admin_Repository extends JpaRepository<Admin_Details, Integer> {

}
