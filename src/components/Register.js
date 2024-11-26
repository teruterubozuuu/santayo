import React from "react";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // Use this to redirect after success

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { username, email, password } = formData;

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      // Send data to backend
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Success! Redirect or show success message
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login"); // Redirect to login page after success
        }, 2000);
      } else {
        setError(data.msg || "Registration failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="parent-container-register">
        <form onSubmit={handleSubmit} className="register-form-container">
          <div className="closeRegister-cont">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <p className="closeRegisterForm">x</p>
            </NavLink>
          </div>
          <h1>Register</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
          <div className="register-username-container">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            ></input>
          </div>
          <div className="register-email-container">
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="register-password-container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            ></input>
          </div>
          <button className="registerSubmit" type="submit">
            Sign up
          </button>
          <p className="loginLink">
            Already have an account?
            <span>
              {" "}
              <NavLink to="/login" className="login-nav-link">
                Login now
              </NavLink>
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
