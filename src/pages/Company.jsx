import React, { useState, useEffect } from 'react';
import './Company.css';

// Add a simple cloud SVG icon for use in lists
const CloudIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }}>
    <ellipse cx="10" cy="13" rx="7" ry="5" fill="#b3e5fc" />
    <ellipse cx="6" cy="11" rx="3" ry="2" fill="#b3e5fc" />
    <ellipse cx="14" cy="11" rx="3" ry="2" fill="#b3e5fc" />
  </svg>
);

// Animation keyframes for testimonials
const testimonialAnim = `
  @keyframes fadeInUpTestimonial {
    0% {
      opacity: 0;
      transform: translateY(60px) scale(0.92);
      box-shadow: 0 2px 12px 0 rgba(33,150,243,0.02);
    }
    60% {
      opacity: 1;
      transform: translateY(-8px) scale(1.04);
      box-shadow: 0 8px 32px 0 rgba(33,150,243,0.18);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
      box-shadow: 0 4px 24px 0 rgba(33,150,243,0.10);
    }
  }
  .testimonial-anim:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 12px 36px 0 #2563eb55, 0 2px 12px 0 rgba(33,150,243,0.18);
    transition: all 0.3s cubic-bezier(.4,2,.6,1);
  }
  .testimonial-anim {
    transition: all 0.3s cubic-bezier(.4,2,.6,1);
  }
`;

const AboutUs = () => {
  // Testimonial data
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'CTO, HealthTech Solutions',
      quote: '“AK Consultancy transformed our cloud infrastructure. Their team is responsive, knowledgeable, and truly cares about our success.”',
    },
    {
      name: 'Rahul Verma',
      role: 'Founder, EduNext',
      quote: '“Their AI solutions gave us a competitive edge. We saw results within weeks!”',
    },
    {
      name: 'Sonal Mehta',
      role: 'COO, RetailX',
      quote: '“Professional, innovative, and always on time. Highly recommended for any business going digital.”',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const testimonialSliderAnim = `
    .testimonial-slider-card {
      opacity: 0;
      transform: translateY(40px) scale(0.96);
      transition: all 0.7s cubic-bezier(.4,2,.6,1);
      position: absolute;
      left: 0; right: 0; top: 0; bottom: 0;
      margin: auto;
      z-index: 1;
      pointer-events: none;
    }
    .testimonial-slider-card.active {
      opacity: 1;
      transform: translateY(0) scale(1);
      z-index: 2;
      pointer-events: auto;
    }
    .testimonial-slider-arrows {
      display: flex;
      justify-content: center;
      gap: 32px;
      margin-top: 24px;
    }
    .testimonial-slider-arrow {
      background: rgba(37,99,235,0.15);
      border: none;
      color: #2563eb;
      font-size: 2rem;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s;
    }
    .testimonial-slider-arrow:hover {
      background: #2563eb;
      color: white;
    }
    .testimonial-slider-wrapper {
      position: relative;
      min-height: 220px;
      height: 260px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      position: 'relative',
      padding: 0,
      textAlign: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      border: 'none',
      borderTop: 'none',
      outline: 'none',
    }}>
      {/* Main content card */}
      <div style={{
        width: '100%',
        maxWidth: 900,
        margin: '60px auto',
        padding: '0 5vw',
        boxSizing: 'border-box',
      }}>
        <div style={{
          borderRadius: 32,
          background: 'rgba(30,41,59,0.7)',
          boxShadow: '0 8px 32px 0 rgba(33,150,243,0.18)',
          backdropFilter: 'blur(8px)',
          padding: '40px 24px',
          marginBottom: 40,
        }}>
          <h1 className="main-heading" style={{ color: '#2563eb', fontWeight: 800, marginBottom: 32 }}>About  AK Consultancy
          </h1>
        </div>

        {/* Who We Are */}
        <div style={{ borderRadius: 24, background: 'rgba(30,41,59,0.6)', boxShadow: '0 4px 24px 0 rgba(33,150,243,0.10)', backdropFilter: 'blur(6px)', padding: '32px 20px', marginBottom: 32 }}>
          <h2 className="section-heading" style={{ color: '#2563eb', fontWeight: 700, marginBottom: 16 }}>Who We Are</h2>
          <p style={{ color: 'white', marginBottom: 0 }}>
            AK Consultancy is a technology-driven company focused on delivering cutting-edge solutions in Web Applications, Cloud Services, and AI/ML technologies. We empower businesses to scale efficiently, stay secure, and innovate faster with our reliable, cloud-powered systems.
          </p>
        </div>
        <div style={{ height: 2, background: 'rgba(37,99,235,0.12)', borderRadius: 1, margin: '0 auto 32px auto', maxWidth: 400 }}></div>

        {/* Our Mission */}
        <div style={{ borderRadius: 24, background: 'rgba(30,41,59,0.6)', boxShadow: '0 4px 24px 0 rgba(33,150,243,0.10)', backdropFilter: 'blur(6px)', padding: '32px 20px', marginBottom: 32 }}>
          <h2 className="section-heading" style={{ color: '#2563eb', fontWeight: 700, marginBottom: 16 }}>Our Mission</h2>
          <p style={{ color: 'white', marginBottom: 0 }}>
            To simplify technology adoption for businesses of all sizes by providing scalable, secure, and future-ready digital solutions.
          </p>
        </div>
        <div style={{ height: 2, background: 'rgba(37,99,235,0.12)', borderRadius: 1, margin: '0 auto 32px auto', maxWidth: 400 }}></div>

        {/* Our Vision */}
        <div style={{ borderRadius: 24, background: 'rgba(30,41,59,0.6)', boxShadow: '0 4px 24px 0 rgba(33,150,243,0.10)', backdropFilter: 'blur(6px)', padding: '32px 20px', marginBottom: 32 }}>
          <h2 className="section-heading" style={{ color: '#2563eb', fontWeight: 700, marginBottom: 16 }}>Our Vision</h2>
          <p style={{ color: 'white', marginBottom: 0 }}>
            We envision a world where every business, big or small, can leverage the full power of the cloud and AI to achieve its highest potential.
          </p>
        </div>
        <div style={{ height: 2, background: 'rgba(37,99,235,0.12)', borderRadius: 1, margin: '0 auto 32px auto', maxWidth: 400 }}></div>

        {/* Our Values */}
        <div style={{ borderRadius: 24, background: 'rgba(30,41,59,0.6)', boxShadow: '0 4px 24px 0 rgba(33,150,243,0.10)', backdropFilter: 'blur(6px)', padding: '32px 20px', marginBottom: 32 }}>
          <h2 className="section-heading" style={{ color: '#2563eb', fontWeight: 700, marginBottom: 16 }}>Our Core Values</h2>
          <ul style={{ color: 'white', marginBottom: 24, textAlign: 'left', listStyle: 'none', padding: 0, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />Innovation: We constantly push the boundaries of technology to bring new ideas to life.</li>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />Integrity: We operate with transparency, trust, and accountability.</li>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />Customer-Centricity: Our solutions are built around your goals and challenges.</li>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />Excellence: We strive for quality in every line of code and every client interaction.</li>
          </ul>
        </div>
        <div style={{ height: 2, background: 'rgba(37,99,235,0.12)', borderRadius: 1, margin: '0 auto 32px auto', maxWidth: 400 }}></div>

        {/* What We Offer */}
        <div style={{ borderRadius: 24, background: 'rgba(30,41,59,0.6)', boxShadow: '0 4px 24px 0 rgba(33,150,243,0.10)', backdropFilter: 'blur(6px)', padding: '32px 20px', marginBottom: 32 }}>
          <h2 className="section-heading" style={{ color: '#2563eb', fontWeight: 700, marginBottom: 16 }}>What We Offer</h2>
          <ul style={{ color: 'white', marginBottom: 24, textAlign: 'left', listStyle: 'none', padding: 0, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            <li style={{ marginBottom: 12, paddingLeft: 32 }}><CloudIcon />Custom Web Application Development</li>
            <li style={{ marginBottom: 12, paddingLeft: 32 }}><CloudIcon />Scalable and Secure Cloud Infrastructure</li>
            <li style={{ marginBottom: 12, paddingLeft: 32 }}><CloudIcon />AI/ML Integration and Data Analytics</li>
            <li style={{ marginBottom: 12, paddingLeft: 32 }}><CloudIcon />24/7 Technical Support and Consultation</li>
          </ul>
        </div>
        <div style={{ height: 2, background: 'rgba(37,99,235,0.12)', borderRadius: 1, margin: '0 auto 32px auto', maxWidth: 400 }}></div>

        {/* Why Choose Us */}
        <div style={{ borderRadius: 24, background: 'rgba(30,41,59,0.6)', boxShadow: '0 4px 24px 0 rgba(33,150,243,0.10)', backdropFilter: 'blur(6px)', padding: '32px 20px', marginBottom: 32 }}>
          <h2 className="section-heading" style={{ color: '#2563eb', fontWeight: 700, marginBottom: 16 }}>Why Choose Us</h2>
          <ul style={{ color: 'white', marginBottom: 24, textAlign: 'left', listStyle: 'none', padding: 0, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />99.99% Uptime Guarantee</li>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />Agile & Client-Centric Development Approach</li>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />Team of Certified Experts</li>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />Dedicated Support and Transparent Communication</li>
          </ul>
        </div>
        <div style={{ height: 2, background: 'rgba(37,99,235,0.12)', borderRadius: 1, margin: '0 auto 32px auto', maxWidth: 400 }}></div>

        {/* Our Story */}
        <div style={{ borderRadius: 24, background: 'rgba(30,41,59,0.6)', boxShadow: '0 4px 24px 0 rgba(33,150,243,0.10)', backdropFilter: 'blur(6px)', padding: '32px 20px', marginBottom: 32 }}>
          <h2 className="section-heading" style={{ color: '#2563eb', fontWeight: 700, marginBottom: 16 }}>Our Story</h2>
          <p style={{ color: 'white', marginBottom: 0 }}>
            Founded in 2024 by a group of passionate technologists,  AK Consultancy
            was built on the belief that cloud and AI should be accessible, affordable, and impactful for all businesses. With that vision, we've helped companies across industries achieve digital excellence.
          </p>
        </div>
        <div style={{ height: 2, background: 'rgba(37,99,235,0.12)', borderRadius: 1, margin: '0 auto 32px auto', maxWidth: 400 }}></div>

        {/* Industries We Serve */}
        <div style={{ borderRadius: 24, background: 'rgba(30,41,59,0.6)', boxShadow: '0 4px 24px 0 rgba(33,150,243,0.10)', backdropFilter: 'blur(6px)', padding: '32px 20px', marginBottom: 32 }}>
          <h2 className="section-heading" style={{ color: '#2563eb', fontWeight: 700, marginBottom: 16 }}>Industries We Serve</h2>
          <ul style={{ color: 'white', marginBottom: 24, textAlign: 'left', listStyle: 'none', padding: 0, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />Healthcare & Life Sciences</li>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />E-Commerce & Retail</li>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />Finance & Insurance</li>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />Manufacturing & Logistics</li>
            <li style={{ marginBottom: 12, paddingLeft: 32, textAlign: 'left' }}><CloudIcon />EdTech & Online Learning</li>
          </ul>
        </div>
        <div style={{ height: 2, background: 'rgba(37,99,235,0.12)', borderRadius: 1, margin: '0 auto 32px auto', maxWidth: 400 }}></div>

        {/* Leadership (Optional Placeholder) */}
        <div style={{ borderRadius: 24, background: 'rgba(30,41,59,0.6)', boxShadow: '0 4px 24px 0 rgba(33,150,243,0.10)', backdropFilter: 'blur(6px)', padding: '32px 20px', marginBottom: 32 }}>
          <h2 className="section-heading" style={{ color: '#2563eb', fontWeight: 700, marginBottom: 16 }}>Our Leadership</h2>
          <p style={{ color: 'white', marginBottom: 0 }}>
          AK Consultancy
          is led by a team of visionaries and industry experts with decades of experience in software engineering, cloud computing, and AI. Their dedication drives our innovation and ensures client success.
          </p>
        </div>
        <div style={{ height: 2, background: 'rgba(37,99,235,0.12)', borderRadius: 1, margin: '0 auto 32px auto', maxWidth: 400 }}></div>

        {/* Future Goals */}
        <div style={{ borderRadius: 24, background: 'rgba(30,41,59,0.6)', boxShadow: '0 4px 24px 0 rgba(33,150,243,0.10)', backdropFilter: 'blur(6px)', padding: '32px 20px', marginBottom: 32 }}>
          <h2 className="section-heading" style={{ color: '#2563eb', fontWeight: 700, marginBottom: 16 }}>Looking Ahead</h2>
          <p style={{ color: 'white', marginBottom: 0 }}>
            As we continue to grow, our goal is to become a global leader in cloud and AI transformation. We are investing in talent, research, and community engagement to build a smarter, more connected future for everyone.
          </p>
        </div>
        <div style={{ height: 2, background: 'rgba(37,99,235,0.12)', borderRadius: 1, margin: '0 auto 32px auto', maxWidth: 400 }}></div>

        {/* Testimonials Section */}
        <div style={{ borderRadius: 24, background: 'rgba(30,41,59,0.7)', boxShadow: '0 4px 24px 0 rgba(33,150,243,0.18)', backdropFilter: 'blur(8px)', padding: '40px 24px', margin: '48px auto 0 auto', maxWidth: 900 }}>
          <h2 style={{ color: '#2563eb', fontWeight: 800, marginBottom: 32 }}>Testimonials</h2>
          <div className="testimonial-slider-wrapper">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className={`testimonial-slider-card${idx === currentTestimonial ? ' active' : ''}`}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: 18,
                  boxShadow: '0 2px 12px 0 rgba(33,150,243,0.10)',
                  padding: 24,
                  minWidth: 260,
                  maxWidth: 320,
                  color: 'white',
                  textAlign: 'left',
                  backdropFilter: 'blur(4px)',
                  margin: '0 auto',
                  height: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ fontWeight: 700, color: '#2563eb', marginBottom: 8 }}>{t.name}</div>
                <div style={{ fontSize: 14, color: '#93c5fd', marginBottom: 12 }}>{t.role}</div>
                <div style={{ fontStyle: 'italic', color: 'white' }}>{t.quote}</div>
              </div>
            ))}
          </div>
          <div className="testimonial-slider-arrows">
            <button className="testimonial-slider-arrow" onClick={handlePrev} aria-label="Previous testimonial">&#8592;</button>
            <button className="testimonial-slider-arrow" onClick={handleNext} aria-label="Next testimonial">&#8594;</button>
          </div>
        </div>
        <style>{testimonialSliderAnim}</style>
      </div>
    </div>
  );
};

export default AboutUs;
