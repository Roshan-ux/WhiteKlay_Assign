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

import com.whiteklay.model.Organization_Unit;
import com.whiteklay.model.Roles;
import com.whiteklay.services.Organization_Service;

@RestController
@CrossOrigin(origins = "*")
public class Organization_Controller {
	
	@Autowired
	Organization_Service organization_Service;

	@GetMapping("/get_org_list")
	public ResponseEntity<List<Organization_Unit>> getOrgList(){
		
		List<Organization_Unit> list = organization_Service.getList();
		
		return ResponseEntity.of(Optional.of(list));
		
	}
	
	@GetMapping("/get_org_details/{id}")
	public ResponseEntity<Organization_Unit> getOrganization(@PathVariable("id") int id){
		
		Organization_Unit org = organization_Service.getOrgDetails(id);
		
		return ResponseEntity.of(Optional.of(org));
	}
	
	@PostMapping("/add_org")
	public ResponseEntity<String> addRoleDetails(@RequestBody Organization_Unit org){
		
		String s = organization_Service.addOrg(org);
		
		return ResponseEntity.of(Optional.of(s));
	}
	
	@DeleteMapping("/delete_org/{id}")
	public ResponseEntity<String> deleteOrg(@PathVariable("id") int id){
		
		String s = organization_Service.deleteOrg(id);
		return ResponseEntity.of(Optional.of(s));
	}
}
