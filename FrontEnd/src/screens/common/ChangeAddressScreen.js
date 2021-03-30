import {Link} from 'react-router-dom'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { Component } from 'react'
import Header from "../../components/Header"

class ChangeAddressScreen extends Component {

  constructor(props) {
    super(props)
    this.state ={
      id:'',
      flatNo : '',
      societyName: '',
      area: '',
      city: '',
      pinCode: '',
      state: '',
      message: ''
  }
    this.editAddress = this.editAddress.bind(this);
}

componentDidMount() {
  this.state.id = window.localStorage.getItem("user_id");

  ApiCustomerService.getUserAddress(window.localStorage.getItem("user_id"))
    .then(res => {
      let address = res.data.result;
      address !== null && this.setState({
        flatNo: address.flatNo,
        societyName: address.societyName,
        area: address.area,
        city: address.city,
        pinCode: address.pinCode,
        state: address.state,
        })
  });
}


onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    editAddress = (e) => {
      e.preventDefault();
      let addr = {flatNo: this.state.flatNo, societyName: this.state.societyName, area: this.state.area, city: this.state.city, pinCode: this.state.pinCode, state: this.state.state};
      ApiCustomerService.editUserAddress(this.state.id, addr)
          .then(res => {
              let message = res.data.result;
              alert("Address Update successfully")
              window.localStorage.getItem("user_role") == 'CUSTOMER' && this.props.history.push('/home');
              window.localStorage.getItem("user_role") == 'SUPPLIER' && this.props.history.push('/supplierhome');

          });
  }

  render(){
    return (
      <div>
        <Navigation/>
        <div className="main btn3">
      <Header title="Edit Address" />
      <br/>
      <div className="form">
      <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Flat No</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="flatNo" value={this.state.flatNo} onChange={this.onChange}/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Society Name </label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="societyName" value={this.state.societyName} onChange={this.onChange}/>
          </div>
       </div>

       <div class="row mb-3">
          <label className="col-sm-4 col-form-label">Area</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="area" value={this.state.area} onChange={this.onChange}/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">City</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.onChange} readOnly/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">pincode</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="pinCode" value={this.state.pinCode} onChange={this.onChange}/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">state</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="state" value={this.state.state} onChange={this.onChange} readOnly/>
          </div>
       </div>
        <div className="mb-3">
          <button className="btn4 btn-info float-middle" onClick={this.editAddress}>
            Update Address
          </button>
          <br></br>

        </div>
      </div>
    </div>
    <Footer/>
      </div>
  )
  }
    
}
export default ChangeAddressScreen