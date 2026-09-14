import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Briefcase, Download, MessageCircle } from 'lucide-react';
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
    { name: 'Applications', path: '/#applications' },
    { name: 'Contact', path: '/#cta' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <div className="sticky top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-white shadow-md border-b border-gray-200">
      
      {/* Top Dark Orange Bar */}
      <div className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF1840] text-white/90">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-16 py-2.5 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase gap-2 md:gap-0">
          
          <div className="flex items-center gap-3">
            <span className="text-white">India's Trusted Adhesive Manufacturer</span>
          </div>
          
          <div className="flex items-center gap-5 sm:gap-7">
            <a href="mailto:info@dungarchemicals.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline lowercase tracking-normal text-[12px]">info@dungarchemicals.com</span>
            </a>
            <a href="tel:+919672444677" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline tracking-normal text-[12px]">+91 96724 44677</span>
            </a>
            <a href="https://wa.me/919672444677" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline tracking-normal text-[12px]">WhatsApp Us</span>
            </a>
          </div>
          
        </div>
      </div>
      
      <header className="w-full">
      
      {/* Clean White Corporate Header */}
      <div className="w-full relative z-40 bg-white">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-16 h-[85px] flex justify-between items-center">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <a href="/#hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src={logoImg} alt="Dungar Chemicals" className="h-10 md:h-[55px] lg:h-[60px] w-auto object-contain" />
            </a>
          </div>

          {/* Center/Right: Navigation & Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {allLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path} 
                className="text-[12px] lg:text-[13px] font-semibold text-[#1A1A1A] hover:text-[#FF1840] transition-colors duration-200 uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/919672444677" target="_blank" rel="noreferrer"
              className="ml-4 border border-[#1A1A1A] bg-transparent text-[#1A1A1A] px-6 py-2.5 rounded-sm text-[12px] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Mobile Actions (Toggle) */}
          <div className="md:hidden flex items-center gap-3 sm:gap-4">
            <a 
              href="https://wa.me/919672444677" target="_blank" rel="noreferrer"
              className="border border-[#1A1A1A] text-[#1A1A1A] px-4 py-2 rounded-sm text-[10px] font-bold uppercase transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white"
            >
              Get in touch
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-[#FF1840] focus:outline-none"
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
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-[#FF1840] hover:text-white transition-colors"
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
                    className="text-[20px] font-semibold text-slate-800 hover:text-[#FF1840] transition-colors border-b border-slate-100 pb-4"
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
                  <a href="tel:+919672444677" className="hover:text-amber-500 transition-colors flex items-center gap-2 text-[13px] font-semibold">
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