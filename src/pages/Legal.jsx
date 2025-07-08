import { useEffect } from 'react';

export default function Legal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-20 px-2" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', textAlign: 'center' }}>
      <h1 className="text-3xl font-bold mb-4" style={{ color: '#2563eb' }}>Legal Notice</h1>

      <p className="mb-4" style={{ color: 'white' }}>
        AK Consultancy and its associated logo are trademarks of  AK Consultancy
        , Inc. All other product names, logos, and brands are property of their respective owners.
      </p>

      <p className="mb-4" style={{ color: 'white' }}>
        Unauthorized use of any  AK Consultancy
         intellectual property is strictly prohibited without prior written permission.
      </p>

      <p className="mb-6" style={{ color: 'white' }}>
        For legal inquiries, please contact: <a href="mailto:info@AKConsultancy\n .com" style={{ color: '#2563eb', textDecoration: 'none' }}>info@AKConsultancy\n .com</a>.
      </p>

      {/* Terms of Use */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Terms of Use</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        By accessing or using this website, you agree to comply with and be bound by the terms and conditions set forth in this notice. If you do not agree to these terms, please refrain from using our site or services.
      </p>

      {/* Intellectual Property */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Intellectual Property</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        All content, design, graphics, and other materials on this site are the intellectual property of AK Consultancy or its licensors. You may not reproduce, distribute, or transmit any content without prior written consent.
      </p>

      {/* Disclaimer */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Disclaimer</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        The information provided on this website is for general informational purposes only. AK Consultancy makes no warranties regarding the accuracy, reliability, or completeness of any information on the site.
      </p>

      {/* Limitation of Liability */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Limitation of Liability</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        In no event shall AK Consultancy be liable for any direct, indirect, incidental, special, or consequential damages arising out of or related to your use of the website or services, even if advised of the possibility of such damages.
      </p>

      {/* Governing Law */}
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#2563eb' }}>Governing Law</h2>
      <p className="mb-4" style={{ color: 'white' }}>
        This legal notice shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with this notice shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.
      </p>

      {/* Final Contact Reminder */}
      <p className="mt-6 mb-16" style={{ color: 'white' }}>
        If you have any legal questions or concerns, please don't hesitate to reach out at <a href="mailto:info@AKConsultancy.com" style={{ color: '#2563eb', textDecoration: 'none' }}>info@AKConsultancy.com</a>.
      </p>
    </div>
  );
}
