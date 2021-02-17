package com.whiteklay.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "organization")
public class Organization_Unit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int org_id;
	private String name;
	private int size_of_org_unit;
	@Column(columnDefinition = "TEXT")
	private String description;
	
	public Organization_Unit(int org_id, String name, int size_of_org_unit, String description) {
		super();
		this.org_id = org_id;
		this.name = name;
		this.size_of_org_unit = size_of_org_unit;
		this.description = description;
	}

	public Organization_Unit() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getOrg_id() {
		return org_id;
	}

	public void setOrg_id(int org_id) {
		this.org_id = org_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getSize_of_org_unit() {
		return size_of_org_unit;
	}

	public void setSize_of_org_unit(int size_of_org_unit) {
		this.size_of_org_unit = size_of_org_unit;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Organization_Unit [org_id=" + org_id + ", name=" + name + ", size_of_org_unit=" + size_of_org_unit
				+ ", description=" + description + "]";
	}
	
	
	

}
