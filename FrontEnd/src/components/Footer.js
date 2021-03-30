import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <hr></hr>

                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" href="/aboutus"><h6 className="nameColor2">ABOUT US</h6></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contactus"><h6 className="nameColor2">CONTACT US</h6></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/termsnconditions"><h6 className="nameColor2">TERM & CONDITION'S</h6></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/privacypolicy"><h6 className="nameColor2">PRIVACY POLICY</h6></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/faqs"><h6 className="nameColor2">FAQs</h6></a>
                    </li>
                </ul>

                {/* <div>
            <Link to="/aboutus">
                <a className="nav-link"><h5 className="nameColor2">About Us</h5></a>
            </Link>
        </div>
        <div>
            <Link to="/contactus">
                <a className="nav-link"><h5 className="nameColor2">Contact Us</h5></a>
            </Link>
        </div>
        <div>
            <Link to="/termsnconditions">
                <a className="nav-link"><h5 className="nameColor2">Terms & Conditions</h5></a>
            </Link>
        </div>

        <div>
            <Link to="/privacypolicy">
                <a className="nav-link"><h5 className="nameColor2">Privacy Policy</h5></a>
            </Link>
        </div>

        <div>
            <Link to="/faqs">
                <a className="nav-link"><h5 className="nameColor2">FAQs</h5></a>
            </Link>
        </div>
            */}
                <div class="copyright">
                    <div>© 2021 Rohit_Auti & Rahul_Bhagat, E-Ration Shop, Maharashtra(INDIA)</div>
                    <div>All rights reserved</div>
                </div>
            </div>

        </div>

    );
}
export default Footer