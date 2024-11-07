import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact us!</h1>
        </div>
      </div>

      <form className="contact-form">
        <div className="input-box">
          <label className="nameLabel">Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            required
          ></input>
        </div>

        <div className="input-box">
          <label className="emailLabel">Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email address"
            required
          ></input>
        </div>

        <div className="input-box">
          <label className="emailLabel">Your Message</label>
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
