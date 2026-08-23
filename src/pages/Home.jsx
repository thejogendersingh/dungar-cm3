import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

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
import { ChevronLeft, ChevronRight, Trophy, Droplet, ShieldCheck, Users, Award, MapPin, Armchair, Layers, SprayCan, Wrench } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
    title: "Credofix - The Toughest Adhesive on Planet Earth",
    subtitle: "Incredibly Strong, 100% Waterproof Bonding Solutions",
    buttonText: "Explore Products",
    buttonLink: "#products"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
    title: "Industrial Grade Bonding Power",
    subtitle: "Engineered for the most demanding applications and materials",
    buttonText: "View Applications",
    buttonLink: "#applications"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
    title: "Trusted by Professionals Worldwide",
    subtitle: "Premium quality adhesive solutions for every project",
    buttonText: "Enquire Now",
    buttonLink: "#contact"
  }
];
const brandCtas = [
  "Built for stronger everyday bonds.",
  "Industrial-grade strength for every project.",
  "Engineered for precision and absolute reliability."
];


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const [ctaIndex, setCtaIndex] = useState(0);
  const [ctaFade, setCtaFade] = useState(true);

  // Auto-advance rotating CTA
  useEffect(() => {
    const timer = setInterval(() => {
      setCtaFade(false);
      setTimeout(() => {
        setCtaIndex((prev) => (prev + 1) % brandCtas.length);
        setCtaFade(true);
      }, 500);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

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
      <section id="hero" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Content */}
            <div className="relative z-20 w-full h-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-12">
              <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-extrabold text-white leading-[1.1] tracking-tight max-w-[900px] mb-6 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[22px] text-white/90 font-medium max-w-[700px] mb-10 drop-shadow-md">
                {slide.subtitle}
              </p>
              <a 
                href={slide.buttonLink} 
                className="bg-surface-dark hover:opacity-90 text-white px-8 py-3.5 rounded-[4px] text-[16px] font-bold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors hidden sm:block"
          aria-label="Previous slide"
        >
          <ChevronLeft size={48} strokeWidth={1.5} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors hidden sm:block"
          aria-label="Next slide"
        >
          <ChevronRight size={48} strokeWidth={1.5} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${index === currentSlide ? 'w-8 bg-surface-dark' : 'w-4 bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================
          02.5 — STATS / FEATURES
          ======================================================== */}
      <section className="bg-bg-primary py-12 lg:py-16 border-b border-border-subtle relative z-20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="text-surface-dark mb-4 transition-transform duration-300 group-hover:scale-110">
                <Trophy size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] font-extrabold text-text-primary mb-1">
                <Counter to={1} prefix="#" delay={0} />
              </h3>
              <p className="text-[13px] text-text-secondary leading-tight">Trusted Brand<br/>in India</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="text-surface-dark mb-4 transition-transform duration-300 group-hover:scale-110">
                <Droplet size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] font-extrabold text-text-primary mb-1">
                <Counter to={100} suffix="%" delay={0.1} />
              </h3>
              <p className="text-[13px] text-text-secondary leading-tight">Waterproof<br/>Formula</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="text-surface-dark mb-4 transition-transform duration-300 group-hover:scale-110">
                <ShieldCheck size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] font-extrabold text-text-primary mb-1">
                <Counter to={10} suffix="+" delay={0.2} />
              </h3>
              <p className="text-[13px] text-text-secondary leading-tight">Years of<br/>Excellence</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="text-surface-dark mb-4 transition-transform duration-300 group-hover:scale-110">
                <Users size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] font-extrabold text-text-primary mb-1">
                <Counter to={10000} suffix="+" delay={0.3} />
              </h3>
              <p className="text-[13px] text-text-secondary leading-tight">Satisfied<br/>Customers</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================
          04 — BRAND STORY (ABOUT)
          ======================================================== */}
      <section id="about" className="bg-white py-20 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8"
        >
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            
            {/* Left: Heading */}
            <div className="w-full lg:w-5/12">
              <span className="text-text-secondary text-eyebrow mb-5 block">About Credofix</span>
              <h2 className="text-[40px] md:text-[52px] lg:text-[60px] font-extrabold text-text-primary leading-[1.05] tracking-tight">
                Built for <br className="hidden md:block"/> stronger bonds.
              </h2>
            </div>
            
            {/* Right: Paragraphs */}
            <div className="w-full lg:w-7/12">
              <p className="text-[18px] md:text-[22px] text-text-primary font-medium mb-6 leading-relaxed">
                Credofix is engineered for ultimate performance. We focus on the exact chemistry of adhesion, ensuring that whether in an industrial workshop or for detailed craft repair, the bond holds true under any condition.
              </p>
              <p className="text-[16px] text-text-secondary mb-10 leading-relaxed max-w-[600px]">
                Founded on the principles of uncompromising quality and reliability, our products are rigorously tested to meet industrial standards. We proudly manufacture in India, bringing world-class adhesive solutions to professionals and DIYers alike.
              </p>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-8 border-t border-border-subtle">
                <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
                  <div className="text-surface-dark flex-shrink-0">
                    <Award size={20} className="sm:w-[26px] sm:h-[26px]" strokeWidth={2} />
                  </div>
                  <span className="text-[12px] sm:text-[16px] font-medium text-text-primary leading-tight">Quality <br className="sm:hidden"/>Focused</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
                  <div className="text-surface-dark flex-shrink-0">
                    <MapPin size={20} className="sm:w-[26px] sm:h-[26px]" strokeWidth={2} />
                  </div>
                  <span className="text-[12px] sm:text-[16px] font-medium text-text-primary leading-tight">Made in <br className="sm:hidden"/>India</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
                  <div className="text-surface-dark flex-shrink-0">
                    <ShieldCheck size={20} className="sm:w-[26px] sm:h-[26px]" strokeWidth={2} />
                  </div>
                  <span className="text-[12px] sm:text-[16px] font-medium text-text-primary leading-tight">Reliable <br className="sm:hidden"/>Solutions</span>
                </div>
              </div>
            </div>
            
          </div>

        </motion.div>
      </section>

      {/* ========================================================
          03 — PRODUCT DISCOVERY
          ======================================================== */}
      <section id="products" className="bg-bg-primary py-20 lg:py-32 border-b border-border-subtle">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8"
        >
          
          <div className="mb-16 lg:mb-24">
             <span className="text-text-secondary text-eyebrow block mb-3 uppercase tracking-widest text-sm font-bold">Find the right bond</span>
             <h2 className="text-[32px] md:text-[42px] font-extrabold text-text-primary tracking-tight leading-tight">Our Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* PRODUCT 31 (125g) - Landscape Hover Card */}
            <div tabIndex="0" className="group relative w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-[4px] cursor-pointer shadow-sm hover:shadow-xl focus:outline-none transition-shadow duration-500">
              {/* Background Image */}
              <div className="absolute inset-0 bg-bg-primary">
                 <img 
                   src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=1200&q=80" 
                   alt="Stone texture" 
                   className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply grayscale transition-transform duration-700 group-hover:scale-110 group-focus:scale-110"
                 />
                 <div className="absolute inset-0 flex items-center justify-center mt-6">
                   <img 
                      src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80" 
                      alt="Credofix Gel Glue 125g Application" 
                      className="relative z-10 w-[140px] md:w-[180px] h-[210px] md:h-[270px] object-cover shadow-2xl border border-white transition-transform duration-700 group-hover:scale-105 group-focus:scale-105"
                   />
                 </div>
              </div>
              
              {/* Default Top Gradient & Title */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent h-1/2 opacity-100 group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0 flex justify-between items-start">
                 <h3 className="text-white text-[18px] md:text-[24px] lg:text-[28px] font-extrabold drop-shadow-md leading-tight">Credofix Gel Glue</h3>
                 <span className="bg-white text-surface-dark px-2 md:px-3 py-1 rounded-[4px] text-[11px] md:text-[13px] font-bold shadow-md">125g</span>
              </div>

              {/* Hover State: Dark Overlay */}
              <div className="absolute inset-0 bg-surface-dark/95 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6 lg:p-12 text-left z-20">
                 <span className="text-accent-copper font-bold text-[11px] md:text-[12px] uppercase tracking-widest mb-3 transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-500">01 / Gel Glue</span>
                 <div className="flex items-center gap-3 md:gap-4 mb-4 transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-500 delay-75">
                   <h3 className="text-white text-[22px] md:text-[28px] lg:text-[32px] font-extrabold leading-tight">Credofix</h3>
                   <span className="bg-white/20 text-white px-2 md:px-3 py-1 rounded-[4px] text-[11px] md:text-[13px] font-bold border border-white/30">125g</span>
                 </div>
                 <p className="text-white/80 text-[14px] lg:text-[16px] mb-6 md:mb-8 leading-relaxed transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-500 delay-100 line-clamp-4 md:line-clamp-none">
                   A high-viscosity formulation designed for precise application without dripping. Ideal for vertical surfaces and porous materials where standard liquid adhesives fail.
                 </p>
                 <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-500 delay-150">
                   <span className="inline-flex items-center text-[14px] md:text-[15px] font-bold text-white group-hover:text-accent-copper group-focus:text-accent-copper transition-colors gap-2 cursor-pointer">
                     Learn More &rarr;
                   </span>
                 </div>
              </div>
            </div>

            {/* PRODUCT 32 (250g) - Landscape Hover Card */}
            <div tabIndex="0" className="group relative w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-[4px] cursor-pointer shadow-sm hover:shadow-xl focus:outline-none transition-shadow duration-500">
              {/* Background Image */}
              <div className="absolute inset-0 bg-soft-sage">
                 <div className="absolute inset-0 flex items-center justify-center mt-6">
                   <img 
                      src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80" 
                      alt="Credofix Gel Glue 250g Application" 
                      className="relative z-10 w-[160px] md:w-[200px] h-[240px] md:h-[300px] object-cover shadow-2xl border border-white filter contrast-125 brightness-95 transition-transform duration-700 group-hover:scale-105 group-focus:scale-105"
                   />
                 </div>
              </div>
              
              {/* Default Top Gradient & Title */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent h-1/2 opacity-100 group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0 flex justify-between items-start">
                 <h3 className="text-white text-[18px] md:text-[24px] lg:text-[28px] font-extrabold drop-shadow-md leading-tight">Credofix Gel Glue</h3>
                 <span className="bg-white text-surface-dark px-2 md:px-3 py-1 rounded-[4px] text-[11px] md:text-[13px] font-bold shadow-md">250g</span>
              </div>

              {/* Hover State: Dark Overlay */}
              <div className="absolute inset-0 bg-surface-dark/95 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6 lg:p-12 text-left z-20">
                 <span className="text-accent-copper font-bold text-[11px] md:text-[12px] uppercase tracking-widest mb-3 transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-500">02 / Gel Glue</span>
                 <div className="flex items-center gap-3 md:gap-4 mb-4 transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-500 delay-75">
                   <h3 className="text-white text-[22px] md:text-[28px] lg:text-[32px] font-extrabold leading-tight">Credofix</h3>
                   <span className="bg-white/20 text-white px-2 md:px-3 py-1 rounded-[4px] text-[11px] md:text-[13px] font-bold border border-white/30">250g</span>
                 </div>
                 <p className="text-white/80 text-[14px] lg:text-[16px] mb-6 md:mb-8 leading-relaxed transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-500 delay-100 line-clamp-4 md:line-clamp-none">
                   The industrial-sized variant of our signature gel formulation. Designed for heavy users, contractors, and workshops requiring consistent supply and reliable bonding strength.
                 </p>
                 <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-500 delay-150">
                   <span className="inline-flex items-center text-[14px] md:text-[15px] font-bold text-white group-hover:text-accent-copper group-focus:text-accent-copper transition-colors gap-2 cursor-pointer">
                     Learn More &rarr;
                   </span>
                 </div>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

 

      {/* ========================================================
          05 — APPLICATIONS
          ======================================================== */}
      <section id="applications" className="bg-surface-dark py-20 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8"
        >
          
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-[32px] md:text-[42px] font-extrabold text-white mb-4 tracking-tight leading-tight">
              Solutions for Every Challenge
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/80 max-w-2xl mx-auto">
              From home repairs to professional construction projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-[8px] p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="text-bg-primary mb-6 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300">
                <Armchair size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">Wood & Furniture</h3>
              <p className="text-white/70 text-[14px] leading-relaxed mb-8 flex-grow">
                Instant bonding for MDF, plywood, and solid wood frames without clamping.
              </p>
              <span className="text-bg-primary text-[14px] font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More &rarr;
              </span>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-[8px] p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="text-bg-primary mb-6 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300">
                <Layers size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">Mica & Laminates</h3>
              <p className="text-white/70 text-[14px] leading-relaxed mb-8 flex-grow">
                Flawless edge banding and sunmica pasting with perfect edge alignment.
              </p>
              <span className="text-bg-primary text-[14px] font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More &rarr;
              </span>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-[8px] p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="text-bg-primary mb-6 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300">
                <SprayCan size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">Activator Spray</h3>
              <p className="text-white/70 text-[14px] leading-relaxed mb-8 flex-grow">
                Use our curing spray for immediate setting and maximum bond strength in seconds.
              </p>
              <span className="text-bg-primary text-[14px] font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More &rarr;
              </span>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-[8px] p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="text-bg-primary mb-6 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300">
                <Wrench size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">Multi-Purpose Fix</h3>
              <p className="text-white/70 text-[14px] leading-relaxed mb-8 flex-grow">
                Versatile, industrial-grade adhesive for everyday household repairs.
              </p>
              <span className="text-bg-primary text-[14px] font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More &rarr;
              </span>
            </div>

          </div>
        </motion.div>
      </section>

      {/* ========================================================
          06 — WHY CREDOFIX
          ======================================================== */}
      <section className="bg-bg-primary py-16 lg:py-20 border-b border-border-subtle">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Left: Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px] shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="Professional Thinking" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 grayscale opacity-90"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-7/12">
              <h2 className="text-[32px] md:text-[42px] font-extrabold text-text-primary mb-10 tracking-tight leading-tight">
                Why Credofix?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1 */}
                <div className="bg-white p-6 rounded-[8px] border border-border-subtle shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-surface-dark mb-4">
                    <ShieldCheck size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[18px] font-bold text-text-primary mb-2">Strong Bond</h4>
                  <p className="text-[14px] text-text-secondary leading-relaxed">Formulated for high tensile strength under extreme stress and variable temperatures.</p>
                </div>

                {/* 2 */}
                <div className="bg-white p-6 rounded-[8px] border border-border-subtle shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-surface-dark mb-4">
                    <Droplet size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[18px] font-bold text-text-primary mb-2">Easy Application</h4>
                  <p className="text-[14px] text-text-secondary leading-relaxed">Viscosity controlled for absolute precision, reducing mess and waste.</p>
                </div>

                {/* 3 */}
                <div className="bg-white p-6 rounded-[8px] border border-border-subtle shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-surface-dark mb-4">
                    <Award size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[18px] font-bold text-text-primary mb-2">Consistent Quality</h4>
                  <p className="text-[14px] text-text-secondary leading-relaxed">Rigorous batch tested to ensure absolute reliability in every single package.</p>
                </div>

                {/* 4 */}
                <div className="bg-white p-6 rounded-[8px] border border-border-subtle shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-surface-dark mb-4">
                    <MapPin size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[18px] font-bold text-text-primary mb-2">Made in India</h4>
                  <p className="text-[14px] text-text-secondary leading-relaxed">Manufactured locally with pride, care, and strict adherence to industrial standards.</p>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* ========================================================
          07 — VISUAL BRAND STORY
          ======================================================== */}
      <section className="w-full relative h-[260px] md:h-[320px] bg-black overflow-hidden border-b border-border-subtle">
        <img 
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80" 
          alt="Industrial manufacturing facility" 
          className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <div className="h-[80px] md:h-[100px] flex items-center justify-center">
            <h2 
               className={`text-[28px] md:text-[38px] lg:text-[48px] font-extrabold text-white max-w-4xl leading-[1.2] tracking-tight drop-shadow-md transition-opacity duration-500 ${ctaFade ? 'opacity-100' : 'opacity-0'}`}
            >
              {brandCtas[ctaIndex]}
            </h2>
          </div>
        </div>
      </section>

      {/* ========================================================
          08 — CONTACT CTA
          ======================================================== */}
      <section id="contact" className="bg-surface-dark py-12 lg:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          
          <div className="w-full md:w-7/12 text-center md:text-left">
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-white mb-4 leading-[1.1] tracking-tight">Need the right adhesive?</h2>
            <p className="text-[16px] md:text-[18px] text-white/80 max-w-md mx-auto md:mx-0">
              Talk to our team for product information, bulk orders, and business enquiries.
            </p>
          </div>
          
          <div className="w-full md:w-5/12 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
             <a href="mailto:sales@credofix.in" className="bg-white text-text-primary h-[48px] px-8 rounded-[8px] text-[15px] font-bold flex items-center justify-center hover:bg-bg-primary transition-colors">
               Send Enquiry
             </a>
             <a href="https://wa.me/918000567117" target="_blank" rel="noreferrer" className="bg-transparent border border-white/40 text-white h-[48px] px-8 rounded-[8px] text-[15px] font-bold flex items-center justify-center hover:border-white transition-colors">
               WhatsApp Us
             </a>
          </div>

        </motion.div>
      </section>

    </div>
  );
}
