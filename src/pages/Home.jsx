import React from 'react';
import './Home.css'; // Optional: for additional styling
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact'); // Navigate to Contact Us page
  };

  const handleBookDemo = () => {
    // You can update this later if it leads to a different route
    navigate('/contact'); // For now, this also points to Contact
  };
  

  return (
    <>
      <main className="main-content">

        {/* Hero Section */}
<section className="hero-section">
  <h1 style={{ color: 'blue' }}>Empowering Businesses with Modern Tech</h1>
<p style={{ color: 'black' }}>
  From web development to AI solutions — secure, scalable, and future-ready services tailored for your success.
</p>

  <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
</section>

        {/* What We Offer */}
        <section className="services-section">
         <h2 style={{ color: 'blue' }}>What We Offer</h2>
          <ul style={{ color: 'black' }}>
          <li><strong>Web Development:</strong> Custom websites, portals & eCommerce platforms.</li>
          <li><strong>Cloud Solutions:</strong> Scalable infrastructure, cloud storage, and remote access.</li>
          <li><strong>AI & ML:</strong> Predictive analytics, automation & smart decision-making tools.</li>
          <li><strong>Cybersecurity:</strong> Threat protection, compliance, and risk assessments.</li>
        </ul>

        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <h2 style={{ color: 'blue' }}>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-box">
              <h4>99.99% Uptime</h4>
              <p style={{ color: 'black' }}>Our systems never sleep. Always online.</p>
            </div>
            <div className="feature-box">
              <h4>24/7 Support</h4>
              <p style={{ color: 'black' }}>We’re here whenever you need us.</p>
            </div>
            <div className="feature-box">
              <h4>Easy Setup</h4>
              <p style={{ color: 'black' }}>No complicated setups. Just plug & play.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */} 
        <section className="cta-section">
        <h2 style={{ color: 'blue' }}>Ready to Transform Your Business?</h2>
        <p style={{ color: 'black' }}>Start your journey today.</p>
        <button className="cta-button" onClick={handleBookDemo}>Book a Demo</button>
        </section>
      </main>
    </>
  );
};

export default Home;
