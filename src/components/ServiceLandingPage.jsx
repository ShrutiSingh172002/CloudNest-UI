import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, CheckCircle, Clock, Shield, Users, Briefcase, Cloud, Globe, Wrench, Rocket, Zap, ShieldCheck, Atom, Laptop, ShoppingCart, Smartphone, Link2, Bot, Eye, BarChart2, FileText, Settings, Brain, Bug, Flame, Search, Lock, ClipboardList, AlarmCheck, TrendingUp, Megaphone, PenTool, Target, Mail as LucideMail, PieChart, Apple, Paintbrush, AppWindow, TestTube2 } from 'lucide-react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const ServiceLandingPage = (props) => {
  const location = useLocation();
  const params = useParams();
  const service = location.state?.service || props.service || null;
  const category = location.state?.category || props.category || params.category || null;
  const onBack = props.onBack;
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  // Map icon name strings to Lucide icon components
  const iconMap = {
    Cloud, Globe, Wrench, Rocket, Zap, ShieldCheck, Atom, Laptop, ShoppingCart, Smartphone, Link2, Bot, Eye, BarChart2, FileText, Settings, Brain, Bug, Flame, Search, Lock, ClipboardList, AlarmCheck, TrendingUp, Megaphone, PenTool, Target, Mail: LucideMail, PieChart, Apple, Paintbrush, AppWindow, TestTube2
  };

  // Image loading state
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const mockCategory = category || 'Web Development';
  
  const basicPlans = {
    'Cloud Services': 599,
    'Web Development': 499,
    'AI & Machine Learning': 799,
    'Cybersecurity': 549,
    'Digital Marketing': 349,
    'Mobile Development': 799
  };

  const price = basicPlans[mockCategory] || 499;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    navigate('/services');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setShowContactForm(false);
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 2000);
  };

  // Add animation styles for icon
  const iconAnimationStyles = {
    animation: 'floatIcon 3s ease-in-out infinite, glowIcon 2.5s ease-in-out infinite',
    display: 'inline-block',
  };

  // Add keyframes for floating and glowing
  // This will be injected into the page's <style> tag
  const iconKeyframes = `
    @keyframes floatIcon {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-18px); }
    }
    @keyframes glowIcon {
      0%, 100% { box-shadow: 0 8px 32px rgba(21,101,192,0.10), 0 0 0 0 #90caf9; }
      50% { box-shadow: 0 16px 48px rgba(21,101,192,0.18), 0 0 24px 8px #90caf9; }
    }
  `;

  // Aggressive CSS to force full width and remove all horizontal constraints
  const aggressiveFullWidthCSS = `
    html, body, #root, .App {
      width: 100vw !important;
      min-width: 100vw !important;
      max-width: 100vw !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow-x: hidden !important;
    }
    .ServiceLandingPageFullWidth *,
    .ServiceLandingPageFullWidth *:before,
    .ServiceLandingPageFullWidth *:after {
      box-sizing: border-box !important;
    }
    .ServiceLandingPageFullWidth,
    .ServiceLandingPageFullWidth > *,
    .ServiceLandingPageFullWidth > * > * {
      width: 100vw !important;
      min-width: 100vw !important;
      max-width: 100vw !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      box-sizing: border-box !important;
    }
  `;

  let mainIcon = null;
  const IconComponent = service && service.icon && iconMap[service.icon];
  if (IconComponent) {
    mainIcon = <IconComponent size={160} color="#1565c0" strokeWidth={2.5} style={{ background: '#e3f6fd', borderRadius: '50%', padding: 48, boxShadow: '0 12px 48px rgba(21,101,192,0.13)' }} />;
  } else {
    mainIcon = <Briefcase size={160} color="#1565c0" strokeWidth={2.5} style={{ background: '#e3f6fd', borderRadius: '50%', padding: 48, boxShadow: '0 12px 48px rgba(21,101,192,0.13)' }} />;
  }
  const mockService = {
    icon: mainIcon,
    name: service?.name || 'Professional Web Development',
    desc: service?.desc || 'Complete web development solutions tailored to your business needs. From responsive design to full-stack applications with modern technologies and best practices.'
  };

  return (
    <div className="z-50 ServiceLandingPageFullWidth" style={{ background: 'linear-gradient(135deg, rgba(10,24,61,0.92) 0%, rgba(21,34,56,0.88) 60%, rgba(21,101,192,0.85) 100%)', minHeight: '100vh', width: '100vw', overflowY: 'auto', boxSizing: 'border-box', backdropFilter: 'blur(2px)', color: 'white' }}>
      <style>{aggressiveFullWidthCSS}</style>
      <style>{iconKeyframes}</style>
      {/* Header */}
      <div className="shadow-sm border-b sticky top-0 z-10" style={{ background: 'black' }}>
        <div className="w-full py-4 px-0 flex justify-between items-center">
          <button 
            onClick={handleBack} 
            className="flex items-center text-white hover:text-blue-300 transition-colors ml-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2 text-white" />
            Back to Services
          </button>
          <span className="flex items-center gap-2 mr-4 text-white">
            <Phone className="w-4 h-4 text-white" />
            9903210337
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* Hero Section */}
        <div className="w-full pt-12 pb-16 text-center relative" style={{ zIndex: 2, padding: 32 }}>
          {/* 3D Image at the very top, centered and enlarged */}
          <div className="flex justify-center items-center mb-4 min-h-[220px]" style={{ position: 'relative', zIndex: 3 }}>
            <span style={iconAnimationStyles}>{mockService.icon}</span>
          </div>
          {/* Decorative cloud behind image, now below the image */}
          <div className="flex justify-center items-center mb-2" style={{ position: 'relative', zIndex: 2 }}>
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="60" cy="40" rx="60" ry="20" fill="#b3e5fc" fillOpacity="0.5" />
              <ellipse cx="30" cy="30" rx="20" ry="10" fill="#b3e5fc" fillOpacity="0.7" />
              <ellipse cx="90" cy="30" rx="20" ry="10" fill="#b3e5fc" fillOpacity="0.7" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4 relative" style={{ zIndex: 2 }}>{mockService.name}</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto relative text-white" style={{ zIndex: 2 }}>{mockService.desc}</p>
          <span className="inline-block bg-blue-100 text-black px-4 py-2 rounded-full text-sm font-medium relative" style={{ zIndex: 2 }}>
            {mockCategory}
          </span>
        </div>

        {/* Features and Pricing Grid */}
        <div className="w-full py-8" style={{ padding: 32 }}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* What's Included */}
            <div className="shadow-lg rounded-xl" style={{ background: 'rgba(21,34,56,0.72)', border: '1.5px solid rgba(21,101,192,0.18)', backdropFilter: 'blur(6px)', color: 'white', width: '100%', margin: 0, padding: 32, borderRadius: 16 }}>
              <h2 className="text-2xl font-semibold text-white mb-4">What's Included</h2>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Professional consultation and detailed analysis of your requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Custom setup and configuration tailored to your business needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>30-day premium support with direct access to our expert team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Comprehensive documentation and training materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Quality assurance testing and performance optimization</span>
                </li>
              </ul>
            </div>

            {/* Pricing */}
            <div className="shadow-lg rounded-xl" style={{ background: 'rgba(21,34,56,0.72)', border: '1.5px solid rgba(21,101,192,0.18)', backdropFilter: 'blur(6px)', color: 'white', width: '100%', margin: 0, padding: 32, borderRadius: 16 }}>
              <h2 className="text-2xl font-semibold text-white mb-4">Pricing Details</h2>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">${price}</span>
                <span className="text-lg text-white ml-2">one-time payment</span>
              </div>
              <p className="text-white mb-4">
                All-inclusive package with no hidden fees. Includes complete setup, configuration, and ongoing support to ensure your success.
              </p>
              <div style={{ background: 'white', borderRadius: 12, padding: 20, marginTop: 16, marginBottom: 8 }}>
                <h3 style={{ color: '#38bdf8', fontWeight: 600, marginBottom: 8, fontSize: '1.15rem' }}>Value Guarantee</h3>
                <p style={{ color: '#38bdf8', fontSize: '1rem', margin: 0 }}>
                  We stand behind our work with a satisfaction guarantee. If you're not completely satisfied within the first 30 days, we'll work with you to make it right.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl shadow text-center" style={{ background: 'rgba(21,34,56,0.68)', border: '1.5px solid rgba(21,101,192,0.13)', backdropFilter: 'blur(6px)', color: 'white', width: '100%', margin: 0, padding: 32, borderRadius: 16 }}>
              <Clock className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Quick Delivery</h3>
              <p className="text-white text-sm">Project completion within 2-4 weeks depending on complexity</p>
            </div>
            <div className="rounded-xl shadow text-center" style={{ background: 'rgba(21,34,56,0.68)', border: '1.5px solid rgba(21,101,192,0.13)', backdropFilter: 'blur(6px)', color: 'white', width: '100%', margin: 0, padding: 32, borderRadius: 16 }}>
              <Shield className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Quality Assured</h3>
              <p className="text-white text-sm">Rigorous testing and quality control processes for reliable results</p>
            </div>
            <div className="rounded-xl shadow text-center" style={{ background: 'rgba(21,34,56,0.68)', border: '1.5px solid rgba(21,101,192,0.13)', backdropFilter: 'blur(6px)', color: 'white', width: '100%', margin: 0, padding: 32, borderRadius: 16 }}>
              <Users className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-white text-sm">Experienced professionals dedicated to your project's success</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full py-8 mb-8" style={{ padding: 32 }}>
          <div className="rounded-xl shadow-lg" style={{ background: 'rgba(21,34,56,0.72)', border: '1.5px solid rgba(21,101,192,0.18)', backdropFilter: 'blur(6px)', color: 'white', width: '100%', margin: 0, padding: 32, borderRadius: 16 }}>
            <h2 className="text-2xl font-semibold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-white mb-6">
              Contact us today to discuss your project requirements and learn how we can help bring your vision to life. Our team is ready to provide you with a detailed consultation and customized solution.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center text-white">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <span> 9903210337</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <span>info@AKConsultancy.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                <span>19/8, Ishwar Ganguly
 ST, P.S- Kalighat
 Kolkata
 West Bengal ,
 700026
 IN</span>
              </div>
            </div>
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="rounded-2xl shadow-2xl" style={{
            background: 'rgba(21,34,56,0.97)',
            border: '1.5px solid rgba(21,101,192,0.22)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            maxWidth: 380,
            width: '100%',
            margin: '0 16px',
            padding: '28px 20px',
            borderRadius: 18,
            boxShadow: '0 8px 40px 0 rgba(21,101,192,0.18), 0 2px 12px 0 rgba(0,0,0,0.10)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {formSubmitted ? (
              <div className="text-center py-8">
                <h3 className="font-bold text-xl mb-4 text-white">Thank you for contacting us!</h3>
                <p className="text-white">We have received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <h3 className="font-bold text-xl mb-4 text-white">Contact Us</h3>
                <input 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="Your Name" 
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-transparent placeholder-white" 
                  required
                />
                <input 
                  name="email" 
                  type="email"
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder="Your Email" 
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-transparent placeholder-white" 
                  required
                />
                <input 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  placeholder="Your Phone (optional)" 
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-transparent placeholder-white" 
                />
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Your Message" 
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-transparent placeholder-white" 
                  rows={4}
                  required
                />
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    style={{ minWidth: 120, maxWidth: 160, width: '60%', padding: '10px 0', margin: '0 auto', fontSize: 16, fontWeight: 600, display: 'block' }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceLandingPage;