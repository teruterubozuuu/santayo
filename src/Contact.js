import "./Contact.css";
import contactCover from "./images/contact-cover.png"

function Contact() {
  return (
    <>
      <img src={contactCover} alt="contact cover photo" className="contact-cover"></img>
        <div className="contact-content">

        </div>
      <div className="contact-container">
      </div>

      <form className="contact-form">
        <div className="input-box">
          <label className="Label">Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            required
          ></input>
        </div>

        <div className="input-box">
          <label className="Label">Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email address"
            required
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
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </>
  );
}

export default Contact;
