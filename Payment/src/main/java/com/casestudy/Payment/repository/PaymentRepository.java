package com.casestudy.Payment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.Payment.model.Payment;

public interface PaymentRepository extends MongoRepository<Payment, String> {

}
