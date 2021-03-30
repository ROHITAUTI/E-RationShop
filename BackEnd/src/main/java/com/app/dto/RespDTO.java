package com.app.dto;


import java.time.LocalDateTime;

public class RespDTO {
	private String mesg;
	private LocalDateTime ts;

	public RespDTO() {
		// TODO Auto-generated constructor stub
	}

	public RespDTO(String mesg, LocalDateTime ts) {
		super();
		this.mesg = mesg;
		this.ts = ts;
	}

	public String getMesg() {
		return mesg;
	}

	public void setMesg(String mesg) {
		this.mesg = mesg;
	}

	public LocalDateTime getTs() {
		return ts;
	}

	public void setTs(LocalDateTime ts) {
		this.ts = ts;
	}

}
