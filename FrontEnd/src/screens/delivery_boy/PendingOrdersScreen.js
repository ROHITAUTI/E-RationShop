import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiCustomerService from "../../services/customer/ApiCustomerService";

class PendingOrdersScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
          orders:[],
          message:'No Pending Orders'
      }
        this.getOrdersList = this.getOrdersList.bind(this);
        this.orderDetails = this.orderDetails.bind(this);
        this.addressDetails = this.addressDetails.bind(this);
    }
    
    componentDidMount() {
      this.getOrdersList();
    }

    getOrdersList() {
        ApiCustomerService.fetchOrdersListDeliveryBoy(window.localStorage.getItem("user_id"))
        .then((res) => {
            this.setState({orders: res.data.result})
        });
    }

    orderDetails(orderId) {
        window.localStorage.setItem("orderIdForDetails", orderId)
        this.props.history.push('/orderdetailspending');
    }

    addressDetails(orderId) {
        window.localStorage.setItem("orderIdForDetails", orderId)
        this.props.history.push('/addressdetails2');
    }

    deliveredOrder(orderId) {
        ApiCustomerService.deliveredOrder(orderId)
        .then((res) => {
            alert("Order Delivered")
            window.location.reload();        
        });
    }

    render() {
    return (
       <div>
           <Navigation/>
            <div className="container">
        <h2 className="text-center">Pending Orders History</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Orders Amount</th>
                    <th>Order Date</th>
                    <th>Order Status</th>
                    <th>Delivered Order </th>
                    <th>Delivery Date</th>
                    <th>Delivery Address</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <div className="container"><h5 className="nameColor1">{this.state.orders.filter(order => order.orderDeliveryStatus === 'PENDING').length == 0 && this.state.message}</h5></div>
                {this.state.orders.map(
                        order =>
                        order.orderDeliveryStatus === 'PENDING' && <tr key={order.id}>
                                <td>{order.totalPrice}</td>
                                <td>{order.orderDate}</td>
                                <td className="nameColor1"><h5>{order.orderDeliveryStatus}</h5></td>
                                <td><button className="btn4 btn-danger" onClick={() => this.deliveredOrder(order.id)}>Delivered</button></td>
                                <td>{order.deliveryDate}</td>
                                <td><button className="btn4 col-sm-6 btn-info" onClick={() => this.addressDetails(order.id)}>Address</button></td>
                                <td><button className="btn4 col-sm-6 btn-info" onClick={() => this.orderDetails(order.id)}>Details</button></td>
                                
                            </tr>
                    )
                }
            </tbody>         
        </table>
        
    </div>
    <Footer/>
       </div>
    );
    }
}
export default PendingOrdersScreen