package com.whiteklay.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "roles")
public class Roles {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int role_id;
	private String role_name;
	@Column(columnDefinition = "TEXT")
	private String description;
	
	public Roles(int role_id, String role_name, String description) {
		super();
		this.role_id = role_id;
		this.role_name = role_name;
		this.description = description;
	}

	public Roles() {
		super();
	}

	public int getRole_id() {
		return role_id;
	}

	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}

	public String getRole_name() {
		return role_name;
	}

	public void setRole_name(String role_name) {
		this.role_name = role_name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Roles [role_id=" + role_id + ", role_name=" + role_name + ", description=" + description + "]";
	}
	
	
	

}
