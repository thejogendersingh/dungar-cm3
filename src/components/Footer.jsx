import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About Us', href: '/#about' },
    { name: 'Products', href: '/#products' },
    { name: 'Contact Us', href: '/#cta' },
  ];

  const policies = [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-[#1A1A2E] text-white w-full border-t border-slate-800 relative z-10">
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.5fr_2fr_1.5fr] gap-12 lg:gap-8">
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <a href="/#hero" className="mb-6 inline-block hover:opacity-90 transition-opacity">
              <img src={logoImg} alt="Dungar Chemicals" className="h-16 w-auto brightness-0 invert" />
            </a>
            <p className="text-slate-400 text-[14px] leading-relaxed max-w-[320px] mb-8 font-normal">
              Premium adhesive solutions for stronger bonds, better builds, and reliable woodworking applications.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF7A00] hover:text-white transition-colors duration-300">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF7A00] hover:text-white transition-colors duration-300">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF7A00] hover:text-white transition-colors duration-300">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF7A00] hover:text-white transition-colors duration-300">
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 - Text Navigators (Quick Links & Info) */}
          <div className="flex flex-row justify-between sm:justify-start sm:gap-24 lg:justify-center">
            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className="text-[13px] font-semibold text-white tracking-wider mb-6 uppercase">Quick Links</h3>
              <div className="flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-white/60 hover:text-[#FF7A00] hover:translate-x-1 transition-all duration-300 text-[14px] w-fit">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="flex flex-col">
              <h3 className="text-[13px] font-semibold text-white tracking-wider mb-6 uppercase">Information</h3>
              <div className="flex flex-col gap-4">
                {policies.map((link) => (
                  <a key={link.name} href={link.href} className="text-white/60 hover:text-[#FF7A00] hover:translate-x-1 transition-all duration-300 text-[14px] w-fit">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3 - Contact Us */}
          <div className="flex flex-col lg:items-end">
            <div className="flex flex-col">
              <h3 className="text-[13px] font-semibold text-white tracking-wider mb-6 uppercase">Connect With Us</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#FF7A00] transition-colors shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-white text-[14px] font-medium mb-1">Dungar Chemicals</h4>
                    <p className="text-white/60 text-[13px] leading-relaxed max-w-[200px]">115-116 First Floor, Ajmer Road, Parshavnath Colony, Jaipur, Rajasthan 302019</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#FF7A00] transition-colors shrink-0">
                    <Phone size={18} />
                  </div>
                  <a href="tel:+919672444677" className="text-white/60 hover:text-[#FF7A00] transition-colors text-[14px]">+91-9672444677</a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#FF7A00] transition-colors shrink-0">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:team@dungarchemicals.com" className="text-white/60 hover:text-[#FF7A00] transition-colors text-[14px]">team@dungarchemicals.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#13132B]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[13px]">
            &copy; {new Date().getFullYear()} Dungar Chemicals Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-white/40">
            <a href="#" className="hover:text-[#FF1840] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF1840] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}