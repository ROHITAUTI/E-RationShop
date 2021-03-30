import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/supplier';

class ApiSupplierService {
    //user == supplier

    //get all product by category_id randomly from DB
    //return list of products
    fetchProductsBySupplierId(supplierId) {
        return axios.get(USER_API_BASE_URL + '/showproducts/' + supplierId);
    }

    //Create Account
    //return Successfully msg
    addProduct(CategoryName, product) {
        return axios.put(USER_API_BASE_URL + '/addproduct/'+CategoryName, product);
    }
    
    //get all product by search from DB
    //return list of product which match with searchName
    fetchProductsById(productId) {
        return axios.get(USER_API_BASE_URL + '/product/' + productId);
    }

    //Edit Profile
    //return user object
    updateProduct(product) {
        return axios.put(USER_API_BASE_URL + '/updateproduct/' + product.id, product);
    }

    deleteProduct(productId){
        return axios.delete(USER_API_BASE_URL + '/product/'+ productId);
    }

}

export default new ApiSupplierService();