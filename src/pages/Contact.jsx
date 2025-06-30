import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Contact Us</h1>

      {/* Intro Message */}
      <p className="intro">
        We’d love to hear from you! Whether you have a question about services, pricing, demos, or anything else — our team is ready to help.
      </p>

      {/* Contact Info */}
      <div className="contact-info">
        <p><Mail size={18} /> Email: <a href="mailto:info@cloudnest.com">info@cloudnest.com</a></p>
        <p><Phone size={18} /> Phone: +1 (555) 123-4567</p>
        <p><MapPin size={18} /> Address: CloudNest HQ, Sector 5, Noida, India</p>

        {/* Call Now Button */}
        <a href="tel:+1 (555) 123-4567" id="call-now">
          <button className="call-now-button">
            <Phone size={20} /> Call Now

          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
