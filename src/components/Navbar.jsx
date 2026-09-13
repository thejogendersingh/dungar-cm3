import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Briefcase, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const leftLinks = [
    { name: 'Home', path: '/#hero' },
    { name: 'Products', path: '/#products' },
  ];

  const rightLinks = [
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <div className="absolute top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out bg-white shadow-sm border-b border-gray-100">
      
      <header className="w-full">
      
      {/* Top Pre-header Bar */}
      <div className="w-full bg-slate-900 text-slate-300 hidden md:block border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 h-10 flex justify-between items-center text-[11px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +91 98765 43210
            </a>
            <a href="mailto:info@dungarchemicals.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@dungarchemicals.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a href="#support" className="hover:text-white transition-colors">Support</a>
            <a href="#careers" className="hover:text-white transition-colors">Careers</a>
            <a href="#dealer" className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-white">
              <Briefcase className="w-3.5 h-3.5" />
              Become a Dealer
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="w-full relative z-40">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 h-[70px] lg:h-[80px] flex justify-between items-center">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <a href="/#hero" className="flex items-center gap-2 hover:opacity-95 transition-opacity">
              {/* brightness-0 makes the logo black */}
              <img src={logoImg} alt="Dungar Chemicals Logo" className="h-8 md:h-[40px] w-auto object-contain brightness-0 drop-shadow-sm" />
            </a>
          </div>

          {/* Right: Navigation & Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {allLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path} 
                className="relative text-[12px] lg:text-[13px] font-semibold tracking-wide text-slate-700 hover:text-amber-500 transition-colors duration-300 group py-1 drop-shadow-sm"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
            <a 
              href="/brochure.pdf" 
              className="bg-slate-900 text-white px-6 py-2 rounded-full text-[12px] font-medium tracking-wide transition-all duration-300 hover:bg-amber-500 hover:text-white shadow-sm ml-2 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Brochure
            </a>
          </div>

          {/* Mobile Actions (Brochure + Toggle) */}
          <div className="md:hidden flex items-center gap-3 sm:gap-4">
            <a 
              href="/brochure.pdf" 
              className="bg-slate-900 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-[12px] font-medium tracking-wide transition-all duration-300 hover:bg-amber-500 shadow-sm flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Brochure
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-amber-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Top Slide-Down Menu */}
            <motion.div 
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              className="fixed top-0 left-0 w-full h-auto max-h-[85vh] bg-white z-[100] flex flex-col shadow-2xl lg:hidden overflow-y-auto rounded-b-3xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 pb-4">
                <img src={logoImg} alt="Dungar Chemicals Logo" className="h-[36px] w-auto object-contain brightness-0" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links Area */}
              <div className="flex-1 flex flex-col py-6 px-6 gap-6">
                {allLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-[20px] font-semibold text-slate-800 hover:text-amber-500 transition-colors border-b border-slate-100 pb-4"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Bottom Info Area */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4, duration: 0.5 }}
                 className="p-6 bg-slate-50 mt-auto flex flex-col gap-5 border-t border-slate-100"
              >
                <a 
                  href="/brochure.pdf" 
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center items-center w-full bg-amber-500 hover:bg-slate-900 hover:text-white transition-colors text-slate-900 h-12 rounded-full text-[13px] font-bold tracking-wide shadow-sm gap-2 group"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  DOWNLOAD BROCHURE
                </a>
                
                <div className="flex items-center justify-between w-full text-slate-600 px-2">
                  <a href="tel:+918000567117" className="hover:text-amber-500 transition-colors flex items-center gap-2 text-[13px] font-semibold">
                    <Phone size={15} /> Call Us
                  </a>
                  <a href="mailto:info@dungarchemicals.com" className="hover:text-amber-500 transition-colors flex items-center gap-2 text-[13px] font-semibold">
                    <Mail size={15} /> Email Us
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </header>
    </div>
  );
}