import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Search, ChevronLeft, ChevronRight, Star, Trophy, Droplet, Droplets, ShieldCheck, Users, Award, MapPin, Armchair, Layers, SprayCan, Wrench, Zap, Settings, FlaskConical, Clock, Activity, Shield, Globe, Hexagon, Component, Factory, Microscope, Cpu, Package, Flame, TestTube, Thermometer, Wind, Radar, Box, ZapIcon, CheckCircle, Sun, Handshake, Sparkles } from 'lucide-react';
import { FaBottleDroplet } from 'react-icons/fa6';
import gelGlueImg from '../assets/credofix-gel-glue.PNG';
import rapidGlueImg from '../assets/credofix-rapid-glue.PNG';
import activatorSprayImg from '../assets/activator-spray.PNG';
import heroBgFinalImg from '../assets/hero-bg-finl.PNG';
import phoneHeroBgImg from '../assets/phone-hero-bg.PNG';
import aplicationImg from '../assets/aplication.PNG';
import aplicationPhoneImg from '../assets/aplication-phone.PNG';
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
      image: gelGlueImg,
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
      image: rapidGlueImg,
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
      image: activatorSprayImg,
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
          01 — HERO SECTION
          ======================================================== */}
      
      {/* --- MOBILE HERO (Single Corner-to-Corner Image with Elegant Bottom CTA) --- */}
      <section id="hero" className="block md:hidden w-full relative bg-[#1A1A2E] overflow-hidden">
        {/* Full Corner-to-Corner Image */}
        <img 
          src={phoneHeroBgImg} 
          alt="Credofix Adhesives Range Dungar Chemicals" 
          className="w-full h-auto object-cover block"
        />

        {/* Ambient Gradient Overlay (Soft contrast at bottom for text & CTA) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"></div>

        {/* Text & Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end items-start px-5 pb-7 w-full">
          {/* Headline in Elegant Editorial Serif */}
          <h1 className="text-[25px] xs:text-[28px] font-['Cormorant_Garamond',serif] font-semibold leading-[1.16] text-white tracking-wide mb-3 text-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            Crafted for Strength,<br />Built to Last
          </h1>
          
          {/* Sleek Buttons (Reduced Height, Normal Comfortable Width) */}
          <div className="flex flex-row items-center gap-2.5">
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-white text-black text-[11.5px] font-semibold tracking-wide hover:bg-gray-100 active:scale-95 transition-all shadow-md whitespace-nowrap leading-tight"
            >
              Explore Products
            </a>
            <a 
              href="#cta" 
              className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-black/50 backdrop-blur-xs border border-white/80 text-white text-[11.5px] font-semibold tracking-wide hover:bg-white/20 active:scale-95 transition-all shadow-md whitespace-nowrap leading-tight"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Slider Dots Indicator (Mobile) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 pointer-events-none">
          <div className="w-7 h-1.5 bg-white rounded-full shadow-xs"></div>
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full shadow-xs"></div>
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full shadow-xs"></div>
        </div>
      </section>

      {/* --- DESKTOP HERO (Wide Panoramic 3:1 with Bottom-Left Text Overlay) --- */}
      <div className="hidden md:block w-full relative bg-[#1A1A2E] overflow-hidden">
        <img 
          src={heroBgFinalImg} 
          alt="Credofix Adhesives Range" 
          className="w-full h-auto object-cover"
        />
        
        {/* Overlay for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20 z-0 pointer-events-none"></div>

        {/* Text Content & CTA Overlay */}
        <section className="absolute inset-0 z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 w-full flex flex-col justify-end items-start text-left pb-8 lg:pb-10">
          <div className="w-[52%] lg:w-[46%] max-w-[500px] flex flex-col items-start text-left z-20 mb-3">
            <h1 className="text-[30px] md:text-[34px] lg:text-[40px] font-['Cormorant_Garamond',serif] font-semibold leading-[1.14] mb-3.5 tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Crafted for Strength,<br />Built to Last
            </h1>
            
            <div className="flex flex-row items-center justify-start gap-2.5">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-5.5 py-1.5 rounded-full bg-white text-black text-[12px] font-semibold tracking-wide hover:bg-gray-100 transition-colors whitespace-nowrap shadow-md leading-tight"
              >
                Explore Products
              </a>
              <a 
                href="#cta" 
                className="inline-flex items-center justify-center px-5.5 py-1.5 rounded-full bg-black/50 backdrop-blur-xs border border-white/80 text-white text-[12px] font-semibold tracking-wide hover:bg-white/20 transition-colors whitespace-nowrap shadow-md leading-tight"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Slider Dots Indicator */}
          <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 pointer-events-none">
            <div className="w-8 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
          </div>
        </section>
      </div>

      {/* ========================================================
          01.5 — TRUST STRIP (2-Row Running Marquee)
          ======================================================== */}
      <div className="w-full bg-white border-y border-gray-100 py-7 sm:py-9 overflow-hidden flex flex-col gap-5 sm:gap-6">
        {/* Row 1 — scrolls left */}
        <div className="flex animate-marquee items-center gap-14 sm:gap-20 md:gap-28 pr-14 sm:pr-20 md:pr-28">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-14 sm:gap-20 md:gap-28 shrink-0">
              <span className="text-[13px] sm:text-[15px] font-black italic uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap shrink-0">Heavy Duty</span>
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <Star strokeWidth={1.65} className="w-7 h-7 sm:w-8 sm:h-8 text-[#1A1A2E] shrink-0" />
                <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap">Pro Grade</span>
              </div>
              <span className="text-[13px] sm:text-[15px] font-normal italic font-serif text-gray-500 whitespace-nowrap shrink-0">Long Lasting</span>
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <ShieldCheck strokeWidth={1.65} className="w-7 h-7 sm:w-8 sm:h-8 text-[#1A1A2E] shrink-0" />
                <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap">Trusted</span>
              </div>
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-white bg-[#1A1A2E] px-3.5 py-1 rounded-full whitespace-nowrap shrink-0 shadow-2xs">All Weather</span>
            </div>
          ))}
        </div>
        {/* Row 2 — scrolls right */}
        <div className="flex animate-marquee-reverse items-center gap-14 sm:gap-20 md:gap-28 pr-14 sm:pr-20 md:pr-28">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-14 sm:gap-20 md:gap-28 shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <Award strokeWidth={1.65} className="w-7 h-7 sm:w-8 sm:h-8 text-[#1A1A2E] shrink-0" />
                <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap">Premium Quality</span>
              </div>
              <span className="text-[13px] sm:text-[15px] font-black italic uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap shrink-0">Instant Bond</span>
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <Droplet strokeWidth={1.65} className="w-7 h-7 sm:w-8 sm:h-8 text-[#1A1A2E] shrink-0" />
                <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap">Zero Residue</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <Zap strokeWidth={1.65} className="w-7 h-7 sm:w-8 sm:h-8 text-[#1A1A2E] shrink-0" />
                <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-[#1A1A2E] whitespace-nowrap">Fast Cure</span>
              </div>
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-white bg-[#1A1A2E] px-3.5 py-1 rounded-full whitespace-nowrap shrink-0 shadow-2xs">Eco Friendly</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          03 — PRODUCT SHOWCASE & CAROUSEL (Cohesive Site Vibe)
          ======================================================== */}
      <section id="products" className="w-full bg-[#FAFAFA] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] py-16 sm:py-24 scroll-mt-28 relative z-20 overflow-hidden border-t border-gray-100">
        <div className="max-w-[1280px] w-full mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section Header: Cohesive Brand Styling */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[11px] font-bold text-[#FF7A00] uppercase tracking-wider mb-3.5 shadow-2xs">
              <svg viewBox="0 70 512 370" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M256 81L512 165V430H392V252H120V430H0V165L256 81ZM150 281H362V430H150V281ZM180 312H241V341H180V312ZM271 312H332V341H271V312ZM180 372H241V401H180V372ZM271 372H332V401H271V372Z" />
              </svg>
              <span>Direct Factory Formulations</span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-semibold text-[#1A1A2E] tracking-tight leading-tight">
              Engineered For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#FF4500]">Unbreakable</span> Bonds
            </h2>
            <p className="text-[14.5px] sm:text-[15px] text-gray-500 font-normal mt-3 leading-relaxed">
              Industrial-grade cyanoacrylate adhesives and accelerator sprays formulated for instant bonding, structural strength, and zero-blooming finishes.
            </p>

            {/* Filter Pills (Rounded-Full Site Style) */}
            <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white border border-gray-200 shadow-2xs mt-7 overflow-x-auto no-scrollbar max-w-full">
              {['All Products', 'Gel Glue', 'Rapid Glue', 'Activator Spray'].map((tab) => {
                const isTabActive = activeCategory === tab;
                return (
                  <button 
                    key={tab}
                    onClick={() => {
                      setActiveCategory(tab);
                      setMobileProductIndex(0);
                    }}
                    className={`px-4 sm:px-5 py-2 rounded-full text-[12.5px] transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isTabActive 
                        ? 'bg-[#1A1A2E] text-white shadow-xs font-semibold' 
                        : 'text-gray-600 hover:text-black font-normal'
                    }`}
                  >
                    {tab === 'All Products' ? 'All Range' : tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Data Definition */}
          {(() => {
            const productList = [
              {
                id: 'gel-glue',
                category: 'Gel Glue',
                bottleNo: 'CREDOFIX 32',
                name: 'Gel Glue',
                pack: '250g Net',
                desc: 'Thixotropic non-drip formula engineered for vertical laminate joints and heavy woodwork without sagging.',
                highlights: ['Non-Drip Formula', 'Vertical Joints', 'High Shear Bond'],
                img: gelGlueImg
              },
              {
                id: 'rapid-glue',
                category: 'Rapid Glue',
                bottleNo: 'CREDOFIX 28',
                name: 'Rapid Glue',
                pack: '50g Bottle',
                desc: 'Low-viscosity cyanoacrylate formula for instant 5-second penetration into edge banding, mitres, and acrylics.',
                highlights: ['Instant 5s Grip', 'Edge Banding', 'Zero Blooming'],
                img: rapidGlueImg
              },
              {
                id: 'activator-spray',
                category: 'Activator Spray',
                bottleNo: 'SPRAY ACTIVATOR',
                name: 'Activator Spray',
                pack: '200ml Aerosol',
                desc: 'Aerosol chemical accelerator that triggers sub-second polymerization on porous wood, MDF, and cold weather.',
                highlights: ['Sub-Second Cure', 'Micro-Mist Primer', 'Porous Woods & MDF'],
                img: activatorSprayImg
              }
            ];

            const filtered = productList.filter(p => activeCategory === 'All Products' || p.category === activeCategory);
            const curIdx = mobileProductIndex % (filtered.length || 1);
            const curProd = filtered[curIdx] || filtered[0];

            const goPrev = () => setMobileProductIndex(prev => (prev - 1 + filtered.length) % filtered.length);
            const goNext = () => setMobileProductIndex(prev => (prev + 1) % filtered.length);

            return (
              <>
                {/* Desktop 3-Card Grid (Matching Section 04 & 03.5 Card Vibe) */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-[1140px] mx-auto">
                  {filtered.map((item) => (
                    <div 
                      key={item.id}
                      className="group bg-white border border-gray-200/80 hover:border-gray-300 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 text-left"
                    >
                      <div>
                        {/* Top Meta Bar */}
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                          <div className="flex items-center gap-1.5">
                            {item.category === 'Activator Spray' ? (
                              <SprayCan className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" strokeWidth={2.2} />
                            ) : (
                              <FaBottleDroplet className="w-3 h-3.5 text-[#FF7A00] shrink-0" />
                            )}
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                              {item.bottleNo}
                            </span>
                          </div>
                          <span className="text-[11px] font-semibold text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded-full">
                            {item.pack}
                          </span>
                        </div>

                        {/* Product Bottle Stage */}
                        <div className="w-full h-56 sm:h-64 rounded-xl bg-gradient-to-b from-gray-50/60 to-white flex items-center justify-center p-4 my-4 relative overflow-hidden">
                          <img 
                            src={item.img} 
                            alt={`${item.bottleNo} ${item.name}`} 
                            className="max-h-52 sm:max-h-56 w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-105" 
                          />
                        </div>

                        {/* Details */}
                        <h3 className="text-[20px] font-bold text-[#1A1A2E] leading-snug group-hover:text-[#FF7A00] transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-[13px] text-gray-500 font-normal mt-2 line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-gray-100">
                          {item.highlights.map((h, i) => (
                            <span key={i} className="text-[11px] text-gray-600 bg-gray-50 border border-gray-200/60 px-2 py-0.5 rounded-md font-medium">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link 
                        to="/product"
                        className="mt-6 w-full py-3 rounded-xl bg-[#1A1A2E] hover:bg-gradient-to-r hover:from-[#FF8C00] hover:to-[#FF4500] text-white text-[13px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-xs group-hover:shadow-md"
                      >
                        <span>View Specifications</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Mobile Carousel (Smooth Swipe & Card Navigation Matching Site) */}
                <div className="block md:hidden relative w-full px-1">
                  <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] text-left max-w-[340px] mx-auto">
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-1.5">
                        {curProd.category === 'Activator Spray' ? (
                          <SprayCan className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" strokeWidth={2.2} />
                        ) : (
                          <FaBottleDroplet className="w-3 h-3.5 text-[#FF7A00] shrink-0" />
                        )}
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          {curProd.bottleNo}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded-full">
                        {curProd.pack}
                      </span>
                    </div>

                    {/* Product Bottle Stage */}
                    <div className="w-full h-56 rounded-xl bg-gradient-to-b from-gray-50/60 to-white flex items-center justify-center p-4 my-4 relative overflow-hidden">
                      <img 
                        src={curProd.img} 
                        alt={`${curProd.bottleNo} ${curProd.name}`} 
                        className="max-h-48 w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]" 
                      />
                    </div>

                    {/* Details */}
                    <h3 className="text-[20px] font-bold text-[#1A1A2E] leading-snug">
                      {curProd.name}
                    </h3>
                    <p className="text-[13px] text-gray-500 font-normal mt-2 leading-relaxed">
                      {curProd.desc}
                    </p>

                    {/* Feature Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-gray-100">
                      {curProd.highlights.map((h, i) => (
                        <span key={i} className="text-[11px] text-gray-600 bg-gray-50 border border-gray-200/60 px-2 py-0.5 rounded-md font-medium">
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Link 
                      to="/product"
                      className="mt-6 w-full py-3 rounded-xl bg-[#1A1A2E] hover:bg-gradient-to-r hover:from-[#FF8C00] hover:to-[#FF4500] text-white text-[13px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-xs"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Carousel Chevrons & Pill Dots */}
                  {filtered.length > 1 && (
                    <div className="flex items-center justify-between mt-6 px-2 max-w-[340px] mx-auto">
                      <button 
                        onClick={goPrev}
                        aria-label="Previous product"
                        className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-xs flex items-center justify-center text-gray-700 hover:text-[#FF7A00] active:scale-95 transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4.5 h-4.5" />
                      </button>

                      {/* Indicator Dots */}
                      <div className="flex items-center gap-2">
                        {filtered.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setMobileProductIndex(i)}
                            aria-label={`Go to product ${i + 1}`}
                            className={`transition-all duration-300 rounded-full ${
                              curIdx === i 
                                ? 'w-6 h-1.5 bg-[#FF7A00]' 
                                : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>

                      <button 
                        onClick={goNext}
                        aria-label="Next product"
                        className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-xs flex items-center justify-center text-gray-700 hover:text-[#FF7A00] active:scale-95 transition-all cursor-pointer"
                      >
                        <ChevronRight className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  )}
                </div>
              </>
            );
          })()}

        </div>
      </section>

      {/* ========================================================
          03.5 — PROMOTIONAL APPLICATION BANNER (Proper Vertical Gap)
          ======================================================== */}
      <section id="applications" className="w-full bg-white pt-12 sm:pt-16 pb-16 sm:pb-24 relative z-10 border-t border-gray-100">
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
              <div className="text-[13px] text-gray-600 mb-3 font-medium">Based on <strong>42 verified reviews</strong></div>
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
            <div className="flex-1 flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory w-full hide-scrollbar no-scrollbar" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              
              {/* Review 1 */}
              <div className="min-w-[280px] md:min-w-[320px] flex-1 bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] rounded-2xl p-6 text-left flex flex-col relative snap-start">
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold overflow-hidden shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Rakesh+B&background=1A1A2E&color=fff" alt="Rakesh B" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#1A1A2E] leading-tight mb-0.5">Rakesh B.</div>
                      <div className="text-[12px] text-gray-500">2 weeks ago</div>
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
                <p className="text-[13.5px] text-gray-700 font-normal leading-relaxed relative z-10">
                  Recently started using Credofix Gel Glue for PVC edge banding and acrylic sheets. Zero white blooming marks and bonds firmly within seconds. Super impressed with the quality!
                </p>
              </div>

              {/* Review 2 */}
              <div className="min-w-[280px] md:min-w-[320px] flex-1 bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] rounded-2xl p-6 text-left flex flex-col relative snap-start">
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold overflow-hidden shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Shivakumar+K&background=FF7A00&color=fff" alt="Shivakumar K" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#1A1A2E] leading-tight mb-0.5">Shivakumar K.</div>
                      <div className="text-[12px] text-gray-500">3 weeks ago</div>
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
                <p className="text-[13.5px] text-gray-700 font-normal leading-relaxed relative z-10">
                  Contacted Dungar Chemicals team and Mr. Vibhav explained the adhesives thoroughly. The Rapid Glue with Activator Spray works in just 2 seconds on mitre joints. Very prompt dispatch!
                </p>
              </div>

              {/* Review 3 */}
              <div className="min-w-[280px] md:min-w-[320px] flex-1 bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] rounded-2xl p-6 text-left flex flex-col relative snap-start">
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold overflow-hidden shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Krishna+S&background=333&color=fff" alt="Krishna S" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#1A1A2E] leading-tight mb-0.5">Krishna Sharma</div>
                      <div className="text-[12px] text-gray-500">1 month ago</div>
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
                <p className="text-[13.5px] text-gray-700 font-normal leading-relaxed relative z-10">
                  Switched to Credofix for our modular furniture work last month. The thick gel formula does not drip on vertical panels. Excellent bonding strength and clean aesthetic finish.
                </p>
              </div>

              {/* Review 4 */}
              <div className="min-w-[280px] md:min-w-[320px] flex-1 bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] rounded-2xl p-6 text-left flex flex-col relative snap-start">
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold overflow-hidden shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Amit+P&background=1A1A2E&color=FF7A00" alt="Amit Patel" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[#1A1A2E] leading-tight mb-0.5">Amit Patel</div>
                      <div className="text-[12px] text-gray-500">1 month ago</div>
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
                <p className="text-[13.5px] text-gray-700 font-normal leading-relaxed relative z-10">
                  Started stocking Credofix adhesives at our hardware store. Great dealer support from Dungar Chemicals team and carpenters are already asking specifically for this brand.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          05 — CONTACT DETAILS (BOLD BANNER)
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
