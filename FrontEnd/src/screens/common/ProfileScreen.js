import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import React, { Component } from 'react'
import Header from "../../components/Header"
class ProfileScreen extends Component {

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
    
      render(){
        return (
          <div>
            <Navigation/>
            <div className="main btn3">
          <Header title="!!! User Details !!!" />
          <br/>
          <div className="form">
          <div className="row mb-3">
              <label className="col-sm-4 col-form-label">First Name</label>
              <div className="col-sm-8">
                  <input type="text" className="form-control" name="firstName" value={this.state.firstName}readOnly/>
              </div>
           </div>
    
           <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Last Name</label>
              <div className="col-sm-8">
                  <input type="text" className="form-control" name="lastName" value={this.state.lastName} readOnly/>
              </div>
           </div>
    
           <div class="row mb-3">
              <label className="col-sm-4 col-form-label">Email</label>
              <div className="col-sm-8">
                  <input type="email" className="form-control" name="email" value={this.state.email} readOnly/>
              </div>
           </div>
    
           <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Phone</label>
              <div className="col-sm-8">
                  <input type="text" className="form-control" name="phone" value={this.state.phone} readOnly/>
              </div>
           </div>
          </div>
        </div>
        <Footer/>
          </div>
      )
      }
        
    }
export default ProfileScreen