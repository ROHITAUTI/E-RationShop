import "../../App.css"
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Grocery from ".././images/CategoryImg/Grocery.jpg";
import ImportedExotic from ".././images/CategoryImg/ImportedExotic.jpg";
import LocalExotic from ".././images/CategoryImg/LocalExotic.jpg";
import FruitsnVeg from ".././images/CategoryImg/FruitsnVeg.jpg";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiCustomerService from "../../services/customer/ApiCustomerService";

class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category:[],
            message:"",
        }
        this.selectcategory = this.selectcategory.bind(this);
        this.reloadCategoryList = this.reloadCategoryList.bind(this);

    }

    componentDidMount() {
        let size = JSON.parse(window.localStorage.getItem("cart_size"))
        if(size === null)
            JSON.stringify(window.localStorage.setItem("cart_size", 0) );
        if(size !== null)
        JSON.stringify(window.localStorage.setItem("cart_size", size) );

        let uId = JSON.parse(window.localStorage.getItem("user_id"))
        if(uId === null)
            JSON.stringify(window.localStorage.setItem("user_id", 9999));
        if(uId !== null)
        JSON.stringify(window.localStorage.setItem("user_id", uId));
        
        this.reloadCategoryList();
    }

    reloadCategoryList() {
        ApiCustomerService.fetchAllCategory()
        .then((res) => {
            this.setState({category : res.data.result})
        });
    }

    selectcategory(id, name) {
        window.localStorage.setItem("category_id", id);
        window.localStorage.setItem("category_name", name);
        this.props.history.push('/product-category');
    }

    render() {
        return (
            <div>
                <Navigation/>
                <br></br>
    
                <div className="container">
                    <table>
                        <tr className="container-fluid">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                </div>
                               <div className="container">
    
                               <div className="carousel-inner" >
                                    <div className="carousel-item active" data-bs-interval="2000">
                                  
                                    <img src="/images/ration1.jpg" className="d-block w-100 " alt="image1" height="500px" />
                                   
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                    <img src="/images/ration2.jpg" className="d-block w-100 " alt="image2" height="500px" width="2000px"/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src="/images/ration3.jpg" className="d-block w-100 " alt="image3" height="500px" width="2000px" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="/images/ration4.jpg" className="d-block w-100 " alt="image4" height="500px" width="2000px"/>
                                    </div>
                                </div>
                               </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                                </div>
                        </tr>  
                    </table>               
                </div>
    
                <div className="container">
                    <table>
                        <tr>
                            <td className="col-md-5"><hr></hr></td>
                            <td className="col-md-1"><h4>Category</h4></td>
                            <td className="col-md-5"><hr></hr></td>
                        </tr>
                    </table>                   
                </div>
 

                <div className="container">
                    <div className="row row-center">
                    {this.state.category.map(cat => 
                        <div className="product col-md-3" key={cat.id}>
                            <div className="title"> 
                            <Link to="/product-category">
                            <a className="navbar-brand" name="fruitsnvegtables" onClick={() => { this.selectcategory(cat.id, cat.categoryName) }}>
                            <img src={'/images/'+cat.categoryName+'.jpg'} className="d-block w-100 " alt="image" height="200px" width="200px" />
                            </a>
                            </Link> 
                                
                                <a className="nav-link" onClick={() => { this.selectcategory(cat.id, cat.categoryName) }}><h5 className="cartname">{cat.categoryName}</h5></a>                               
                            </div>
                        </div>
                        )}         
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
   
  }


export default HomeScreen