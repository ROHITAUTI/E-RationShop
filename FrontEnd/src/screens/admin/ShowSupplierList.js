import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiCustomerService from "../../services/customer/ApiCustomerService";

class SupplierListScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
          suppliers:[],
          message:'No Supplier Available'
      }
        this.getSupplierList = this.getSupplierList.bind(this);
        this.addSupplier = this.addSupplier.bind(this);
    }
    
    componentDidMount() {
      this.getSupplierList();
    }

    getSupplierList() {
        ApiCustomerService.fetchSupplierList()
        .then((res) => {
            this.setState({suppliers: res.data.result})
        });
    }

    addSupplier() {
        this.props.history.push('/addSupplier');
    }

    render() {
    return (
       <div>
           <Navigation/>
            <div className="container">
        <h2 className="text-center">Supplier List</h2>
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
                <div className="container"><h5 className="nameColor1">{this.state.suppliers.length == 0 && this.state.message}</h5></div>
                {this.state.suppliers.map(
                        supplier =>
                        <tr key={supplier.id}>
                                <td>{supplier.firstName}</td>
                                <td>{supplier.lastName}</td>
                                <td>{supplier.email}</td>
                                <td >{supplier.phone}</td>
                            </tr>
                    )
                }
            </tbody>  
            <td><br></br><button className="btn4 btn-info" onClick={() => this.addSupplier()}>Add Supplier</button></td>       
        </table>
    </div>
    <Footer/>
       </div>
    );
    }
}
export default SupplierListScreen