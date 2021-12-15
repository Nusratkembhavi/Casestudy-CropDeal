package com.cropdeal.AdminService.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminService {

	@GetMapping("/admin")
	public String dealer() {
		return "Admin list";
	}

}

