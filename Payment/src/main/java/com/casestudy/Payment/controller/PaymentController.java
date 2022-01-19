package com.casestudy.Payment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.casestudy.Payment.model.Payment;
import com.casestudy.Payment.repository.PaymentRepository;
import com.casestudy.Payment.service.PaymentService;


@RestController
@CrossOrigin("*")
public class PaymentController {
	@Autowired
	private RestTemplate restTemplate ;
	@Autowired
	public PaymentService service;
	@Autowired
	public PaymentRepository repo;
	
	@PostMapping("/pay")
	public Payment doPayment(@RequestBody Payment payment) {
		String cid = payment.getcid();
		System.out.println(cid);
		//RrsCaseStudy.model.Reservation order =  restTemplate.exchange("http://localhost:8083/reservation/get/"+ rId,HttpMethod.GET,null,RrsCaseStudy.model.Reservation.class).getBody(); 
		return service.doPay(payment);
		
	}
	
	@GetMapping("/pay")
	public List<Payment> getfarmer() {
		return repo.findAll();
	}
}

