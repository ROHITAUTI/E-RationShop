import React, { Component } from 'react'
import ApiCustomerService from "../../services/customer/ApiCustomerService";


class PaymentScreen extends Component {

    constructor(props) {
        super(props)
        this.state ={
            paymentInfo: '',
          message: ''
      }
        this.payment = this.payment.bind(this);
        this.addOrder = this.addOrder.bind(this);
        this.addOrderDetail = this.addOrderDetail.bind(this);
        this.paymentDetails = this.paymentDetails.bind(this);
        this.selectCredit = this.selectCredit.bind(this); 
        this.selectDebit = this.selectDebit.bind(this);
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    addOrder(){
        ApiCustomerService.addorders(window.localStorage.getItem("total_price"), window.localStorage.getItem("user_id"))
    .then(res => {
        JSON.stringify(window.localStorage.setItem("orderId", res.data.result))
        this.addOrderDetail();
    });
    
    }

    addOrderDetail(){
        ApiCustomerService.addDetails(window.localStorage.getItem("user_id"), JSON.parse(window.localStorage.getItem("orderId")))
        .then(res => {
            JSON.stringify(window.localStorage.setItem("deliveryBoyId", res.data.result))
            this.paymentDetails();
    });
   
    }
   
    paymentDetails(){
        this.state.payment = {paymentType: this.state.paymentInfo, 
                            deliveryBoyId: JSON.parse(window.localStorage.getItem("deliveryBoyId")), 
                            orderId : JSON.parse(window.localStorage.getItem("orderId"))};
        ApiCustomerService.addpaymentDetails(this.state.payment);
    }

    payment() {
        this.addOrder();
        alert('Payment Done')
        window.localStorage.removeItem("cart_size");
        window.localStorage.removeItem("deliveryBoyId");
        window.localStorage.removeItem("orderId");

        this.props.history.push('/home');
    }

    selectCredit() {
        this.state.paymentInfo= "CREDIT";
    }

    selectDebit() {
        this.state.paymentInfo= "DEBIT";
    }

    render () {
        return (
            <div className="payment">
               <div>
                <div className="float-center">
                    <h5>Total Price : {window.localStorage.getItem("total_price")}</h5>
                    <br/>
                    <div className="position1">
                         <div className="dropdown">
                             <a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                             Payment Type
                             </a>
                             <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                 <li><a className="dropdown-item" onClick={() => { this.selectCredit()}}>CREDIT</a></li>
                                 <li><a className="dropdown-item" onClick={() => { this.selectDebit()}}>DEBIT</a></li>
                             </ul>
                         </div>     
                     </div> 
                     <br/>  

                    <button className="btn4 btn-info" style={{width:'150px'}} onClick={() => this.payment()}>Payment</button>
                </div>
                </div>
            </div>
    
        );
    }
}

export default PaymentScreen