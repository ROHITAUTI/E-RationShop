package com.app.dto;

import javax.persistence.Column;

public class UserDTO {
	@Column(length = 20, nullable = false)
	private String firstName;
	@Column(length = 20, nullable = false)
	private String lastName;
	@Column(length = 30, nullable = false, unique = true)
	private String email;
	@Column(length = 20)
	private String phone;
	
	public UserDTO() {
		System.out.println("in ctor of "+getClass().getName());
	}

	public UserDTO(String firstName, String lastName, String email, String phone) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "UserDTO [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", phone=" + phone
				+ "]";
	}

}
