package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

//address_id 	flat_no	society_name	area	city	pincode	state	user_id / customer_id
@Entity
@Table(name = "address")
public class Address extends BaseEntity{
	private int flatNo;
	@Column(length = 20)
	private String societyName;
	@Column(length = 20)
	private String area;
	@Column(length = 20)
	private String city;
	@Column(length = 20)
	private String state;
	@Column(length = 20)
	private String pinCode;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	@MapsId//to tell hibernate : use shared PK approach (single col will act as PK n FK reffering to Student id)
	private User currentUser;

	public Address() {
		System.out.println("in address ctor"+getClass().getName());
	}

	public Address(int flatNo, String societyName, String area, String city, String state, String pinCode) {
		super();
		this.flatNo = flatNo;
		this.societyName = societyName;
		this.area = area;
		this.city = city;
		this.state = state;
		this.pinCode = pinCode;
	}

	public int getFlatNo() {
		return flatNo;
	}

	public void setFlatNo(int flatNo) {
		this.flatNo = flatNo;
	}

	public String getSocietyName() {
		return societyName;
	}

	public void setSocietyName(String societyName) {
		this.societyName = societyName;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPinCode() {
		return pinCode;
	}

	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}

	public User getCurrentUser() {
		return currentUser;
	}

	@JsonIgnore
	public void setCurrentUser(User currentUser) {
		this.currentUser = currentUser;
	}

	@Override
	public String toString() {
		return "Address [flatNo=" + flatNo + ", societyName=" + societyName + ", area=" + area + ", city=" + city
				+ ", state=" + state + ", pinCode=" + pinCode + "]";
	}

}