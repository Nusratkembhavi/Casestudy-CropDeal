package com.cropdeal.farmer.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Crop_DB")
public class Crops {
	@Id
	private int farmerId;
	private int cropId;
	private String cropName;
	//private String cropLocation;
	//private double cropQty;
	private String cropType;
	
	
	public Crops() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Crops(int farmerId, int cropId, String cropName, String cropType) {
		super();
		this.farmerId = farmerId;
		this.cropId = cropId;
		this.cropName = cropName;
		this.cropType = cropType;
	}


	public int getFarmerId() {
		return farmerId;
	}


	public void setFarmerId(int farmerId) {
		this.farmerId = farmerId;
	}


	public int getCropId() {
		return cropId;
	}


	public void setCropId(int cropId) {
		this.cropId = cropId;
	}


	public String getCropName() {
		return cropName;
	}


	public void setCropName(String cropName) {
		this.cropName = cropName;
	}


	public String getCropType() {
		return cropType;
	}


	public void setCropType(String cropType) {
		this.cropType = cropType;
	}
	
	
	
	
	
	
	


}
