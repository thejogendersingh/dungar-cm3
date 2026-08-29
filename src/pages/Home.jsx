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

// 3 Premium Hero Images
const heroImages = [
  heroBg,
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
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
        className="relative w-full mt-[100px] md:mt-[104px] lg:mt-[138px] h-[75vh] min-h-[450px] lg:h-[80vh] overflow-hidden bg-black group flex items-center justify-center"
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

        {/* Center Content: Glassmorphism Buttons */}
        <div className="relative z-30 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-12 md:mt-16">
          <a href="#products" className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[14px] md:text-[15px] font-bold uppercase tracking-wider hover:bg-white/20 hover:scale-105 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            Explore Products
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-full bg-brand-strong/40 backdrop-blur-md border border-brand-primary/50 text-white text-[14px] md:text-[15px] font-bold uppercase tracking-wider hover:bg-brand-strong/60 hover:scale-105 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            Request Quote
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
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${i === heroIndex ? 'bg-brand-primary w-8' : 'bg-white/50 hover:bg-white w-2'}`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================
          03 — OUR PRODUCTS (PREMIUM CLEAN)
          ======================================================== */}
      <section id="products" className="bg-[#FAFAFA] py-20 lg:py-24 relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col items-center justify-center mb-10 text-center">
            <h2 className="text-section-heading text-text-primary">
              Popular Products
            </h2>
            <div className="w-12 h-1 bg-brand-primary mt-3"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            {/* PRODUCT 1 */}
            <div className="group relative w-full aspect-square bg-white overflow-hidden cursor-pointer rounded-[12px] shadow-sm hover:shadow-premium smooth-hover">
              <img src={actualProductImg} alt="Multi-Purpose Gel" className="w-full h-full object-contain p-6 md:p-8 transition-transform duration-700 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-[#111827]/90 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-1 bg-brand-primary mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"></div>
                <h3 className="text-[16px] md:text-[18px] font-display font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">Multi-Purpose Gel</h3>
                <p className="text-[12px] md:text-[13px] text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">Everyday strong bonding</p>
                <div className="mt-5 px-5 py-2 border border-white/30 text-white text-[11px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 hover:bg-white hover:text-text-primary transition-all duration-300 delay-200">
                  View Details
                </div>
              </div>
            </div>

            {/* PRODUCT 2 */}
            <div className="group relative w-full aspect-square bg-white overflow-hidden cursor-pointer rounded-[12px] shadow-sm hover:shadow-premium smooth-hover">
              <img src={actualProductImg} alt="Crystal Clear Epoxy" className="w-full h-full object-contain p-6 md:p-8 transition-transform duration-700 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-[#111827]/90 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-1 bg-brand-primary mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"></div>
                <h3 className="text-[16px] md:text-[18px] font-display font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">Crystal Clear Epoxy</h3>
                <p className="text-[12px] md:text-[13px] text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">Invisible, flawless finish</p>
                <div className="mt-5 px-5 py-2 border border-white/30 text-white text-[11px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 hover:bg-white hover:text-text-primary transition-all duration-300 delay-200">
                  View Details
                </div>
              </div>
            </div>

            {/* PRODUCT 3 */}
            <div className="group relative w-full aspect-square bg-white overflow-hidden cursor-pointer rounded-[12px] shadow-sm hover:shadow-premium smooth-hover">
              <img src={actualProductImg} alt="Fast-Setting Formula" className="w-full h-full object-contain p-6 md:p-8 transition-transform duration-700 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-[#111827]/90 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-1 bg-brand-primary mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"></div>
                <h3 className="text-[16px] md:text-[18px] font-display font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">Fast-Setting Formula</h3>
                <p className="text-[12px] md:text-[13px] text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">Instant, unbreakable hold</p>
                <div className="mt-5 px-5 py-2 border border-white/30 text-white text-[11px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 hover:bg-white hover:text-text-primary transition-all duration-300 delay-200">
                  View Details
                </div>
              </div>
            </div>

            {/* PRODUCT 4 */}
            <div className="group relative w-full aspect-square bg-white overflow-hidden cursor-pointer rounded-[12px] shadow-sm hover:shadow-premium smooth-hover">
              <img src={actualProductImg} alt="Industrial Heavy Duty" className="w-full h-full object-contain p-6 md:p-8 transition-transform duration-700 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-[#111827]/90 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-1 bg-brand-primary mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"></div>
                <h3 className="text-[16px] md:text-[18px] font-display font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">Industrial Heavy Duty</h3>
                <p className="text-[12px] md:text-[13px] text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">Maximum strength for pros</p>
                <div className="mt-5 px-5 py-2 border border-white/30 text-white text-[11px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 hover:bg-white hover:text-text-primary transition-all duration-300 delay-200">
                  View Details
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 flex justify-center">
            <a href="#all-products" className="text-[13px] font-bold tracking-wider uppercase text-text-primary hover:text-brand-primary transition-colors">
              View All Catalog &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          04 — WHY CHOOSE US (PREMIUM HORIZONTAL)
          ======================================================== */}
      <section id="about" className="relative w-full py-16 lg:py-20 flex items-center overflow-hidden">
        
        {/* Background Image with Striped/Textured look and Color Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Textured Background" 
            className="w-full h-full object-cover grayscale opacity-40" 
          />
          {/* Color Opacity Layer */}
          <div className="absolute inset-0 bg-[#0F0F0F]/90"></div>
          {/* CSS Striped Pattern overlay for extra texture */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>
        </div>

        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between relative z-20 gap-16 lg:gap-8">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-eyebrow text-brand-primary mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-section-heading text-white mb-8">
              Uncompromising Quality.<br />
              <span className="text-white/50">Absolute Precision.</span>
            </h2>
            <p className="text-body-primary text-white/70 mb-12 max-w-lg">
              Our advanced formulations are rigorously tested to ensure they meet the demands of professionals. We don't just supply adhesives; we supply reliability that holds your world together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-lg">
              
              <div>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center mb-4 text-white">
                  <span className="text-[16px] font-light">&rarr;</span>
                </div>
                <h4 className="text-[15px] font-bold text-white mb-2">Industrial Grade</h4>
                <p className="text-[13px] text-white/60 leading-snug">Engineered to withstand extreme stress and temperature variations.</p>
              </div>

              <div>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center mb-4 text-white">
                  <span className="text-[16px] font-light">&rarr;</span>
                </div>
                <h4 className="text-[15px] font-bold text-white mb-2">Clean Application</h4>
                <p className="text-[13px] text-white/60 leading-snug">Smooth, controlled dispensing for flawless aesthetic finishes.</p>
              </div>

            </div>
          </div>

          {/* Right: Circular Image Composition */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[450px] aspect-square">
              
              {/* Main Circle (Top Right) */}
              <div className="absolute top-0 right-0 w-[75%] aspect-square rounded-full overflow-hidden border-[6px] border-[#0F0F0F] z-20 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" 
                  alt="Industrial Precision" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
              
              {/* Secondary Circle (Bottom Left) */}
              <div className="absolute bottom-4 left-0 w-[55%] aspect-square rounded-full overflow-hidden border-[6px] border-[#0F0F0F] z-10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" 
                  alt="Strong Bond" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>

              {/* Accent Element */}
              <div className="absolute top-[15%] left-[5%] w-[15%] aspect-square rounded-full bg-brand-primary z-30"></div>
              
            </div>
          </div>
          
        </div>
      </section>



      {/* ========================================================
          05 — APPLICATIONS (PREMIUM)
          ======================================================== */}
      <section id="applications" className="bg-white py-16 lg:py-24 border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Text */}
            <div className="w-full lg:w-[35%] flex flex-col justify-start">
              <span className="text-eyebrow text-brand-primary mb-4 block">
                Applications
              </span>
              <h2 className="text-section-heading text-text-primary mb-5">
                One Solution.<br/>
                <span className="text-text-secondary">Infinite Uses.</span>
              </h2>
              <p className="text-body-primary text-text-secondary mb-6">
                From simple household repairs to heavy-duty industrial bonding, our adhesive is formulated to deliver flawless results everywhere.
              </p>
              <a href="#explore" className="text-[13px] font-bold uppercase tracking-widest text-text-primary border-b border-text-primary pb-1 inline-block w-max hover:text-brand-primary hover:border-brand-primary transition-colors">
                Explore All Applications
              </a>
            </div>

            {/* Right Column: 1-Row 4-Column Grid */}
            <div className="w-full lg:w-[65%] grid grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* App 1 */}
              <div className="group relative w-full h-[250px] lg:h-[300px] overflow-hidden bg-bg-secondary rounded-[12px] shadow-sm hover:shadow-premium smooth-hover">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Home Repair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0 relative" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full z-20">
                  <h4 className="text-[15px] lg:text-[16px] font-display font-bold text-white mb-1">Home Repair</h4>
                  <p className="text-[11px] lg:text-[12px] text-white/90 leading-tight">Perfect for everyday repairs and fixes.</p>
                </div>
              </div>

              {/* App 2 */}
              <div className="group relative w-full h-[250px] lg:h-[300px] overflow-hidden bg-bg-secondary rounded-[12px] shadow-sm hover:shadow-premium smooth-hover">
                <img src="https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=800&q=80" alt="DIY & Crafts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0 relative" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full z-20">
                  <h4 className="text-[15px] lg:text-[16px] font-display font-bold text-white mb-1">DIY & Crafts</h4>
                  <p className="text-[11px] lg:text-[12px] text-white/90 leading-tight">Ideal for creative projects and crafts.</p>
                </div>
              </div>

              {/* App 3 */}
              <div className="group relative w-full h-[250px] lg:h-[300px] overflow-hidden bg-bg-secondary rounded-[12px] shadow-sm hover:shadow-premium smooth-hover">
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" alt="Professional Use" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0 relative" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full z-20">
                  <h4 className="text-[15px] lg:text-[16px] font-display font-bold text-white mb-1">Professional Use</h4>
                  <p className="text-[11px] lg:text-[12px] text-white/90 leading-tight">Trusted by professionals and contractors.</p>
                </div>
              </div>

              {/* App 4 */}
              <div className="group relative w-full h-[250px] lg:h-[300px] overflow-hidden bg-bg-secondary rounded-[12px] shadow-sm hover:shadow-premium smooth-hover">
                <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80" alt="General Bonding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0 relative" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full z-20">
                  <h4 className="text-[15px] lg:text-[16px] font-display font-bold text-white mb-1">General Bonding</h4>
                  <p className="text-[11px] lg:text-[12px] text-white/90 leading-tight">For wood, metal, plastic, ceramic and more.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          05.5 — MISSION STATEMENT (Premium Layered Banner)
          ======================================================== */}
      <section className="relative py-16 lg:py-20 flex items-center overflow-hidden">
        
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1572242637255-fc21183df02d?q=80&w=2070&auto=format&fit=crop" 
            alt="Premium Texture" 
            className="w-full h-full object-cover grayscale opacity-20" 
          />
          {/* Deep Corporate Red/Charcoal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#98211A]/95 to-[#C12920]/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent"></div>
        </div>

        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Top Line */}
          <div className="flex items-center gap-6 mb-8 lg:mb-12">
            <h3 className="text-eyebrow text-white/90 whitespace-nowrap">Our Mission</h3>
            <div className="h-[1px] bg-white/20 w-full max-w-[600px]"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            
            {/* Left: Quote Text */}
            <div className="w-full lg:w-[65%] flex items-start gap-4 lg:gap-6">
              <span className="font-serif text-[60px] md:text-[80px] text-white/20 leading-none mt-[-10px] md:mt-[-15px] select-none shrink-0">
                &ldquo;
              </span>
              <p className="text-white text-[20px] md:text-[24px] lg:text-[28px] font-medium italic leading-[1.5] tracking-tight">
                To be an innovation driven, research led, and customer focused manufacturer of world-class adhesives and sealants. From formulation to final application, every product we create is guided by dedication to quality and real-world performance.
              </p>
            </div>

            {/* Right: Products Image Placeholder */}
            <div className="w-full lg:w-[35%] flex justify-center lg:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=800&auto=format&fit=crop" 
                alt="Product Range" 
                className="w-full max-w-[320px] lg:max-w-[360px] h-auto object-cover rounded-[6px] shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          06 — TESTIMONIALS (GOOGLE WIDGET STYLE)
          ======================================================== */}
      <section id="testimonials" className="bg-white py-20 lg:py-24 border-b border-border-subtle">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-section-heading text-text-primary mb-3">
              Customers Speak
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto"></div>
          </div>

          {/* 4-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* COLUMN 1: Company Rating Block (Premium Card) */}
            <div className="bg-[#FAF9F7] rounded-[8px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col items-center justify-center text-center h-full">
              <div className="flex flex-col items-center mb-5">
                <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-brand-primary/20 mb-3">
                  B
                </div>
                <h3 className="text-[18px] font-bold text-text-primary leading-tight">Bond Max</h3>
                <p className="text-[13px] font-medium text-text-secondary uppercase tracking-widest mt-1">Adhesives</p>
              </div>
              
              <div className="flex flex-col items-center mb-5 w-full border-y border-black/5 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[28px] font-bold text-[#e7711b] leading-none">4.9</span>
                  <div className="flex gap-1 text-[#e7711b]">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                    ))}
                  </div>
                </div>
                <p className="text-[12px] text-text-secondary font-medium">Based on 500+ real reviews</p>
              </div>
              
              <div className="flex flex-col items-center gap-4 mt-2">
                <div className="flex items-center gap-1.5 opacity-80">
                  <span className="text-[11px] text-text-secondary font-medium uppercase tracking-wider">Powered by</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-3.5" alt="Google" />
                </div>
                
                <a href="#" className="inline-flex items-center gap-2 bg-[#4285f4] hover:bg-[#3367d6] transition-colors text-white text-[13px] font-bold tracking-wide py-2.5 px-6 rounded-full shadow-md shadow-[#4285f4]/30">
                  Review us on
                  <span className="bg-white rounded-full p-0.5 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-3.5 h-3.5" alt="G" />
                  </span>
                </a>
              </div>
            </div>

            {/* COLUMN 2: Review Card 1 */}
            <div className="bg-white rounded-[8px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-black/5 flex flex-col relative">
              <div className="absolute top-4 right-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-4 h-4" alt="Google" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full object-cover" alt="User" />
                <div>
                  <h5 className="text-[14px] font-bold text-[#1a0dab]">Rajesh Sharma</h5>
                  <p className="text-[12px] text-text-secondary mt-0.5">2 months ago</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-[#e7711b] mb-3">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                ))}
              </div>
              <p className="text-[14px] text-text-primary leading-relaxed line-clamp-6">
                I recently used Bond Max Instant Glue, and I couldn't be more impressed! The adhesive works incredibly fast, bonding various materials in seconds. It has significantly reduced our curing time without compromising on durability. Excellent industrial grade solution.
              </p>
            </div>

            {/* COLUMN 3: Review Card 2 */}
            <div className="bg-white rounded-[8px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-black/5 flex flex-col relative">
              <div className="absolute top-4 right-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-4 h-4" alt="Google" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full object-cover" alt="User" />
                <div>
                  <h5 className="text-[14px] font-bold text-[#1a0dab]">Anjali Desai</h5>
                  <p className="text-[12px] text-text-secondary mt-0.5">5 months ago</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-[#e7711b] mb-3">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                ))}
              </div>
              <p className="text-[14px] text-text-primary leading-relaxed line-clamp-6">
                As an interior contractor, precision and cleanliness are everything. This adhesive is clear, sets quickly, and leaves absolutely zero residue. Will definitely recommend to other builders. Much better than standard glues.
              </p>
            </div>

            {/* COLUMN 4: Review Card 3 */}
            <div className="bg-white rounded-[8px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-black/5 flex flex-col relative">
              <div className="absolute top-4 right-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-4 h-4" alt="Google" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full object-cover" alt="User" />
                <div>
                  <h5 className="text-[14px] font-bold text-[#1a0dab]">Vikram Singh</h5>
                  <p className="text-[12px] text-text-secondary mt-0.5">1 year ago</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-[#e7711b] mb-3">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                ))}
              </div>
              <p className="text-[14px] text-text-primary leading-relaxed line-clamp-6">
                Bond Max has several different kind of bonds and adhesives. It works very instantly. I've used countless adhesives for heavy metal joints, but nothing holds up under stress testing quite like this one. Best for industry applications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          06 — FINAL CTA (UI CLONE)
          ======================================================== */}
      <section id="contact" className="bg-brand-strong w-full relative overflow-hidden">
        
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-10 lg:py-12 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 gap-10 lg:gap-8">
          
          {/* Left: Text & Button */}
          <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-extrabold text-white mb-3 leading-[1.1] tracking-tight uppercase">
              Ready to Make a Stronger Bond?
            </h2>
            <p className="text-[14px] md:text-[16px] text-white/90 font-medium mb-6">
              Find the right adhesive solution for your application. We deliver industrial strength for every need.
            </p>
            <a 
              href="mailto:team@dungarchemicals.com" 
              className="bg-white text-text-primary px-8 py-3.5 rounded-[6px] text-[15px] font-bold hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              Talk to Us &rarr;
            </a>
          </div>

          {/* Right: Product Image */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <img 
              src={actualProductImg} 
              alt="Bond Max Tube" 
              className="w-full max-w-[200px] lg:max-w-[240px] h-auto object-contain bg-white p-4 border-[6px] border-white rounded-[12px] shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
