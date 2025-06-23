import React from 'react';
import './Support.css';
import { LifeBuoy, FileQuestion } from 'lucide-react';

const Support = () => {
  return (
    <section className="support-section">
      <div className="container">

        <h2 className="blue-heading">
          <FileQuestion size={20} /> Self-Help Tools
        </h2>
        <ul className="black-text">
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Documentation & Setup Guides</a></li>
          <li><a href="#">Troubleshooting Articles</a></li>
        </ul>

        <h2 className="blue-heading">
          <FileQuestion size={20} /> Frequently Asked Questions (FAQ)
        </h2>
        <div className="faq-section black-text">
          <h3>1. I can’t log in to my account. What should I do?</h3>
          <p>
            Double-check your email and password. Use the “Forgot Password” option or contact support if the issue persists.
          </p>

          <h3>2. How do I report a bug in my web application?</h3>
          <p>
            Use the bug reporting form or email us with a detailed description, screenshots, and steps to reproduce.
          </p>

          <h3>3. Can you help with cloud setup or migration?</h3>
          <p>
            Yes, we offer support for configuration, deployment, and migration of cloud environments.
          </p>

          <h3>4. My AI model isn’t working properly. What should I do?</h3>
          <p>
            Reach out with model details and the issue you're facing. We help with tuning, debugging, and integration.
          </p>

          <h3>5. Where can I find setup guides?</h3>
          <p>
            You can access documentation and setup guides in our Self-Help Tools section above.
          </p>
        </div>

        <h1 className="section-title bottom-title">
          <LifeBuoy size={24} /> Support
        </h1>
      </div>
    </section>
  );
};

export default Support;
