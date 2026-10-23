import React, { useEffect, useState } from "react";
import "./admindashboard.css";
import Hero from "./Hero.jsx";
import Herotwo from "./herotwo.jsx";
import Headerdash from "./headerdash.jsx";
import {useNavigate} from "react-router-dom";

function Admindashboard() {
    const navigate=useNavigate();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch("http://localhost:8080/api/dashboard")
            .then((response) => {

                if (!response.ok) {
                    throw new Error("Failed to fetch dashboard data");
                }

                return response.json();
            })
            .then((result) => {

                setData(result);
                setLoading(false);
            })
            .catch((error) => {

                console.error(error);

                setError(
                    "Unable to connect to the server."
                );

                setLoading(false);
            });

    }, []);


    if (loading) {
        return (
            <div className="dashboard-loading">
                Loading Dashboard...
            </div>
        );
    }


    if (error) {
        return (
            <div className="dashboard-error">
                {error}
            </div>
        );
    }


    const roomData = data.roomOccupancy || {};

    const weeklyData = data.weeklyBookings || {};

    const maxWeekly =
        Math.max(
            ...Object.values(weeklyData),
            1
        );


    return (
        <>
            <Headerdash></Headerdash>

               <Herotwo></Herotwo>




            {/* STAT CARDS */}

            <section className="stats-grid">

                <div className="stat-card" onClick={()=> navigate("/totalbookingsummary")}
                     style={{ cursor: "pointer" }}
                >

                    <div className="stat-icon blue">
                        🛏️
                    </div>

                    <div >
                        <h2>
                            {data.totalBookings}
                        </h2>

                        <p>
                            Total Bookings
                        </p>
                    </div>

                </div>


                <div className="stat-card">

                    <div className="stat-icon green">
                        ✓
                    </div>

                    <div>
                        <h2>
                            {data.currentlyOccupied}
                        </h2>

                        <p>
                            Currently Occupied
                        </p>
                    </div>

                </div>
                <div className="stat-card"
                     onClick={() => navigate("/cancelbooking")}
                     style={{ cursor: "pointer" }}
                >

                    <div className="stat-icon red">

                        ✕

                    </div>

                    <div>
                        <h2>
                           0
                        </h2>

                        <p>
                            Cancel Booking
                        </p>
                    </div>

                </div>





                <div className="stat-card">

                    <div className="stat-icon navy">
                        🕐
                    </div>

                    <div>
                        <h2>
                            {data.upcomingCheckIns}
                        </h2>

                        <p>
                            Upcoming Check-Ins
                        </p>
                    </div>

                </div>

            </section>


            {/* CHART SECTION */}

            <section className="charts-section">

                {/* PIE CHART */}

                <div className="chart-box">

                    <h2>
                        Room Occupancy Overview
                    </h2>

                    <div className="pie-area">

                        <div
                            className="pie-chart"
                            style={{
                                background: `
                                conic-gradient(
                                    #2878d0 0% 25%,
                                    #ff821c 25% 43%,
                                    #59ae27 43% 68%,
                                    #6545b8 68% 100%
                                )
                                `
                            }}
                        ></div>


                        <div className="room-legend">

                            <div>
                                <span className="legend blue-bg"></span>
                                Deluxe Room
                                <strong>
                                    {roomData["Deluxe Room"] || 0}
                                </strong>
                            </div>

                            <div>
                                <span className="legend orange-bg"></span>
                                Executive Suite
                                <strong>
                                    {roomData["Executive Suite"] || 0}
                                </strong>
                            </div>

                            <div>
                                <span className="legend green-bg"></span>
                                Family Room
                                <strong>
                                    {roomData["Family Room"] || 0}
                                </strong>
                            </div>


                        </div>

                    </div>

                </div>


                {/* WEEKLY CHART */}

                <div className="chart-box">

                    <h2>
                        Bookings This Week
                    </h2>

                    <div className="bar-chart">

                        {Object.entries(weeklyData).map(
                            ([day, value]) => {

                                const height =
                                    `${(value / maxWeekly) * 180}px`;

                                return (

                                    <div
                                        className="bar-column"
                                        key={day}
                                    >

                                        <div className="bar-value">
                                            {value}
                                        </div>

                                        <div
                                            className="bar"
                                            style={{
                                                height: height
                                            }}
                                        ></div>

                                        <span>
                                            {day}
                                        </span>

                                    </div>
                                );
                            }
                        )}

                    </div>

                </div>

            </section>



        </>
    );
}

export default Admindashboard;