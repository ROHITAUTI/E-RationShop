import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiCustomerService from "../../services/customer/ApiCustomerService";

class DeliveredOrdersListScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
          orders:[],
          message:'No Delivered Orders'
      }
        this.getOrdersList = this.getOrdersList.bind(this);
        this.orderDetails = this.orderDetails.bind(this);
    }
    
    componentDidMount() {
      this.getOrdersList();
    }

    getOrdersList() {
        ApiCustomerService.fetchOrdersListAdmin()
        .then((res) => {
            this.setState({orders: res.data.result})
        });
    }

    orderDetails(orderId) {
        window.localStorage.setItem("orderIdForDetails", orderId)
        this.props.history.push('/adminorderdetailsdelivered');
    }

    render() {
    return (
       <div>
           <Navigation/>
            <div className="container">
        <h2 className="text-center">Delivered Orders History</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Orders Amount</th>
                    <th>Order Date</th>
                    <th>Order Status</th>
                    <th>Delivery Date</th>
                    <th>Details</th>
                </tr> 
            </thead>
            <tbody>
            <div className="container"><h5 className="nameColor1">{this.state.orders.filter(order => order.orderDeliveryStatus === 'DELIVERED').length == 0 && this.state.message}</h5></div>
                {this.state.orders.map(
                        order =>
                        order.orderDeliveryStatus === 'DELIVERED' && <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.totalPrice}</td>
                                <td>{order.orderDate}</td>
                                <td className="nameColor1"><h5>{order.orderDeliveryStatus}</h5></td>
                                <td>{order.deliveryDate}</td>
                                <td><button className="btn4 btn-info" onClick={() => this.orderDetails(order.id)}>Details</button></td>
                                
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
export default DeliveredOrdersListScreen