import {Link} from 'react-router-dom'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import React, { Component } from 'react'
import ApiCustomerService from "../../services/customer/ApiCustomerService";
class ProductCategoryScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message:"",
            products: [],
        }
        this.productDetails = this.productDetails.bind(this);
        this.reloadProductsList = this.reloadProductsList.bind(this);
        this.addProductToCart = this.addProductToCart.bind(this);
        this.selectProductsByLowtoHigh = this.selectProductsByLowtoHigh.bind(this);
        this.selectProductsByHightoLow = this.selectProductsByHightoLow.bind(this);
    }

    componentDidMount() {
        this.reloadProductsList();
    }

    reloadProductsList() {
        ApiCustomerService.fetchProductsByCategoryId(window.localStorage.getItem("category_id"))
        .then((res) => {
            window.localStorage.setItem("msg", res.data.message)
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
        this.props.history.push('/product-category');
    }

    productDetails(product) {
        window.localStorage.setItem("product_id", product.id);
        this.props.history.push('/product-details');
    }

    selectProductsByLowtoHigh() {
        ApiCustomerService.sortProductsByLowToHigh(window.localStorage.getItem("category_id"))
            .then((res) => {
                this.setState({products: res.data.result})
                console.log(this.state.products);
            });
    }

    selectProductsByHightoLow() {
        ApiCustomerService.sortProductsByHighToLow(window.localStorage.getItem("category_id"))
        .then((res) => {
            this.setState({products: res.data.result})
            console.log(this.state.products);
        });
    }

    render(){
        return (
            <div>
                <Navigation/>
                 <div className="container">
                    <div className="container">
                     <h4>!!! { window.localStorage.getItem("category_name")} !!!</h4>
                     <div className="position">
                         <div className="dropdown">
                             <a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                             Sort
                             </a>
                             <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                 <li><a className="dropdown-item" onClick={() => { this.selectProductsByLowtoHigh()}}>Sort By Price : Low to High</a></li>
                                 <li><a className="dropdown-item" onClick={() => { this.selectProductsByHightoLow()}}>Sort By Price : High to Low</a></li>
                             </ul>
                         </div>     
                     </div>      
                     <br/>  
                     <hr/>
                     <br/>


                     <div className="container">
                    <div className="row row-center">
                    {this.state.products.map(product => 
                        <div className="product col-md-3" key={product.id}>
                            <div className="title"> 
                                <img src={'/images/'+product.productName+'.jpg'} className="d-block w-100 " alt="image" height="150px" width="50px" />
                                <a className="nav-link" onClick={() => { this.productDetails(product) }}><h5 className="cartname">{product.productName}</h5></a>
                                <h5 className="cartname">Rs. {product.finalPrice}</h5>
                                <h5 className="cartname">Rs. <strike>{product.price}</strike><span className="nameColor1">&nbsp; {product.discount}% off</span></h5>                                
                                <h5 className="cartname">{product.grams}gms</h5>
                            </div>
                            <button
                            onClick={() => {
                            this.addProductToCart(product)
                            }}
                            className="btn4 btn-sm btn-info btn-add-to-cart">
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
export default ProductCategoryScreen