package com.cropdeal.AdminService.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cropdeal.AdminService.model.Admin;


public interface AdminRepository extends MongoRepository<Admin, String> {

}
