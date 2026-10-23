import React, { useState } from "react";
import "./cancelbooking.css";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Herotwo from "./herotwo.jsx";
import { useNavigate } from "react-router-dom";

function CancelBooking() {

    const navigate = useNavigate();

    const [bookingId, setBookingId] = useState("");
    const [mobile, setMobile] = useState("");

    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // ==========================================
    // VERIFY BOOKING
    // ==========================================

    const handleVerify = async (e) => {

        e.preventDefault();

        setLoading(true);
        setError("");
        setBooking(null);

        try {

            const response = await fetch(
                `http://localhost:8080/api/bookings/verify?bookingId=${bookingId}&phone=${mobile}`
            );

            if (!response.ok) {
                throw new Error(
                    "Booking ID or Mobile Number is incorrect"
                );
            }

            const result = await response.json();

            setBooking(result);

        } catch (error) {

            console.error(error);

            setError(
                "Unable to find booking. Please check Booking ID and Mobile Number."
            );

        } finally {

            setLoading(false);
        }
    };

    // ==========================================
    // CANCEL BOOKING
    // ==========================================

    const handleCancel = async () => {

        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this booking?"
        );

        if (!confirmCancel) {
            return;
        }

        try {

            setLoading(true);

            const response = await fetch(
                `http://localhost:8080/api/bookings/cancel/${booking.id}`,
                {
                    method: "PUT"
                }
            );

            if (!response.ok) {

                const message = await response.text();

                throw new Error(message);
            }

            const result = await response.json();

            setBooking(result);

            alert(
                "Booking cancelled successfully!\nBooking ID: " +
                result.id
            );

        } catch (error) {

            console.error(error);

            alert(
                "Unable to cancel booking. Please try again."
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <Herotwo />

            <section className="cancel-section">

                <div className="cancel-container">

                    <div className="section-title">
                        <span></span>
                        <h2>Cancel Booking</h2>
                        <span></span>
                    </div>

                    <p className="cancel-description">
                        Please enter your Booking ID and Mobile Number
                        to find your reservation.
                    </p>

                    {/* ==========================================
                        VERIFY FORM
                    ========================================== */}

                    <form
                        className="cancel-form"
                        onSubmit={handleVerify}
                    >

                        <div className="form-row">

                            <label>
                                Booking ID
                            </label>

                            <input
                                type="number"
                                placeholder="Enter Booking ID"
                                value={bookingId}
                                onChange={(e) =>
                                    setBookingId(e.target.value)
                                }
                                required
                            />

                        </div>

                        <div className="form-row">

                            <label>
                                Mobile Number
                            </label>

                            <input
                                type="tel"
                                placeholder="Enter Mobile Number"
                                value={mobile}
                                onChange={(e) =>
                                    setMobile(e.target.value)
                                }
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="verify-button"
                            disabled={loading}
                        >
                            {loading
                                ? "Checking..."
                                : "Verify Booking"}
                        </button>

                    </form>

                    {/* ERROR */}

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    {/* ==========================================
                        BOOKING DETAILS
                    ========================================== */}

                    {booking && (

                        <div className="booking-details">

                            <h2>
                                Booking Details
                            </h2>

                            <div className="details-grid">

                                <div>
                                    <strong>
                                        Booking ID
                                    </strong>

                                    <p>
                                        #{booking.id}
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Guest Name
                                    </strong>

                                    <p>
                                        {booking.fullName}
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Email
                                    </strong>

                                    <p>
                                        {booking.email}
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Mobile
                                    </strong>

                                    <p>
                                        {booking.phone}
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Check-In
                                    </strong>

                                    <p>
                                        {booking.checkIn}
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Check-Out
                                    </strong>

                                    <p>
                                        {booking.checkOut}
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Room Type
                                    </strong>

                                    <p>
                                        {booking.roomType}
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Guests
                                    </strong>

                                    <p>
                                        {booking.guests}
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Total Cost
                                    </strong>

                                    <p>
                                        ₹{booking.totalCost || 0}
                                    </p>
                                </div>

                                <div>
                                    <strong>
                                        Status
                                    </strong>

                                    <p className={
                                           booking.status === "CANCELLED"
                                               ? "cancelled-status"
                                               : "active-status"
                                       }>
                                        {booking.status || "CONFIRMED"}
                                    </p>
                                </div>

                            </div>

                            {/* CANCEL BUTTON */}

                            {booking.status !== "CANCELLED" && (

                                <div className="cancel-button-container">

                                    <button
                                        className="cancel-button"
                                        onClick={handleCancel}
                                        disabled={loading}
                                    >
                                        {loading
                                            ? "Cancelling..."
                                            : "Cancel Booking"}
                                    </button>

                                </div>

                            )}

                            {/* ALREADY CANCELLED */}

                            {booking.status === "CANCELLED" && (

                                <div className="already-cancelled">
                                    This booking has already been cancelled.
                                </div>

                            )}

                        </div>

                    )}

                    <button
                        className="back-button"
                        onClick={() => navigate("/admindashboard")}
                    >
                        Back to Dashboard
                    </button>

                </div>

            </section>
        </>
    );
}

export default CancelBooking;