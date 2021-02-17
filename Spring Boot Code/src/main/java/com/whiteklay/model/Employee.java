package com.whiteklay.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int emp_id;
	private String emp_name;
	private String email;
	private String role;
	private String organization;
	
	public Employee(int emp_id, String emp_name, String email, String role, String organization) {
		super();
		this.emp_id = emp_id;
		this.emp_name = emp_name;
		this.email = email;
		this.role = role;
		this.organization = organization;
	}
	
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getEmp_id() {
		return emp_id;
	}
	
	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}
	
	public String getEmp_name() {
		return emp_name;
	}
	
	public void setEmp_name(String emp_name) {
		this.emp_name = emp_name;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getRole() {
		return role;
	}
	
	public void setRole(String role) {
		this.role = role;
	}
	
	public String getOrganization() {
		return organization;
	}
	
	public void setOrganization(String organization) {
		this.organization = organization;
	}
	
	@Override
	public String toString() {
		return "Employee [emp_id=" + emp_id + ", emp_name=" + emp_name + ", email=" + email + ", role=" + role
				+ ", organization=" + organization + "]";
	}
	
	

}
