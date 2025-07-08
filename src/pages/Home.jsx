import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleBookDemo = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate('/contact');
  };

  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <div style={{ 
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      minHeight: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    }}>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 5px rgba(30, 144, 255, 0.5); }
            50% { box-shadow: 0 0 20px rgba(30, 144, 255, 0.8); }
          }
          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
          }
          .feature-card:hover {
            transform: scale(1.05);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2) !important;
          }
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,102,204,0.4) !important;
          }
          .secondary-button:hover {
            background: white !important;
            color: #1565c0 !important;
          }
          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2rem !important;
            }
            .hero-content p {
              font-size: 1rem !important;
            }
            .button-group {
              flex-direction: column !important;
            }
            .grid-container {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      {/* Hero Section with background image */}
      <section style={{
        minHeight: '100vh',
        background: 'url("https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlign: 'center',
        padding: '2rem',
        paddingTop: 0,
        position: 'relative',
        overflow: 'hidden',
        margin: 0,
        borderRadius: 0,
        border: 'none',
        borderTop: 'none',
        outline: 'none',
      }}>
        {/* Floating Animation Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '60px',
          height: '60px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '40px',
          height: '40px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 4s ease-in-out infinite reverse'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '20%',
          width: '50px',
          height: '50px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 5s ease-in-out infinite'
        }}></div>

        <div className="hero-content" style={{
          maxWidth: '800px',
          zIndex: 2,
          animation: 'fadeInUp 1s ease-out'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: 'black',
            background: 'none',
            WebkitBackgroundClip: 'unset',
            backgroundClip: 'unset',
            WebkitTextFillColor: 'unset',
            textShadow: 'none'
          }}>
            Empowering Businesses with Modern Tech
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            marginBottom: '2rem',
            color: 'black',
            lineHeight: '1.6'
          }}>
            From web development to AI solutions — secure, scalable, and future-ready services tailored for your success.
          </p>
          <div className="button-group" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button onClick={handleGetStarted} className="cta-button" style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #0066cc, #0080ff)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,102,204,0.3)',
              animation: 'pulse 2s infinite'
            }}>
              Get Started
            </button>
            <button onClick={handleBookDemo} className="secondary-button" style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              background: 'transparent',
              color: 'black',
              border: '2px solid black',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="animate-services" style={{
        padding: '5rem 2rem',
        background: 'black',
        borderRadius: 0,
        margin: 0,
        boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
        transform: isVisible['animate-services'] ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible['animate-services'] ? 1 : 0,
        transition: 'all 0.8s ease-out',
        marginTop: 0,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'black',
            textAlign: 'center',
            marginBottom: '3rem',
            fontWeight: 'bold'
          }}>
            What We Offer
          </h2>
          <div className="grid-container" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                icon: '🌐',
                title: 'Web Development',
                description: 'Custom websites, portals & eCommerce platforms with modern frameworks and responsive design.',
                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              },
              {
                icon: '☁️',
                title: 'Cloud Solutions',
                description: 'Scalable infrastructure, cloud storage, and remote access solutions for modern businesses.',
                gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
              },
              {
                icon: '🤖',
                title: 'AI & ML',
                description: 'Predictive analytics, automation & smart decision-making tools powered by machine learning.',
                gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
              },
              {
                icon: '🔒',
                title: 'Cybersecurity',
                description: 'Comprehensive threat protection, compliance, and risk assessments for your digital assets.',
                gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
              }
            ].map((service, index) => (
              <div key={index} className="service-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid rgba(21,101,192,0.1)',
                animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: service.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '1.5rem',
                  animation: 'glow 2s ease-in-out infinite'
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#1565c0',
                  marginBottom: '1rem',
                  fontWeight: 'bold'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {service.description}
                </p>
                <button onClick={handleLearnMore} style={{
                  background: service.gradient,
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="animate-features" style={{
        padding: '5rem 2rem',
        background: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80") center/cover no-repeat',
        color: 'black',
        borderRadius: 0,
        margin: 0,
        boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
        transform: isVisible['animate-features'] ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible['animate-features'] ? 1 : 0,
        transition: 'all 0.8s ease-out'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
            marginBottom: '3rem',
            fontWeight: 'bold',
            color: 'black'
          }}>
            Why Choose Us?
          </h2>
          <div className="grid-container" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '⏰',
                title: '99.99% Uptime',
                description: 'Our systems never sleep. Always online, always reliable.',
                color: 'black'
              },
              {
                icon: '🎧',
                title: '24/7 Support',
                description: 'We\'re here whenever you need us. Round-the-clock assistance.',
                color: 'black'
              },
              {
                icon: '⬆',
                title: 'Easy Setup',
                description: 'No complicated setups. Just plug & play solutions.',
                color: 'black'
              },
              {
                icon: '⚙',
                title: 'Custom Solutions',
                description: 'Tailored specifically for your business needs and goals.',
                color: 'black'
              },
              {
                icon: '▤',
                title: 'Data Analytics',
                description: 'Comprehensive insights to drive your business forward.',
                color: 'black'
              },
              {
                icon: '🔒',
                title: 'Enterprise Security',
                description: 'Bank-grade security to protect your valuable data.',
                color: 'black'
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card" style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '2rem',
                borderRadius: '20px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
                animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`,
                color: 'black'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: 'black'
                }}>
                  {feature.icon}
                </div>
                <h4 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: 'black'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  color: '#222',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="animate-stats" style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        borderRadius: 0,
        margin: 0,
        boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
        transform: isVisible['animate-stats'] ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible['animate-stats'] ? 1 : 0,
        transition: 'all 0.8s ease-out'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
            marginBottom: '3rem',
            fontWeight: 'bold',
            color: '#2563eb'
          }}>
            Our Track Record
          </h2>
          <div className="grid-container" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} style={{
                padding: '2rem',
                animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`
              }}>
                <div style={{
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 'bold',
                  color: '#FFD700',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  color: 'white',
                  fontWeight: 600
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="animate-cta" style={{
        padding: '5rem 2rem',
        background: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat',
        color: 'black',
        textAlign: 'center',
        borderRadius: 0,
        margin: 0,
        boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
        transform: isVisible['animate-cta'] ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible['animate-cta'] ? 1 : 0,
        transition: 'all 0.8s ease-out'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1.5rem',
            fontWeight: 'bold',
            color: 'black'
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            marginBottom: '2rem',
            color: 'black',
            lineHeight: '1.6'
          }}>
            Start your journey today and discover how we can help you achieve your goals with cutting-edge technology solutions.
          </p>
          <div className="button-group" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button onClick={handleBookDemo} className="cta-button" style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              color: 'black',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255,215,0,0.3)'
            }}>
              Book a Demo
            </button>
            <button onClick={handleGetQuote} className="secondary-button" style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              background: 'transparent',
              color: 'black',
              border: '2px solid black',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Get Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;