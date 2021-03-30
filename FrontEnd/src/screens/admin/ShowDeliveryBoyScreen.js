import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiCustomerService from "../../services/customer/ApiCustomerService";

class DeliveryBoyListScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
          boys:[],
          message:'No Delivery Boy Available'
      }
        this.getDeliveryBoyList = this.getDeliveryBoyList.bind(this);
        this.addDeliveryBoy = this.addDeliveryBoy.bind(this);
    }
    
    componentDidMount() {
      this.getDeliveryBoyList();
    }

    getDeliveryBoyList() {
        ApiCustomerService.fetchDeliveryBoyList()
        .then((res) => {
            this.setState({boys: res.data.result})
        });
    }

    addDeliveryBoy() {
        this.props.history.push('/adddeliveryboy');
    }

    render() {
    return (
       <div>
           <Navigation/>
            <div className="container">
        <h2 className="text-center">Delivery Boy List</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <div className="container"><h5 className="nameColor1">{this.state.boys.length == 0 && this.state.message}</h5></div>
                {this.state.boys.map(
                        boy =>
                        <tr key={boy.id}>
                                <td>{boy.firstName}</td>
                                <td>{boy.lastName}</td>
                                <td>{boy.email}</td>
                                <td >{boy.phone}</td>
                            </tr>
                    )
                }
            </tbody>  
            <td><br></br><button className="btn4 btn-info" onClick={() => this.addDeliveryBoy()}>Add Delivery Boy</button></td>       
        </table>
    </div>
    <Footer/>
       </div>
    );
    }
}
export default DeliveryBoyListScreen