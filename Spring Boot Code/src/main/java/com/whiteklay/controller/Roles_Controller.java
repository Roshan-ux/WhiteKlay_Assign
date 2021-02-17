package com.whiteklay.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.whiteklay.model.Employee;
import com.whiteklay.model.Roles;
import com.whiteklay.services.Roles_Service;

@RestController
@CrossOrigin(origins = "*")
public class Roles_Controller {

	@Autowired
	Roles_Service	roles_Service;
	
	@GetMapping("/get_role_list")
	public ResponseEntity<List<Roles>> getRoleList(){
		
		List<Roles> list = roles_Service.getList();
		
		return ResponseEntity.of(Optional.of(list));
		
	}
	
	@GetMapping("/get_role_details/{id}")
	public ResponseEntity<Roles> getEmployee(@PathVariable("id") int id){
		
		Roles roles = roles_Service.getDetails(id);
		
		return ResponseEntity.of(Optional.of(roles));
	}
	
	@PostMapping("/add_role")
	public ResponseEntity<String> addRoleDetails(@RequestBody Roles roles){
		
		String s = roles_Service.addRole(roles);
		
		return ResponseEntity.of(Optional.of(s));
	}
	
	@DeleteMapping("/delete_role/{id}")
	public ResponseEntity<String> deleteRole(@PathVariable("id") int id){
		
		String s = roles_Service.deleteRole(id);
		return ResponseEntity.of(Optional.of(s));
	}
}
