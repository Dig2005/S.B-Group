import "./guesttestmonial.css"
import React from "react";
function GuestTestimonial(){

    const testimonials = [
        {
            id: 1,
            name: "Priya Sharma",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
            review:
                "Amazing experience! The booking process was smooth, and the rooms were exceptionally clean. Highly recommended!",
        },
        {
            id: 2,
            name: "Rahul Mehta",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
            review:
                "Great service and comfortable rooms. The staff was friendly and always ready to help.",
        },

    ];
        return (
            <section className="testimonial-section">
                <div className="testimonial-header">
                    <h2>Guest Testimonials</h2>
                    <p>What our guests are saying</p>
                </div>

                <div className="testimonial-container">
                    {testimonials.map((item) => (
                        <div className="testimonial-card" key={item.id}>
                            <div className="quote-icon">❝</div>

                            <p className="testimonial-text">{item.review}</p>

                            <div className="customer-info">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <span>Verified Guest</span>
                                </div>
                            </div>

                            <div className="stars">
                                ★★★★★
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );


    }


export default GuestTestimonial;