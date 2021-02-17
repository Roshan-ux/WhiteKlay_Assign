package com.whiteklay.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whiteklay.model.Employee;
import com.whiteklay.model.Organization_Unit;
import com.whiteklay.repository.Organization_Repo;

@Service
public class Organization_Service {

	@Autowired
	Organization_Repo	organization_Repo;
	
public List<Organization_Unit> getList(){
		
		List<Organization_Unit> list = organization_Repo.findAll();
		return list;
	}
	
	public Organization_Unit getOrgDetails(int id) {
		
		Optional<Organization_Unit> op = organization_Repo.findById(id);
		
		Organization_Unit organization_Unit =op.get();
		
		return organization_Unit;
	}
	
	public String addOrg(Organization_Unit org) {
		
		try {
			organization_Repo.save(org);
			
			return "Added Successfully";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "Not Added";
	}
	
	public String deleteOrg(int id) {
		
		organization_Repo.deleteById(id);
		
		return "Deleted";
	}
}
