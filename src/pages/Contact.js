import "./Contact.css";
import contactCover from "../images/contact-cover.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "test",
    email: "test@gmail.com",
    message: "test",
  });

  const nameRef = useRef();

  const navigate = useNavigate();

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("Please input values.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Feedback submitted");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError(data.msg || "Failed to submit");
      }
    } catch (err) {
      setError("An error occured, try again.");
    }
  };

  return (
    <>
      <img
        src={contactCover}
        alt="contact cover photo"
        className="contact-cover"
      ></img>
      <div className="contact-content"></div>
      <div className="contact-container"></div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <label className="Label">Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          ></input>
        </div>

        <div className="input-box">
          <label className="Label">Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email address"
            required
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>

        <div className="input-box">
          <label className="Label">Your Message</label>
          <textarea
            name=""
            id=""
            className="fieldMessage"
            placeholder="Enter your message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </>
  );
}

export default Contact;
