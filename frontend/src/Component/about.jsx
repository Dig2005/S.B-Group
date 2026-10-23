import React from "react";
import "./about.css";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
function About(){
        return (
            <>
                <Header></Header>
                <Hero></Hero>
            <div className="about-page">
                <section className="story-section">

                    <div className="section-heading">
                        <span></span>
                        <h2>Our Story</h2>
                        <span></span>
                    </div>

                    <div className="story-container">

                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80"
                                alt="Hotel Team"
                            />
                        </div>

                        <div className="story-content">
                            <p>
                                Founded with a vision to revolutionize the hospitality industry,
                                we provide advanced software solutions to streamline hotel
                                operations.
                            </p>

                            <p>
                                Our goal is to enhance the guest experience and optimize
                                management processes for hotels of all sizes.
                            </p>

                            <div className="story-line"></div>
                        </div>

                    </div>


                    {/* ================= MISSION VISION VALUES ================= */}

                    <div className="mvv-container">

                        <div className="mvv-card">
                            <div className="mvv-title">
                                <span>📋</span>
                                <h3>Our Mission</h3>
                            </div>

                            <div className="mvv-line"></div>

                            <p>
                                Delivering seamless booking and management solutions.
                            </p>
                        </div>


                        <div className="mvv-card">
                            <div className="mvv-title">
                                <span>🤝</span>
                                <h3>Our Vision</h3>
                            </div>

                            <div className="mvv-line"></div>

                            <p>
                                To be the leading provider of hotel management software
                                worldwide.
                            </p>
                        </div>


                        <div className="mvv-card">
                            <div className="mvv-title">
                                <span>⚙️</span>
                                <h3>Our Values</h3>
                            </div>

                            <div className="mvv-line"></div>

                            <p>
                                Customer-focused, innovation-driven, and committed to excellence.
                            </p>
                        </div>

                    </div>

                </section>


                {/* ================= OUR TEAM ================= */}
                <section className="team-section">

                    <div className="section-heading">
                        <span></span>
                        <h2>Our Team</h2>
                        <span></span>
                    </div>

                    <p className="team-description">
                        We're here to help you make the most of your hotel management
                        experience.
                    </p>


                    <div className="team-container">

                        {/* Team Member 1 */}
                        <div className="team-card">
                            <img
                                src="/images/WhatsApp Image 2026-04-02 at 19.19.14.jpeg"
                                alt="Digvijay Pratap"
                            />

                            <div className="team-info">
                                <h3>Digvijay Pratap</h3>
                                <div className="team-line"></div>
                                <p>Founder & CEO</p>
                            </div>
                        </div>


                        {/* Team Member 2 */}
                        <div className="team-card">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                                alt="Ananya"
                            />

                            <div className="team-info">
                                <h3>Ananya K.</h3>
                                <div className="team-line"></div>
                                <p>Operations Manager</p>
                            </div>
                        </div>


                        {/* Team Member 3 */}
                        <div className="team-card">
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                                alt="Mark"
                            />

                            <div className="team-info">
                                <h3>Mark T.</h3>
                                <div className="team-line"></div>
                                <p>Lead Developer</p>
                            </div>
                        </div>

                    </div>

                </section>


                {/* ================= WHY CHOOSE US ================= */}
                <section className="why-section">

                    <div className="section-heading">
                        <span></span>
                        <h2>Why Choose Us?</h2>
                        <span></span>
                    </div>


                    <div className="why-container">

                        <div className="why-item">
                            <div className="why-icon">🛡️</div>
                            <h3>Reliable Solutions</h3>
                        </div>

                        <div className="why-item">
                            <div className="why-icon">🎧</div>
                            <h3>24/7 Support</h3>
                        </div>

                        <div className="why-item">
                            <div className="why-icon">📊</div>
                            <h3>Scalable & Flexible</h3>
                        </div>

                        <div className="why-item">
                            <div className="why-icon">💻</div>
                            <h3>User-Friendly Interface</h3>
                        </div>

                    </div>

                </section>



            </div>
            </>

    );
}
export default About;