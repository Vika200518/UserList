import "./Footer.css"
import google from "../aseats/img/google.svg";
import linkedin from "../aseats/img/linkedin.svg";
import telegram from "../aseats/img/telegram.png";
import twitter from "../aseats/img/twitter.svg";
import facebook from "../aseats/img/facebook.png";


function Footer() {
    return (
        <footer className="contenier-footer">
            <nav className="contenier-footer-content">
                <ul className="contenier-footer-content-icon">
        <img src={google} alt=""></img>
                </ul>
                <ul className="contenier-footer-content-text">
                <li>Home</li>
                <li>UserList</li>
                <li>Contact</li>
                <li>Login</li>
                </ul>
                <ul className="contenier-footer-content-socSetImg">
                <img src={facebook} alt="facebook"></img>
                <img src={telegram} alt="telegram"></img>
                <img src={twitter} alt="twitter"></img>
                <img src={linkedin} alt="linkedin"></img>
                </ul>
            </nav>
        </footer>
    )
}
 export default Footer;











