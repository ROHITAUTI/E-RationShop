package com.app.dto;

import javax.persistence.Column;

public class LoginRequest {
	@Column(length = 30, nullable = false, unique = true)
	private String email;
	@Column(length = 20, nullable = false)
	private String password;
	public LoginRequest() {
		// TODO Auto-generated constructor stub
	}
	public LoginRequest(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "LoginRequest [email=" + email + ", password=" + password + "]";
	}

}
