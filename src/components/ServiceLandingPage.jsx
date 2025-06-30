import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, CheckCircle, Clock, Shield, Users } from 'lucide-react';

const ServiceLandingPage = ({ service = null, category = null, onBack = null }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Always use working data for testing
  const mockService = {
    icon: '🚀',
    name: service?.name || 'Professional Web Development',
    desc: service?.desc || 'Complete web development solutions tailored to your business needs. From responsive design to full-stack applications with modern technologies and best practices.'
  };
  
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
    if (onBack) {
      onBack();
    } else {
      console.log('Back button clicked - no onBack handler provided');
    }
  };

  const handleFormSubmit = () => {
    console.log('Form submitted:', formData);
    setShowContactForm(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-50 z-50 overflow-auto">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="w-full py-4 px-0 flex justify-between items-center">
          <button 
            onClick={handleBack} 
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors ml-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </button>
          <span className="text-gray-700 flex items-center gap-2 mr-4">
            <Phone className="w-4 h-4" />
            +1 (555) 123-4567
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <div className="text-6xl mb-6">{mockService.icon}</div>
          <h1 className="text-4xl font-bold text-blue-700 mb-4">{mockService.name}</h1>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">{mockService.desc}</p>
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            {mockCategory}
          </span>
        </div>

        {/* Features and Pricing Grid */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* What's Included */}
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">What's Included</h2>
              <ul className="space-y-3 text-gray-700">
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
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Pricing Details</h2>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">${price}</span>
                <span className="text-lg text-gray-600 ml-2">one-time payment</span>
              </div>
              <p className="text-gray-700 mb-4">
                All-inclusive package with no hidden fees. Includes complete setup, configuration, and ongoing support to ensure your success.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Value Guarantee</h3>
                <p className="text-sm text-blue-700">
                  We stand behind our work with a satisfaction guarantee. If you're not completely satisfied within the first 30 days, we'll work with you to make it right.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Quick Delivery</h3>
              <p className="text-gray-600 text-sm">Project completion within 2-4 weeks depending on complexity</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Rigorous testing and quality control processes for reliable results</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Experienced professionals dedicated to your project's success</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto px-4 py-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">Ready to Get Started?</h2>
            <p className="text-gray-700 mb-6">
              Contact us today to discuss your project requirements and learn how we can help bring your vision to life. Our team is ready to provide you with a detailed consultation and customized solution.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <span>info@company.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                <span>Sector 5, Noida, India</span>
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
          <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4">
            <h3 className="font-bold text-xl mb-4 text-gray-800">Contact Us</h3>
            <input 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              placeholder="Your Name" 
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              name="email" 
              type="email"
              value={formData.email} 
              onChange={handleInputChange} 
              placeholder="Your Email" 
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange} 
              placeholder="Your Phone" 
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleInputChange} 
              placeholder="Tell us about your project..." 
              rows="4"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" 
            />
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowContactForm(false)} 
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleFormSubmit} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceLandingPage;