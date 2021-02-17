package com.whiteklay.controller;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.whiteklay.model.Admin_Details;

@RestController
@CrossOrigin(origins = "*")
public class Admin_Controller {

	@PostMapping("/check_admin_log")
	public ResponseEntity<String> checkAdmin(@RequestBody Admin_Details admin_Details){
		
		String em ="admin123";
		String ps ="123456";
		
		if(admin_Details.getEmail().equals(em) && admin_Details.getPassword().equals(ps)) {
			
			return ResponseEntity.of(Optional.of("Match"));
		}
		else {
			return ResponseEntity.of(Optional.of("Not Match"));
		}
	}
	
}
