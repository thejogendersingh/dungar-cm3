import React, { useEffect } from 'react';

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen pt-28 pb-20">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 bg-white p-8 md:p-12 border border-slate-100 shadow-sm rounded-lg">
        <h1 className="text-[28px] md:text-[34px] font-medium text-[#1A1A2E] mb-6 tracking-tight">Terms & Conditions</h1>
        <p className="text-[14px] text-gray-500 mb-8 font-normal leading-relaxed">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="space-y-8 text-[14px] leading-[1.7] text-gray-600 font-normal">
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A2E] mb-3">1. Agreement to Terms</h2>
            <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Dungar Chemicals ("we", "us", or "our"), concerning your access to and use of our website as well as any other media form, media channel, or mobile website related, linked, or otherwise connected thereto.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A2E] mb-3">2. Products and Dealership</h2>
            <p>All products, including but not limited to our Credofix range of adhesives and sealants, are subject to availability. We reserve the right to discontinue any products at any time for any reason. Dealership applications submitted through our website are subject to review and approval by Dungar Chemicals management.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A2E] mb-3">3. Communication</h2>
            <p>By submitting your contact details (including WhatsApp number and Email) through our forms, you explicitly authorize Dungar Chemicals and its authorized partners to contact you for business inquiries, promotional offers, and product updates.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A2E] mb-3">4. Intellectual Property Rights</h2>
            <p>Unless otherwise indicated, the website and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site are owned or controlled by us and are protected by copyright and trademark laws.</p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A2E] mb-3">5. Governing Law</h2>
            <p>These terms and conditions and your use of the website are governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts located in Jaipur, Rajasthan.</p>
          </section>
          
          <section>
            <h2 className="text-[18px] font-medium text-[#1A1A2E] mb-3">6. Contact Information</h2>
            <p>To resolve a complaint regarding the site or to receive further information regarding use of the site, please contact us at:</p>
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
