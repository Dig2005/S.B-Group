import React from "react";
import {useNavigate} from "react-router-dom";
import "./deluxroom.css";

function DeluxeRoom() {
    const navigate=useNavigate();
    return (
        <div className="hotel-page">



            <section className="hero">
                <img
                    src="/images/DeluxeRoom-A.jpg"
                    alt="Deluxe Room"
                    className="hero-image"
                />

                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>Deluxe Room</h1>
                    <p>Experience comfort and luxury at an affordable price.</p>
                </div>
            </section>

            {/* ================= MAIN CONTENT ================= */}
            <main className="container">

                {/* ROOM OVERVIEW */}
                <section className="section">
                    <h2 className="section-title">Room Overview</h2>

                    <div className="overview">

                        {/* Images */}
                        <div className="room-gallery">
                            <img
                                src="/images/DeluxeRoom-A.jpg"
                                alt="Deluxe Room"
                                className="main-room-image"
                            />

                            <div className="thumbnail-container">
                                <img src="/images/DeluxeRoom-A.jpg" alt="Room 1" />
                                <img src="/images/DeluxeRoom-A.jpg" alt="Room 2" />
                                <img src="/images/DeluxeRoom-A.jpg" alt="Room 3" />
                                <img src="/images/DeluxeRoom-A.jpg" alt="Room 4" />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="room-description">
                            <p>
                                <strong>Our Deluxe Room</strong> offers a cozy ambience with
                                modern amenities designed for relaxation. Perfect for solo
                                travelers or couples.
                            </p>

                            <ul className="room-features">
                                <li>
                                    <span className="feature-icon">🛏️</span>
                                    King-size bed
                                </li>

                                <li>
                                    <span className="feature-icon">🚿</span>
                                    Private bathroom with hot shower
                                </li>

                                <li>
                                    <span className="feature-icon">📺</span>
                                    Smart TV & Wi-Fi
                                </li>

                                <li>
                                    <span className="feature-icon">🍳</span>
                                    Complimentary breakfast
                                </li>

                                <li>
                                    <span className="feature-icon">🧹</span>
                                    Daily housekeeping
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* ================= PRICING ================= */}
                <section className="section pricing-section">
                    <h2 className="section-title">Pricing & Booking</h2>

                    <div className="pricing-container">

                        <div className="price-card">
                            <h3>
                                ₹5,000<span>/night</span>
                            </h3>
                            <p>Available for selected dates</p>
                        </div>

                        <button className="book-button" onClick={()=> navigate("/booking")}>
                            Book Now
                        </button>

                        <button className="contact-button" onClick={()=>navigate("/contactUs")}>
                            Contact Front Desk
                        </button>

                    </div>
                </section>

                {/* ================= TESTIMONIALS ================= */}
                <section className="section testimonials-section">
                    <h2 className="center-title">Guest Testimonials</h2>

                    <div className="testimonials">

                        <div className="testimonial-card">
                            <img
                                src="/images/guest1.jpg"
                                alt="Priya"
                            />

                            <div className="testimonial-content">
                                <h3>"Loved the comfort and cleanliness!"</h3>
                                <p>Priya S.</p>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <img
                                src="/images/WhatsApp Image 2026-04-02 at 19.19.14.jpeg"
                                alt="Rahul"
                            />

                            <div className="testimonial-content">
                                <h3>"Excellent service and great value."</h3>
                                <p>Rahul M.</p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ================= AMENITIES ================= */}
                <section className="section amenities-section">
                    <h2 className="center-title">Amenities</h2>

                    <div className="amenities">

                        <div className="amenity">
                            <div className="amenity-icon">🧴</div>
                            <span>Toiletries</span>
                        </div>

                        <div className="amenity">
                            <div className="amenity-icon">❄️</div>
                            <span>Mini Fridge</span>
                        </div>

                        <div className="amenity">
                            <div className="amenity-icon">🖥️</div>
                            <span>Workspace Desk</span>
                        </div>

                        <div className="amenity">
                            <div className="amenity-icon">🌆</div>
                            <span>City View</span>
                        </div>

                        <div className="amenity">
                            <div className="amenity-icon">🏊</div>
                            <span>Pool Access</span>
                        </div>

                    </div>
                </section>

            </main>



        </div>
    );
}

export default DeluxeRoom;