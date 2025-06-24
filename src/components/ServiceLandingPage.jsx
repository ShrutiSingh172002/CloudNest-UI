import React from 'react';
import { ArrowLeft, Phone, Mail, MapPin, CheckCircle, Clock, Shield, Users } from 'lucide-react';


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

const ServiceLandingPage = ({ service = null, category = null, onBack = null }) => {
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


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const price = basicPlans[mockCategory] || 499;
  
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      console.log('Back button clicked - no onBack handler provided');
    }

  };
  
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
=======
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
            <div className="grid md:grid-cols-3 gap-6">
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
                <span>Sector 5, Noida, India
                  
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLandingPage;
