import React, { useState } from 'react';
import { ArrowLeft, Check, Phone, Mail, MapPin, Clock, CreditCard, Shield, Headphones } from 'lucide-react';

const ServiceLandingPage = ({ service, category, onBack }) => {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const getPricingTiers = () => {
    const basePrices = {
      'Cloud Services': { basic: 299, standard: 599, premium: 999 },
      'Web Development': { basic: 199, standard: 499, premium: 899 },
      'AI & Machine Learning': { basic: 399, standard: 799, premium: 1299 },
      'Cybersecurity': { basic: 249, standard: 549, premium: 999 },
      'Digital Marketing': { basic: 149, standard: 349, premium: 699 },
      'Mobile Development': { basic: 399, standard: 799, premium: 1199 }
    };

    const prices = basePrices[category] || { basic: 199, standard: 499, premium: 899 };

    return [
      {
        name: 'Basic',
        price: prices.basic,
        period: 'one-time',
        features: ['Initial consultation', 'Basic implementation', '30-day support', 'Documentation', 'Email support'],
        popular: false
      },
      {
        name: 'Standard',
        price: prices.standard,
        period: 'one-time',
        features: ['Everything in Basic', 'Advanced configuration', '90-day support', 'Training session', 'Phone & email support', 'Performance optimization'],
        popular: true
      },
      {
        name: 'Premium',
        price: prices.premium,
        period: 'one-time',
        features: ['Everything in Standard', 'Custom development', '6-month support', 'Dedicated account manager', '24/7 priority support', 'Ongoing maintenance', 'Free updates'],
        popular: false
      }
    ];
  };

  const handleFormSubmit = () => {
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setShowContactForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const pricingTiers = getPricingTiers();
  const selectedTier = pricingTiers.find(tier => tier.name.toLowerCase() === selectedPlan);

  return (
    <div className="bg-gray-50 min-h-screen overflow-auto">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </button>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 text-gray-900">{service.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.name}</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{service.desc}</p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">{category}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-800"><Check className="w-5 h-5 text-green-500 mr-2" />Professional consultation</li>
                    <li className="flex items-start text-gray-800"><Check className="w-5 h-5 text-green-500 mr-2" />Custom implementation</li>
                    <li className="flex items-start text-gray-800"><Check className="w-5 h-5 text-green-500 mr-2" />Quality assurance testing</li>
                    <li className="flex items-start text-gray-800"><Check className="w-5 h-5 text-green-500 mr-2" />Documentation & training</li>
                    <li className="flex items-start text-gray-800"><Check className="w-5 h-5 text-green-500 mr-2" />Ongoing support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Delivery Timeline:</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>Week 1: Planning & Analysis</li>
                    <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>Week 2-3: Development</li>
                    <li className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>Week 4: Testing & Deployment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Plan</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {pricingTiers.map(tier => (
                  <div key={tier.name} onClick={() => setSelectedPlan(tier.name.toLowerCase())} className={`cursor-pointer p-6 border-2 rounded-xl ${selectedPlan === tier.name.toLowerCase() ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                    <p className="text-gray-700">${tier.price} - {tier.period}</p>
                    <ul className="mt-4 space-y-2 text-gray-700">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Get Started</h2>
              <ol className="space-y-4 text-gray-800">
                <li>Contact us for consultation</li>
                <li>Receive custom quote</li>
                <li>Sign agreement & pay deposit</li>
                <li>Project starts immediately</li>
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 text-gray-800">
              <h3 className="font-bold mb-4">Quick Quote</h3>
              <p>Selected Plan: {selectedTier?.name}</p>
              <p>Price: ${selectedTier?.price}</p>
              <button onClick={() => setShowContactForm(true)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded">Get Started Now</button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-gray-800">
              <h3 className="font-bold mb-4">Contact Information</h3>
              <p><Phone className="inline w-4 h-4 mr-2" />+1 (555) 123-4567</p>
              <p><Mail className="inline w-4 h-4 mr-2" />contact@company.com</p>
              <p><MapPin className="inline w-4 h-4 mr-2" />123 Business St, City</p>
              <p><Clock className="inline w-4 h-4 mr-2" />Mon-Fri: 9AM-6PM</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 text-center text-gray-800">
              <Shield className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <p>100% Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl max-w-md w-full text-gray-800">
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="w-full p-2 mb-4 border rounded" />
            <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full p-2 mb-4 border rounded" />
            <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className="w-full p-2 mb-4 border rounded" />
            <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" className="w-full p-2 mb-4 border rounded" />
            <div className="flex justify-end space-x-4">
              <button onClick={() => setShowContactForm(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
              <button onClick={handleFormSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceLandingPage;
