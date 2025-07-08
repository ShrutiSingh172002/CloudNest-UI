// src/components/ServicesDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Cloud, Globe, Wrench, Rocket, Zap, ShieldCheck, Atom, Laptop, ShoppingCart, Smartphone, Link2, Bot, Eye, BarChart2, FileText, Settings, Brain, Bug, Flame, Search, Lock, ClipboardList, AlarmCheck, TrendingUp, Megaphone, PenTool, Target, Mail, PieChart, Apple, Paintbrush, AppWindow, TestTube2
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

// Map icon name strings to Lucide icon components
const iconMap = {
  Cloud, Globe, Wrench, Rocket, Zap, ShieldCheck, Atom, Laptop, ShoppingCart, Smartphone, Link2, Bot, Eye, BarChart2, FileText, Settings, Brain, Bug, Flame, Search, Lock, ClipboardList, AlarmCheck, TrendingUp, Megaphone, PenTool, Target, Mail, PieChart, Apple, Paintbrush, AppWindow, TestTube2
};

export default function ServicesDropdown({ closeAll }) {
  const [servicesPageOpen, setServicesPageOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const servicesRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setServicesPageOpen(false);
        setSelectedService(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (servicesPageOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [servicesPageOpen]);

  const openServicesPage = () => {
    setServicesPageOpen(true);
    if (closeAll) closeAll();
  };

  const closeServicesPage = () => {
    setServicesPageOpen(false);
    setSelectedService(null);
  };

  const handleServiceSelect = (service, category) => {
    navigate(`/service/${encodeURIComponent(service.name)}`, {
      state: { service, category }
    });
    closeServicesPage();
  };

  return (
    <>
      <button
        ref={servicesRef}
        onClick={openServicesPage}
        className="px-2 py-1 rounded font-semibold flex items-center justify-center h-full hover:bg-blue-700 hover:text-yellow-300 transition-colors duration-200"
        style={{ minHeight: 36 }}
        aria-haspopup="true"
        aria-expanded={servicesPageOpen}
      >
        Services
      </button>

      {servicesPageOpen && (
        <div className="fixed inset-x-0 bottom-0 z-30 overflow-y-auto w-screen" style={{
          top: '56px',
          height: 'calc(100vh - 56px)',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          minHeight: '100vh',
          width: '100vw',
          position: 'fixed',
        }}>
          {/* Content starts below the navbar - accounting for navbar height */}
          <div className="relative" style={{ zIndex: 2 }}>
            {/* Header Section */}
            <div className="bg-transparent border-b border-blue-100 shadow-none">
              <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-extrabold text-white drop-shadow-sm">Our Services</h1>
                  <p className="mt-2 text-lg font-medium" style={{ color: 'white' }}>Choose from our comprehensive range of professional services</p>
                </div>
                <button
                  onClick={closeServicesPage}
                  className="px-5 py-2 bg-white/20 hover:bg-white/40 text-white hover:text-sky-200 rounded-xl shadow transition-colors font-semibold border border-blue-200"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Services Grid */}
            <div className="px-6 md:px-12 lg:px-20 py-10">
              {/* Category labels and cards in a single grid */}
              {Object.entries(servicesData).map(([category, services]) => (
                <React.Fragment key={category}>
                  <div className="col-span-full text-center mb-6 mt-10">
                    <h2 className="text-2xl font-extrabold text-white mb-2 drop-shadow">{category}</h2>
                    <div className="w-16 h-1 bg-white/60 mx-auto rounded"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
                    {services.map((service) => (
                      <div
                        key={service.name}
                        onClick={() => handleServiceSelect(service, category)}
                        className="bg-white/10 backdrop-blur-md border-2 border-blue-200/30 rounded-2xl p-7 hover:shadow-2xl hover:border-sky-400 transition-all duration-200 cursor-pointer group relative overflow-hidden flex flex-col justify-between min-h-[260px]"
                        style={{ boxShadow: '0 8px 32px 0 rgba(33,150,243,0.10)', height: '100%' }}
                      >
                        {/* Decorative icon background */}
                        <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-100 rounded-full opacity-40 z-0"></div>
                        <div className="flex items-start space-x-4 relative z-10">
                          <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: 'white' }}>
                            {(() => {
                              const IconComponent = iconMap[service.icon];
                              return IconComponent ? <IconComponent size={32} /> : null;
                            })()}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-white group-hover:text-sky-200 transition-colors mb-2">
                              {service.name}
                            </h3>
                            <p className="text-white text-sm leading-relaxed opacity-90">
                              {service.desc}
                            </p>
                            <div className="mt-3">
                              <span className="inline-flex items-center text-white text-sm font-medium group-hover:text-sky-200">
                                Learn More
                                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              ))}

              {/* Call to Action Section */}
              <div className="mt-10 text-center">
                <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-blue-200 flex flex-col items-center">
                  {/* Decorative cloud SVG */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2" style={{ zIndex: 0 }}>
                    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="60" cy="40" rx="60" ry="20" fill="#b3e5fc" fillOpacity="0.5" />
                      <ellipse cx="30" cy="30" rx="20" ry="10" fill="#b3e5fc" fillOpacity="0.7" />
                      <ellipse cx="90" cy="30" rx="20" ry="10" fill="#b3e5fc" fillOpacity="0.7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-extrabold mb-4 text-blue-900 relative z-10">Ready to Get Started?</h2>
                  <p className="text-lg mb-6 opacity-90 text-blue-800 relative z-10">Contact us today to discuss your project requirements</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <Link 
                      to="/contact"
                      onClick={closeServicesPage}
                      className="px-8 py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-sky-400 shadow-lg transition-all text-lg"
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}