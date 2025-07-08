import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-20 px-2" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', textAlign: 'center' }}>
      <h1 className="text-3xl font-bold mb-4" style={{ color: '#2563eb' }}>Privacy Policy</h1>

      {/* Intro */}
      <p className="mb-4" style={{ color: 'white' }}>
        At  AK Consultancy
        , we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
      </p>

      {/* What We Collect */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Information We Collect</h2>
      <p className="mb-2" style={{ color: 'white' }}>
        We collect personal information you voluntarily provide to us, such as your name, email address, and any other contact or identifying information.
      </p>
      <p className="mb-4" style={{ color: 'white' }}>
        We may also collect non-personal data such as your browser type, IP address, access times, and pages visited to help us improve our services.
      </p>

      {/* How We Use Your Information */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>How We Use Your Information</h2>
      <p className="mb-2" style={{ color: 'white' }}>
        We use your data to:
      </p>
      <ul className="list-disc list-inside mb-4" style={{ color: 'white', paddingLeft: 60, maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
        <li>Deliver and personalize our services</li>
        <li>Respond to your inquiries and requests</li>
        <li>Send relevant updates or marketing (with consent)</li>
        <li>Improve our website and user experience</li>
        <li>Ensure security and prevent fraudulent activity</li>
      </ul>

      {/* Cookies */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Cookies and Tracking Technologies</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        We use cookies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can disable cookies through your browser settings, but some features may not work as intended.
      </p>

      {/* Third-Party Services */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Third-Party Services</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        We may use third-party tools (e.g., analytics providers or payment gateways) that collect data on our behalf. These services are governed by their own privacy policies and we encourage you to review them.
      </p>

      {/* Data Security */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>How We Protect Your Data</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        We implement industry-standard security measures such as encryption, access control, and secure storage to protect your personal information from unauthorized access or disclosure.
      </p>

      {/* Your Rights */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Your Rights and Choices</h2>
      <p className="mb-2" style={{ color: 'white' }}>
        You have the right to:
      </p>
      <ul className="list-disc list-inside mb-4" style={{ color: 'white', paddingLeft: 60, maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
        <li>Access and review the information we hold about you</li>
        <li>Request correction or deletion of your data</li>
        <li>Withdraw your consent at any time</li>
        <li>Opt out of marketing communications</li>
      </ul>

      {/* Policy Updates */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Changes to This Policy</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        We may update this Privacy Policy from time to time to reflect changes in our practices. Please check this page periodically for the latest version.
      </p>

      {/* Contact */}
      <p className="mb-10" style={{ color: 'white' }}>
        If you have any questions or concerns about this policy or your data, please contact us at <a href="/contact" style={{ color: '#2563eb', textDecoration: 'none' }}>info@cloudnest.com</a>.
      </p>

      <p className="text-sm mb-16" style={{ color: 'white' }}>
        Last Updated: July 7, 2025
      </p>
    </div>
  );
}
