package com.whiteklay.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.whiteklay.model.Employee;

@Repository
public interface Employee_Repo extends JpaRepository<Employee, Integer>{

}
