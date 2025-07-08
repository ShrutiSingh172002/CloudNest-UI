import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-20 px-2" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', textAlign: 'center' }}>
      <h1 className="text-3xl font-bold mb-4" style={{ color: '#2563eb' }}>Terms of Service</h1>

      <p className="mb-4" style={{ color: 'white' }}>
        By accessing and using  AK Consultancy
        , you accept and agree to be bound by the terms and provisions of this agreement.
      </p>

      <p className="mb-2" style={{ color: 'white' }}>
        You agree not to misuse our services or help anyone else do so. You may not attempt to gain unauthorized access to any part of the service or content.
      </p>

      <p className="mb-2" style={{ color: 'white' }}>
        All intellectual property on this site remains the property of  AK Consultancy
        or its licensors.
      </p>

      <p className="mb-4" style={{ color: 'white' }}>
        These terms may be updated occasionally. Continued use of our service constitutes acceptance of the new terms.
      </p>

      {/* User Responsibilities */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>User Responsibilities</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        As a user, you are responsible for ensuring that your use of  AK Consultancy
        is in compliance with applicable laws and regulations. You must provide accurate information when requested and refrain from any activity that could harm our systems or reputation.
      </p>

      {/* Account Termination */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Account Suspension or Termination</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        We reserve the right to suspend or terminate your access to the platform at any time, with or without cause, and without prior notice if we believe your actions violate our terms or pose a risk to other users.
      </p>

      {/* Service Modifications */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Service Availability & Modifications</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        We may update, modify, or discontinue features or services without prior notice. While we strive for uptime, we cannot guarantee uninterrupted access at all times due to maintenance or unforeseen technical issues.
      </p>

      {/* Data Usage & Privacy */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Data Usage & Privacy</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        Your data is important to us. By using our platform, you consent to the collection and use of your information as described in our <a href="/privacy" style={{ color: '#2563eb', textDecoration: 'none' }}>Privacy Policy</a>. We do not sell or misuse user data.
      </p>

      {/* Third-Party Links */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Third-Party Links</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        Our platform may contain links to external websites or services that are not operated by us. We are not responsible for the content, practices, or privacy policies of third-party sites.
      </p>

      {/* Governing Law */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Governing Law</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        These Terms of Service shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts located in Kolkata, West Bengal.
      </p>

      {/* Final Notice */}
      <p className="text-sm mt-10 mb-16" style={{ color: 'white' }}>
        Last Updated: July 7, 2025
      </p>
    </div>
  );
}
