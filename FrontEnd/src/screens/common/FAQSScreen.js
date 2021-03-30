import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const FAQSScreen = () => {
    return (
        <div>
            <Navigation/>
             <div className="main1 btn4">
            <h3>FAQs :</h3>
            <p className="para">
            Kindly check the FAQ below if you are not very familiar with the functioning of this 
            website. If your query is of urgent nature and is different from the set of questions 
            then do write to us at support@erationshop.in 
            or call us on 1800 1234 9090 between 08 am & 08 pm to get our immediate help.
            </p>
            <h5>Registration : </h5>
            <h5>How do I register?</h5>
            <p className="para">
            You can register by clicking on the “Sign Up” link at the top right corner of the homepage.
            Please provide the information in the form that appears. 
            You can review the terms and conditions, 
            provide your payment mode details and submit the registration information.</p>
        </div>
        <Footer/>
        </div>
    );
}
export default FAQSScreen





