import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-8 border-t-[3px] border-[#ff6a13]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main 4-Column Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1.3fr_1fr_1fr] gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col">
            <a href="#hero" className="flex flex-col items-start mb-6 shrink-0">
              <div 
                className="text-[32px] md:text-[36px] text-white leading-none"
                style={{ fontFamily: "'Pacifico', cursive", letterSpacing: '1px' }}
              >
                Dungar
              </div>
              <p className="text-[10px] md:text-[11px] text-[#ff6a13] font-bold uppercase tracking-[0.4em] mt-1 ml-1">
                CHEMICALS
              </p>
            </a>
            <p className="text-[14px] text-white/80 font-medium mb-6">
              Premium adhesive solutions for stronger bonds and better builds.
            </p>
            <a href="https://www.dungarchemicals.com" className="text-[13px] text-white/50 hover:text-white transition-colors mb-8">
              www.dungarchemicals.com
            </a>
            
            {/* Social Icons (Clean Circular Style) */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 border border-white/20 hover:border-[#ff6a13] hover:bg-[#ff6a13] flex items-center justify-center rounded-full transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 border border-white/20 hover:border-[#ff6a13] hover:bg-[#ff6a13] flex items-center justify-center rounded-full transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-9 h-9 border border-white/20 hover:border-[#ff6a13] hover:bg-[#ff6a13] flex items-center justify-center rounded-full transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-9 h-9 border border-white/20 hover:border-[#ff6a13] hover:bg-[#ff6a13] flex items-center justify-center rounded-full transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Connect With Us */}
          <div className="flex flex-col lg:pl-6">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-white mb-6">Connect With Us</h4>
            <div className="space-y-6 text-[14px] text-white/70">
              <div className="flex items-start gap-4">
                <MapPin className="text-white/40 shrink-0 mt-0.5" size={18} />
                <p className="leading-relaxed">
                  <span className="text-white font-medium block mb-0.5">Dungar Chemicals</span>
                  Building No. 3, Local Shopping Complex, 3rd Floor, Rishabh Vihar Market, Delhi - 110092
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-white/40 shrink-0" size={18} />
                <a href="tel:+918000567117" className="hover:text-white transition-colors">+91-8000567117</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-white/40 shrink-0" size={18} />
                <a href="mailto:team@dungarchemicals.com" className="hover:text-white transition-colors">team@dungarchemicals.com</a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col lg:pl-6">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col space-y-4 text-[14px] text-white/70">
              {['Home', 'About Us', 'Products', 'News & Events', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white hover:translate-x-1 transition-transform inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="flex flex-col">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-white mb-6">Customer Services</h4>
            <ul className="flex flex-col space-y-4 text-[14px] text-white/70">
              {['Terms of Use', 'Privacy Policy', 'Refund Policy', 'Shipping Policy'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white hover:translate-x-1 transition-transform inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/40 font-medium">
          <p>&copy; {new Date().getFullYear()} Dungar Chemicals Pvt Ltd. All Rights Reserved.</p>
          <div className="flex gap-6 text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
