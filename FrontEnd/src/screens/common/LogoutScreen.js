import "../../App.css"
import React, { Component } from 'react'

class LogoutScreen extends Component {

  constructor(props) {
    super(props)
    this.changeStatus = this.changeStatus.bind(this);
}

componentDidMount() {
    this.changeStatus();
  }

changeStatus(st) {
    window.localStorage.removeItem("status");
    window.localStorage.removeItem("category_id");
    window.localStorage.removeItem("category_name");
    window.localStorage.removeItem("user_fname");
    window.localStorage.removeItem("user_lname");
    window.localStorage.removeItem("user_email");
    window.localStorage.removeItem("user_phone");
    window.localStorage.removeItem("user_role");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("msg");
    window.localStorage.removeItem("cart_size");
    window.localStorage.removeItem("product_id");
    window.localStorage.removeItem("searchProductName");
    window.localStorage.removeItem("deliveryBoyId");
    window.localStorage.removeItem("orderId");
    window.localStorage.removeItem("orderIdForDetails");
    window.localStorage.removeItem("total_price");
    window.localStorage.removeItem("add");
    this.props.history.push('/home');
  } 


    render(){
      return (
        <div>
           <h5>Logged Out Successfully</h5>
        </div>
     );
    }   
}
export default LogoutScreen