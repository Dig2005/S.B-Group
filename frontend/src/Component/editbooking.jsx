import React, { useState } from "react";
import "./editbooking.css";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";

function EditBooking() {

    // ==========================================
    // VERIFICATION DATA
    // ==========================================

    const [bookingId, setBookingId] = useState("");
    const [mobile, setMobile] = useState("");

    // ==========================================
    // BOOKING DATA
    // ==========================================

    const [booking, setBooking] = useState(null);

    const [fullName, setFullName] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [roomType, setRoomType] = useState("");
    const [guests, setGuests] = useState(2);
    const [specialRequests, setSpecialRequests] = useState("");

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);


    // ==========================================
    // VERIFY BOOKING
    // ==========================================

    const handleVerify = async (e) => {

        e.preventDefault();

        setMessage("");
        setError("");

        if (!bookingId || !mobile) {

            setError(
                "Please enter Booking ID and Mobile Number"
            );

            return;
        }


        setLoading(true);


        try {

            const response = await fetch(
                `http://localhost:8080/api/bookings/verify?bookingId=${bookingId}&phone=${mobile}`
            );


            if (!response.ok) {

                const errorText =
                    await response.text();

                throw new Error(errorText);
            }


            const data =
                await response.json();


            setBooking(data);


            // Fill form automatically

            setFullName(
                data.fullName || ""
            );

            setCheckIn(
                data.checkIn || ""
            );

            setCheckOut(
                data.checkOut || ""
            );

            setRoomType(
                data.roomType || "Deluxe Room"
            );

            setGuests(
                data.guests || 2
            );

            setSpecialRequests(
                data.specialRequests || ""
            );


            setMessage(
                "Booking verified successfully."
            );

        }
        catch (error) {

            console.error(error);

            setBooking(null);

            setError(
                error.message ||
                "Unable to connect to server"
            );

        }
        finally {

            setLoading(false);
        }
    };


    // ==========================================
    // SAVE CHANGES
    // ==========================================

    const handleSave = async (e) => {

        e.preventDefault();

        if (!booking) {

            setError(
                "Please verify your booking first."
            );

            return;
        }


        setLoading(true);
        setMessage("");
        setError("");


        const updatedData = {

            fullName: fullName,

            checkIn: checkIn,

            checkOut: checkOut,

            roomType: roomType,

            guests: Number(guests),

            specialRequests: specialRequests

        };


        try {

            const response = await fetch(
                `http://localhost:8080/api/bookings/${booking.id}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify(
                        updatedData
                    )
                }
            );


            if (!response.ok) {

                const errorText =
                    await response.text();

                throw new Error(errorText);
            }


            const data =
                await response.json();


            setBooking(data);


            setMessage(
                "Booking details updated successfully!"
            );

        }
        catch (error) {

            console.error(error);

            setError(
                error.message ||
                "Unable to update booking."
            );

        }
        finally {

            setLoading(false);
        }
    };


    // ==========================================
    // CANCEL
    // ==========================================

    const handleCancel = () => {

        setBooking(null);

        setBookingId("");

        setMobile("");

        setFullName("");

        setCheckIn("");

        setCheckOut("");

        setRoomType("");

        setGuests(2);

        setSpecialRequests("");

        setMessage("");

        setError("");
    };


    return (

        <div className="edit-booking-page">
            <Header></Header>
            <Hero></Hero>

            <header className="edit-header">

                <h1>
                    Edit Booking Details
                </h1>

            </header>


            <main className="edit-container">


                {/* ==================================
                    VERIFY SECTION
                ================================== */}

                <section className="verify-section">

                    <p className="verify-text">

                        <strong>
                            Please enter Booking ID and
                            Mobile Number
                        </strong>

                        {" "}
                        to edit your reservation:

                    </p>


                    <div className="dashed-line"></div>


                    <form
                        className="verify-form"
                        onSubmit={handleVerify}
                    >

                        {/* BOOKING ID */}

                        <div className="verify-field">

                            <label>
                                Booking ID:
                            </label>

                            <input
                                type="number"
                                placeholder="Enter Booking ID"
                                value={bookingId}
                                onChange={(e) =>
                                    setBookingId(
                                        e.target.value
                                    )
                                }
                                required
                            />

                        </div>


                        {/* MOBILE */}

                        <div className="verify-field">

                            <label>
                                Mobile Number:
                            </label>

                            <input
                                type="tel"
                                placeholder="Enter Mobile Number"
                                value={mobile}
                                onChange={(e) =>
                                    setMobile(
                                        e.target.value
                                    )
                                }
                                required
                            />

                        </div>


                        <button
                            className="verify-button"
                            type="submit"
                            disabled={loading}
                        >

                            {loading
                                ? "Verifying..."
                                : "Verify Booking"
                            }

                        </button>

                    </form>


                    {message && (

                        <div className="success-message">
                            {message}
                        </div>

                    )}


                    {error && (

                        <div className="error-message">
                            {error}
                        </div>

                    )}

                </section>


                {/* ==================================
                    EDIT FORM
                ================================== */}

                <section className="edit-section">

                    <div className="section-heading">

                        <h2>
                            Edit Booking Information
                        </h2>

                    </div>


                    <form
                        className="edit-form"
                        onSubmit={handleSave}
                    >

                        {/* FULL NAME */}

                        <div className="edit-row">

                            <label>
                                Guest Name:
                            </label>

                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) =>
                                    setFullName(
                                        e.target.value
                                    )
                                }
                                disabled={!booking}
                                required
                            />

                        </div>


                        {/* CHECK IN */}

                        <div className="edit-row">

                            <label>
                                Check-In Date:
                            </label>

                            <div className="date-wrapper">

                                <span>
                                    📅
                                </span>

                                <input
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) =>
                                        setCheckIn(
                                            e.target.value
                                        )
                                    }
                                    disabled={!booking}
                                    required
                                />

                            </div>

                        </div>


                        {/* CHECK OUT */}

                        <div className="edit-row">

                            <label>
                                Check-Out Date:
                            </label>

                            <div className="date-wrapper">

                                <span>
                                    📅
                                </span>

                                <input
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) =>
                                        setCheckOut(
                                            e.target.value
                                        )
                                    }
                                    disabled={!booking}
                                    required
                                />

                            </div>

                        </div>


                        {/* ROOM TYPE */}

                        <div className="edit-row">

                            <label>
                                Room Type:
                            </label>

                            <select
                                value={roomType}
                                onChange={(e) =>
                                    setRoomType(
                                        e.target.value
                                    )
                                }
                                disabled={!booking}
                                required
                            >

                                <option value="">
                                    Select Room
                                </option>

                                <option value="Deluxe Room">
                                    Deluxe Room
                                </option>

                                <option value="Executive Suite">
                                    Executive Suite
                                </option>

                                <option value="Family Room">
                                    Family Room
                                </option>

                            </select>

                        </div>


                        {/* GUESTS */}

                        <div className="edit-row">

                            <label>
                                Number of Guests:
                            </label>

                            <select
                                value={guests}
                                onChange={(e) =>
                                    setGuests(
                                        e.target.value
                                    )
                                }
                                disabled={!booking}
                                required
                            >

                                <option value="1">
                                    1 Adult
                                </option>

                                <option value="2">
                                    2 Adults
                                </option>

                                <option value="3">
                                    3 Adults
                                </option>

                                <option value="4">
                                    4 Adults
                                </option>

                                <option value="5">
                                    5 Adults
                                </option>

                                <option value="6">
                                    6 Adults
                                </option>

                            </select>

                        </div>


                        {/* SPECIAL REQUESTS */}

                        <div className="edit-row special-row">

                            <label>
                                Special Requests:
                            </label>

                            <div>

                                <textarea
                                    value={
                                        specialRequests
                                    }
                                    onChange={(e) =>
                                        setSpecialRequests(
                                            e.target.value
                                        )
                                    }
                                    disabled={!booking}
                                    placeholder="Enter any special requests"
                                ></textarea>

                                <p className="helper-text">
                                    Enter any special requests
                                    (e.g., late check-out,
                                    extra pillows).
                                </p>

                            </div>

                        </div>


                        {/* BUTTONS */}

                        <div className="button-row">

                            <button
                                type="button"
                                className="cancel-button"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>


                            <button
                                type="submit"
                                className="save-button"
                                disabled={
                                    !booking || loading
                                }
                            >

                                {loading
                                    ? "Saving..."
                                    : "Save Changes"
                                }

                            </button>

                        </div>

                    </form>

                </section>

            </main>


            <footer className="edit-footer">

                Please ensure that all the details are
                correct before saving your changes.

            </footer>

        </div>
    );
}

export default EditBooking;