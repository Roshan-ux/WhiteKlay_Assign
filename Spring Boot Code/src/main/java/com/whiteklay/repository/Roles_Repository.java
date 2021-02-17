package com.whiteklay.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.whiteklay.model.Roles;

@Repository
public interface Roles_Repository extends JpaRepository<Roles, Integer>{

}
