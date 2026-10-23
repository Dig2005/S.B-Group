import "./features.css"
import React from "react";

import { FaCalendarCheck, FaUsers, FaCog } from "react-icons/fa";

function FeatureSection() {
    return (
        <section className="features-section">
            <div className="feature-card">
                <div className="icon">
                    <FaCalendarCheck />
                </div>
                <div className="content">
                    <h3>Easy Room Booking</h3>
                    <p>Quickly book your stay </p>
                    <p className="sec">with just a few clicks</p>
                </div>
            </div>

            <div className="feature-card">
                <div className="icon">
                    <FaUsers />
                </div>
                <div className="content">
                    <h3>Customer Management</h3>
                    <p>Keep track of all guest </p>
                    <p className="sec">information and history</p>
                </div>
            </div>

            <div className="feature-card">
                <div className="icon">
                    <FaCog />
                </div>
                <div className="content">
                    <h3>Staff & Admin Control</h3>
                    <p className="sec">Efficiently manage staff</p><p> and operations</p>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
