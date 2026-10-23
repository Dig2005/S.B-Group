import "./hero.css";
import {useNavigate} from "react-router-dom";

function  Hero() {
    const navigate=useNavigate();
    return(
    <div className="heroo">

        <h1 className="welcom">Welcome to Our </h1>
        <h1 className="hotel">S.B Group of Hotels </h1>
        <p>Effortless Booking & Management</p>
        <div className="hero-buttons">
            <button className="primary-btn"
            onClick={()=> navigate("/Room")}>Explore Rooms</button>
            <button className="secondary-btn" onClick={()=> navigate("/editbooking")}>Manage Bookings</button>
        </div>
    </div>
    );
}
export default Hero;
