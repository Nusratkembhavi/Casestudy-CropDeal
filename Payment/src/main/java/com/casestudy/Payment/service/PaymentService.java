package com.casestudy.Payment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.casestudy.Payment.model.Payment;
import com.casestudy.Payment.repository.PaymentRepository;

@Service
public class PaymentService {
@Autowired
private PaymentRepository repository;
	public Payment doPay(Payment payment) {
		
			payment.setStatus(paymentStatus());
			//payment.setAmount(order.getTotalTicketFair());
			//payment.setTxnId(UUID.randomUUID().toString());
			return repository.save(payment);
	}
	private String paymentStatus() {
		return "success";
	}
	

}