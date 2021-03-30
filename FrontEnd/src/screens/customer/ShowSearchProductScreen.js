import {Link} from 'react-router-dom'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import React, { Component } from 'react'
import ApiCustomerService from "../../services/customer/ApiCustomerService";

class ShowSearchProductScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message:"",
            products: [],
            st:'Product Not Found',
        }
        this.productDetails = this.productDetails.bind(this);
        this.reloadProductsList = this.reloadProductsList.bind(this);
        this.addProductToCart = this.addProductToCart.bind(this);
    }

    componentDidMount() {
        this.reloadProductsList();
    }

    reloadProductsList() {
        ApiCustomerService.fetchProductsByName(window.localStorage.getItem("searchProductName"))
        .then((res) => {
            this.setState({products : res.data.result})
        });
    }

    addProductToCart(product) {
        let productCartId = {userId: JSON.parse(window.localStorage.getItem("user_id")), 
        productId: product.id};
        ApiCustomerService.addProductToCart(productCartId)
        .then((res) => {
            this.setState({message: res.data.result})
        });
        alert("!!! Items Added to Cart !!!");
        JSON.stringify(window.localStorage.setItem("cart_size", JSON.parse(window.localStorage.getItem("cart_size")) + 1) );     
        this.props.history.push('/home');
    }

    productDetails(product) {
        window.localStorage.setItem("product_id", product.id);
        this.props.history.push('/product-details');
    }

    render(){
        return (
            <div>
                <Navigation/>
                 <div className="container">
                    <div className="container">
                     <div className="container">
                    <div className="row row-center">
                        <h5 className="nameColor1">{this.state.products.length == 0 && this.state.st}</h5>
                    {this.state.products.map(product => 
                        <div className="product col-md-3" key={product.id}>
                            <div className="title"> 
                                <img src={'/images/'+product.productName+'.jpg'} className="d-block w-100 " alt="image" height="150px" width="50px" />
                                <a className="nav-link" onClick={() => { this.productDetails(product) }}><h5 className="nameColor">{product.productName}</h5></a>
                                <h5 className="nameColor">Rs. {product.finalPrice}</h5>
                                <h5 className="nameColor">Rs. <strike>{product.price}</strike><span className="nameColor1">&nbsp; {product.discount}% off</span></h5>                                
                                <h5 className="nameColor">{product.grams}gms</h5>
                            </div>
                            <button
                            onClick={() => {
                            this.addProductToCart(product)
                            }}
                            className="btn4 btn-sm btn-success btn-add-to-cart">
                            Add To Cart
                        </button>
                        </div>
                        )}         
                    </div>
                </div>
                </div>        
             </div>
             <Footer/>
            </div>     
         );
    }
   
}
export default ShowSearchProductScreen