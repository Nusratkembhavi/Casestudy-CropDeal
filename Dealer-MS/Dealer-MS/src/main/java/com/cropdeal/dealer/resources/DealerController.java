package com.cropdeal.dealer.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DealerController {
	

	@RequestMapping("/dealer")
	public String check() {
		return "Hello-World-Dealer";
	}

}
