import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiCustomerService from "../../services/customer/ApiCustomerService";

class AdminOrderDetailsForPendingScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
            orderDetails :[],
      }
        this.getOrdersDetails = this.getOrdersDetails.bind(this);
        this.backToOrderHistory = this.backToOrderHistory.bind(this);
    }
    
    componentDidMount() {
      this.getOrdersDetails();
    }

    getOrdersDetails() {
        ApiCustomerService.fetchOrdersdetails(window.localStorage.getItem("orderIdForDetails"))
        .then((res) => {
            this.setState({orderDetails : res.data.result})
        }); 
    }

    backToOrderHistory(){
        this.props.history.push('/pendingorderforadmin');
    }

    render() {
    return (
       <div>
           <Navigation/>
            <div className="container">
        <h2 className="text-center">Orders Details</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>QTY</th>
                    <th>Grams</th>
                    <th>Final Price</th>
                </tr>
            </thead>
            <tbody>
                {this.state.orderDetails.map(
                        order =>
                            <tr>
                                <td>{order.productName}</td>
                                <td>{order.qty}</td>
                                <td>{order.grams}</td>
                                <td>{order.finalPrice}</td>
                            </tr>
                    )
                }
            </tbody>    
            <td><button className="btn4 btn-info" onClick={() => this.backToOrderHistory()}>Back</button></td>                   
        </table>
        
    </div>
    <Footer/>
       </div>
    );
    }
}
export default AdminOrderDetailsForPendingScreen