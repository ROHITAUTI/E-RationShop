package com.app.dto;

public class PaymentDTO {

	private String paymentType;
	private int deliveryBoyId;
	private int orderId;
	
	public PaymentDTO() {
		// TODO Auto-generated constructor stub
	}

	public PaymentDTO(String paymentType, int deliveryBoyId, int orderId) {
		super();
		this.paymentType = paymentType;
		this.deliveryBoyId = deliveryBoyId;
		this.orderId = orderId;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public int getDeliveryBoyId() {
		return deliveryBoyId;
	}

	public void setDeliveryBoyId(int deliveryBoyId) {
		this.deliveryBoyId = deliveryBoyId;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	@Override
	public String toString() {
		return "PaymentDTO [paymentType=" + paymentType + ", deliveryBoyId=" + deliveryBoyId + ", orderId=" + orderId
				+ "]";
	}
	
}
