package com.whiteklay.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.whiteklay.model.Organization_Unit;

@Repository
public interface Organization_Repo extends JpaRepository<Organization_Unit, Integer>{

}
