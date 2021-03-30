import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 

const ContactUsScreen = () => {
    return (
        <div>
            <Navigation/>
            <div className="main btn3">
                <h3>Contact Details</h3>
            </div> 

            <div className="main btn4">
                <h5><b>Mr. Rohit Auti</b></h5>
                <h5><i>Email : rohitauti@gmail.com</i></h5>
                <h5>Contact No : +91 9503645367</h5>
            </div> 
            <div className="main btn4">
            <h5><b>Mr. Rahul Bhagat</b></h5>
                <h5><i>Email : bhagatrahul4@gmail.com</i></h5>
                <h5>Contact No : +91 8669059134</h5>
            </div> 
            <Footer/>
        </div>    
        
    );
}
export default ContactUsScreen