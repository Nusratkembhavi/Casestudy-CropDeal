package com.cropdeal.farmer.models;

public class BankDetails {
	
	public class bankDetails {
		
		private int accountNumber;
		private int bankName;
		private int ifscCode;
		private int mifcCode;
		
		
		public bankDetails(int accountNumber, int bankName, int ifscCode) {
			super();
			this.accountNumber = accountNumber;
			this.bankName = bankName;
			this.ifscCode = ifscCode;
		}


		public int getAccountNumber() {
			return accountNumber;
		}


		public void setAccountNumber(int accountNumber) {
			this.accountNumber = accountNumber;
		}


		public int getBankName() {
			return bankName;
		}


		public void setBankName(int bankName) {
			this.bankName = bankName;
		}


		public int getIfscCode() {
			return ifscCode;
		}


		public void setIfscCode(int ifscCode) {
			this.ifscCode = ifscCode;
		}


		public int getMifcCode() {
			return mifcCode;
		}


		public void setMifcCode(int mifcCode) {
			this.mifcCode = mifcCode;
		}

		

	}
}
