
import "./header.css";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img href="/images/Copilot_20261019_115550.png" />S.B GROUP HOTELS</div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/">Rooms</Link>
                <Link to="/Booking">Booking</Link>
                <Link to="/About">About</Link>
                <Link to="/Adminpanel">Admin Login</Link>
                <Link to="/contact" className="contact-btn">Contact Us</Link>
            </nav>
        </header>
    );
}

export default Header;