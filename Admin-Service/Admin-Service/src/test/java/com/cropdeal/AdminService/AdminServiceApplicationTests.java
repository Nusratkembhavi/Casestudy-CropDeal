package com.cropdeal.AdminService;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cropdeal.AdminService.model.Admin;
import com.cropdeal.AdminService.repository.AdminRepository;
import com.cropdeal.AdminService.resource.AdminController;


@RunWith(SpringRunner.class)
@SpringBootTest
class AdminServiceApplicationTests {

	@Autowired
	private AdminController service;
	

	@MockBean
	private AdminRepository adminrepo;
	@Test
	public void getAdminTest() {
		when(adminrepo.findAll()).thenReturn(Stream
				.of(new Admin("1234","abcd@123","123456"),new Admin("2345","bcde@2345","234567")).collect(Collectors.toList()));
		assertEquals(2, service.getadmin().size());
	}
	

	@Test
	public void addAdminTest() {
		Admin admin = new Admin("999", "def","def@33");
		when(adminrepo.save(admin)).thenReturn(admin);
		assertEquals(admin, service.addadmin(admin));
	}

	@Test
	public void deleteAdminbyidTest() {
		String admin = Admin("999");
		service.deleteadmin(admin);
		verify(adminrepo, times(1)).deleteById(admin);
	}


	private String Admin(String string) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
	
//	@Test
//	public void getFarmerbyIdTest() {
//		String id = "321";
//		((Stream) when(farmerrepo.findById(id))
//				.thenReturn(Optional.empty())).collect(Collectors.toList());
//		assertEquals(1, service.getfarmer(id));
//	}

}
