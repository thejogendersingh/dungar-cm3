import { useState } from 'react';
import { Menu, X, Phone, Mail, Zap } from 'lucide-react';

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '#hero' },
    { name: 'Products', path: '#products' },
    { name: 'Applications', path: '#applications' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 flex flex-col shadow-sm">
      
      {/* Tier 1: Announcement Banner (Dark Blue) */}
      <div className="bg-surface-dark text-white py-2 px-4 text-center text-[13px] font-bold flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-1.5">
          <Zap size={15} fill="currentColor" className="text-white"/>
          <span>NEW: Credofix Max Strength Adhesive - 30% Stronger Bond!</span>
        </div>
        <a href="#products" className="hidden sm:inline-block bg-white text-surface-dark px-4 py-1.5 rounded-[4px] text-[11px] hover:bg-bg-primary transition-colors">
          Learn More
        </a>
      </div>

      {/* Tier 2: Info & Contact Bar (Dark Grey) */}
      <div className="bg-[#232428] text-white py-2 sm:py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center text-[12px] sm:text-[13px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a href="tel:8000567117" className="flex items-center gap-1.5 sm:gap-2 hover:text-white/80 transition-colors">
              <Phone size={14} fill="currentColor" /> <span className="tracking-wider">8000567117</span>
            </a>
            <span className="opacity-30 hidden sm:inline">|</span>
            <a href="mailto:info@dungarchemicals.com" className="hidden sm:flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail size={14} fill="currentColor" /> info@dungarchemicals.com
            </a>
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <a href="#facebook" className="hover:text-white/80 transition-colors"><FacebookIcon size={16} fill="currentColor" /></a>
            <a href="#youtube" className="hover:text-white/80 transition-colors"><YoutubeIcon size={16} fill="currentColor" /></a>
            <a href="#instagram" className="hover:text-white/80 transition-colors"><InstagramIcon size={16} fill="currentColor" /></a>
          </div>
        </div>
      </div>

      {/* Tier 3: Main Navigation (White) */}
      <div className="bg-white border-b border-border-subtle transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[64px] md:h-[76px]">
            
            {/* Brand Logo */}
            <a href="#hero" className="flex flex-col justify-center group py-2">
              <span className="font-display text-[22px] md:text-[26px] font-extrabold text-text-primary tracking-tight">
                Credofix<span className="text-surface-dark">.</span>
              </span>
            </a>

            {/* Desktop Nav (Center/Left alignment) */}
            <div className="hidden md:flex flex-1 items-center justify-center pl-8 lg:pl-16">
              <div className="flex space-x-8 lg:space-x-10">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className="text-body-small font-bold text-text-primary hover:text-surface-dark transition-colors smooth-hover"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Desktop CTA (Dark Blue) */}
            <div className="hidden md:block">
              <a 
                href="#contact" 
                className="bg-surface-dark hover:opacity-90 text-white px-6 py-2.5 rounded-[4px] text-[15px] font-bold transition-opacity shadow-sm"
              >
                Find Your Solution
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-text-primary hover:text-text-secondary focus:outline-none p-2 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div 
          className={`md:hidden absolute w-full bg-white border-b border-border-subtle transition-all duration-300 origin-top overflow-hidden shadow-lg ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-body-primary font-bold text-text-primary hover:bg-bg-primary transition-colors rounded-[4px]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-4 pb-2">
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="flex justify-center items-center w-full bg-surface-dark text-white h-12 px-4 rounded-[4px] text-[15px] font-bold active:scale-[0.98] transition-transform"
              >
                Find Your Solution
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
