import React, { useState } from "react";
import Hero from "./Hero.jsx";
import "./adminpanel.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header.jsx";

function Adminpanel() {

    const [rememberMe, setRememberMe] = useState(false);

    const [adminId, setAdminId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            adminId: adminId,
            email: email,
            password: password
        };

        try {

            const response = await fetch(
                "http://localhost:8080/api/admin/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(loginData)
                }
            );

            const result = await response.text();

            if (response.ok && result === "Login successful") {

                // Save login status
                if (rememberMe) {
                    localStorage.setItem(
                        "adminLoggedIn",
                        "true"
                    );
                } else {
                    sessionStorage.setItem(
                        "adminLoggedIn",
                        "true"
                    );
                }

                alert("Login successful!");

                // Redirect after successful login
                navigate("/admindashboard");

            } else {

                alert(result);

            }

        } catch (error) {

            console.error("Login error:", error);

            alert(
                "Unable to connect to server. " +
                "Please make sure Spring Boot is running."
            );
        }
    };

    return (
        <>
            <Header></Header>
            <Hero />

            <div className="admin-page">

                <div className="login-card">

                    <div className="login-header">
                        <h2>Admin Login</h2>
                    </div>

                    <form onSubmit={handleLogin}>

                        {/* Admin ID */}
                        <div className="input-group">

                            <label htmlFor="adminId">
                                Admin ID
                            </label>

                            <div className="input-wrapper">

                                <span className="input-icon">
                                    🔗
                                </span>

                                <input
                                    type="text"
                                    id="adminId"
                                    placeholder="Enter your unique admin ID"
                                    value={adminId}
                                    onChange={(e) =>
                                        setAdminId(e.target.value)
                                    }
                                    required
                                />

                            </div>

                        </div>

                        {/* Email */}
                        <div className="input-group">

                            <label htmlFor="email">
                                Email Address
                            </label>

                            <div className="input-wrapper">

                                <span className="input-icon">
                                    ✉
                                </span>

                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                />

                            </div>

                        </div>

                        {/* Password */}
                        <div className="input-group">

                            <label htmlFor="password">
                                Password
                            </label>

                            <div className="input-wrapper">

                                <span className="input-icon">
                                    🔒
                                </span>

                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />

                            </div>

                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="login-btn"
                        >
                            Login
                        </button>

                        {/* Bottom Options */}
                        <div className="login-options">



                            <label className="remember">

                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) =>
                                        setRememberMe(
                                            e.target.checked
                                        )
                                    }
                                />

                                <span>
                                    Remember Me
                                </span>

                            </label>

                        </div>

                    </form>

                    <div className="security-message">
                        Only authorized personnel can access this portal.
                    </div>

                </div>

            </div>
        </>
    );
}

export default Adminpanel;