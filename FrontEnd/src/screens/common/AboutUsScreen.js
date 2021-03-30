import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 

const AboutUsScreen = () => {
    return (
        <div>
            <Navigation/>
            <div className="main1 btn4">
            <h3>About Us : </h3>
            <p className="para">
             “Its Your Way of Shopping”,  E Ration Shop slogan, articulates its belief that foods that are healthy and holistic
              in an ethereal sense can only be cultivated, produced and processed by healthy, 
              happy people. Only people who do well themselves, who do not have to fight for daily 
              survival can muster the necessary diligence and affection that is needed for the production 
              of healthy foodstuffs – food that does not only fill one’s stomach but that is beneficial to 
              one’s well-being.
            </p>
            <p className="para">
                For that reason E-Ration Shop considers the welfare of all those people who 
                participate in the making of a food product. Starting with the farmers who stand at 
                the beginning of the value chain, the employees who work for its suppliers and all the way 
                to the My Green Mart staff that is responsible for the processing, packaging, storage and 
                logistics of our food products.
            </p>
            <p className="para">
                The underlying base for all this are fair and adequate prices that E Ration Shop 
                pays and that create adequate value at all levels. Frequent visits to its farmers and 
                upstream suppliers – including those who are no HAND IN HAND partners – provide E Ration Shop 
                insights into local conditions and help to establish authentic social contacts.
            </p>
        </div>
        <Footer/>
        </div>
    );
}
export default AboutUsScreen