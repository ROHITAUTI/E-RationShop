import "../../App.css"
import Header from '../../components/Header'
import {Link} from 'react-router-dom'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Component } from "react";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";

export default class UpdateProductScreen extends Component {

    constructor(props) {
        super(props)
        this.state ={
            productName: '',
            description:'',
            rating: '',
            price: '',
            discount: '',
            finalPrice: '',
            qty: '',
            grams: ''
        }
    }

    onChange = e =>{
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount() {
        const productId = this.props.match.params.id;
        if(productId) {
            this.findProductById(productId)
            console.log(productId);
        }
    }

    findProductById = (productId) => {
        ApiSupplierService.fetchProductsById(productId)
            .then((response) => {
                if(response != null) {
                    this.setState({
                        id: response.data.result.id,
                        productName: response.data.result.productName, 
                        description: response.data.result.description,
                        rating: response.data.result.rating,
                        price: response.data.result.price,
                        discount: response.data.result.discount,
                        finalPrice: response.data.result.finalPrice,
                        qty: response.data.result.qty,
                        grams: response.data.result.grams 
                    })
                }
            })
    }

    updateProduct = (e) => {
        e.preventDefault();

        const product = {
            id: this.state.id, 
            productName: this.state.productName, 
            description: this.state.description, 
            price: this.state.price, 
            discount: this.state.discount, 
            finalPrice: this.state.finalPrice, 
            qty: this.state.qty, 
            grams: this.state.grams
        };

        ApiSupplierService.updateProduct(product)
            .then(res => {
                alert("Product Updates successfully")
                this.props.history.push('/supplier/showproducts');
            });
        
    };

    render(){
        return (
            <div>
                <Navigation />
            <div className="main">
            <Header title="Update Product" />
            <div className="form">
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Product Name</label>
                <div class="col-sm-10">
                    <input type="text" required autoComplete="off" class="form-control" name="productName" value={this.state.productName} onChange={this.onChange}/>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Product Description</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} />
                </div>

            </div>
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">MRP</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="price" value={this.state.price} onChange={this.onChange} />
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Discount %</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="discount" value={this.state.discount} onChange={this.onChange} />
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Final Price</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="finalPrice" value={this.state.finalPrice} onChange={this.onChange} />
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Quantity</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="qty" value={this.state.qty} onChange={this.onChange} />
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Grams</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="grams" value={this.state.grams} onChange={this.onChange} />
                </div>
            </div>
            <div className="mb-3">
                <div className="float-start" >
                <Link to="/home">Home Page</Link>
                </div>
                <button className="btn4 btn-success float-end" onClick={this.updateProduct}>
                Update Product
                </button>
                <br></br>

            </div>
            </div>
        </div>
        <Footer />
        </div>
        );
    }
}