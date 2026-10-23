import React, { useState } from "react";
import "./totalbookingsummary.css";
import Herotwo from "./herotwo.jsx";
import Headerdash from "./headerdash.jsx";

function TotalBookingSummary() {

    const [fromDate, setFromDate] = useState("2026-10-01");
    const [toDate, setToDate] = useState("2026-10-18");

    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const generateReport = async () => {

        if (!fromDate || !toDate) {
            setError("Please select both dates.");
            return;
        }

        if (fromDate > toDate) {
            setError("From date cannot be after To date.");
            return;
        }

        setLoading(true);
        setError("");

        try {

            const response = await fetch(
                `http://localhost:8080/api/reports/bookings?from=${fromDate}&to=${toDate}`
            );

            if (!response.ok) {
                const message = await response.text();
                throw new Error(message);
            }

            const data = await response.json();

            // Remove cancelled bookings from summary
            const activeBookings = (data.bookings || []).filter(
                (booking) =>
                    !booking.status ||
                    booking.status.toUpperCase() !== "CANCELLED"
            );

            // Recalculate statistics using active bookings only
            const totalBookings = activeBookings.length;

            const totalGuests = activeBookings.reduce(
                (sum, booking) => sum + (booking.guests || 0),
                0
            );

            const totalRevenue = activeBookings.reduce(
                (sum, booking) => sum + (booking.totalCost || 0),
                0
            );

            const totalNights = activeBookings.reduce(
                (sum, booking) => {

                    if (!booking.checkIn || !booking.checkOut) {
                        return sum;
                    }

                    const checkIn = new Date(booking.checkIn);
                    const checkOut = new Date(booking.checkOut);

                    const difference =
                        checkOut.getTime() - checkIn.getTime();

                    const nights =
                        difference / (1000 * 60 * 60 * 24);

                    return sum + Math.max(0, nights);
                },
                0
            );

            setReport({
                ...data,
                bookings: activeBookings,
                totalBookings: totalBookings,
                totalGuests: totalGuests,
                totalRevenue: totalRevenue,
                totalNights: totalNights
            });

        } catch (error) {

            console.error(error);

            setError(
                "Unable to connect to server."
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="report-page">

            <Headerdash />
            <Herotwo />

            {/* HEADER */}

            <header className="report-header">

                <h1>
                    Total Booking Summary
                </h1>

            </header>


            <main className="report-container">

                {/* FILTER */}

                <section className="filter-section">

                    <h2>
                        Report Filters:
                    </h2>

                    <div className="dashed-line"></div>

                    <label className="date-title">
                        Select Date Range:
                    </label>

                    <div className="filter-row">

                        {/* FROM */}

                        <div className="date-box">

                            <span>
                                From:
                            </span>

                            <input
                                type="date"
                                value={fromDate}
                                onChange={(e) =>
                                    setFromDate(e.target.value)
                                }
                            />

                        </div>

                        <span className="dash">
                            —
                        </span>

                        {/* TO */}

                        <div className="date-box">

                            <input
                                type="date"
                                value={toDate}
                                onChange={(e) =>
                                    setToDate(e.target.value)
                                }
                            />

                        </div>

                        {/* BUTTON */}

                        <button
                            className="generate-button"
                            onClick={generateReport}
                            disabled={loading}
                        >

                            {loading
                                ? "Loading..."
                                : "Generate Report"
                            }

                        </button>

                    </div>

                    {error && (
                        <p className="error-message">
                            {error}
                        </p>
                    )}

                </section>


                {/* STATISTICS */}

                {report && (

                    <>

                        <section className="stats">

                            <div className="stat-card">

                                <div className="stat-icon">
                                    🛏️
                                </div>

                                <h3>
                                    Total Bookings:
                                </h3>

                                <strong>
                                    {report.totalBookings}
                                </strong>

                            </div>


                            <div className="stat-card">

                                <div className="stat-icon money">
                                    ₹
                                </div>

                                <h3>
                                    Total Revenue:
                                </h3>

                                <strong>
                                    ₹{Number(
                                    report.totalRevenue
                                ).toLocaleString()}
                                </strong>

                            </div>


                            <div className="stat-card">

                                <div className="stat-icon">
                                    👥
                                </div>

                                <h3>
                                    Total Guests:
                                </h3>

                                <strong>
                                    {report.totalGuests}
                                </strong>

                            </div>


                            <div className="stat-card">

                                <div className="stat-icon">
                                    🌙
                                </div>

                                <h3>
                                    Nights Booked:
                                </h3>

                                <strong>
                                    {report.totalNights}
                                </strong>

                            </div>

                        </section>


                        {/* BOOKING DETAILS */}

                        <section className="details-section">

                            <h2>
                                Booking Details
                            </h2>

                            <div className="table-container">

                                <table>

                                    <thead>

                                    <tr>

                                        <th>
                                            Booking ID
                                        </th>

                                        <th>
                                            Guest Name
                                        </th>

                                        <th>
                                            Check-In
                                        </th>

                                        <th>
                                            Check-Out
                                        </th>

                                        <th>
                                            Room Type
                                        </th>

                                        <th>
                                            Guests
                                        </th>

                                        <th>
                                            Total Cost
                                        </th>

                                    </tr>

                                    </thead>


                                    <tbody>

                                    {report.bookings.length === 0 ? (

                                        <tr>

                                            <td
                                                colSpan="7"
                                                className="no-data"
                                            >
                                                No active bookings found
                                                for this date range.
                                            </td>

                                        </tr>

                                    ) : (

                                        report.bookings.map(
                                            (booking, index) => (

                                                <tr
                                                    key={
                                                        booking.bookingId ||
                                                        booking.id ||
                                                        index
                                                    }
                                                >

                                                    <td className="booking-id">
                                                        {booking.bookingId ||
                                                            booking.id}
                                                    </td>

                                                    <td>
                                                        {booking.guestName ||
                                                            booking.fullName}
                                                    </td>

                                                    <td>
                                                        {booking.checkIn}
                                                    </td>

                                                    <td>
                                                        {booking.checkOut}
                                                    </td>

                                                    <td>
                                                        {booking.roomType}
                                                    </td>

                                                    <td>
                                                        {booking.guests}{" "}
                                                        {booking.guests === 1
                                                            ? "Adult"
                                                            : "Adults"}
                                                    </td>

                                                    <td className="cost">
                                                        ₹
                                                        {Number(
                                                            booking.totalCost || 0
                                                        ).toLocaleString()}
                                                    </td>

                                                </tr>

                                            )
                                        )

                                    )}

                                    </tbody>

                                </table>

                            </div>

                        </section>


                        {/* BOTTOM SUMMARY */}

                        <section className="bottom-summary">

                            <div>

                                Total Nights:

                                <strong>
                                    {" "}
                                    {report.totalNights}
                                </strong>

                            </div>


                            <div>

                                Total Revenue:

                                <strong>
                                    {" "}
                                    ₹{Number(
                                    report.totalRevenue
                                ).toLocaleString()}
                                </strong>

                            </div>

                        </section>

                    </>

                )}

            </main>

        </div>
    );
}

export default TotalBookingSummary;