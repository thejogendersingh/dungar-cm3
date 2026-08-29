import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FacebookIcon = ({ size = 16, fill = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.53 11.19 6.4 12.98 6.4C13.85 6.4 14.76 6.56 14.76 6.56V8.5H13.76C12.78 8.5 12.47 9.11 12.47 9.75V12H14.67L14.32 15H12.47V21.8C17.02 20.87 20.46 16.84 22 12Z"/>
  </svg>
);

const InstagramIcon = ({ size = 16, fill = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C14.717 2 15.056 2.011 16.122 2.06C17.187 2.109 17.913 2.278 18.55 2.525C19.208 2.779 19.767 3.123 20.324 3.682C20.883 4.241 21.226 4.8 21.48 5.459C21.727 6.096 21.896 6.822 21.944 7.887C21.993 8.953 22.004 9.292 22.004 12.008C22.004 14.724 21.993 15.063 21.944 16.129C21.896 17.194 21.727 17.92 21.48 18.557C21.226 19.215 20.883 19.775 20.324 20.334C19.767 20.892 19.208 21.236 18.55 21.49C17.913 21.737 17.187 21.906 16.122 21.955C15.056 22.004 14.717 22.015 12 22.015C9.283 22.015 8.944 22.004 7.878 21.955C6.813 21.906 6.087 21.737 5.45 21.49C4.792 21.236 4.233 20.892 3.676 20.334C3.117 19.775 2.774 19.215 2.52 18.557C2.273 17.92 2.104 17.194 2.056 16.129C2.007 15.063 1.996 14.724 1.996 12.008C1.996 9.292 2.007 8.953 2.056 7.887C2.104 6.822 2.273 6.096 2.52 5.459C2.774 4.8 3.117 4.241 3.676 3.682C4.233 3.123 4.792 2.779 5.45 2.525C6.087 2.278 6.813 2.109 7.878 2.06C8.944 2.011 9.283 2 12 2ZM12 4.156C9.324 4.156 8.988 4.167 7.975 4.213C7.039 4.256 6.402 4.404 5.975 4.57C5.412 4.79 5.008 5.074 4.582 5.501C4.156 5.927 3.873 6.331 3.652 6.894C3.486 7.321 3.339 7.958 3.296 8.894C3.25 9.907 3.239 10.243 3.239 12.919C3.239 15.595 3.25 15.931 3.296 16.944C3.339 17.88 3.486 18.517 3.652 18.944C3.873 19.507 4.156 19.911 4.582 20.337C5.008 20.763 5.412 21.047 5.975 21.268C6.402 21.434 7.039 21.581 7.975 21.624C8.988 21.67 9.324 21.681 12 21.681C14.676 21.681 15.012 21.67 16.025 21.624C16.961 21.581 17.598 21.434 18.025 21.268C18.588 21.047 18.992 20.763 19.418 20.337C19.844 19.911 20.127 19.507 20.348 18.944C20.514 18.517 20.661 17.88 20.704 16.944C20.75 15.931 20.761 15.595 20.761 12.919C20.761 10.243 20.75 9.907 20.704 8.894C20.661 7.958 20.514 7.321 20.348 6.894C20.127 6.331 19.844 5.927 19.418 5.501C18.992 5.074 18.588 4.79 18.025 4.57C17.598 4.404 16.961 4.256 16.025 4.213C15.012 4.167 14.676 4.156 12 4.156ZM12 6.865C9.163 6.865 6.865 9.163 6.865 12C6.865 14.837 9.163 17.135 12 17.135C14.837 17.135 17.135 14.837 17.135 12C17.135 9.163 14.837 6.865 12 6.865ZM12 14.979C10.355 14.979 9.021 13.645 9.021 12C9.021 10.355 10.355 9.021 12 9.021C13.645 9.021 14.979 10.355 14.979 12C14.979 13.645 13.645 14.979 12 14.979ZM17.828 7.611C17.828 8.404 17.185 9.047 16.392 9.047C15.599 9.047 14.956 8.404 14.956 7.611C14.956 6.818 15.599 6.175 16.392 6.175C17.185 6.175 17.828 6.818 17.828 7.611Z"/>
  </svg>
);

const YoutubeIcon = ({ size = 16, fill = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186C23.222 5.154 22.4 4.331 21.368 4.055C19.489 3.551 12 3.551 12 3.551C12 3.551 4.511 3.551 2.632 4.055C1.6 4.331 0.778 5.154 0.502 6.186C0 8.07 0 12 0 12C0 12 0 15.93 0.502 17.814C0.778 18.846 1.6 19.669 2.632 19.945C4.511 20.449 12 20.449 12 20.449C12 20.449 19.489 20.449 21.368 19.945C22.4 19.669 23.222 18.846 23.498 17.814C24 15.93 24 12 24 12C24 12 24 8.07 23.498 6.186ZM9.596 15.551V8.449L15.768 12L9.596 15.551Z"/>
  </svg>
);

const LinkedinIcon = ({ size = 16, fill = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13.7 10.283 13.7 13.396V19H10.7V8H13.7V9.565C15.093 7.159 20 6.942 20 12.011V19Z"/>
  </svg>
);


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#hero' },
    { name: 'Products', path: '#products' },
    { name: 'Applications', path: '#applications' },
    { name: 'Benefits', path: '#benefits' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-border-subtle shadow-sm">
      
      {/* TIER 1: Top Bar (Brand Trust) */}
      <div className="bg-[#111827] text-white w-full py-2">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex justify-center md:justify-between items-center text-[10px] md:text-[11px] font-medium uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="text-[#FFC400]">★</span>
            <span>Rajasthan's No. 1 Adhesive Brand</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/80">
            <span>ISO 9001:2015 Certified</span>
            <span>|</span>
            <span>Trusted by Professionals</span>
          </div>
        </div>
      </div>

      {/* TIER 2: Middle Bar (Logo & Contact) */}
      <div className="w-full bg-white border-b border-border-subtle py-2 md:py-3">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex flex-col justify-center">
            <div className="font-display text-[22px] md:text-[26px] font-bold tracking-tight flex items-center leading-none">
              <span className="text-brand-primary">DUN</span>
              <span className="text-text-primary">GAR</span>
            </div>
            <p className="text-[10px] md:text-[11px] text-text-primary font-normal uppercase tracking-[0.2em] mt-0.5">
              CHEMICALS
            </p>
          </a>

          {/* Contact Details (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            <div className="flex items-center gap-2">
              <span className="text-brand-strong">
                <Phone size={16} strokeWidth={2} />
              </span>
              <a href="tel:+918000567117" className="text-[13px] font-normal text-text-primary hover:text-brand-primary transition-colors">+91 80005 67117</a>
            </div>
            
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-text-secondary" />
              <a href="mailto:team@dungarchemicals.com" className="text-[13px] font-normal text-text-primary hover:text-brand-primary transition-colors">team@dungarchemicals.com</a>
            </div>

            <a href="#contact" className="bg-brand-strong text-white px-6 py-2.5 rounded-[4px] text-[13px] font-medium transition-transform hover:-translate-y-0.5 shadow-sm ml-2 flex items-center gap-2">
              Get a Quote <ChevronRight size={16} />
            </a>
          </div>

          {/* Mobile Action Button & Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3 z-50">
            <a href="#contact" className="bg-brand-strong text-white px-4 py-2 rounded-[4px] text-[11px] font-bold tracking-widest shadow-sm border border-brand-strong hover:bg-white hover:text-brand-strong transition-colors">
              QUOTE
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-1 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* TIER 3: Bottom Bar (Navigation) */}
      <div className="w-full bg-white border-b border-border-subtle hidden lg:block shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center h-[42px] space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`group relative text-[13px] md:text-[14px] font-medium transition-colors flex items-center h-full ${link.name === 'Home' ? 'text-brand-strong' : 'text-text-primary hover:text-brand-strong'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[3px] bg-brand-strong transition-all duration-300 ease-out ${link.name === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer (Premium Off-Canvas) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="fixed top-0 right-0 w-[85%] max-w-[400px] h-full bg-[#111827] z-[100] flex flex-col shadow-2xl lg:hidden overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex flex-col">
                  <div className="font-display text-[20px] font-bold tracking-tight flex items-center leading-none">
                    <span className="text-brand-primary">DUN</span>
                    <span className="text-white">GAR</span>
                  </div>
                  <p className="text-[9px] text-white/70 font-normal uppercase tracking-[0.2em] mt-1">
                    CHEMICALS
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 flex flex-col py-8 px-6 space-y-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between text-[22px] font-display font-medium text-white/90 hover:text-white border-b border-white/5 pb-4 transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-brand-primary opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300">
                      &rarr;
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Drawer Footer (CTA & Contact) */}
              <div className="p-6 bg-[#0a0f18] mt-auto">
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center items-center w-full bg-brand-primary hover:bg-brand-strong transition-colors text-white h-12 rounded-[4px] text-[14px] uppercase tracking-wider font-bold shadow-lg"
                >
                  Get a Quote
                </a>
                <div className="flex items-center justify-center gap-6 mt-6">
                  <a href="tel:+918000567117" className="text-white/60 hover:text-brand-primary transition-colors flex items-center gap-2 text-[13px]">
                    <Phone size={14} /> Call Us
                  </a>
                  <a href="mailto:team@dungarchemicals.com" className="text-white/60 hover:text-brand-primary transition-colors flex items-center gap-2 text-[13px]">
                    <Mail size={14} /> Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
