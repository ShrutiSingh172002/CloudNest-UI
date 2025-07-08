import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Cloud, Globe, Wrench, Rocket, Zap, ShieldCheck, Atom, Laptop, ShoppingCart, Smartphone, Link2, Bot, Eye, BarChart2, FileText, Settings, Brain, Bug, Flame, Search, Lock, ClipboardList, AlarmCheck, TrendingUp, Megaphone, PenTool, Target, Mail, PieChart, Apple, Paintbrush, AppWindow, TestTube2
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Cloud, Globe, Wrench, Rocket, Zap, ShieldCheck, Atom, Laptop, ShoppingCart, Smartphone, Link2, Bot, Eye, BarChart2, FileText, Settings, Brain, Bug, Flame, Search, Lock, ClipboardList, AlarmCheck, TrendingUp, Megaphone, PenTool, Target, Mail, PieChart, Apple, Paintbrush, AppWindow, TestTube2
};

export default function Services() {
  const navigate = useNavigate();

  const handleServiceSelect = (service, category) => {
    navigate(`/service/${encodeURIComponent(service.name)}`, {
      state: { service, category }
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-950/90 text-white px-4 md:px-12 lg:px-32 py-12" style={{backdropFilter: 'blur(8px)'}}>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto pb-8 border-b border-blue-300/30 mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow">Our Services</h1>
        <p className="text-lg md:text-xl text-blue-100/90 font-medium">Choose from our comprehensive range of professional services</p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        {Object.entries(servicesData).map(([category, services]) => (
          <React.Fragment key={category}>
            <div className="col-span-full text-center mb-6 mt-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 drop-shadow">{category}</h2>
              <div className="w-16 h-1 bg-sky-400 mx-auto rounded"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
              {services.map((service) => (
                <div
                  key={service.name}
                  onClick={() => handleServiceSelect(service, category)}
                  className="bg-white/10 backdrop-blur-lg border-2 border-blue-200/30 rounded-2xl p-7 hover:shadow-2xl hover:border-sky-400 transition-all duration-200 cursor-pointer group relative overflow-hidden flex flex-col justify-between min-h-[260px]"
                  style={{ boxShadow: '0 8px 32px 0 rgba(33,150,243,0.10)', height: '100%' }}
                >
                  {/* Decorative icon background */}
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-sky-400/20 rounded-full opacity-40 z-0"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: '#38bdf8' }}>
                      {(() => {
                        const IconComponent = iconMap[service.icon];
                        return IconComponent ? <IconComponent size={36} /> : null;
                      })()}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-white group-hover:text-sky-300 transition-colors mb-2">
                        {service.name}
                      </h3>
                      <p className="text-blue-100/90 text-sm leading-relaxed opacity-90">
                        {service.desc}
                      </p>
                      <div className="mt-3">
                        <span className="inline-flex items-center text-sky-300 text-sm font-medium group-hover:text-sky-200">
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
      </div>

      {/* Call to Action Section */}
      <div className="mt-24 max-w-3xl mx-auto text-center">
        <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-sky-200 flex flex-col items-center">
          {/* Decorative cloud SVG */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2" style={{ zIndex: 0 }}>
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="60" cy="40" rx="60" ry="20" fill="#38bdf8" fillOpacity="0.18" />
              <ellipse cx="30" cy="30" rx="20" ry="10" fill="#38bdf8" fillOpacity="0.25" />
              <ellipse cx="90" cy="30" rx="20" ry="10" fill="#38bdf8" fillOpacity="0.25" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold mb-4 text-sky-500 relative z-10">Ready to Get Started?</h2>
          <p className="text-lg mb-6 opacity-90 text-sky-700 relative z-10">Contact us today to discuss your project requirements</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link 
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-sky-400 shadow-lg transition-all text-lg"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
