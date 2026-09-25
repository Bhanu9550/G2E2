import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    // Get existing messages
    const existingMessages =
      JSON.parse(localStorage.getItem("contactMessages")) || [];

    // Create new message
    const newMessage = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      createdAt: new Date().toISOString(),
    };

    // Store new message
    localStorage.setItem(
      "contactMessages",
      JSON.stringify([...existingMessages, newMessage])
    );

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <span>CONTACT US</span>

          {/* <h2>Drop Us a Line</h2> */}
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          {/* Name */}
          <div className="contact-field">
            <label htmlFor="name">NAME</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="contact-field">
            <label htmlFor="email">EMAIL</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Message */}
          <div className="contact-field">
            <label htmlFor="message">MESSAGE</label>

            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
            />
          </div>

          {/* Submit */}
          <button type="submit" className="contact-submit">
            Send Message
          </button>

          {/* Success */}
          {submitted && (
            <p className="contact-success">
              Your message has been sent successfully.
            </p>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;