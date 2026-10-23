

import React, { useState } from "react";
import Hero from "./Hero.jsx";
import "./booking.css";
import Header from "./Header.jsx";

function Booking() {

    const [guests, setGuests] = useState(2);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        roomType: "Deluxe Room"
    });

    const increaseGuests = () => {
        setGuests(guests + 1);
    };

    const decreaseGuests = () => {
        if (guests > 1) {
            setGuests(guests - 1);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Submit booking to Spring Boot
    const handleBooking = async (e) => {
        e.preventDefault();

        const bookingData = {
            ...formData,
            guests: guests
        };

        try {

            const response = await fetch(
                "http://localhost:8080/api/bookings",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bookingData)
                }
            );

            if (response.ok) {
                const result = await response.json();

                alert(
                    "Your booking has been confirmed!\nBooking ID: " +
                    result.id
                );

                // Clear form
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    checkIn: "",
                    checkOut: "",
                    roomType: "Deluxe Room"
                });

                setGuests(2);

            } else {
                alert("Booking failed. Please try again.");
            }

        } catch (error) {
            console.error("Error:", error);
            alert(
                "Unable to connect to the server. " +
                "Make sure Spring Boot is running."
            );
        }
    };

    return (
        <>
            <Header></Header>
            <Hero />

            <section className="reservation-section">

                <div className="section-title">
                    <span></span>
                    <h2>Reservation Form</h2>
                    <span></span>
                </div>

                <form
                    className="reservation-form"
                    onSubmit={handleBooking}
                >

                    {/* Full Name */}
                    <div className="form-row">
                        <label>Full Name</label>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-row">
                        <label>Email Address</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div className="form-row">
                        <label>Phone Number</label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Check In */}
                    <div className="form-row">
                        <label>Check-In Date</label>

                        <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Check Out */}
                    <div className="form-row">
                        <label>Check-Out Date</label>

                        <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Room Type */}
                    <div className="form-row">
                        <label>Room Type</label>

                        <select
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleChange}
                        >
                            <option value="Deluxe Room">
                                Deluxe Room
                            </option>

                            <option value="Executive Room">
                                Executive Room
                            </option>

                            <option value="Family Room">
                                Family Room
                            </option>
                        </select>
                    </div>

                    {/* Guests */}
                    <div className="form-row guests-row">

                        <label>Number of Guests</label>

                        <div className="guest-counter">

                            <button
                                type="button"
                                onClick={decreaseGuests}
                            >
                                −
                            </button>

                            <span>{guests}</span>

                            <button
                                type="button"
                                onClick={increaseGuests}
                            >
                                +
                            </button>

                        </div>
                    </div>

                    {/* Submit */}
                    <div className="booking-button-container">

                        <button
                            className="booking-button"
                            type="submit"
                        >
                            Confirm Booking
                        </button>

                    </div>

                </form>
            </section>

            {/* Why Book With Us */}
            <section className="why-us" id="rooms">

                <div className="section-title">
                    <span></span>
                    <h2>Why Book With Us?</h2>
                    <span></span>
                </div>

                <div className="benefits">

                    <div className="benefit">
                        <div className="benefit-icon">💳</div>
                        <h3>Secure Payment</h3>
                    </div>

                    <div className="benefit">
                        <div className="benefit-icon">✔️</div>
                        <h3>Instant Confirmation</h3>
                    </div>

                    <div className="benefit">
                        <div className="benefit-icon">🎟️</div>
                        <h3>Best Price Guarantee</h3>
                    </div>

                    <div className="benefit">
                        <div className="benefit-icon">🎧</div>
                        <h3>24/7 Customer Support</h3>
                    </div>

                </div>

            </section>
        </>
    );
}

export default Booking;