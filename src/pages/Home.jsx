import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'framer-motion';

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

  return <motion.span ref={ref}>{formatted}</motion.span>;
}
import { ChevronLeft, ChevronRight, Trophy, Droplet, Droplets, ShieldCheck, Users, Award, MapPin, Armchair, Layers, SprayCan, Wrench, Zap, Settings } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import productImg from '../assets/hero.png';
import actualProductImg from '../assets/product.png';

// 3 Premium Hero Images (Working URLs)
const heroImages = [
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop"
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  // Auto-advance Hero Slider (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setHeroIndex((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);



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
          02 — HERO (FULL SCREEN SLIDER)
          ======================================================== */}
      <section 
        id="hero" 
        className="relative w-full mt-[114px] lg:mt-[126px] h-[40vh] min-h-[350px] lg:h-[50vh] overflow-hidden bg-black group flex items-center justify-center"
      >
        <AnimatePresence initial={false}>
          <motion.img 
            key={heroIndex}
            src={heroImages[heroIndex]}
            alt="Hero Slide"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Center Content: Glassmorphism Box */}
        <div className="relative z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md p-6 md:p-8 rounded-[8px] border border-white/10 w-[90%] sm:w-[85%] max-w-3xl text-center shadow-2xl">
          <h1 className="text-[24px] sm:text-[28px] md:text-[36px] font-bold text-white leading-[1.2] mb-3">
            Industrial Strength You Can Trust
          </h1>
          <p className="text-[13px] md:text-[14px] text-white/90 mb-6 max-w-lg">
            Engineered for maximum durability and precision in professional woodworking and construction.
          </p>
          <a href="#contact" className="bg-[#ff6a13] hover:bg-[#e65a0b] text-white px-6 py-2.5 rounded-[4px] text-[13px] font-bold transition-transform hover:-translate-y-1 shadow-sm">
            Find Your Solution
          </a>
        </div>

        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 cursor-pointer">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 cursor-pointer">
          <ChevronRight size={24} />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
          {heroImages.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setHeroIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${i === heroIndex ? 'bg-[#ff6a13] w-8' : 'bg-white/50 hover:bg-white w-2'}`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================
          03 — OUR PRODUCTS (PREMIUM CLEAN)
          ======================================================== */}
      <section id="products" className="bg-white pt-10 pb-16 lg:pt-12 lg:pb-20 relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col items-center justify-center mb-12 text-center px-4">
            <h2 className="text-[32px] md:text-[40px] text-text-primary mb-4" style={{ fontFamily: "'Pacifico', cursive", letterSpacing: '1px' }}>
              Our Signature Solutions
            </h2>
            <p className="text-[14px] md:text-[15px] text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Formulated through years of rigorous research and development, designed to deliver uncompromising industrial-grade strength and long-lasting impact.
            </p>
          </div>

          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-4 md:gap-6 pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
            
            {/* PRODUCT 1 */}
            <div className="group w-[260px] sm:w-[300px] lg:w-auto shrink-0 snap-center cursor-pointer" tabIndex="0">
              <div className="relative w-full h-[260px] sm:h-[300px] lg:h-auto lg:aspect-square bg-[#F9F9F9] overflow-hidden rounded-[4px] border border-black/5 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md group-focus:shadow-md">
                <img src={actualProductImg} alt="Multi-Purpose Gel" className="w-[70%] h-[70%] object-contain transition-transform duration-700 group-hover:scale-105 group-focus:scale-105" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#ff6a13]/95 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-10 backdrop-blur-[2px]">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2">Multi-Purpose Gel</h3>
                  <p className="text-[13px] text-white/90">Everyday strong bonding</p>
                </div>
              </div>
            </div>

            {/* PRODUCT 2 */}
            <div className="group w-[260px] sm:w-[300px] lg:w-auto shrink-0 snap-center cursor-pointer" tabIndex="0">
              <div className="relative w-full h-[260px] sm:h-[300px] lg:h-auto lg:aspect-square bg-[#F9F9F9] overflow-hidden rounded-[4px] border border-black/5 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md group-focus:shadow-md">
                <img src={actualProductImg} alt="Crystal Clear Epoxy" className="w-[70%] h-[70%] object-contain transition-transform duration-700 group-hover:scale-105 group-focus:scale-105" />
                <div className="absolute inset-0 bg-[#ff6a13]/95 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-10 backdrop-blur-[2px]">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2">Crystal Clear Epoxy</h3>
                  <p className="text-[13px] text-white/90">Invisible, flawless finish</p>
                </div>
              </div>
            </div>

            {/* PRODUCT 3 */}
            <div className="group w-[260px] sm:w-[300px] lg:w-auto shrink-0 snap-center cursor-pointer" tabIndex="0">
              <div className="relative w-full h-[260px] sm:h-[300px] lg:h-auto lg:aspect-square bg-[#F9F9F9] overflow-hidden rounded-[4px] border border-black/5 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md group-focus:shadow-md">
                <img src={actualProductImg} alt="Fast-Setting Formula" className="w-[70%] h-[70%] object-contain transition-transform duration-700 group-hover:scale-105 group-focus:scale-105" />
                <div className="absolute inset-0 bg-[#ff6a13]/95 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-10 backdrop-blur-[2px]">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2">Fast-Setting Formula</h3>
                  <p className="text-[13px] text-white/90">Reduces cure time by 50%</p>
                </div>
              </div>
            </div>

            {/* PRODUCT 4 */}
            <div className="group w-[260px] sm:w-[300px] lg:w-auto shrink-0 snap-center cursor-pointer" tabIndex="0">
              <div className="relative w-full h-[260px] sm:h-[300px] lg:h-auto lg:aspect-square bg-[#F9F9F9] overflow-hidden rounded-[4px] border border-black/5 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md group-focus:shadow-md">
                <img src={actualProductImg} alt="Industrial Heavy Duty" className="w-[70%] h-[70%] object-contain transition-transform duration-700 group-hover:scale-105 group-focus:scale-105" />
                <div className="absolute inset-0 bg-[#ff6a13]/95 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-10 backdrop-blur-[2px]">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2">Heavy Duty Grade</h3>
                  <p className="text-[13px] text-white/90">For maximum stress points</p>
                </div>
              </div>
            </div>

          </div>


        </div>
      </section>

      {/* ========================================================
          04 — WHY CHOOSE US (PREMIUM HORIZONTAL)
          ======================================================== */}
      <section 
        id="about" 
        className="relative w-full py-8 lg:py-10 bg-[#111111] flex items-center overflow-hidden"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 12px)' }}
      >
        
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between relative z-20 gap-16 lg:gap-8">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-[18px] md:text-[22px] text-[#ff6a13] mb-2 block tracking-wide" style={{ fontFamily: "'Pacifico', cursive" }}>
              Why Choose Us
            </span>
            <h2 className="text-section-heading text-white mb-6">
              Uncompromising Quality.<br />
              <span className="text-white/70">Absolute Precision.</span>
            </h2>
            <p className="text-body-primary text-white/80 mb-12 max-w-lg">
              Our advanced formulations are rigorously tested to ensure they meet the demands of professionals. We don't just supply adhesives; we supply reliability that holds your world together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-lg">
              
              <div>
                <div className="w-10 h-10 bg-white/5 border border-white/10 shadow-sm rounded-full flex items-center justify-center mb-4 text-[#ff6a13]">
                  <span className="text-[16px] font-light">&rarr;</span>
                </div>
                <h4 className="text-[15px] font-bold text-white mb-1">Industrial Grade</h4>
                <p className="text-[13px] text-white/70 leading-snug">Engineered to withstand extreme stress and temperature variations.</p>
              </div>

              <div>
                <div className="w-10 h-10 bg-white/5 border border-white/10 shadow-sm rounded-full flex items-center justify-center mb-4 text-[#ff6a13]">
                  <span className="text-[16px] font-light">&rarr;</span>
                </div>
                <h4 className="text-[15px] font-bold text-white mb-1">Clean Application</h4>
                <p className="text-[13px] text-white/70 leading-snug">Smooth, controlled dispensing for flawless aesthetic finishes.</p>
              </div>

            </div>
          </div>

          {/* Right: Circular Image Composition */}
          <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[450px] aspect-square">
              
              {/* Main Circle (Top Right) */}
              <div className="absolute top-0 right-0 w-[75%] aspect-square rounded-full overflow-hidden border-[8px] border-[#111111] z-20 shadow-premium">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" 
                  alt="Industrial Precision" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
              
              {/* Secondary Circle (Bottom Left) */}
              <div className="absolute bottom-4 left-0 w-[55%] aspect-square rounded-full overflow-hidden border-[8px] border-[#111111] z-10 shadow-premium">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" 
                  alt="Strong Bond" 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105" 
                />
              </div>

              {/* Accent Element */}
              <div className="absolute top-[15%] left-[5%] w-[12%] aspect-square rounded-full bg-[#ff6a13] z-30 shadow-md"></div>
              
            </div>
          </div>
          
        </div>
      </section>



      {/* ========================================================
          05 — APPLICATIONS (PREMIUM)
          ======================================================== */}
      <section id="applications" className="bg-white py-16 lg:py-24 border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="w-full lg:w-[25%] flex flex-col justify-center">
              <span className="text-[18px] md:text-[22px] text-[#ff6a13] mb-2 block tracking-wide" style={{ fontFamily: "'Pacifico', cursive" }}>
                Applications
              </span>
              <h2 className="text-[28px] lg:text-[32px] font-bold text-text-primary leading-tight mb-4">
                One Solution.<br/>
                <span className="text-text-secondary">Infinite Uses.</span>
              </h2>
              <p className="text-[13px] text-text-secondary mb-6 leading-relaxed">
                From simple household repairs to heavy-duty industrial bonding, our adhesive is formulated to deliver flawless results everywhere.
              </p>
              <a href="#explore" className="text-[12px] font-bold uppercase tracking-widest text-text-primary border-b border-text-primary pb-1 inline-block w-max hover:text-[#ff6a13] hover:border-[#ff6a13] transition-colors">
                Explore All
              </a>
            </div>

            {/* Right Column: 1-Row 4-Column Grid */}
            <div className="w-full lg:w-[75%] flex overflow-x-auto hide-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-4 pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
              
              {/* App 1 */}
              <div className="group min-w-[75vw] sm:min-w-[45vw] lg:min-w-0 shrink-0 snap-center cursor-pointer">
                <div className="w-full h-[240px] lg:h-[280px] overflow-hidden rounded-[4px] shadow-sm border border-black/5 group-hover:border-black/10 transition-colors duration-300 mb-4">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Home Repair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="text-left px-1">
                  <h4 className="text-[15px] font-bold text-text-primary mb-1 group-hover:text-[#ff6a13] transition-colors">Home Repair</h4>
                  <p className="text-[12px] text-text-secondary leading-tight">Perfect for everyday repairs and fixes.</p>
                </div>
              </div>

              {/* App 2 */}
              <div className="group min-w-[75vw] sm:min-w-[45vw] lg:min-w-0 shrink-0 snap-center cursor-pointer">
                <div className="w-full h-[240px] lg:h-[280px] overflow-hidden rounded-[4px] shadow-sm border border-black/5 group-hover:border-black/10 transition-colors duration-300 mb-4">
                  <img src="https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=800&q=80" alt="DIY & Crafts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="text-left px-1">
                  <h4 className="text-[15px] font-bold text-text-primary mb-1 group-hover:text-[#ff6a13] transition-colors">DIY & Crafts</h4>
                  <p className="text-[12px] text-text-secondary leading-tight">Ideal for creative projects and crafts.</p>
                </div>
              </div>

              {/* App 3 */}
              <div className="group min-w-[75vw] sm:min-w-[45vw] lg:min-w-0 shrink-0 snap-center cursor-pointer">
                <div className="w-full h-[240px] lg:h-[280px] overflow-hidden rounded-[4px] shadow-sm border border-black/5 group-hover:border-black/10 transition-colors duration-300 mb-4">
                  <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" alt="Professional Use" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="text-left px-1">
                  <h4 className="text-[15px] font-bold text-text-primary mb-1 group-hover:text-[#ff6a13] transition-colors">Professional Use</h4>
                  <p className="text-[12px] text-text-secondary leading-tight">Trusted by professionals and contractors.</p>
                </div>
              </div>

              {/* App 4 */}
              <div className="group min-w-[75vw] sm:min-w-[45vw] lg:min-w-0 shrink-0 snap-center cursor-pointer">
                <div className="w-full h-[240px] lg:h-[280px] overflow-hidden rounded-[4px] shadow-sm border border-black/5 group-hover:border-black/10 transition-colors duration-300 mb-4">
                  <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80" alt="General Bonding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="text-left px-1">
                  <h4 className="text-[15px] font-bold text-text-primary mb-1 group-hover:text-[#ff6a13] transition-colors">General Bonding</h4>
                  <p className="text-[12px] text-text-secondary leading-tight">For wood, metal, plastic, ceramic and more.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 lg:py-12 bg-[#ff6a13] flex items-center overflow-hidden">
        
        {/* Subtle Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 12px)' }}></div>

        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="flex flex-col items-center justify-center mb-6 lg:mb-10">
            <span className="text-[22px] md:text-[28px] text-white block tracking-wide" style={{ fontFamily: "'Pacifico', cursive" }}>
              Our Mission
            </span>
            <div className="w-12 h-[3px] bg-white/30 mt-3 rounded-full"></div>
          </div>

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            <span className="font-serif text-[60px] md:text-[80px] text-white/20 leading-none mb-0 select-none translate-y-6">
              &ldquo;
            </span>
            <p className="text-white text-[20px] md:text-[24px] lg:text-[28px] font-bold italic leading-[1.5] tracking-tight mb-10 relative z-10">
              To be an innovation driven, research led, and customer focused manufacturer of world-class adhesives and sealants. From formulation to final application, every product we create is guided by dedication to quality and real-world performance.
            </p>
            
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-[8px] shadow-lg border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=800&auto=format&fit=crop" 
                alt="Product Range" 
                className="w-full max-w-[280px] h-[140px] object-cover rounded-[4px] shadow-sm border border-white/20 transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          06 — TESTIMONIALS (GOOGLE WIDGET STYLE)
          ======================================================== */}
      {/* ========================================================
          06 — TESTIMONIALS (PREMIUM GRID)
          ======================================================== */}
      <section id="testimonials" className="bg-[#FAFAFA] py-20 lg:py-24 border-b border-border-subtle overflow-hidden relative">
        
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-[22px] md:text-[28px] text-[#ff6a13] mb-2 block tracking-wide" style={{ fontFamily: "'Pacifico', cursive" }}>
              Testimonials
            </span>
            <h2 className="text-[32px] lg:text-[40px] font-bold text-text-primary mb-4">
              Trusted by Industry Leaders
            </h2>
            <div className="w-16 h-[3px] bg-[#ff6a13] mx-auto rounded-full"></div>
          </div>

          {/* 3-Column Premium Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-white rounded-[8px] p-8 lg:p-10 shadow-sm border border-black/5 relative group hover:-translate-y-1 transition-transform duration-300">
              <span className="absolute top-6 right-8 text-[60px] font-serif text-black/5 leading-none group-hover:text-[#ff6a13]/10 transition-colors">
                &rdquo;
              </span>
              <div className="flex gap-1 text-[#ff6a13] mb-6">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                ))}
              </div>
              <p className="text-[15px] text-text-secondary leading-relaxed italic mb-8 relative z-10">
                "I recently used Bond Max Instant Glue, and I couldn't be more impressed! The adhesive works incredibly fast, bonding various materials in seconds. It has significantly reduced our curing time without compromising on durability."
              </p>
              <div className="flex items-center gap-4 border-t border-border-subtle pt-6">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" alt="Rajesh Sharma" />
                <div>
                  <h5 className="text-[15px] font-bold text-text-primary">Rajesh Sharma</h5>
                  <p className="text-[13px] text-text-secondary mt-0.5">Industrial Contractor</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-[8px] p-8 lg:p-10 shadow-sm border border-black/5 relative group hover:-translate-y-1 transition-transform duration-300">
              <span className="absolute top-6 right-8 text-[60px] font-serif text-black/5 leading-none group-hover:text-[#ff6a13]/10 transition-colors">
                &rdquo;
              </span>
              <div className="flex gap-1 text-[#ff6a13] mb-6">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                ))}
              </div>
              <p className="text-[15px] text-text-secondary leading-relaxed italic mb-8 relative z-10">
                "As an interior contractor, precision and cleanliness are everything. This adhesive is clear, sets quickly, and leaves absolutely zero residue. Will definitely recommend to other builders. Much better than standard glues."
              </p>
              <div className="flex items-center gap-4 border-t border-border-subtle pt-6">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" alt="Anjali Desai" />
                <div>
                  <h5 className="text-[15px] font-bold text-text-primary">Anjali Desai</h5>
                  <p className="text-[13px] text-text-secondary mt-0.5">Interior Designer</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-[8px] p-8 lg:p-10 shadow-sm border border-black/5 relative group hover:-translate-y-1 transition-transform duration-300">
              <span className="absolute top-6 right-8 text-[60px] font-serif text-black/5 leading-none group-hover:text-[#ff6a13]/10 transition-colors">
                &rdquo;
              </span>
              <div className="flex gap-1 text-[#ff6a13] mb-6">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                ))}
              </div>
              <p className="text-[15px] text-text-secondary leading-relaxed italic mb-8 relative z-10">
                "Bond Max has several different kind of bonds and adhesives. I've used countless adhesives for heavy metal joints, but nothing holds up under stress testing quite like this one. Best for industry applications."
              </p>
              <div className="flex items-center gap-4 border-t border-border-subtle pt-6">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" alt="Vikram Singh" />
                <div>
                  <h5 className="text-[15px] font-bold text-text-primary">Vikram Singh</h5>
                  <p className="text-[13px] text-text-secondary mt-0.5">Structural Engineer</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          07 — CONTACT DETAILS (COMPACT SPLIT LAYOUT WITH FORM)
          ======================================================== */}
      <section id="contact" className="bg-[#FAFAFA] py-10 lg:py-12 border-t border-border-subtle">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
            <span className="text-[20px] md:text-[24px] text-[#ff6a13] mb-2 block tracking-wide" style={{ fontFamily: "'Pacifico', cursive" }}>
              Reach Out
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-bold text-text-primary mb-4 leading-tight">
              We're Here to Help
            </h2>
            <div className="w-12 h-[3px] bg-[#ff6a13] mb-5 rounded-full"></div>
            <p className="text-text-secondary text-[14px] md:text-[15px] leading-relaxed max-w-md">
              Whether you need technical support, bulk ordering information, or expert advice on the right adhesive for your project, our team is ready to assist you.
            </p>
          </div>

          {/* Right: Compact Form */}
          <div className="w-full lg:w-[45%]">
            <form className="bg-white p-6 rounded-[8px] border border-black/5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex flex-col gap-4">
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-[#FAFAFA] border border-border-subtle rounded-[6px] px-4 py-3 text-[14px] text-text-primary focus:outline-none focus:border-[#ff6a13] focus:ring-1 focus:ring-[#ff6a13] transition-all"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-[#FAFAFA] border border-border-subtle rounded-[6px] px-4 py-3 text-[14px] text-text-primary focus:outline-none focus:border-[#ff6a13] focus:ring-1 focus:ring-[#ff6a13] transition-all"
                  required
                />
              </div>
              
              <textarea 
                placeholder="How can we help you?" 
                rows="3"
                className="w-full bg-[#FAFAFA] border border-border-subtle rounded-[6px] px-4 py-3 text-[14px] text-text-primary focus:outline-none focus:border-[#ff6a13] focus:ring-1 focus:ring-[#ff6a13] transition-all resize-none"
                required
              ></textarea>
              
              <button 
                type="submit" 
                className="w-full bg-[#ff6a13] hover:bg-[#e65a0b] text-white font-bold text-[14px] py-3 rounded-[6px] transition-colors shadow-sm mt-1"
              >
                Send Message
              </button>
              
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
