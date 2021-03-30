import {Link} from 'react-router-dom'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import React, { Component } from 'react'
import ApiCustomerService from "../../services/customer/ApiCustomerService";

class ProductDetailsScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: [],
            message:""
        }
        this.addProductToCart = this.addProductToCart.bind(this);
    }

    componentDidMount() {
        ApiCustomerService.fetchProductsById(window.localStorage.getItem("product_id"))
        .then((res) => {
            this.setState({product : res.data.result})
        });
    }

    addProductToCart() {
        let productCartId = {userId: JSON.parse(window.localStorage.getItem("user_id")), 
            productId: this.state.product.id};
        ApiCustomerService.addProductToCart(productCartId)
        .then((res) => {
            this.setState({message: res.data.result})
        });
        alert("!!! Items Added to Cart !!!");
        JSON.stringify(window.localStorage.setItem("cart_size", JSON.parse(window.localStorage.getItem("cart_size")) + 1) );  
        this.props.history.push('/product-category');
    }

    render(){
        return (
            <div>
                <Navigation/>
                 <div className="container">
                     <div className="main">
                    <h4>!!! { window.localStorage.getItem("category_name")} !!!</h4> 
                    <img src={'/images/'+this.state.product.productName+'.jpg'} className="d-block w-100 " alt="image" height="150px" width="50px" />    
                    <h5 className="nameColor">{this.state.product.productName}</h5>
                    <h5 className="nameColor">Rs. {this.state.product.finalPrice}</h5>

                    <h5 className="nameColor">Rs. <strike>{this.state.product.price}</strike><span className="nameColor1">&nbsp; {this.state.product.discount}% off</span></h5>
                    <h5 className="nameColor">{this.state.product.grams}gms</h5>
                    <h5 className="nameColor">Description : {this.state.product.description}</h5>
                    <h5 className="nameColor">Rating : {this.state.product.rating}</h5>
                    <button
                        onClick={() => {
                        this.addProductToCart()
                        }}
                        className="btn4 btn-sm btn-success btn-add-to-cart">
                        Add To Cart
                    </button>
                    </div>
             </div>
             <Footer/>
            </div>     
         );
    }
   
}
export default ProductDetailsScreen