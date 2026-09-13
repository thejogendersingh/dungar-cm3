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
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Shipping Policy', href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-white w-full border-t border-slate-800 relative z-10">
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.5fr_2fr_1.5fr] gap-12 lg:gap-8">
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <a href="/#hero" className="mb-6 inline-block hover:opacity-90 transition-opacity">
              <img src={logoImg} alt="Dungar Chemicals" className="h-10 w-auto brightness-0 invert" />
            </a>
            <p className="text-slate-400 text-[14px] leading-relaxed max-w-[320px] mb-8 font-normal">
              Premium adhesive solutions for stronger bonds, better builds, and reliable woodworking applications.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-colors duration-300">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-colors duration-300">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-colors duration-300">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-colors duration-300">
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
                  <a key={link.name} href={link.href} className="text-slate-400 hover:text-amber-500 hover:translate-x-1 transition-all duration-300 text-[14px] w-fit">
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
                  <a key={link.name} href={link.href} className="text-slate-400 hover:text-amber-500 hover:translate-x-1 transition-all duration-300 text-[14px] w-fit">
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
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-500 group-hover:bg-slate-700 transition-colors shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-white text-[14px] font-medium mb-1">Dungar Chemicals</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed max-w-[200px]">Building No. 3, LSC, 3rd Floor, Rishabh Vihar Market, Delhi - 110092</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-500 group-hover:bg-slate-700 transition-colors shrink-0">
                    <Phone size={18} />
                  </div>
                  <a href="tel:+918000567117" className="text-slate-400 hover:text-amber-500 transition-colors text-[14px]">+91-8000567117</a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-500 group-hover:bg-slate-700 transition-colors shrink-0">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:team@dungarchemicals.com" className="text-slate-400 hover:text-amber-500 transition-colors text-[14px]">team@dungarchemicals.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-900">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[13px]">
            &copy; {new Date().getFullYear()} Dungar Chemicals Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-slate-500">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}