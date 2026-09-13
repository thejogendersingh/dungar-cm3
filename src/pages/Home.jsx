import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Search, ChevronLeft, ChevronRight, Star, Trophy, Droplet, Droplets, ShieldCheck, Users, Award, MapPin, Armchair, Layers, SprayCan, Wrench, Zap, Settings, FlaskConical, Clock, Activity, Shield, Globe, Hexagon, Component, Factory, Microscope, Cpu, Package, Flame, TestTube, Thermometer, Wind, Radar, Box, ZapIcon, CheckCircle } from 'lucide-react';
import heroBgImg from '../assets/hero-bg.png';
import hero1Img from '../assets/hero-1.PNG';
import logoImg from '../assets/logo.png';
import productImg from '../assets/product.png';
import actualProductImg from '../assets/product.png';
import aplicationImg from '../assets/aplication.PNG';
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
        <h4 className="text-[15px] md:text-[16px] font-semibold text-slate-800 pr-8 group-hover:text-amber-600 transition-colors">{question}</h4>
        <span className="shrink-0 text-xl md:text-2xl font-light text-slate-500 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
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
          01 — HERO SECTION (With Scroll Animation)
          ======================================================== */}
      <motion.div
        style={{ 
          scale: heroScale, 
          borderRadius: heroRadius,
          transformOrigin: 'top center'
        }}
        className="w-full mx-auto overflow-hidden bg-slate-950"
      >
        <section id="hero" className="relative w-full h-screen flex items-center overflow-hidden bg-slate-900 shadow-sm">
          
          <AnimatePresence initial={false}>
            <motion.img 
              key={heroIndex}
              src={heroImages[heroIndex]}
              alt="Hero Slide"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Slight gradient overlay just to make left text readable if image is bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />

          {/* Main Content Container */}
          <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between h-full pt-[110px] md:pt-[130px] pb-16 gap-10 md:gap-0">
            
            {/* Left Side: Headline & Button */}
            <div className="w-full md:w-1/2 flex flex-col items-start pt-10 md:pt-0">
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white leading-[1.2] mb-6 drop-shadow-lg">
                Industrial Adhesives<br />For Every Bond !
              </h1>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="border border-white/80 rounded-t-lg rounded-bl-lg p-2 w-[70px] shrink-0">
                   <div className="text-white text-lg font-medium border-b border-white/50 pb-0.5 mb-1">100+</div>
                   <div className="text-white text-[9px] uppercase tracking-wider">Grades</div>
                </div>
                <div className="text-white text-[14px] lg:text-[15px] font-medium leading-snug drop-shadow-md">
                  To Reflect<br />Your Standards
                </div>
              </div>

              <a 
                href="#products" 
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white text-white text-[13px] font-medium hover:bg-white hover:text-black transition-colors backdrop-blur-sm bg-black/20"
              >
                Explore product catalogue
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Side: Floating White Card */}
            <div className="w-full md:w-[380px] lg:w-[400px] bg-white rounded-[10px] shadow-2xl p-8 lg:p-10 mt-12 md:mt-0">
              <h2 className="text-[28px] lg:text-[34px] font-light text-[#E5202B] mb-8 leading-[1.15]">
                Transform<br />your business
              </h2>
              
              <div className="grid grid-cols-3 gap-y-10 gap-x-2">
                {[
                  { icon: <Droplet className="w-[28px] h-[28px] text-[#4A4A4A] mx-auto mb-3 stroke-[1.2]" />, label: 'Woodworking\nadhesives' },
                  { icon: <Package className="w-[28px] h-[28px] text-[#4A4A4A] mx-auto mb-3 stroke-[1.2]" />, label: 'Packaging\nsolutions' },
                  { icon: <ShieldCheck className="w-[28px] h-[28px] text-[#4A4A4A] mx-auto mb-3 stroke-[1.2]" />, label: 'Waterproofing\nchemicals' },
                  { icon: <Settings className="w-[28px] h-[28px] text-[#4A4A4A] mx-auto mb-3 stroke-[1.2]" />, label: 'Industrial\nbonds' },
                  { icon: <Search className="w-[28px] h-[28px] text-[#4A4A4A] mx-auto mb-3 stroke-[1.2]" />, label: 'Find a\nproduct' },
                  { icon: <Users className="w-[28px] h-[28px] text-[#4A4A4A] mx-auto mb-3 stroke-[1.2]" />, label: 'Find a\ndistributor' },
                ].map((item, i) => (
                  <div key={i} className="text-center cursor-pointer group">
                    <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <p className="text-[10px] text-[#666666] leading-[1.3] group-hover:text-[#E5202B] transition-colors whitespace-pre-line font-medium">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Center Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 px-4 py-2.5 bg-white rounded-full shadow-lg">
            <button 
              onClick={() => setHeroIndex(prev => prev === 0 ? heroImages.length - 1 : prev - 1)}
              className="text-slate-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <div className="flex gap-2 items-center">
              {heroImages.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setHeroIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${heroIndex === idx ? 'w-4 h-[5px] bg-[#4A4A4A]' : 'w-[5px] h-[5px] bg-[#D4D4D4] hover:bg-[#A3A3A3]'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button 
               onClick={() => setHeroIndex(prev => prev === heroImages.length - 1 ? 0 : prev + 1)}
               className="text-slate-600 hover:text-black transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          
        </section>
      </motion.div>



      {/* ========================================================
          03 — OUR PRODUCTS (PREMIUM SLIDER)
          ======================================================== */}
      <section id="products" className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 relative z-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
          
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 w-full justify-between">
            
            {/* Left Side: Text & Brand */}
            <div className="w-full lg:w-[28%] flex flex-col items-start pr-0">
              <div className="flex items-center gap-3 mb-8">
                <img src={logoImg} alt="Brand" className="h-8 md:h-10 lg:h-11 object-contain drop-shadow-sm brightness-0" /> 
              </div>
              <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[46px] font-black text-slate-900 leading-[1.1] mb-5 tracking-tight whitespace-nowrap md:whitespace-normal">
                Products of <br className="hidden md:block" /> the years
              </h2>
              <p className="text-[12px] md:text-[13px] text-slate-600 mb-8 max-w-[280px] font-medium leading-[1.6]">
                Explore and elevate your space with featured shades of Dungar Chemicals
              </p>
              <a 
                href="#catalogue" 
                className="px-5 py-2 rounded-full border border-slate-900 text-[11px] font-bold text-slate-900 flex items-center gap-2 hover:bg-slate-900 hover:text-white transition-colors w-max tracking-wide uppercase"
              >
                View colour catalogue <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right Side: Horizontal Scrolling Cards */}
            <div className="w-full lg:w-[72%] flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-4 [&::-webkit-scrollbar]:hidden" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              {[
                { year: '2026', name: 'moonlit silk', code: '7809', bg: 'bg-[#CBD5A1]', textColor: 'text-slate-800', border: 'border-slate-800', img: hero1Img },
                { year: '2025', name: 'CARDINAL', code: '8206', bg: 'bg-[#7E5A6A]', textColor: 'text-white', border: 'border-white', img: heroBgImg },
                { year: '2024', name: 'TERRA', code: 'K212', bg: 'bg-[#A67B73]', textColor: 'text-white', border: 'border-white', img: productImg },
              ].map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-[240px] md:w-[260px] lg:w-[270px] snap-start flex flex-col rounded-xl overflow-hidden shadow-sm border border-slate-200/50 hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
                  
                  {/* Top Image */}
                  <div className="h-[220px] w-full overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  
                  {/* Bottom Color Block */}
                  <div className={`h-[180px] w-full p-5 flex flex-col justify-between ${item.bg} ${item.textColor}`}>
                    <div>
                      <div className="text-[9px] font-bold tracking-[0.15em] uppercase mb-1 opacity-90">Product of the year {item.year}</div>
                      <div className="text-[22px] font-black uppercase tracking-wider">{item.name}</div>
                    </div>
                    
                    <div className="flex justify-between items-end w-full">
                      {/* Color Swatch Representation */}
                      <div className={`border ${item.border} p-2 w-[55px] h-[65px] flex flex-col justify-end bg-transparent rounded-sm relative`}>
                        {/* Little hook line at top like Asian Paints */}
                        <div className={`absolute top-0 left-0 w-full h-[8px] border-b ${item.border}`}></div>
                        <div className="text-[8px] font-bold leading-tight">{item.code}</div>
                        <div className="text-[7px] uppercase font-medium leading-[1.1]">{item.name}</div>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          03.5 — PROMOTIONAL BANNER SECTION
          ======================================================== */}
      <section className="w-full bg-white pt-4 pb-12 lg:pb-20 relative z-10">
        <div className="max-w-[1440px] w-full mx-auto px-3 sm:px-4 lg:px-6">
          <div className="w-full rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative group cursor-pointer">
            <img src={aplicationImg} alt="Dungar Chemicals Application" className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-700" />
          </div>
        </div>
      </section>



      {/* ========================================================
          05 — FAQ SECTION
          ======================================================== */}
      <section id="faq" className="bg-white pt-10 pb-12 lg:pt-16 lg:pb-16 relative z-10 w-full">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight text-center mb-12">
            FAQ's
          </h2>

          <div className="flex flex-col border-t border-gray-200">
            <FAQItem 
              question="What types of industrial chemicals do you manufacture?" 
              answer="We specialize in manufacturing premium grade adhesives, wood glues, construction chemicals, and industrial binders. Our product line is designed for both commercial and residential applications ensuring the highest quality bonds." 
            />
            <FAQItem 
              question="How can I become an authorized dealer for Dungar Chemicals?" 
              answer="You can apply to become an authorized dealer by filling out the 'Become a Dealer' form located at the bottom of this page. Once submitted, our business development team will review your application and contact you within 24-48 hours." 
            />
            <FAQItem 
              question="Do you provide bulk pricing for large construction projects?" 
              answer="Yes, we offer specialized B2B pricing and bulk discounts for large-scale construction projects and industrial contractors. Please contact our sales team directly with your project requirements for a custom quote." 
            />
            <FAQItem 
              question="What is the typical shelf life of your premium adhesives?" 
              answer="When stored properly in a cool, dry place away from direct sunlight, our premium adhesives typically have a shelf life of 12 to 18 months from the date of manufacturing. Always check the packaging for specific product details." 
            />
            <FAQItem 
              question="Where can I find safety data sheets (SDS) for your products?" 
              answer="Safety Data Sheets (SDS) for all our products are available upon request. Authorized dealers can access them through our dealer portal, or you can email our support team to request a copy for any specific product." 
            />
          </div>

        </div>
      </section>

      {/* ========================================================
          06 — CONTACT DETAILS (BOLD BANNER)
          ======================================================== */}
      <section id="cta" className="bg-white py-12 lg:py-20 w-full relative z-10">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="border border-slate-200 rounded-2xl p-6 lg:px-10 lg:py-8 bg-white shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-16 w-full mx-auto">
            
            {/* Left: Text Area */}
            <div className="w-full lg:w-[32%] flex flex-col justify-center">
              <span className="text-[13px] font-bold text-slate-800 mb-1.5">Partner with us</span>
              <h2 className="text-4xl md:text-[42px] font-black text-[#F25C54] leading-[1.05] mb-3 tracking-tight">
                Become a<br/>Dealer
              </h2>
              <p className="text-slate-500 text-[14px] leading-[1.6] max-w-[280px] font-medium">
                Join Dungar Chemicals and grow your business with our premium range of industrial and construction chemicals.
              </p>
            </div>

            {/* Right: Form Area */}
            <div className="w-full lg:w-[68%] flex flex-col gap-4">
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="Enter your name" className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-[13px] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
                <input type="email" placeholder="Enter your Email" className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-[13px] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="tel" placeholder="Enter mobile number" className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-[13px] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
                <input type="text" placeholder="Enter your Pincode" className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-[13px] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
              </div>
              
              <label className="flex items-center gap-2 cursor-pointer w-max mt-0.5">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500" defaultChecked />
                <span className="text-[13px] font-bold text-slate-800">Get updates on WhatsApp</span>
              </label>
              
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-1">
                <div>
                  <div className="text-[12px] font-bold text-slate-900 mb-2">Current Business Type? <span className="text-red-500">*</span></div>
                  <div className="flex gap-4 items-center">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="business" className="w-3.5 h-3.5 text-amber-500 border-gray-300 focus:ring-amber-500" />
                      <span className="text-[12px] text-slate-500">Retailer</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="business" className="w-3.5 h-3.5 text-amber-500 border-gray-300 focus:ring-amber-500" />
                      <span className="text-[12px] text-slate-500">Distributor</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="business" className="w-3.5 h-3.5 text-amber-500 border-gray-300 focus:ring-amber-500" />
                      <span className="text-[12px] text-slate-500">Other</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <div className="text-[12px] font-bold text-slate-900 mb-2">Do you have a GST number? <span className="text-red-500">*</span></div>
                  <div className="flex gap-4 items-center">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="gst" className="w-3.5 h-3.5 text-amber-500 border-gray-300 focus:ring-amber-500" />
                      <span className="text-[12px] text-slate-500">Yes</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="gst" className="w-3.5 h-3.5 text-amber-500 border-gray-300 focus:ring-amber-500" />
                      <span className="text-[12px] text-slate-500">No</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-3 pt-3 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 leading-[1.5] max-w-sm">
                  By proceeding, I authorize Dungar Chemicals and its authorized partners to contact me via WhatsApp, phone calls, SMS and e-mail and I agree to the <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
                </p>
                
                <button className="shrink-0 bg-amber-500 text-slate-900 px-6 py-2.5 rounded-full text-[12px] font-bold flex items-center gap-2 hover:bg-amber-400 transition-colors shadow-sm w-full sm:w-auto justify-center">
                  Submit Application <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
