import {Link} from 'react-router-dom'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { Component } from 'react'
import Header from "../../components/Header"

class EditProfileScreen extends Component {

  constructor(props) {
    super(props)
    this.state ={
      id : '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
  }
    this.editUser = this.editUser.bind(this);
}

componentDidMount() {
    this.setState({
        id: window.localStorage.getItem("user_id"),
        firstName: window.localStorage.getItem("user_fname"),
        lastName: window.localStorage.getItem("user_lname"),
        email: window.localStorage.getItem("user_email"),
        phone: window.localStorage.getItem("user_phone"),
        })
}


onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    editUser = (e) => {
      e.preventDefault();
      let user = {id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, phone: this.state.phone};
      ApiCustomerService.editUser(user)
          .then(res => {
              let user = res.data.result;
              user != null && window.localStorage.setItem("user_fname", user.firstName);
              user != null && window.localStorage.setItem("user_lname", user.lastName);
              user != null && window.localStorage.setItem("user_email", user.email);
              user != null && window.localStorage.setItem("user_phone", user.phone);
              alert("Profile Update successfully")
              window.localStorage.getItem("user_role") == 'CUSTOMER' && this.props.history.push('/home');
              window.localStorage.getItem("user_role") == 'SUPPLIER' && this.props.history.push('/supplierhome');
              window.localStorage.getItem("user_role") == 'DELIVERY_BOY' && this.props.history.push('/deliveryboyhome');
              window.localStorage.getItem("user_role") == 'ADMIN' && this.props.history.push('/adminhome');
          });
  }

  render(){
    return (
      <div>
        <Navigation/>
        <div className="main btn3">
      <Header title="Edit Profile" />
      <br/>
      <div className="form">
      <div className="row mb-3">
          <label className="col-sm-4 col-form-label">First Name</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.onChange}/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Last Name</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
          </div>
       </div>

       <div class="row mb-3">
          <label className="col-sm-4 col-form-label">Email</label>
          <div className="col-sm-8">
              <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} readOnly/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Phone</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.onChange}/>
          </div>
       </div>
        <div className="mb-3">
          <button className="btn4 btn-info col-sm-12" onClick={this.editUser}>
            Edit Profile
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
export default EditProfileScreen