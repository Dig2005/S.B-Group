import React from "react";
import "./executiveroom.css";
import {useNavigate} from "react-router-dom";
const roomImages = [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=90",
    "https://images.unsplash.com/photo-1611892440504-5a6b2b7f3f2d?auto=format&fit=crop&w=500&q=85",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=500&q=85",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=500&q=85",
];

function Executiveroom(){
    const navigate=useNavigate()
    return (
        <div className="family-page">

            <section className="family-hero">

                <img
                    src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=90"
                    alt="Family Room"
                />

                <div className="family-hero-overlay"></div>

                <div className="family-hero-content">
                    <h1>Executive Suite</h1>



                    <p>
                        Designed for professionals seeking comfort and sophistication.
                    </p>
                </div>

            </section>


            {/* ================= MAIN CONTENT ================= */}
            <main className="family-container">


                {/* ================= ROOM OVERVIEW ================= */}
                <section className="family-section">

                    <h2 className="family-section-title">
                        Room Overview
                    </h2>

                    <div className="family-overview">

                        {/* Gallery */}
                        <div className="family-gallery">

                            <img
                                className="family-main-image"
                                src="https://images.unsplash.com/photo-1611892440504-5a6b2b7f3f2d?auto=format&fit=crop&w=500&q=85"
                                alt="Family Room"
                            />

                            <div className="family-thumbnails">

                                <img
                                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=500&q=85"
                                    alt="Family Room"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=500&q=85"
                                    alt="Family Room Interior"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=500&q=85"
                                    alt="Family Room"
                                />

                            </div>

                        </div>


                        {/* Description */}
                        <div className="family-description">

                            <p>
                                <strong>Our Family Room</strong> offers ample
                                space for up to four guests, featuring modern
                                amenities and cozy interiors for a relaxing stay.
                            </p>

                            <ul>

                                <li>
                                    <span>☑</span>
                                    Two queen-size beds
                                </li>

                                <li>
                                    <span>☑</span>
                                    Private bathroom with bathtub
                                </li>

                                <li>
                                    <span>☑</span>
                                    Smart TV & Wi-Fi
                                </li>

                                <li>
                                    <span>☑</span>
                                    Complimentary breakfast
                                </li>

                                <li>
                                    <span>☑</span>
                                    Daily housekeeping
                                </li>

                                <li>
                                    <span>☑</span>
                                    Child-friendly setup
                                </li>

                            </ul>

                        </div>

                    </div>

                </section>


                {/* ================= PRICING ================= */}
                <section className="family-section">

                    <h2 className="family-section-title">
                        Pricing & Booking
                    </h2>

                    <div className="family-pricing">

                        <div className="family-price-card">

                            <h3>
                                ₹8,500<span>/night</span>
                            </h3>

                            <p>
                                Available for selected dates
                            </p>

                        </div>


                        <button className="family-book-btn"
                                onClick={()=>navigate("/booking")}>
                            Book Now
                        </button>


                        <button className="family-contact-btn">
                            Contact Front Desk
                        </button>

                    </div>

                </section>


                {/* ================= TESTIMONIALS ================= */}
                <section className="family-section">

                    <h2 className="family-centered-title">
                        Guest Testimonials
                    </h2>

                    <div className="family-testimonials">

                        <div className="family-testimonial">

                            <img
                                src="/images/guest1.jpg"
                                alt="Priya"
                            />

                            <div>

                                <h3>
                                    "Spacious and comfortable for our family of four!"
                                </h3>

                                <p>Priya S.</p>

                            </div>

                        </div>


                        <div className="family-testimonial">

                            <img
                                src="/images/guest2.jpg"
                                alt="Rahul"
                            />

                            <div>

                                <h3>
                                    "Kids loved the stay, and service was excellent"
                                </h3>

                                <p>Rahul M.</p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================= AMENITIES ================= */}
                <section className="family-section">

                    <h2 className="family-centered-title">
                        Amenities
                    </h2>

                    <div className="family-amenities">

                        <div className="family-amenity">
                            <span>🧴</span>
                            <p>Toiletries</p>
                        </div>

                        <div className="family-amenity">
                            <span>❄️</span>
                            <p>Mini Fridge</p>
                        </div>

                        <div className="family-amenity">
                            <span>💼</span>
                            <p>Workspace Desk</p>
                        </div>

                        <div className="family-amenity">
                            <span>🪟</span>
                            <p>City View</p>
                        </div>

                        <div className="family-amenity">
                            <span>👨‍👩‍👧</span>
                            <p>Pool Access</p>
                        </div>

                    </div>

                </section>


                {/* ================= ADDITIONAL INFORMATION ================= */}
                <section className="family-section additional-section">

                    <h2 className="family-centered-title">
                        Additional Information
                    </h2>

                    <div className="additional-info">

                        <p>
                            <span>☑</span>
                            <strong>Check-In:</strong> 2:00 PM
                            <b>|</b>
                            <strong>Check-Out:</strong> 12:00 AM
                        </p>

                        <p>
                            <span>☑</span>
                            <strong>Cancellation Policy:</strong>
                            Free cancellation up to 24 hours before arrival.
                        </p>

                        <p>
                            <span>📍</span>
                            <strong>Nearby Attractions:</strong>
                            Restaurants, Shopping, Tourist Spots
                        </p>

                    </div>

                </section>

            </main>



        </div>
    );

}
export default Executiveroom;