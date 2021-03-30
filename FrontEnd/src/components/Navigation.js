import {Link} from 'react-router-dom'
import logo from './logo.jpg';
import cart from './cart.png';
import React, { Component } from 'react';
import ApiCustomerService from "../services/customer/ApiCustomerService";

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      st : false,
      searchProduct : '',
  }
    this.getStatus = this.getStatus.bind(this);
    this.searchProductByName = this.searchProductByName.bind(this);
}

onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

componentDidMount() {
  this.getStatus();
}
getStatus() {
  this.setState(prevState => ({ st: window.localStorage.getItem("status") == 'true'}))
}


searchProductByName (e){
  e.preventDefault();
  window.localStorage.setItem("searchProductName", this.state.searchProduct);
  window.open("/show-search-product"); 
}

  render(){
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          { window.localStorage.getItem("user_role") !== 'DELIVERY_BOY' &&
            window.localStorage.getItem("user_role") !== 'ADMIN' &&
            window.localStorage.getItem("user_role") !== 'SUPPLIER' &&
            <Link to="/home">
            <a className="navbar-brand">
            <img src={logo} class="img-fluid" alt="Logo" width="150px" height="150px"/>
            </a>
          </Link>
          }

          { window.localStorage.getItem("user_role") == 'DELIVERY_BOY' &&
            <Link to="/deliveryboyhome">
            <a className="navbar-brand">
            <img src={logo} class="img-fluid" alt="Logo" width="150px" height="150px"/>
            </a>
          </Link>
          }

          { window.localStorage.getItem("user_role") == 'ADMIN' &&
            <Link to="/adminhome">
            <a className="navbar-brand">
            <img src={logo} class="img-fluid" alt="Logo" width="150px" height="150px"/>
            </a>
          </Link>
          }

        { window.localStorage.getItem("user_role") == 'SUPPLIER' &&
            <Link to="/supplierhome">
            <a className="navbar-brand">
            <img src={logo} class="img-fluid" alt="Logo" width="150px" height="150px"/>
            </a>
          </Link>
          }

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              { window.localStorage.getItem("user_role") !== 'DELIVERY_BOY' &&
                window.localStorage.getItem("user_role") !== 'ADMIN' &&
                window.localStorage.getItem("user_role") !== 'SUPPLIER' &&
                <li className="nav-item">
                <Link to="/home">
                  <a className="nav-link"><h5 classname="nameColor">Home</h5></a>
                </Link>
                </li>
              }
              { window.localStorage.getItem("user_role") == 'DELIVERY_BOY' &&
                <li className="nav-item">
                <Link to="/deliveryboyhome">
                  <a className="nav-link"><h5>Home</h5></a>
                </Link>
                </li>
              }
              { window.localStorage.getItem("user_role") == 'ADMIN' &&
                <li className="nav-item">
                <Link to="/adminhome">
                  <a className="nav-link"><h5>Home</h5></a>
                </Link>
                </li>
              }
              { window.localStorage.getItem("user_role") == 'SUPPLIER' &&
                <li className="nav-item">
                <Link to="/supplierhome">
                  <a className="nav-link"><h5>Home</h5></a>
                </Link>
                </li>
              }
                {this.state.st && window.localStorage.getItem("user_role") == 'CUSTOMER' && 
              <li class="nav-item dropdown">
                <h5>
                <a class="nav-link dropdown-toggle" href="myaccount" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Account
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/myaccount/profile">Profile</a></li>
                  <li><a class="dropdown-item" href="/myaccount/editprofile">Edit Profile</a></li>
                  <li><a class="dropdown-item" href="/myaccount/change-password">Update Password</a></li>
                  <li><a class="dropdown-item" href="/myaccount/changeaddress">Change Address</a></li>
                  <li><a class="dropdown-item" href="/myaccount/orderhistory">Order History</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/logout">Logout</a></li>
                </ul>
                </h5> 
            </li>
            }

        {this.state.st && window.localStorage.getItem("user_role") == 'DELIVERY_BOY' && 
              <li class="nav-item dropdown">
                <h5>
                <a class="nav-link dropdown-toggle" href="myaccount" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Account
                </a>
               
                <ul class="dropdown-menu btn5" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item btn5" href="/myaccount/profile">Profile</a></li>
                  <li><a class="dropdown-item btn5" href="/myaccount/editprofile">Edit Profile</a></li>
                  <li><a class="dropdown-item btn5" href="/myaccount/change-password">Change Password</a></li>
                  <li><a class="dropdown-item btn5" href="/pendingorderfordb">Pending Orders</a></li>
                  <li><a class="dropdown-item btn5" href="/deliveredorderfordb">Delivered Orders</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item btn5" href="/logout">Logout</a></li>
                </ul>
                </h5>
            </li>
            }

            {this.state.st && window.localStorage.getItem("user_role") == 'ADMIN' && 
              <li class="nav-item dropdown">
                <h5>
                <a class="nav-link dropdown-toggle" href="myaccount" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Account
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/myaccount/profile">Profile</a></li>
                  <li><a class="dropdown-item" href="/myaccount/editprofile">Edit Profile</a></li>
                  <li><a class="dropdown-item" href="/myaccount/change-password">Change Password</a></li>
                  <li><a class="dropdown-item" href="/pendingorderforadmin">Pending Orders</a></li>
                  <li><a class="dropdown-item" href="/deliveredorderforadmin">Delivered Orders</a></li>
                  <li><a class="dropdown-item" href="/showsupplier">Show Supplier</a></li>
                  <li><a class="dropdown-item" href="/showdeliveryboy">Show Delivery Boy</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/logout">Logout</a></li>
                </ul>
                </h5> 
            </li>
            }
            {this.state.st && window.localStorage.getItem("user_role") == 'SUPPLIER' && 
              <li class="nav-item dropdown">
                <h5>
                <a class="nav-link dropdown-toggle" href="myaccount" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Account
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/myaccount/profile">Profile</a></li>
                  <li><a class="dropdown-item" href="/myaccount/editprofile">Edit Profile</a></li>
                  <li><a class="dropdown-item" href="/myaccount/change-password">Change Password</a></li>
                  <li><a class="dropdown-item" href="/myaccount/changeaddress">Change Address</a></li>
                  <li><a class="dropdown-item" href="/addproduct">Add Product</a></li>
                  <li><a class="dropdown-item" href="/supplier/showproducts">Product Details</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/logout">Logout</a></li>
                </ul>
                </h5> 
            </li>
            }
            </ul>
            
          { window.localStorage.getItem("user_role") !== 'DELIVERY_BOY' &&
          window.localStorage.getItem("user_role") !== 'ADMIN' &&
          window.localStorage.getItem("user_role") !== 'SUPPLIER' &&
                      <ul className="nav justify-content-center">
                      <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="searchProduct" value={this.state.searchProduct} onChange={this.onChange}/>
                        <button className="btn btn-outline-success" type="submit" onClick={this.searchProductByName}>Search</button>
                      </form>
                      </ul>
            }

            <ul className="nav justify-content-end">
              { window.localStorage.getItem("user_role") !== 'DELIVERY_BOY' &&
              window.localStorage.getItem("user_role") !== 'ADMIN' &&
              window.localStorage.getItem("user_role") !== 'SUPPLIER' &&
            <li className="nav-item">
           
           <Link to="/cart">
            <a className="nav-link">
           <img src={cart} class="img-fluid" alt="Logo" width="50px" height="50px"/>
            </a>
            
          </Link>
          <h5 className="nameColor">({window.localStorage.getItem("cart_size")})</h5>
           
           
           
           {/*  <Link to="/cart">
                <a className="nav-link"><h5 className="nameColor">Cart : ({window.localStorage.getItem("cart_size")})</h5></a>
            </Link>
            */}
            
              </li>
              
  }
            {!this.state.st && 
              <li className="nav-item">
                <br></br>
                <Link to="/create-account">
                  <a className="nav-link"><h5 className="nameColor">Create Account</h5></a>
                </Link>
              </li>
            }
              {!this.state.st && 
              <li className="nav-item" >
                <br></br>
                <Link to="/login">
                  <a className="nav-link"><h5 className="nameColor">Login</h5></a>
                </Link>
              </li>
              }
              {this.state.st && 
              <li className="nav-item" >
              <Link to="/myaccount/profile">
                  <a className="nav-link"><h5 className="nameColor">Hello, {window.localStorage.getItem("user_fname")}</h5></a>
                </Link>
              </li>
            }
            </ul>
          </div>
           
        </div>
      </nav>
      <br/>
      
    </div>
  )
  }
   
}

export default Navigation