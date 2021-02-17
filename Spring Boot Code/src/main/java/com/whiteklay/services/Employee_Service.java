package com.whiteklay.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whiteklay.model.Employee;
import com.whiteklay.repository.Employee_Repo;

@Service
public class Employee_Service {

	@Autowired
	Employee_Repo employee_Repo;
	
	public List<Employee> getList(){
		
		List<Employee> list = employee_Repo.findAll();
		return list;
	}
	
	public Employee getDetails(int id) {
		
		Optional<Employee> op = employee_Repo.findById(id);
		
		Employee employee =op.get();
		
		return employee;
	}
	
	public String addEmp(Employee emp) {
		
		try {
			employee_Repo.save(emp);
			
			return "Added Successfully";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "Not Added";
	}
	
	public String deleteEmp(int id) {
		
		employee_Repo.deleteById(id);
		
		return "Deleted";
	}
}
