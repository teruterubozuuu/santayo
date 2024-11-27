import "./Contact.css";
import contactCover from "../images/contact-cover.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const { name, email, message } = contactData;

    if (!name || !email || !message) {
      setError("Please input values.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Feedback submitted");
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
        alt="contact cover"
        className="contact-cover"
      ></img>
      <div className="contact-content"></div>
      <div className="contact-container"></div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <label className="Label">Name</label>
          <input
            name="name"
            type="text"
            className="field"
            placeholder="Enter your name"
            required
            value={contactData.name}
            onChange={handleChange}
          ></input>
        </div>

        <div className="input-box">
          <label className="Label">Email Address</label>
          <input
            name="email"
            type="email"
            className="field"
            placeholder="Enter your email address"
            required
            value={contactData.email}
            onChange={handleChange}
          ></input>
        </div>

        <div className="input-box">
          <label className="Label">Your Message</label>
          <textarea
            name="message"
            className="fieldMessage"
            placeholder="Enter your message"
            required
            value={contactData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </>
  );
}

export default Contact;
