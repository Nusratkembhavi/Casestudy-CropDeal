package com.cropdeal.AdminService.resource;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cropdeal.AdminService.model.Admin;
import com.cropdeal.AdminService.model.Crop;
import com.cropdeal.AdminService.model.Dealer;
import com.cropdeal.AdminService.model.Farmer;
import com.cropdeal.AdminService.repository.AdminRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AdminController {

	@Autowired
	private RestTemplate restTemp;
	
	@GetMapping("/")
	public String test() {
		return "hello-admin";
	}
	
	@Autowired
	private AdminRepository AdminRepo;

	@PostMapping("/addadmin")
	public String addadmin(@RequestBody Admin admin) {
		AdminRepo.save(admin);
		return "Added admin with id " + admin.getId();
	}

	@GetMapping("/findadmin")
	public List<Admin> getadmin() {
		return AdminRepo.findAll();
	}

	@GetMapping("/findadmin/{id}")
	public Optional<Admin> getadmin(@PathVariable String id) {
		return AdminRepo.findById(id);
	}

	@DeleteMapping("/deleteadmin/{id}")
	public String deleteadmin(@PathVariable String id) {
		AdminRepo.deleteById(id);
		return "dealer deleted having id " + id;
	}
	
	//--------------Admin access to farmer-------------------------

	@GetMapping("/admin/get/farmer")
	public List<Farmer> getFarmeratAdmin() {
		Farmer[] farmer = restTemp.getForObject("http://farmer-service/api/findfarmer", Farmer[].class);
		return Arrays.asList(farmer);
	}

	@GetMapping("/admin/get/farmer/{id}")
	public List<Farmer> getFarmeratAdminbyID(@PathVariable("id") String id) {
		Farmer farmer = restTemp.getForObject("http://farmer-service/api/findfarmer/" + id, Farmer.class);
		return Arrays.asList(farmer);
	}

	@RequestMapping(value = "/admin/delete/farmer/{_id}", method = RequestMethod.DELETE)
	public String deleteFarmerById(@PathVariable("_id") String _id) {
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<Farmer> entity = new HttpEntity<Farmer>(headers);
		return restTemp
				.exchange("http://farmer-service/api/deletefarmer/" + _id, HttpMethod.DELETE, entity, String.class)
				.getBody();
	}
	
	
	//------------------------Admin access to dealer-----------------------------

	@GetMapping("/admin/get/dealer/{id}")
	public List<Dealer> getDealeratAdminbyID(@PathVariable("id") String id) {
		Dealer dealer = restTemp.getForObject("http://dealer-service/api/finddealer/" + id, Dealer.class);
		return Arrays.asList(dealer);
	}

	@GetMapping("/admin/get/dealer")
	public List<Object> gatDealerAdmin() {
		Object[] dealer = restTemp.getForObject("http://dealer-service/api/finddealer", Object[].class);
		return Arrays.asList(dealer);
	}

	@RequestMapping(value = "/admin/delete/dealer/{_id}", method = RequestMethod.DELETE)
	public String deleteDealerById(@PathVariable("_id") String _id) {
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<Dealer> entity = new HttpEntity<Dealer>(headers);
		return restTemp
				.exchange("http://dealer-service/api/deletedealer/" + _id, HttpMethod.DELETE, entity, String.class)
				.getBody();
	}
	
	//----------------------------Admin access to crop-------------------------------------------------------------

	@GetMapping("/admin/get/crop")
	public List<Crop> getCropatAdmin() {
		Crop[] crop = restTemp.getForObject("http://crop-service/api/findcrop", Crop[].class);
		return Arrays.asList(crop);
	}

	@GetMapping("/admin/get/crop/{id}")
	public List<Crop> getCropatAdminbyID(@PathVariable("id") String id) {
		Crop crop = restTemp.getForObject("http://crop-service/api/findcrop/" + id, Crop.class);
		return Arrays.asList(crop);
	}

	@RequestMapping(value = "/admin/delete/crop/{_id}", method = RequestMethod.DELETE)
	public String deleteCropById(@PathVariable("_id") String _id) {
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<Crop> entity = new HttpEntity<Crop>(headers);
		return "Crop Deleated" + restTemp
				.exchange("http://crop-service/api/deletecrop/" + _id, HttpMethod.DELETE, entity, String.class)
				.getBody();
	}
	
	
//	@DeleteMapping("/admin/delete/crop/{_id}")
//	public String deleteCropById(Crop  _id) {
//		HttpEntity<Crop> entity = new HttpEntity<> (_id);
//		return "Crop Deleated" + restTemp
//				.exchange("http://crop-service/api/deletecrop/" + _id, HttpMethod.DELETE, entity, String.class)
//				.getBody();
//	}

	
}
