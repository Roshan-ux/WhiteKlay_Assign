package com.whiteklay.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.whiteklay.model.Employee;
import com.whiteklay.services.Employee_Service;

@RestController
@CrossOrigin(origins = "*")
public class Employee_Controller {
	
	@Autowired
	Employee_Service	employee_Service;
	
	@GetMapping("/get_emp_list")
	public ResponseEntity<List<Employee>> getEmpList(){
		
		List<Employee> list = employee_Service.getList();
		
		return ResponseEntity.of(Optional.of(list));
		
	}
	
	@GetMapping("/get_emp_details/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable("id") int id){
		
		Employee employee = employee_Service.getDetails(id);
		
		return ResponseEntity.of(Optional.of(employee));
	}
	
	@PostMapping("/add_employee")
	public ResponseEntity<String> addEmployeeDetails(@RequestBody Employee employee){
		
		String s = employee_Service.addEmp(employee);
		
		return ResponseEntity.of(Optional.of(s));
	}
	
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") int id){
		
		String s = employee_Service.deleteEmp(id);
		return ResponseEntity.of(Optional.of(s));
	}

}
