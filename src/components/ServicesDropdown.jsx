// src/components/ServicesDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import ServiceLandingPage from './ServiceLandingPage';

export default function ServicesDropdown({ closeAll }) {
  const [servicesPageOpen, setServicesPageOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showServiceLandingPage, setShowServiceLandingPage] = useState(false);
  const [selectedServiceData, setSelectedServiceData] = useState(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setServicesPageOpen(false);
        setSelectedService(null);
        setShowServiceLandingPage(false);
        setSelectedServiceData(null);
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
    setSelectedServiceData({ ...service, category });
    setShowServiceLandingPage(true);
    closeServicesPage();
  };

  const handleBackFromLanding = () => {
    setShowServiceLandingPage(false);
    setSelectedServiceData(null);
  };

  return (
    <>
      <button
        ref={servicesRef}
        onClick={openServicesPage}
        className="px-2 py-1 rounded hover:bg-blue-700 hover:text-yellow-300 transition-colors duration-200"
        aria-haspopup="true"
        aria-expanded={servicesPageOpen}
      >
        Services
      </button>

      {servicesPageOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 z-30 overflow-y-auto bg-white">
          {/* Content starts below the navbar - accounting for navbar height */}
          <div className=""> {/* Remove padding-top since we're positioning below navbar */}
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
                    <p className="text-gray-600 mt-1">Choose from our comprehensive range of professional services</p>
                  </div>
                  <button
                    onClick={closeServicesPage}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg transition-colors font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="px-6 md:px-12 lg:px-20 py-8">
              <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {Object.entries(servicesData).map(([category, services]) => (
                  <div key={category} className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{category}</h2>
                      <div className="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
                    </div>
                    <div className="space-y-4">
                      {services.map((service) => (
                        <div
                          key={service.name}
                          onClick={() => handleServiceSelect(service, category)}
                          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer group"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                              {service.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                {service.name}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {service.desc}
                              </p>
                              <div className="mt-3">
                                <span className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
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
                  </div>
                ))}
              </div>

              {/* Call to Action Section */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                  <p className="text-lg mb-6 opacity-90">Contact us today to discuss your project requirements</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/contact"
                      onClick={closeServicesPage}
                      className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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

      {showServiceLandingPage && selectedServiceData && (
        <ServiceLandingPage 
          service={selectedServiceData}
          category={selectedServiceData.category}
          onBack={handleBackFromLanding}
        />
      )}
    </>
  );
}