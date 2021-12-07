package com.cropdeal.farmer.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Document(collection="Farmer_DB")
public class FarmerUser {
	
		
		@Id
		private int id;
		private String farmerUsername;
		private String farmerName;
		private String farmerEmail;
		private int farmerContactNo;
//		private location farmerLocation;
		private BankDetails bankDetails;
		private String farmerPassword;
		
		

public FarmerUser(int id, String farmerUsername, String farmerName, String farmerEmail, int farmerContactNo,
				BankDetails bankDetails, String farmerPassword) {
			super();
			this.id = id;
			this.farmerUsername = farmerUsername;
			this.farmerName = farmerName;
			this.farmerEmail = farmerEmail;
			this.farmerContactNo = farmerContactNo;
			this.bankDetails = bankDetails;
			this.farmerPassword = farmerPassword;
		}



public int getId() {
	return id;
}



public void setId(int id) {
	this.id = id;
}



public String getFarmerUsername() {
	return farmerUsername;
}



public void setFarmerUsername(String farmerUsername) {
	this.farmerUsername = farmerUsername;
}



public String getFarmerName() {
	return farmerName;
}



public void setFarmerName(String farmerName) {
	this.farmerName = farmerName;
}



public String getFarmerEmail() {
	return farmerEmail;
}



public void setFarmerEmail(String farmerEmail) {
	this.farmerEmail = farmerEmail;
}



public int getFarmerContactNo() {
	return farmerContactNo;
}



public void setFarmerContactNo(int farmerContactNo) {
	this.farmerContactNo = farmerContactNo;
}



public BankDetails getBankDetails() {
	return bankDetails;
}



public void setBankDetails(BankDetails bankDetails) {
	this.bankDetails = bankDetails;
}



public String getFarmerPassword() {
	return farmerPassword;
}



public void setFarmerPassword(String farmerPassword) {
	this.farmerPassword = farmerPassword;
}



@Override
public String toString() {
	return "FarmerUser [Id=" + id + ", farmerUsername=" + farmerUsername + ", farmerName=" + farmerName
			+ ", farmerEmail=" + farmerEmail + ", farmerContactNo=" + farmerContactNo + ", bankDetails=" + bankDetails
			+ ", farmerPassword=" + farmerPassword + "]";
}





//		

	}

	


	
	


