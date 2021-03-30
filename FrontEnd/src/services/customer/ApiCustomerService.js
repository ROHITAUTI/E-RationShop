import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/customers';

class ApiCustomerService {
    //user == customer

    //Create Account
    //return Successfully msg
    addUser(user) {
        return axios.post(USER_API_BASE_URL + '/signup/', user);
    }

    addSupplier(categoryName, user) {
        return axios.put(USER_API_BASE_URL + '/signup/'+categoryName, user);
    }

    //Edit Profile
    //return user object
    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/edit-profile/' + user.id, user);
    }

    //Change password
    //retrun successfully msg
    editUserPassword(user_id, pwd) {
        return axios.put(USER_API_BASE_URL + '/change_pwd/' + user_id + '/'+pwd);
    }

    //Authenticate user
    //return user object
    fetchUserByLoginrequest(loginRequest) {
        return axios.post(USER_API_BASE_URL + '/login', loginRequest);
    }

    //get address
    //retrun address object
    getUserAddress(user_id) {
        return axios.get(USER_API_BASE_URL + '/address/' + user_id);
    }

    //Change address
    //retrun successfully msg
    editUserAddress(userId, address) {
        return axios.put(USER_API_BASE_URL + '/address/' + userId, address);
    }

    //get all product by search from DB
    //return list of product which match with searchName
    fetchProductsById(productId) {
        return axios.get(USER_API_BASE_URL + '/product/' + productId);
    }

    //get all product by search from DB
    //return list of product which match with searchName
    fetchProductsByName(searchName) {
        return axios.get(USER_API_BASE_URL + '/product/search/' + searchName);
    }

    //get all product by category_id randomly from DB
    //return list of products
    fetchProductsByCategoryId(categoryId) {
        return axios.get(USER_API_BASE_URL + '/product/list/' + categoryId);
    }
    
    //get all sorted product by category_id from Low to High from DB
    //return list of products
    sortProductsByLowToHigh(categoryId) {
        return axios.get(USER_API_BASE_URL + '/product/lowtohigh/' + categoryId);
    }

    //get all sorted product by category_id from High to Loq from DB
    //return list of products
    sortProductsByHighToLow(categoryId) {
        return axios.get(USER_API_BASE_URL + '/product/hightolow/' + categoryId);
    }

    addProductToCart(cart){
        return axios.post(USER_API_BASE_URL + '/cart', cart);
    }

    getCartByUserId(userId){
        return axios.get(USER_API_BASE_URL + '/cart/'+ userId);
    }

    deleteCartByUserId(cartId){
        return axios.delete(USER_API_BASE_URL + '/cart/'+ cartId);
    }

    getTAmtUserId(userId){
        return axios.get(USER_API_BASE_URL + '/cart/tamt/'+ userId);
    }

    getSAmtByUserId(userId){
        return axios.get(USER_API_BASE_URL + '/cart/samt/'+ userId);
    }

    //on payment
    //orders : customer_id/user_id, product_name, delivery_boy_id/user_id, order_delivery_status = pending, total_price, order_date, delivery_date = null
    //return the orders id which required in order_details
    addorders(totalPrice, userId) {
        return axios.get(USER_API_BASE_URL+'/orders/'+userId+'/'+totalPrice);
    }
    
    //get all order_history from DB by user_id
    //return list of orders which match with user_id
    fetchOrdersList(user_id) {
        return axios.get(USER_API_BASE_URL + '/orders/' + user_id);
    }

    fetchOrdersdetails(orderId) {
        return axios.get(USER_API_BASE_URL + '/orderdetailslist/' + orderId);
    }

    //on payment
    //order_details : customer_id/user_id, product_name, final_price, qty, grams, order_id
    //Array of order_details
    addDetails(userId, OrderId) {
        return axios.get( USER_API_BASE_URL + '/orderdetails/'+ userId + '/'+ OrderId);
    }

    //on payment
    //payment : payment_type, payment_date = now() = auto on SERVER side, payment status = paid, customer_id/user_id, order_id
    //Array of order_details
    addpaymentDetails(payment) {
        return axios.post(USER_API_BASE_URL+'/payment', payment);
    }  

    updateCartUserId(userId){
        return axios.get( USER_API_BASE_URL + '/cartupdate/'+ userId);
    }

    fetchOrdersListDeliveryBoy(delivery_boy_id) {
        return axios.get(USER_API_BASE_URL + '/ordersfoedb/' + delivery_boy_id);
    }

    deliveredOrder(orderId){
        return axios.get(USER_API_BASE_URL + '/deliveredorder/' + orderId);
    }

    fetchOrdersListAdmin() {
        return axios.get(USER_API_BASE_URL + '/orderslist/');
    }

    fetchSupplierList(){
        return axios.get(USER_API_BASE_URL + '/supplierlist/');
    }
    
    fetchDeliveryBoyList(){
        return axios.get(USER_API_BASE_URL + '/deliveryboylist/');
    }

    getCustomerAddressDetails(orderId){
        return axios.get(USER_API_BASE_URL + '/addressdetails/'+orderId);
    }

    fetchAllCategory(){
        return axios.get(USER_API_BASE_URL + '/categorylist/');
    }
}

export default new ApiCustomerService();