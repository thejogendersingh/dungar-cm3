import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen pt-28 pb-20">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 bg-white p-8 md:p-12 border border-slate-100 shadow-sm rounded-lg">
        <h1 className="text-[28px] md:text-[34px] font-medium text-[#1A1A2E] mb-6 tracking-tight">Privacy Policy</h1>
        <p className="text-[14px] text-gray-500 mb-8 font-normal leading-relaxed">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="space-y-8 text-[14px] leading-[1.7] text-gray-600 font-normal">
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A2E] mb-3">1. Introduction</h2>
            <p>Welcome to Dungar Chemicals. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website, interact with our services, or communicate with our sales team.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A2E] mb-3">2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Identity Data:</strong> includes first name, last name, business name, or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address, WhatsApp number, and telephone numbers.</li>
              <li><strong>Business Data:</strong> includes GST numbers, business types (e.g., retailer, distributor), and other related trade information.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, and location data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A2E] mb-3">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To register you as a new dealer, distributor, or customer.</li>
              <li>To process and deliver your orders, including managing payments, fees, and charges.</li>
              <li>To manage our relationship with you, which will include notifying you about changes to our terms or privacy policy.</li>
              <li>To send you communications via WhatsApp, SMS, or Email regarding business opportunities, product updates, and order status.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A2E] mb-3">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
          </section>
          
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A2E] mb-3">5. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <p className="mt-2 text-[#1A1A2E] font-medium">
              Dungar Chemicals<br />
              115-116 First Floor, Ajmer Road<br />
              Parshavnath Colony, Jaipur, Rajasthan 302019<br />
              Phone: +91-9672444677
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
