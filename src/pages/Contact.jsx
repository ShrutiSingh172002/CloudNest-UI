import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Clock, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="contact-page" style={{
      margin: 0,
      border: 'none',
      borderTop: 'none',
      outline: 'none',
    }}>
      <h1 className="contact-heading" style={{ fontWeight: 800, color: 'white', letterSpacing: 1 }}>Contact Us</h1>

      {/* Intro Message */}
      <p className="intro" style={{ color: 'white', fontWeight: 500 }}>
        We'd love to hear from you! Whether you have a question about services, pricing, demos, or anything else — our team is ready to help.
      </p>

      {/* Contact Info */}
      <div className="contact-info">
        <p><Mail size={18} /> <strong>Email:</strong> <a href="mailto:info@ AKConsultancy\n .com">info@AKConsultancy\n .com</a></p>
        <p><Phone size={18} /> <strong>Phone:</strong>  9903210337</p>
        <p><MapPin size={18} /> <strong>Address:</strong> 19/8, Ishwar Ganguly ST, P.S- Kalighat, Kolkata, West Bengal, 700026, INDIA</p>
      </div>

      {/* Call Now Button */}
      <a href="tel:+1 (555) 123-4567" id="call-now">
        <button className="call-now-button">
          <Phone size={20} /> Call Now
        </button>
      </a>

      {/* Business Hours */}
      <div className="business-hours">
        <h2><Clock size={20} /> Business Hours</h2>
        <ul>
          <li>Monday - Friday: 9:00 AM – 6:00 PM</li>
          <li>Saturday: 10:00 AM – 2:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      {/* Support Info */}
      <div className="support-section">
        <h2><HelpCircle size={20} /> Need Assistance?</h2>
        <p>
          Our support team is available to assist you with any technical issues, service inquiries, or general questions. Don't hesitate to reach out — we're here to help!
        </p>
        <p>
          For urgent matters, please use the "Call Now" button above.
        </p>
      </div>

      {/* Functional Contact Form */}
      <div className="contact-form-placeholder" style={{ marginBottom: 0 }}>
        <h2>Write to Us</h2>
        <p>
          Prefer writing to us instead of calling? Fill out our contact form and we'll get back to you within 24 hours.
        </p>
        {submitted ? (
          <div style={{ marginTop: 32, marginBottom: 32, padding: 24, background: 'rgba(56,189,248,0.10)', borderRadius: 12, color: '#38bdf8', fontWeight: 600, fontSize: 20, textAlign: 'center' }}>
            <span role="img" aria-label="check">✅</span> Thank you for contacting us! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
            <div style={{ marginBottom: 16 }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #b6d4fe', fontSize: 16, marginBottom: 8 }}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #b6d4fe', fontSize: 16, marginBottom: 8 }}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #b6d4fe', fontSize: 16, resize: 'vertical' }}
              />
            </div>
            <div style={{ width: '100%' }}>
              <button
                type="submit"
                className="send-message-btn"
                disabled={submitting}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Optional: Social Media Links */}
      {/* <div className="social-links">
        <h2>Connect With Us</h2>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div> */}
    </div>
  );
};

export default ContactUs;
