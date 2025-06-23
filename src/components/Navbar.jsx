import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ServicesDropdown from "./ServicesDropdown";
import { servicesData } from "../data/servicesData";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);

  const closeAll = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeAll();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-blue-600 text-white px-4 md:px-6 py-3 flex items-center justify-between z-50 shadow-lg">
        {/* Logo */}
        <Link to="/" onClick={closeAll} className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 15a4 4 0 014-4h1a4 4 0 118 0h1a4 4 0 010 8H7a4 4 0 01-4-4z"
            />
          </svg>
          <span className="text-xl font-extrabold text-white">CloudNest</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-8">
          <ServicesDropdown closeAll={closeAll} />
          {["Company", "Contact"].map((item) => (
            <li key={item} className="hover:text-yellow-300 transition-colors duration-200">
              <Link 
                to={`/${item.toLowerCase()}`} 
                onClick={closeAll}
                className="px-2 py-1 rounded hover:bg-blue-700 transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden" ref={mobileMenuRef}>
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setDropdownOpen(false);
            }}
            className="p-2 hover:bg-blue-700 rounded transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`absolute right-0 top-12 w-72 transition-all duration-200 transform ${
            mobileMenuOpen 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
          }`}>
            <div className="bg-white text-black border border-gray-200 rounded-lg shadow-xl overflow-hidden max-h-96 overflow-y-auto">
              {/* Services in Mobile */}
              <div className="border-b border-gray-100">
                <div className="px-4 py-3 font-semibold text-gray-900 bg-gray-50">Services</div>
                <div className="max-h-40 overflow-y-auto">
                  {Object.entries(servicesData).slice(0, 3).map(([category, services]) => (
                    <div key={category} className="px-4 py-2">
                      <div className="text-xs font-medium text-gray-600 mb-1">{category}</div>
                      {services.slice(0, 2).map((service) => (
                        <Link
                          key={service.name}
                          to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={closeAll}
                          className="flex items-center space-x-2 py-1 text-sm hover:text-blue-600 transition-colors"
                        >
                          <span className="text-xs">{service.icon}</span>
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 transition-colors"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>

              {/* Other Nav Items */}
              {["Company", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={closeAll}
                  className="block px-4 py-3 hover:bg-blue-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
