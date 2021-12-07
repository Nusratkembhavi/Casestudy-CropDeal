package com.cropdeal.farmer.resources;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cropdeal.farmer.models.Crops;
//import com.cropdeal.crops.model.Crop;
import com.cropdeal.farmer.models.FarmerUser;
import com.cropdeal.farmer.repository.FarmerRepository;

@RestController
@RequestMapping("/farmer")
public class FarmerController {
	@Autowired(required=true)
	RestTemplate restTemplate = new RestTemplate();
	
	@Autowired
	private FarmerRepository repository;
//
	@GetMapping("/")
	public String check() {
		return "Hello-World-Farmer";
	}

	
   @GetMapping("/findAllFarmer")
	public List<FarmerUser> getFarmer() {
		return repository.findAll();
		
	}
//	
//	//adding a new farmer
	@PostMapping("/addFarmer")
	public String saveFarmer(@RequestBody FarmerUser farmer) {
		repository.save(farmer);
		return "Added farmer "+ farmer.getId();
		
		}
	

	@GetMapping("/findAllFarmer/{id}")
	public Optional<FarmerUser> getFarmer(@PathVariable int id) {
		return repository.findById(id);
}
	

	@PutMapping("/updateFarmer/{id}")
	public String putbyFarmer(@RequestBody FarmerUser farmer) {
		repository.save(farmer);
		return "farmer updated with id:"+farmer.getId();
	}
	
	
	
	@DeleteMapping("/delete/{id}")
	public String deleteFarmer(@PathVariable int id) {
		repository.deleteById(id);
		return "farmer deleted with id :"+id;
	}
	
	//---------------------------------------------------------------------------------------
	//Farmer with crop database
	
	
	@GetMapping("/findAllCrops")
	public List<Crops> getbyFarmer() {
		return Arrays.asList(restTemplate.getForObject("http://localhost:8082/crop/findAllCrops", Crops[].class));

		
	}

}
	
