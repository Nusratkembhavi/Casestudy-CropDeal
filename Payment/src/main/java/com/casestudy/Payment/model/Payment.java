package com.casestudy.Payment.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Payment")
public class Payment {
	@Id
	private String TxnId;
	public String name;
	public double amount;
	public long cardnumber;
	public Date exp;
	public int cVV;
	public String cid;
	public String status;
	
	
	public Payment(String txnId, String name, double amount, long cardnumber, Date exp, int cVV, String cid,
			String status) {
		super();
		TxnId = txnId;
		this.name = name;
		this.amount = amount;
		this.cardnumber = cardnumber;
		this.exp = exp;
		this.cVV = cVV;
		this.cid = cid;
		this.status = status;
	}
	
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getTxnId() {
		return TxnId;
	}
	public void setTxnId(String txnId) {
		TxnId = txnId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getCardnumber() {
		return cardnumber;
	}
	public void setCardnumber(long cardnumber) {
		this.cardnumber = cardnumber;
	}
	public Date getExp() {
		return exp;
	}
	public void setExp(Date exp) {
		this.exp = exp;
	}
	public int getcVV() {
		return cVV;
	}
	public void setcVV(int cVV) {
		this.cVV = cVV;
	}
	public String getcid() {
		return cid;
	}
	public void setcid(String cid) {
		this.cid = cid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Payment [TxnId=" + TxnId + ", name=" + name + ", amount=" + amount + ", cardnumber=" + cardnumber
				+ ", exp=" + exp + ", cVV=" + cVV + ", cid=" + cid + ", status=" + status + "]";
	}

	
	
	
}

