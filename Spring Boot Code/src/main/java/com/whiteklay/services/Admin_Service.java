package com.whiteklay.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.whiteklay.repository.Admin_Repository;

@Service
public class Admin_Service {

	@Autowired
	Admin_Repository	admin_Repository;
}
