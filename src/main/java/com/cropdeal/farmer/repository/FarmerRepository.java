package com.cropdeal.farmer.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cropdeal.farmer.models.FarmerUser;



public interface FarmerRepository extends  MongoRepository < FarmerUser,Integer>
{
	FarmerUser findByfarmerUsername(String farmerUsername);
	FarmerUser findByfarmerUsernameEquals(String farmerUsername);


}
