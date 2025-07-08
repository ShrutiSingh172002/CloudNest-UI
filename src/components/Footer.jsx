import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 text-center">
        {/* Links */}
        <ul className="flex flex-wrap gap-4 text-sm justify-center">
          <li><Link to="/legal" className="hover:underline">Legal</Link></li>
          <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
          <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          
        </ul>

        {/* Copyright */}
        <p className="text-sm text-center">
          © 2025  AK Consultancy
          , Inc. All rights reserved. 
        </p>
      </div>
    </footer>
  );
}

