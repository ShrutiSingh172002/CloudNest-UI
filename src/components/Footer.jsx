

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white px-6 py-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Links */}
        <ul className="flex flex-wrap gap-4 text-sm">
          <li><Link to="/legal" className="hover:underline">Legal</Link></li>
          <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
          <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          
        </ul>

        {/* Copyright */}
        <p className="text-sm text-center md:text-right">
          © 2025 CloudNest, Inc. All rights reserved. 
        </p>
      </div>
    </footer>
  );
}

