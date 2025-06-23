import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-content">
        <h1>Contact</h1>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;