import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const quickLinks = [
    { name: 'All Products', href: '/#products' },
    { name: 'About Us', href: '/#hero' },
    { name: 'Applications', href: '/#applications' },
    { name: 'Dealer Inquiry', href: '/#cta' },
    { name: 'Contact Dungar', href: '/#cta' },
  ];

  return (
    <footer className="w-full bg-[#F6F7F9] text-gray-700 border-t border-gray-200/80 relative z-10">
      {/* Main Corporate Footer Area */}
      <div className="max-w-[1360px] w-full mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand & Description (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <a href="/#hero" className="inline-block mb-5 hover:opacity-90 transition-opacity">
              <img 
                src={logoImg} 
                alt="Dungar Chemicals Logo" 
                className="h-12 sm:h-14 w-auto object-contain" 
              />
            </a>
            <p className="text-[13.5px] sm:text-[14px] text-gray-600 leading-relaxed font-normal max-w-[340px]">
              Dungar Chemicals is an Indian adhesive manufacturing company specializing in high-performance cyanoacrylate bonding systems and industrial chemical formulations.
            </p>
          </div>

          {/* Column 2: Quick Links (3 cols on lg) */}
          <div className="lg:col-span-3 lg:pl-6 flex flex-col items-start text-left">
            <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#1A2B4C] mb-5 tracking-tight">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-3 w-full">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-[14px] text-gray-600 hover:text-[#FF7A00] transition-colors duration-200 inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch & Socials (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#1A2B4C] mb-5 tracking-tight">
              Get In Touch
            </h3>
            
            <div className="flex flex-col space-y-3.5 w-full text-[13.5px] sm:text-[14px] text-gray-600">
              {/* Email */}
              <a 
                href="mailto:info@dungarchemicals.com" 
                className="flex items-center gap-3 hover:text-[#FF7A00] transition-colors group"
              >
                <Mail className="w-4 h-4 text-gray-500 group-hover:text-[#FF7A00] shrink-0" strokeWidth={1.75} />
                <span className="break-all">info@dungarchemicals.com</span>
              </a>

              {/* Phone */}
              <a 
                href="tel:+919672444677" 
                className="flex items-center gap-3 hover:text-[#FF7A00] transition-colors group"
              >
                <Phone className="w-4 h-4 text-gray-500 group-hover:text-[#FF7A00] shrink-0" strokeWidth={1.75} />
                <span>+91 96724 44677</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/919672444677?text=Hi%20Dungar%20Chemicals,%20I%20want%20to%20inquire%20about%20your%20adhesives" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[#FF7A00] transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-gray-500 group-hover:text-[#FF7A00] shrink-0" strokeWidth={1.75} />
                <span>+91 96724 44677 (WhatsApp)</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 pt-1">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span className="leading-relaxed text-gray-600">
                  115-116 First Floor, Ajmer Road, Parshavnath Colony, Jaipur, Rajasthan – 302019, India
                </span>
              </div>
            </div>

            {/* Social Media Row */}
            <div className="flex items-center gap-3 mt-6 pt-2">
              <a 
                href="https://www.facebook.com/share/17hckiUg4q/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="w-8.5 h-8.5 rounded-full bg-gray-200/80 hover:bg-[#FF7A00] hover:text-white text-gray-700 flex items-center justify-center transition-colors shadow-2xs"
              >
                <FaFacebookF size={13} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="w-8.5 h-8.5 rounded-full bg-gray-200/80 hover:bg-[#FF7A00] hover:text-white text-gray-700 flex items-center justify-center transition-colors shadow-2xs"
              >
                <FaYoutube size={14} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="w-8.5 h-8.5 rounded-full bg-gray-200/80 hover:bg-[#FF7A00] hover:text-white text-gray-700 flex items-center justify-center transition-colors shadow-2xs"
              >
                <FaLinkedinIn size={13} />
              </a>
              <a 
                href="https://www.instagram.com/credofix?stkn=MXRmbGg4endta3RpZw==" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="w-8.5 h-8.5 rounded-full bg-gray-200/80 hover:bg-[#FF7A00] hover:text-white text-gray-700 flex items-center justify-center transition-colors shadow-2xs"
              >
                <FaInstagram size={13} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar (Dark Editorial) */}
      <div className="bg-[#212529] text-gray-200 border-t border-gray-800">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] sm:text-[12.5px]">
          <p className="text-center sm:text-left text-gray-200 font-medium tracking-wide">
            &copy; Copyright Dungar Chemicals {new Date().getFullYear()} | All Rights Reserved
          </p>
          <div className="flex items-center gap-5 text-gray-300">
            <a href="/#cta" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-500">•</span>
            <a href="/#cta" className="hover:text-white transition-colors">Terms of Supply</a>
          </div>
        </div>
      </div>
    </footer>
  );
}