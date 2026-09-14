import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Search, ChevronLeft, ChevronRight, Star, Trophy, Droplet, Droplets, ShieldCheck, Users, Award, MapPin, Armchair, Layers, SprayCan, Wrench, Zap, Settings, FlaskConical, Clock, Activity, Shield, Globe, Hexagon, Component, Factory, Microscope, Cpu, Package, Flame, TestTube, Thermometer, Wind, Radar, Box, ZapIcon, CheckCircle, Sun, Handshake, Sparkles } from 'lucide-react';
import heroBgImg from '../assets/hero-bg.png';
import hero1Img from '../assets/hero-1.PNG';
import logoImg from '../assets/logo.png';
import productImg from '../assets/product.png';
import actualProductImg from '../assets/product.png';
import aplicationImg from '../assets/aplication.PNG';
import aplicationPhoneImg from '../assets/aplication-phone.PNG';
import gelGlueImg from '../assets/credofix-gel-glue.PNG';
import rapidGlueImg from '../assets/credofix-rapid-glue.PNG';
import activatorSprayImg from '../assets/activator-spray.PNG';
import heroBgFinalImg from '../assets/hero-bg-finl.PNG';
function Counter({ from = 0, to, duration = 2, delay = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const formatted = useTransform(count, (latest) => prefix + Math.round(latest).toLocaleString() + suffix);

  useEffect(() => {
    if (isInView) {
      let controls;
      const timeout = setTimeout(() => {
        controls = animate(count, to, { duration, ease: "easeOut" });
      }, delay * 1000);
      return () => {
        clearTimeout(timeout);
        if (controls) controls.stop();
      };
    }
  }, [isInView, to, duration, delay, count]);

}




// Premium Hero Images
const heroImages = [
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80'
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 md:py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <h4 className={`text-[15px] md:text-[16px] font-semibold pr-8 transition-colors ${isOpen ? 'text-[#FF7A00]' : 'text-[#1A1A2E] group-hover:text-[#FF7A00]'}`}>{question}</h4>
        <span className={`shrink-0 text-xl md:text-2xl font-light w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-orange-50 text-[#FF7A00]' : 'bg-gray-50 text-gray-400 group-hover:text-[#FF7A00]'}`}>
          {isOpen ? '×' : '+'}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 text-[14px] leading-relaxed max-w-4xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [mobileProductIndex, setMobileProductIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeApp, setActiveApp] = useState(0);

  // Hero Scroll Animation Hooks
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const heroRadius = useTransform(scrollY, [0, 400], ["0px", "40px"]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => setHeroIndex((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  // Auto-play the slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    let message = `*New Dealer Application*%0A%0A`;
    message += `*Name:* ${data.name || 'N/A'}%0A`;
    message += `*Email:* ${data.email || 'N/A'}%0A`;
    message += `*Mobile:* ${data.mobile || 'N/A'}%0A`;
    message += `*Pincode:* ${data.pincode || 'N/A'}%0A`;
    message += `*Business Type:* ${data.business || 'N/A'}%0A`;
    message += `*GST Number:* ${data.gst || 'N/A'}%0A`;
    message += `*WhatsApp Updates:* ${data.whatsappUpdates ? 'Yes' : 'No'}`;

    window.open(`https://wa.me/919672444677?text=${message}`, '_blank');
  };

  const categories = ['All Products', 'Gel Glue', 'Rapid Glue', 'Activator Spray'];
  
  const applications = [
    {
      title: "Woodworking",
      desc: "Perfectly binds solid wood, plywood, and softwoods.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><path d="M4 16v4"/><path d="M20 16v4"/><path d="M12 20v-4"/><path d="M8 12h8"/><path d="M10 8h4"/><path d="M12 4v4"/></svg>,
      img: "https://images.pexels.com/photos/1750059/pexels-photo-1750059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Laminates",
      desc: "Expertly secures laminates for a bubble-free finish.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
      img: "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Industrial",
      desc: "High stress bearing capacity for heavy structures.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
      img: "https://images.pexels.com/photos/1750058/pexels-photo-1750058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Edge Banding",
      desc: "Instant fixing for edges, trims, and quick repairs.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"/></svg>,
      img: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const products = [
    {
      id: 1,
      name: 'Gel Glue',
      tagline: 'King of Adhesives - Ultimate Bond',
      category: 'Gel Glue',
      bgColor: 'bg-white',
      accentColor: 'bg-indigo-700',
      textColor: 'text-slate-900',
      price: '$129',
      features: ['High Strength', 'Clear Finish', 'Fast Curing'],
      image: actualProductImg,
      isNew: true,
      rating: 5,
      reviews: 128
    },
    {
      id: 2,
      name: 'Rapid Glue',
      tagline: 'Super Fast Drying Adhesive',
      category: 'Rapid Glue',
      bgColor: 'bg-white',
      accentColor: 'bg-emerald-700',
      textColor: 'text-slate-900',
      price: '$89',
      features: ['Instant Bond', 'Multi-surface', 'Waterproof'],
      image: actualProductImg,
      rating: 4.8,
      reviews: 96
    },
    {
      id: 3,
      name: 'Activator Spray',
      tagline: 'Instant Bonding Accelerator',
      category: 'Activator Spray',
      bgColor: 'bg-white',
      accentColor: 'bg-amber-600',
      textColor: 'text-slate-900',
      price: '$159',
      features: ['Accelerator', 'Pro Grade', 'No Residue'],
      image: actualProductImg,
      rating: 4.9,
      reviews: 215
    }
  ];

  const filteredProducts = activeCategory === 'All Products' ? products : products.filter(p => p.category === activeCategory);

  // Smooth scroll helper for anchor links
  useEffect(() => {
    const handleHashClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = link.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  return (
    <div className="w-full bg-bg-primary text-text-primary selection:bg-surface-dark selection:text-white overflow-x-hidden">
      
      {/* ========================================================
          01 — HERO SECTION (Full Proportional Image — No Cropping)
          ======================================================== */}
      <div className="w-full relative bg-[#1A1A2E] overflow-hidden">
        {/* Full Image — enlarged on phone with product cluster centered */}
        <img 
          src={heroBgFinalImg} 
          alt="Credofix Adhesives Range" 
          className="w-full h-[330px] sm:h-[400px] md:h-auto object-cover object-[58%_center] md:object-center block"
        />
        
        {/* Subtle Dark Overlay for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20 z-0 pointer-events-none"></div>

        {/* Text Content & CTA Overlay */}
        <section id="hero" className="absolute inset-0 z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 w-full flex flex-col justify-end pb-5 sm:pb-8 lg:pb-14">
          
          {/* Text Content at Bottom Left */}
          <div className="w-full sm:w-[70%] md:w-[55%] lg:w-[50%] flex flex-col items-start z-20 mb-2 sm:mb-2 lg:mb-6">
            <h1 className="text-[19px] sm:text-[26px] md:text-[32px] lg:text-[40px] font-serif leading-[1.22] mb-3 sm:mb-4 lg:mb-5 tracking-wide text-white drop-shadow-md">
              The enduring bond<br />that lasts a lifetime
            </h1>
            
            {/* 2 Pill Buttons at Bottom Left */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-3.5">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-4 sm:px-6 lg:px-7 py-2 sm:py-2 lg:py-2.5 rounded-full bg-white text-black text-[11.5px] sm:text-[13px] font-semibold tracking-wide hover:bg-gray-100 transition-colors whitespace-nowrap shadow-md"
              >
                Explore Products
              </a>
              <a 
                href="tel:+919672444677" 
                className="inline-flex items-center justify-center px-4 sm:px-6 lg:px-7 py-2 sm:py-2 lg:py-2.5 rounded-full bg-black/40 backdrop-blur-xs border border-white/80 text-white text-[11.5px] sm:text-[13px] font-semibold tracking-wide hover:bg-white/20 transition-colors whitespace-nowrap shadow-md"
              >
                About Dungar
              </a>
            </div>
          </div>

          {/* Slider Dots Indicator */}
          <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20 pointer-events-none">
            <div className="w-6 sm:w-8 h-1 sm:h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 sm:w-1.5 h-1 sm:h-1.5 bg-white/60 rounded-full"></div>
            <div className="w-1.5 sm:w-1.5 h-1 sm:h-1.5 bg-white/60 rounded-full"></div>
          </div>
        </section>
      </div>

      {/* ========================================================
          01.5 — TRUST STRIP (2-Row Running Marquee)
          ======================================================== */}
      <div className="w-full bg-white py-8 sm:py-10 overflow-hidden flex flex-col gap-6">
        {/* Row 1 — scrolls left */}
        <div className="flex animate-marquee items-center gap-14 sm:gap-20 md:gap-28 pr-14 sm:pr-20 md:pr-28">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-14 sm:gap-20 md:gap-28 shrink-0">
              <span className="text-[13px] sm:text-[15px] font-black italic uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap shrink-0">Heavy Duty</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <Star strokeWidth={1.5} className="w-4 h-4 text-[#1A1A2E]" />
                <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap">Pro Grade</span>
              </div>
              <span className="text-[13px] sm:text-[15px] font-medium italic font-serif text-[#1A1A2E] whitespace-nowrap shrink-0">Long Lasting</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <ShieldCheck strokeWidth={1.5} className="w-4 h-4 text-[#1A1A2E]" />
                <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap">Trusted</span>
              </div>
              <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-widest text-[#1A1A2E] border border-[#1A1A2E] px-3 py-1 whitespace-nowrap shrink-0">All Weather</span>
            </div>
          ))}
        </div>
        {/* Row 2 — scrolls right */}
        <div className="flex animate-marquee-reverse items-center gap-14 sm:gap-20 md:gap-28 pr-14 sm:pr-20 md:pr-28">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-14 sm:gap-20 md:gap-28 shrink-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <Award strokeWidth={1.5} className="w-4 h-4 text-[#1A1A2E]" />
                <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap">Premium Quality</span>
              </div>
              <span className="text-[13px] sm:text-[15px] font-black italic uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap shrink-0">Instant Bond</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <Droplet strokeWidth={1.5} className="w-4 h-4 text-[#1A1A2E]" />
                <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap">Zero Residue</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Zap strokeWidth={1.5} className="w-4 h-4 text-[#1A1A2E]" />
                <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap">Fast Cure</span>
              </div>
              <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-widest text-[#1A1A2E] border border-[#1A1A2E] px-3 py-1 whitespace-nowrap shrink-0">Eco Friendly</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          03 — PREMIUM COLLECTION (Carousel)
          ======================================================== */}
      <section id="products" className="bg-[#f5f5f5] py-10 lg:py-16 relative z-20 w-full">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 w-full">

          <div className="text-center mb-8">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold font-serif text-[#1A1A2E] mb-4 tracking-tight">
              Premium Collection
            </h2>
            <p className="text-[14px] sm:text-[16px] text-gray-500 font-normal max-w-[600px] mx-auto">
              Industry-leading synthetic adhesives designed for maximum durability and uncompromised bond strength.
            </p>
          </div>

          {/* Filter Tabs with animated sliding black pill */}
          <div className="w-full flex justify-center px-2 mb-8 sm:mb-10">
            <div className="flex items-center justify-start sm:justify-center p-1 sm:p-1.5 bg-gray-100/90 rounded-full w-fit max-w-full border border-gray-200/80 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {['All Products', 'Gel Glue', 'Rapid Glue', 'Activator Spray'].map((tab) => {
                const isActive = activeCategory === tab;
                return (
                  <button 
                    key={tab}
                    onClick={() => {
                      setActiveCategory(tab);
                      setMobileProductIndex(0);
                    }}
                    className={`relative px-3 sm:px-6 py-1.5 sm:py-2.5 text-[11.5px] sm:text-[14px] font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap rounded-full cursor-pointer shrink-0 ${
                      isActive 
                        ? 'text-[#FF7A00]' 
                        : 'text-[#1A1A2E] hover:text-[#FF7A00]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-[#1A1A2E] rounded-full shadow-sm"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Product Cards Grid (md and up) */}
          <motion.div layout className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {[
                {
                  id: 'gel-glue',
                  category: 'Gel Glue',
                  name: 'Credofix Gel Glue',
                  tagline: 'High-Viscosity Instant Gel',
                  desc: 'Super strong instant bonding gel with non-drip formula, ideal for vertical surfaces & precision joints.',
                  specs: ['Non-Drip Formula', 'Anti-Blooming', 'All-Weather'],
                  img: gelGlueImg
                },
                {
                  id: 'rapid-glue',
                  category: 'Rapid Glue',
                  name: 'Credofix Rapid Glue',
                  tagline: 'Ultra-Fast Liquid Adhesive',
                  desc: 'Ultra-fast curing industrial adhesive engineered to penetrate micro-gaps and bond firmly in 5-10 seconds.',
                  specs: ['5-10s Curing', 'High Penetration', 'Invisible Joints'],
                  img: rapidGlueImg
                },
                {
                  id: 'activator-spray',
                  category: 'Activator Spray',
                  name: 'Credofix Activator Spray',
                  tagline: 'Aerosol Curing Accelerator',
                  desc: 'High-performance curing accelerator aerosol spray that bonds substrates instantly across difficult surfaces.',
                  specs: ['Instant Cure', 'Uniform Spray', 'Porous Surfaces'],
                  img: activatorSprayImg
                }
              ]
                .filter(p => activeCategory === 'All Products' || p.category === activeCategory)
                .map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link 
                      to="/product" 
                      className="group h-full cursor-pointer bg-white rounded-xl p-5 sm:p-6 border border-gray-200/90 hover:border-[#FF7A00]/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Image Container — seamless without inner box */}
                        <div className="w-full h-52 sm:h-60 flex items-center justify-center mb-5 relative">
                          <img 
                            src={product.img} 
                            alt={product.name} 
                            className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                          />
                        </div>

                        {/* Text Content */}
                        <div className="text-left mb-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00] block mb-1">
                            {product.tagline}
                          </span>
                          <h3 className="text-[18px] sm:text-[19px] font-bold text-[#1A1A2E] group-hover:text-[#FF7A00] transition-colors duration-300 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-[13px] text-gray-500 leading-relaxed mb-4 line-clamp-2">
                            {product.desc}
                          </p>

                          {/* Key Specs Pills */}
                          <div className="flex flex-wrap gap-1.5">
                            {product.specs.map(spec => (
                              <span key={spec} className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md group-hover:bg-orange-50 group-hover:text-[#FF7A00] transition-colors duration-300">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Full-width Button */}
                      <div className="w-full pt-4">
                        <span className="w-full py-2.5 sm:py-3 px-4 rounded-lg bg-[#1A1A2E] text-white text-[13px] sm:text-[14px] font-semibold flex items-center justify-center gap-2 group-hover:bg-[#FF7A00] group-hover:text-white transition-all duration-300 shadow-sm">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>

          {/* Mobile Single Product Slider (Visible on mobile only) */}
          {(() => {
            const mobileProducts = [
              {
                id: 'gel-glue',
                category: 'Gel Glue',
                name: 'Credofix Gel Glue',
                tagline: 'High-Viscosity Instant Gel',
                desc: 'Super strong instant bonding gel with non-drip formula, ideal for vertical surfaces & precision joints.',
                specs: ['Non-Drip Formula', 'Anti-Blooming', 'All-Weather'],
                img: gelGlueImg
              },
              {
                id: 'rapid-glue',
                category: 'Rapid Glue',
                name: 'Credofix Rapid Glue',
                tagline: 'Ultra-Fast Liquid Adhesive',
                desc: 'Ultra-fast curing industrial adhesive engineered to penetrate micro-gaps and bond firmly in 5-10 seconds.',
                specs: ['5-10s Curing', 'High Penetration', 'Invisible Joints'],
                img: rapidGlueImg
              },
              {
                id: 'activator-spray',
                category: 'Activator Spray',
                name: 'Credofix Activator Spray',
                tagline: 'Aerosol Curing Accelerator',
                desc: 'High-performance curing accelerator aerosol spray that bonds substrates instantly across difficult surfaces.',
                specs: ['Instant Cure', 'Uniform Spray', 'Porous Surfaces'],
                img: activatorSprayImg
              }
            ].filter(p => activeCategory === 'All Products' || p.category === activeCategory);

            const curIdx = mobileProductIndex % mobileProducts.length;
            const curProd = mobileProducts[curIdx] || mobileProducts[0];

            const goPrev = () => setMobileProductIndex(prev => (prev - 1 + mobileProducts.length) % mobileProducts.length);
            const goNext = () => setMobileProductIndex(prev => (prev + 1) % mobileProducts.length);

            return (
              <div className="block md:hidden relative max-w-[330px] sm:max-w-sm mx-auto px-1">
                {/* Thin Left Side Arrow */}
                {mobileProducts.length > 1 && (
                  <button
                    onClick={goPrev}
                    aria-label="Previous product"
                    className="absolute -left-3 top-[36%] -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 border border-gray-200/90 shadow-md flex items-center justify-center text-gray-700 hover:text-[#FF7A00] hover:border-[#FF7A00] active:scale-90 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                )}

                {/* Thin Right Side Arrow */}
                {mobileProducts.length > 1 && (
                  <button
                    onClick={goNext}
                    aria-label="Next product"
                    className="absolute -right-3 top-[36%] -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 border border-gray-200/90 shadow-md flex items-center justify-center text-gray-700 hover:text-[#FF7A00] hover:border-[#FF7A00] active:scale-90 transition-all"
                  >
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                )}

                {/* Single Product Card with Swipe Support */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={curProd.id}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -40) goNext();
                      else if (info.offset.x > 40) goPrev();
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="touch-pan-y cursor-grab active:cursor-grabbing"
                  >
                    <Link 
                      to="/product" 
                      className="group block bg-white rounded-xl p-5 border border-gray-200/90 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        {/* Image Container */}
                        <div className="w-full h-48 flex items-center justify-center mb-3 relative pointer-events-none">
                          <img 
                            src={curProd.img} 
                            alt={curProd.name} 
                            className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300" 
                          />
                        </div>

                        {/* Text Content */}
                        <div className="text-left mb-4 pointer-events-none">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00] block mb-1">
                            {curProd.tagline}
                          </span>
                          <h3 className="text-[18px] font-bold text-[#1A1A2E] mb-1.5">
                            {curProd.name}
                          </h3>
                          <p className="text-[12.5px] text-gray-500 leading-relaxed mb-3.5 line-clamp-2">
                            {curProd.desc}
                          </p>

                          {/* Key Specs Pills */}
                          <div className="flex flex-wrap gap-1.5">
                            {curProd.specs.map(spec => (
                              <span key={spec} className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-md">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Full-width Button */}
                      <div className="w-full pt-2">
                        <span className="w-full py-2.5 px-4 rounded-lg bg-[#1A1A2E] text-white text-[13px] font-semibold flex items-center justify-center gap-2 group-hover:bg-[#FF7A00] transition-colors shadow-sm">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                </AnimatePresence>

                {/* Thin Navigation Controls Below Card */}
                {mobileProducts.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button 
                      onClick={goPrev}
                      aria-label="Previous product"
                      className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#FF7A00] hover:border-[#FF7A00] active:scale-90 transition-all shadow-xs"
                    >
                      <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    
                    {/* Dots Indicator */}
                    <div className="flex gap-2 items-center">
                      {mobileProducts.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setMobileProductIndex(i)}
                          aria-label={`Go to product ${i + 1}`}
                          className={`transition-all duration-300 rounded-full ${
                            curIdx === i 
                              ? 'w-6 h-1.5 bg-[#FF7A00]' 
                              : 'w-1.5 h-1.5 bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={goNext}
                      aria-label="Next product"
                      className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#FF7A00] hover:border-[#FF7A00] active:scale-90 transition-all shadow-xs"
                    >
                      <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </div>
                )}
              </div>
            );
          })()}

        </div>
      </section>

      {/* ========================================================
          03.5 — PROMOTIONAL BANNER SECTION
          ======================================================== */}
      <section id="applications" className="w-full bg-white pt-2 pb-8 lg:pb-12 relative z-10">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="w-full flex flex-col rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative bg-white">
            
            {/* Image (Top) */}
            <div className="w-full bg-white">
              <img src={aplicationImg} alt="Dungar Chemicals Application" className="hidden md:block w-full h-auto" />
              <img src={aplicationPhoneImg} alt="Dungar Chemicals Application Mobile" className="block md:hidden w-full h-auto" />
            </div>

            {/* 4-Step Guide (Bottom) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 bg-[#FAFAFA] border-t border-gray-100">
              
              {/* Step 1 */}
              <div className="p-6 md:p-8 flex flex-col items-start hover:bg-white transition-colors duration-300">
                <Sparkles strokeWidth={1.5} className="w-8 h-8 text-[#FF7A00] mb-4" />
                <h4 className="text-[15px] font-medium text-[#1A1A2E] mb-2 leading-snug">
                  1. Clean Surface
                </h4>
                <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
                  Ensure both surfaces are clean, dry, and free from dust or grease.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 md:p-8 flex flex-col items-start hover:bg-white transition-colors duration-300">
                <SprayCan strokeWidth={1.5} className="w-8 h-8 text-[#FF7A00] mb-4" />
                <h4 className="text-[15px] font-medium text-[#1A1A2E] mb-2 leading-snug">
                  2. Active Spray
                </h4>
                <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
                  Spray the activator evenly on one of the surfaces and let it evaporate.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 md:p-8 flex flex-col items-start hover:bg-white transition-colors duration-300">
                <Droplet strokeWidth={1.5} className="w-8 h-8 text-[#FF7A00] mb-4" />
                <h4 className="text-[15px] font-medium text-[#1A1A2E] mb-2 leading-snug">
                  3. Apply Gel Glue
                </h4>
                <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
                  Apply a few drops of the gel glue on the other surface.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-6 md:p-8 flex flex-col items-start hover:bg-white transition-colors duration-300">
                <Zap strokeWidth={1.5} className="w-8 h-8 text-[#FF7A00] mb-4" />
                <h4 className="text-[15px] font-medium text-[#1A1A2E] mb-2 leading-snug">
                  4. Fast Bonding
                </h4>
                <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
                  Press the surfaces together immediately for a strong, instant bond.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* ========================================================
          04 — TESTIMONIALS (GOOGLE REVIEWS)
          ======================================================== */}
      <section className="w-full bg-[#FAFAFA] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] py-10 lg:py-12 relative z-10 border-t border-gray-100">
        <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-8 lg:px-12 text-center">
          
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-semibold text-[#333333] mb-3 tracking-tight">
            See What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#FF4500]">People</span> Say
          </h2>
          <p className="text-[15px] text-gray-500 font-normal mb-10 lg:mb-14">
            Customer satisfaction is always our top priority
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-16">
            
            {/* Left: Overall Rating */}
            <div className="flex flex-col items-center justify-center min-w-[200px] pt-4 shrink-0">
              <div className="text-[20px] font-bold text-[#1A1A2E] mb-2 uppercase tracking-wide">Excellent</div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#FFB900] text-[#FFB900]" />
                ))}
              </div>
              <div className="text-[13px] text-gray-600 mb-3 font-medium">Based on <strong>57 reviews</strong></div>
              <div className="text-[32px] font-bold tracking-tighter flex items-center justify-center">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>
            </div>

            {/* Right: Review Cards */}
            <div className="flex-1 flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory w-full hide-scrollbar" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              
              {/* Review 1 */}
              <div className="min-w-[280px] md:min-w-[320px] flex-1 bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] rounded-2xl p-6 text-left flex flex-col relative snap-start">
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold overflow-hidden shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Rakesh+B&background=random" alt="Rakesh B" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#1A1A2E] leading-tight mb-0.5">Rakesh B</div>
                      <div className="text-[12px] text-gray-500">11 months ago</div>
                    </div>
                  </div>
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-1 mb-3 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB900] text-[#FFB900]" />
                  ))}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="#4285F4"/>
                    <path d="M10.9 16.6l-4.5-4.5 1.4-1.4 3.1 3.1 7.1-7.1 1.4 1.4-8.5 8.5z" fill="#FFFFFF"/>
                  </svg>
                </div>
                <p className="text-[14px] text-gray-700 font-normal leading-relaxed whitespace-pre-line relative z-10">
                  Amazing company with super strong ethics on customer service.{"\n\n"}Very rare to find such experience.
                </p>
              </div>

              {/* Review 2 */}
              <div className="min-w-[280px] md:min-w-[320px] flex-1 bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] rounded-2xl p-6 text-left flex flex-col relative snap-start">
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold overflow-hidden shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Shivakumar+K&background=random" alt="Shivakumar K" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#1A1A2E] leading-tight mb-0.5">Shivakumar K</div>
                      <div className="text-[12px] text-gray-500">3 years ago</div>
                    </div>
                  </div>
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-1 mb-3 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB900] text-[#FFB900]" />
                  ))}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="#4285F4"/>
                    <path d="M10.9 16.6l-4.5-4.5 1.4-1.4 3.1 3.1 7.1-7.1 1.4 1.4-8.5 8.5z" fill="#FFFFFF"/>
                  </svg>
                </div>
                <p className="text-[14px] text-gray-700 font-normal leading-relaxed whitespace-pre-line relative z-10 line-clamp-4">
                  I found in Google and dropped message. Mr Vibhav called on same day and explain product description which i required.....
                </p>
                <button className="text-[12px] text-gray-400 text-left mt-2 relative z-10 hover:text-gray-600 transition-colors">Read more</button>
              </div>

              {/* Review 3 */}
              <div className="min-w-[280px] md:min-w-[320px] flex-1 bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] rounded-2xl p-6 text-left flex flex-col relative snap-start">
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-medium text-[16px] overflow-hidden shrink-0">
                      K
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#1A1A2E] leading-tight mb-0.5">Krishna S</div>
                      <div className="text-[12px] text-gray-500">3 years ago</div>
                    </div>
                  </div>
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-1 mb-3 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB900] text-[#FFB900]" />
                  ))}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="#4285F4"/>
                    <path d="M10.9 16.6l-4.5-4.5 1.4-1.4 3.1 3.1 7.1-7.1 1.4 1.4-8.5 8.5z" fill="#FFFFFF"/>
                  </svg>
                </div>
                <p className="text-[14px] text-gray-700 font-normal leading-relaxed whitespace-pre-line relative z-10">
                  Excellent
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          05 — FAQ SECTION
          ======================================================== */}
      <section id="faq" className="bg-white pt-8 pb-8 lg:pt-12 lg:pb-8 relative z-10 w-full border-t border-gray-100">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight text-center mb-10">
            FAQ's
          </h2>
          
          {/* ... faq content ... */}
          <div className="flex flex-col border-t border-gray-200">
            <FAQItem 
              question="What products does Dungar Chemicals manufacture?" 
              answer="Dungar Chemicals specializes in advanced instant-bonding solutions. Our flagship Credofix range includes high-performance Gel Glues, Rapid Glues, and Activator Sprays engineered specifically for Wood, PVC, Acrylic, and Stone applications." 
            />
            <FAQItem 
              question="How is Credofix Gel Glue different from standard adhesives?" 
              answer="Credofix Gel Glue is a premium, high-viscosity cyanoacrylate adhesive. Unlike standard liquid glues, its thick gel formula prevents dripping and absorption into porous surfaces, making it perfect for vertical applications and seamless woodworking." 
            />
            <FAQItem 
              question="When should I use the Activator Spray with Rapid Glue?" 
              answer="The Activator Spray is designed to be used with our Rapid Glue to instantly accelerate the curing process. Simply spray the activator on one surface, apply the Rapid Glue to the other, and press them together for a flawless, unbreakable bond within seconds." 
            />
            <FAQItem 
              question="How can I become an authorized dealer for Dungar Chemicals?" 
              answer="You can join our growing business network by filling out the 'Become a Dealer' form at the bottom of this page. Once submitted, our business development team will review your application and contact you directly via WhatsApp or phone." 
            />
            <FAQItem 
              question="What is the shelf life of Credofix instant adhesives?" 
              answer="When stored properly in a cool, dry place away from direct sunlight, Credofix adhesives maintain peak performance for up to 12 months. We recommend ensuring the cap is tightly sealed after every use to prevent the glue from curing inside the bottle." 
            />
          </div>

        </div>
      </section>

      {/* ========================================================
          06 — CONTACT DETAILS (BOLD BANNER)
          ======================================================== */}
      <section id="cta" className="bg-white pt-4 pb-8 lg:pt-6 lg:pb-12 w-full relative z-10">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="border border-slate-200 rounded-2xl p-6 lg:px-10 lg:py-8 bg-white shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-16 w-full mx-auto">
            
            {/* Left: Text Area */}
            <div className="w-full lg:w-[32%] flex flex-col justify-center">
              <span className="text-[13px] font-bold text-[#FF7A00] mb-1.5 uppercase tracking-wider">Partner with us</span>
              <h2 className="text-4xl md:text-[42px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#FF4500] leading-[1.05] mb-3 tracking-tight">
                Become a<br/>Dealer
              </h2>
              <p className="text-slate-500 text-[14px] leading-[1.6] max-w-[280px] font-medium">
                Join Dungar Chemicals and grow your business with our premium range of industrial and construction chemicals.
              </p>
            </div>
            
            {/* Right: Form Area */}
            <form onSubmit={handleContactSubmit} className="w-full lg:w-[68%] flex flex-col gap-4">
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input required type="text" name="name" placeholder="Enter your name" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-colors" />
                <input required type="email" name="email" placeholder="Enter your Email" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-colors" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input required type="tel" name="mobile" placeholder="Enter mobile number" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-colors" />
                <input required type="text" name="pincode" placeholder="Enter your Pincode" className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-colors" />
              </div>
              
              <label className="flex items-center gap-2 cursor-pointer w-max mt-0.5">
                <input type="checkbox" name="whatsappUpdates" className="w-4 h-4 rounded border-gray-300 text-[#FF7A00] focus:ring-[#FF7A00]" defaultChecked />
                <span className="text-[13px] font-bold text-[#1A1A2E]">Get updates on WhatsApp</span>
              </label>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-1">
                <div className="flex-1">
                  <div className="text-[12px] font-bold text-[#1A1A2E] mb-2.5">Current Business Type? <span className="text-[#FF7A00]">*</span></div>
                  <div className="flex gap-4 items-center">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input required type="radio" value="Retailer" name="business" className="w-3.5 h-3.5 text-[#FF7A00] border-gray-300 focus:ring-[#FF7A00]" />
                      <span className="text-[12px] text-gray-600 font-medium">Retailer</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input required type="radio" value="Distributor" name="business" className="w-3.5 h-3.5 text-[#FF7A00] border-gray-300 focus:ring-[#FF7A00]" />
                      <span className="text-[12px] text-gray-600 font-medium">Distributor</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input required type="radio" value="Other" name="business" className="w-3.5 h-3.5 text-[#FF7A00] border-gray-300 focus:ring-[#FF7A00]" />
                      <span className="text-[12px] text-gray-600 font-medium">Other</span>
                    </label>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="text-[12px] font-bold text-[#1A1A2E] mb-1.5">GST Number <span className="text-[#FF7A00]">*</span></div>
                  <input required type="text" name="gst" pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$" title="Please enter a valid GST number (e.g., 22AAAAA0000A1Z5)" placeholder="Enter GST Number" className="w-full border border-gray-200 rounded-md px-4 py-2 text-[13px] focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-colors uppercase" />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-3 pt-3 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 leading-[1.5] max-w-sm">
                  By proceeding, I authorize Dungar Chemicals and its authorized partners to contact me via WhatsApp, phone calls, SMS and e-mail and I agree to the <a href="#" className="text-[#FF7A00] hover:underline">Terms & Conditions</a> and <a href="#" className="text-[#FF7A00] hover:underline">Privacy Policy</a>
                </p>
                
                <button type="submit" className="shrink-0 bg-gradient-to-r from-[#FF8C00] to-[#FF4500] hover:from-[#FF7A00] hover:to-[#E03E00] text-white px-7 py-3 rounded-lg text-[13px] font-bold flex items-center gap-2 hover:shadow-md transition-all shadow-sm w-full sm:w-auto justify-center">
                  Submit Application <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
