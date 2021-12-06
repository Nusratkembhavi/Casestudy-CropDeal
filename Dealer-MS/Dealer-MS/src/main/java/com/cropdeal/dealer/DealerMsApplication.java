package com.cropdeal.dealer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class DealerMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(DealerMsApplication.class, args);
	}

}
