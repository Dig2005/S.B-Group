import { Link } from "react-router-dom";
import "./headerdash.css"
function Headerdash() {
    return (
        <header className="header">
            <div className="logo">🏨 S.B GROUP HOTELS</div>
            <nav className="nav">


                <Link to="/adminpanel" className="contact-btn">Logout</Link>
            </nav>
        </header>
    );
}
export default Headerdash;