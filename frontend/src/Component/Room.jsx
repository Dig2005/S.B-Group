import "./room.css"
//import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";

function Room(){
    const navigate = useNavigate();
    return(
        <section className="rooms">
            <h2>Discover Our Rooms</h2>
            <hr color="#ffcc00"></hr>
            <p><span>Find the perfect room for your </span>stay</p>
            <div className="room-cards">
                <div className="room-card">
                    <img src="/images/DeluxeRoom-A.jpg" alt="Deluxe Room" />
                    <h3>Deluxe Room</h3>
                    <hr></hr>
                    <p>From ₹5,000/night</p>
                    <button onClick={() => navigate("/deluxroom")}>View Details</button>
                </div>
                <div className="room-card">
                    <img src="/images/IMG_1700-scaled.jpg" alt="Executive Suite" />
                    <h3>Executive Suite</h3>
                    <hr></hr>
                    <p>From ₹8,500/night</p>

                    <button onClick={()=> navigate("/executiveroom")}>View Details</button>
                </div>
                <div className="room-card">
                    <img src="/images/Executive-Family-1800x1200-1.jpg" alt="Family Room" />
                    <h3>Family Room</h3>
                    <hr></hr>
                    <p>From ₹6,500/night</p>
                    <button onClick={()=> navigate("/Familyroom")}>View Details</button>
                </div>
            </div>
        </section>
    );
}
export default Room;