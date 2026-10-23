import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Hero from "./Component/Hero.jsx";
import Feature from "./Component/Feature.jsx";
import GuestTestimonial from "./Component/GuestTestimonial.jsx";
import Footer from "./Component/Footer.jsx";
import Room from "./Component/Room.jsx";
import ContactUs from "./Component/contactUs.jsx";
import Booking from "./Component/booking.jsx";
import About from "./Component/about.jsx";
import Adminpanel from "./Component/adminpanel.jsx";
import Familyroom from "./Component/familyroom.jsx";
import Deluxroom from "./Component/deluxroom.jsx";
import Executiveroom from "./Component/executiveroom.jsx";
import Admindashboard from "./Component/admindashboard.jsx";
import EditBooking from "./Component/editbooking.jsx";
import TotalBookingSummary from "./Component/totalbookingsummary.jsx";
import CancelBooking from "./Component/CancelBooking.jsx";

function Home() {
    return (
        <>
            <Header></Header>
            <Hero />
            <Feature />
            <Room />
            <GuestTestimonial />
        </>
    );
}

function App() {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/adminpanel" element={<Adminpanel/>}/>
                <Route path="/deluxroom" element={<Deluxroom/>}/>
                <Route path="/familyroom" element={<Familyroom/>}/>
                <Route path="/executiveroom" element={<Executiveroom/>}/>
                <Route path="/Room" element={<Room/>}/>
                <Route path="/admindashboard" element={<Admindashboard/>}/>
                <Route path="/editbooking" element={<EditBooking/>}/>
                <Route path="/totalbookingsummary" element={<TotalBookingSummary/>}/>
                <Route path="/CancelBooking" element={<CancelBooking/>}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
