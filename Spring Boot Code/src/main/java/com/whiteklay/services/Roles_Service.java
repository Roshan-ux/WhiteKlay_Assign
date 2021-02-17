package com.whiteklay.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whiteklay.model.Employee;
import com.whiteklay.model.Roles;
import com.whiteklay.repository.Roles_Repository;

@Service
public class Roles_Service {

	@Autowired
	Roles_Repository	roles_Repository;
	
public List<Roles> getList(){
		
		List<Roles> list = roles_Repository.findAll();
		return list;
	}
	
	public Roles getDetails(int id) {
		
		Optional<Roles> op = roles_Repository.findById(id);
		
		Roles roles =op.get();
		
		return roles;
	}
	
	public String addRole(Roles role) {
		
		try {
			roles_Repository.save(role);
			
			return "Added Successfully";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "Not Added";
	}
	
	public String deleteRole(int id) {
		
		roles_Repository.deleteById(id);
		
		return "Deleted";
	}
}
