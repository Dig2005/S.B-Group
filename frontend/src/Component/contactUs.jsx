import Header from "./Header.jsx";
import GuestTestimoinal from"./GuestTestimonial.jsx"
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import "./contactUs.css"



function ContactUs(){
    return(
        <>
            <Header> </Header>
            <Hero></Hero>
            <section className="contact-section">
                <div className="contact-container">

                    {/* Contact Information */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>

                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div>
                                <h3>Our Address</h3>
                                <p>23 mirganj, Gopalganj, Bihar, India</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div>
                                <h3>Call Us</h3>
                                <p>1800-123-4567</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">✉</div>
                            <div>
                                <h3>Email Us</h3>
                                <p>support@hotelsb.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="message-form">
                        <h2>Send Us a Message</h2>

                        <form>
                            <div className="input-box">
                                <span>👤</span>
                                <input type="text" placeholder="Your Name" />
                            </div>

                            <div className="input-box">
                                <span>✉</span>
                                <input type="email" placeholder="Your Email" />
                            </div>

                            <div className="input-box">
                                <span>📞</span>
                                <input type="tel" placeholder="Phone Number" />
                            </div>

                            <textarea placeholder="Your Message"></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                </div>
            </section>

            {/* Map + Social */}
            <section className="lower-section">
                <div className="map-container">

                    <div className="map-placeholder">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.9022524537836!2d84.27094097466905!3d26.426630780812086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993076110586225%3A0xca12add9f72bb018!2sAmtha%20Seva%20Kendra!5e0!3m2!1sen!2sin!4v1791190148930!5m2!1sen!2sin" width="600" height="450" ></iframe>


                        <div className="map-pin">📍</div>

                        <div className="map-label">

                            <strong>S.B Group of Hotels </strong>
                            <span>plot No-3 Gopalganj,Bihar</span>
                        </div>

                        <div className="map-controls">
                            <button>+</button>
                            <button>−</button>
                        </div>

                        <div className="google-text">Google</div>
                    </div>
                </div>

                <div className="social-section">
                    <h2>Follow Us</h2>

                    <div className="social-icons">
                        <a href="#">f</a>
                        <a href="#">➤</a>
                        <a href="#">in</a>
                        <a href="#">♥</a>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-section">
                <h2>Why Choose Us?</h2>

                <div className="features">
                    <div className="feature">
                        <span>🛡️</span>
                        <strong>Reliable Solutions</strong>
                    </div>

                    <div className="feature">
                        <span>🎧</span>
                        <strong>Staff &amp; Support</strong>
                    </div>

                    <div className="feature">
                        <span>📊</span>
                        <strong>Reliable &amp; Flexible</strong>
                    </div>

                    <div className="feature">
                        <span>💻</span>
                        <strong>User Friendly Solutions</strong>
                    </div>
                </div>
            </section>


        </>
    );

}
export default ContactUs;