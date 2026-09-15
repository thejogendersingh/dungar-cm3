import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star, Shield, Droplet, Clock, ArrowRight, Download, MessageCircle } from 'lucide-react';

// Gel Glue Variant Images
import gelGlue20gImg from '../assets/gel-glue-29-20g.PNG';
import gelGlue50gImg from '../assets/gel-glue-30-50g.PNG';
import gelGlue125gImg from '../assets/gel-glue-31-125g.PNG';
import gelGlue250gImg from '../assets/credofix-gel-glue.PNG';

// Rapid Glue Variant Images
import rapidGlue20gImg from '../assets/rapid-glue-27-20g.PNG';
import rapidGlue50gImg from '../assets/credofix-rapid-glue.PNG';

// Activator Spray Image
import activatorSprayImg from '../assets/activator-spray.PNG';

function ProductFAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 sm:py-6 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
      >
        <h4 className={`text-[15px] sm:text-[16px] font-semibold pr-6 transition-colors duration-200 ${isOpen ? 'text-[#FF7A00]' : 'text-[#1A1A2E] group-hover:text-[#FF7A00]'}`}>
          {question}
        </h4>
        <span className={`shrink-0 text-xl sm:text-2xl font-light w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${isOpen ? 'bg-orange-50 text-[#FF7A00] rotate-45' : 'bg-gray-100 text-gray-500 group-hover:bg-orange-50 group-hover:text-[#FF7A00]'}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 text-[13.5px] sm:text-[14.5px] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const productFaqs = [
  {
    question: "What products does Dungar Chemicals manufacture?",
    answer: "Dungar Chemicals specializes in advanced instant-bonding solutions. Our flagship Credofix range includes high-performance Gel Glues, Rapid Glues, and Activator Sprays engineered specifically for Wood, PVC, Acrylic, and Stone applications."
  },
  {
    question: "How is Credofix Gel Glue different from standard adhesives?",
    answer: "Credofix Gel Glue is a premium, high-viscosity cyanoacrylate adhesive. Unlike standard liquid glues, its thick gel formula prevents dripping and absorption into porous surfaces, making it perfect for vertical applications and seamless woodworking."
  },
  {
    question: "When should I use the Activator Spray with Rapid Glue?",
    answer: "The Activator Spray is designed to be used with our Rapid Glue to instantly accelerate the curing process. Simply spray the activator on one surface, apply the Rapid Glue to the other, and press them together for a flawless, unbreakable bond within seconds."
  },
  {
    question: "How can I become an authorized dealer for Dungar Chemicals?",
    answer: "You can join our growing business network by contacting our sales and distribution team through WhatsApp or phone. Once submitted, our business development team will review your application and provide dealership onboarding details."
  },
  {
    question: "What is the shelf life of Credofix instant adhesives?",
    answer: "When stored properly in a cool, dry place away from direct sunlight, Credofix adhesives maintain peak performance for up to 12 months. We recommend ensuring the cap is tightly sealed after every use to prevent the glue from curing inside the bottle."
  }
];

export default function ProductPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('250g');
  const [activeTab, setActiveTab] = useState('description');
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productsList = [
    {
      id: 1,
      name: "Credofix",
      subtitle: "GEL GLUE",
      grade: "High-Viscosity Non-Drip Gel Adhesive",
      desc: "Anti-Blooming Formula: Dries crystal clear with zero white residue, ensuring clean and aesthetic joints.\nAll-Weather Performance: Delivers consistent, ultra-strong bonding across summer, winter, and high-humidity conditions.\nHigh-Viscosity Gel: Non-drip formula designed for maximum precision and superior gap-filling strength.\nAvailable Variants: 250g (Credofix 32), 125g (Credofix 31), 50g (Credofix 30), 20g (Credofix 29).",
      applications: [
        "Wood & Panels: WPC, PVC Foam, HDHMR, MDF, Ply, Wooden, Mica, Charcoal, Corian, Louvre, 3D Wall Panels.",
        "Sheets & Edges: Acrylic & PVC Sheets, PVC Edge Banding Tapes.",
        "Hardware & Stone: Metal Strips, Marble & Stone, Ceramic, Particle & Gypsum Board, Fabric Flex."
      ],
      directions: [
        "Clean: Wipe both surfaces with a dry cloth to remove dust and moisture.",
        "Apply: Spread a small amount of glue on one surface only.",
        "Bond: Press firmly by hand for 1 to 2 minutes for maximum strength."
      ],
      sizes: ['250g', '125g', '50g', '20g'],
      defaultSize: '250g',
      variants: {
        '250g': { code: 'CREDOFIX 32', pack: '250g Net', img: gelGlue250gImg },
        '125g': { code: 'CREDOFIX 31', pack: '125g Bottle', img: gelGlue125gImg },
        '50g': { code: 'CREDOFIX 30', pack: '50g Bottle', img: gelGlue50gImg },
        '20g': { code: 'CREDOFIX 29', pack: '20g Bottle', img: gelGlue20gImg }
      },
      rating: 5.0,
      reviews: 128
    },
    {
      id: 2,
      name: "Credofix",
      subtitle: "RAPID GLUE",
      grade: "Ultra-Fast Cyanoacrylate Instant Adhesive",
      desc: "Ultra-Fast Curing: Low-viscosity formula engineered for instant bonding in seconds.\nHigh Penetration Strength: Flows easily into micro-gaps and close-fitting joints for a tight, rigid seal.\nAnti-Blooming Formula: Dries crystal clear with zero white residue, ensuring invisible, clean finishes.\nAll-Weather Reliability: Delivers stable and peak bonding strength across summer, winter, and high-humidity seasons.\nAvailable Variants: 50g (Credofix 28), 20g (Credofix 27).",
      applications: [
        "Wood & Panels: WPC, PVC Foam, HDHMR, MDF, Ply, Wooden, Mica, Charcoal, Corian, Louvres, 3D Wall Panels.",
        "Sheets & Edges: Acrylic & PVC Sheets, PVC Edge Banding Tapes.",
        "Hardware & Stone: Metal Strips, Marble & Stone, Ceramic, Particle & Gypsum Board, Fabric Flex."
      ],
      directions: [
        "Clean: Wipe both surfaces with a dry cloth to remove dirt, dust, and oil.",
        "Apply: Apply sparingly on one surface only directly from the bottle nozzle.",
        "Bond: Press firmly by hand for just 5 to 10 seconds for an instant, ultra-strong hold."
      ],
      sizes: ['50g', '20g'],
      defaultSize: '50g',
      variants: {
        '50g': { code: 'CREDOFIX 28', pack: '50g Bottle', img: rapidGlue50gImg },
        '20g': { code: 'CREDOFIX 27', pack: '20g Bottle', img: rapidGlue20gImg }
      },
      rating: 4.8,
      reviews: 96
    },
    {
      id: 3,
      name: "Credofix",
      subtitle: "ACTIVATOR SPRAY",
      grade: "Instant Adhesive Chemical Accelerator",
      desc: "Instant 2-Second Bonding: Rapidly accelerates curing time when used with Cyanoacrylate (Gel & Rapid Glues) for immediate structural hold.\nNon-Yellowing & Clean Finish: Prevents joint discoloration and blooming, leaving a clear, professional bond line.\nNo-Sag / Vertical Application: Perfect for overhead or vertical surface joining without dripping or runs.\nGap-Filling Power: Enhances bonding strength on porous, rough, or uneven materials where glues cure slowly.\nAvailable Variants: 200ml Aerosol, 100ml Aerosol.",
      applications: [
        "Wood & Profiles: WPC, PVC Profiles, MDF, HDHMR, Plywood, Wooden Strips, Mitre Joints.",
        "Panels & Decorative: Louvres, Charcoal Sheets, Acrylics, Corian, 3D Wall Panels, PVC Edge Bands.",
        "Stone & Hardware: Marble, Granite, Metal Trims, Ceramic Tiles, Gypsum Boards."
      ],
      directions: [
        "Prepare: Ensure both surfaces are clean, dry, and free from dust or grease.",
        "Spray: Spray Activator on one surface from a distance of 15–20 cm and let it evaporate for 2–3 seconds.",
        "Apply & Join: Apply Credofix Glue to the other surface, press both parts together immediately, and hold firmly for 2 to 3 seconds."
      ],
      sizes: ['200ml', '100ml'],
      defaultSize: '200ml',
      variants: {
        '200ml': { code: 'SPRAY ACTIVATOR', pack: '200ml Aerosol', img: activatorSprayImg },
        '100ml': { code: 'SPRAY ACTIVATOR', pack: '100ml Aerosol', img: activatorSprayImg }
      },
      rating: 4.9,
      reviews: 215
    }
  ];

  const currentProduct = productsList[currentIndex];
  const currentVariant = currentProduct.variants[selectedSize] || currentProduct.variants[currentProduct.defaultSize || currentProduct.sizes[0]];

  const handleNext = () => {
    setDirection(1);
    const nextIdx = (currentIndex + 1) % productsList.length;
    setCurrentIndex(nextIdx);
    const nextProd = productsList[nextIdx];
    setSelectedSize(nextProd.defaultSize || nextProd.sizes[0]);
  };

  const handlePrev = () => {
    setDirection(-1);
    const prevIdx = (currentIndex - 1 + productsList.length) % productsList.length;
    setCurrentIndex(prevIdx);
    const prevProd = productsList[prevIdx];
    setSelectedSize(prevProd.defaultSize || prevProd.sizes[0]);
  };

  const selectProduct = (idx) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
    const targetProd = productsList[idx];
    setSelectedSize(targetProd.defaultSize || targetProd.sizes[0]);
  };

  const getScaleForSize = (size) => {
    if (size === '20g') return 0.86;
    if (size === '50g') return 0.94;
    if (size === '100ml') return 0.94;
    if (size === '125g') return 1.0;
    if (size === '200ml') return 1.04;
    if (size === '250g') return 1.08;
    return 1.0;
  };

  const productImageVariants = {
    initial: (dir) => ({ 
      x: dir > 0 ? 110 : -110, 
      opacity: 0, 
      rotate: dir > 0 ? 7 : -7,
      scale: 0.94
    }),
    animate: { 
      x: 0, 
      opacity: 1, 
      rotate: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 220, 
        damping: 22,
        mass: 0.8
      } 
    },
    exit: (dir) => ({ 
      x: dir > 0 ? -110 : 110, 
      opacity: 0, 
      rotate: dir > 0 ? -7 : 7,
      scale: 0.94,
      transition: { duration: 0.22, ease: "easeIn" } 
    })
  };

  return (
    <div className="w-full bg-[#F8F9FA] text-[#1A1A2E] pt-2 lg:pt-4 pb-12">
      
      {/* Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-3 relative z-10">
        <div className="flex items-center text-[11px] uppercase tracking-widest font-bold text-gray-400">
          <a href="/" className="hover:text-[#FF7A00] transition-colors">Home</a>
          <span className="mx-2 text-gray-300">/</span>
          <a href="/#products" className="hover:text-[#FF7A00] transition-colors">Products</a>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-[#FF7A00]">{currentProduct.name} {currentProduct.subtitle} ({currentVariant.code})</span>
        </div>
      </div>

      {/* Ultra Premium Interactive Showcase */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-12 relative">
        
        {/* Product Quick-Switch Tabs (Mobile, Tablet, Desktop) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto hide-scrollbar px-1 py-1">
          {productsList.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => selectProduct(idx)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                currentIndex === idx
                  ? 'bg-[#1A1A2E] text-white shadow-md scale-102'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-[#1A1A2E]'
              }`}
            >
              <span>{p.name} {p.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Main Card Container with Line-Centered Arrows */}
        <div className="relative">
          {/* Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-200/90 flex flex-col-reverse lg:flex-row items-stretch gap-8 lg:gap-14 relative overflow-hidden">
            
            {/* Left: Product Info (Fixed key on currentIndex, NEVER shifts on size change) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-20">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div 
                  key={`info-${currentIndex}`}
                  custom={direction}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="w-full flex flex-col justify-center"
                >
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-orange-50 border border-orange-200/70 text-[#FF7A00] text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider rounded-full shadow-2xs">
                      {currentProduct.grade}
                    </span>
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A2E] tracking-tight leading-tight mb-2">
                    {currentProduct.name}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#FF4500]">
                      {currentProduct.subtitle}
                    </span>
                  </h1>

                  {/* Available Sizes Selector */}
                  <div className="mt-4 mb-2">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2.5">
                      Available Sizes
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentProduct.sizes.map((size) => {
                        const isSelected = selectedSize === size;
                        return (
                          <button 
                            key={size}
                            type="button"
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all duration-150 cursor-pointer active:scale-95 border ${
                              isSelected 
                                ? 'bg-[#1A1A2E] text-white shadow-xs border-[#1A1A2E]' 
                                : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Feature Bullet Points with Clear Spacing */}
                  <div className="space-y-2.5 my-5 text-[13px] sm:text-[13.5px] leading-relaxed max-w-lg">
                    {currentProduct.desc.split('\n').map((line, i) => {
                      const [title, ...rest] = line.split(':');
                      return (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] mt-2 shrink-0"></span>
                          <p className="text-gray-600">
                            {rest.length > 0 ? (
                              <>
                                <strong className="font-bold text-[#1A1A2E]">{title}:</strong>
                                <span className="text-gray-500"> {rest.join(':')}</span>
                              </>
                            ) : (
                              <span>{line}</span>
                            )}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <a 
                      href={`https://wa.me/919672444677?text=${encodeURIComponent(`Hello Dungar Chemicals, I would like to inquire about ${currentProduct.name} ${currentProduct.subtitle} (${selectedSize}).`)}`}
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-5 rounded-xl font-bold text-[12px] tracking-wider transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 uppercase"
                    >
                      <span>WhatsApp Chat</span>
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <a 
                      href="/#cta"
                      className="flex-1 bg-[#1A1A2E] hover:bg-gradient-to-r hover:from-[#FF8C00] hover:to-[#FF4500] text-white py-3.5 px-5 rounded-xl font-bold text-[12px] tracking-wider transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 uppercase"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Premium Image Stage (Fixed container, ZERO layout collapse) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative bg-gradient-to-br from-gray-50/80 via-white to-orange-50/20 rounded-2xl border border-gray-100/90 p-6 sm:p-8 lg:p-12 min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div 
                  key={`product-img-${currentIndex}`}
                  custom={direction}
                  variants={productImageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full h-full flex items-center justify-center relative"
                >
                  <motion.img 
                    key={`variant-${currentIndex}-${selectedSize}`}
                    initial={{ opacity: 0.75, scale: 0.96 }}
                    animate={{ 
                      opacity: 1, 
                      scale: getScaleForSize(selectedSize)
                    }}
                    transition={{ 
                      opacity: { duration: 0.2 },
                      scale: { type: "spring", stiffness: 260, damping: 24 }
                    }}
                    src={currentVariant.img} 
                    alt={`${currentProduct.name} ${currentProduct.subtitle} ${selectedSize}`}
                    className="max-w-[240px] sm:max-w-[290px] lg:max-w-[360px] max-h-[290px] sm:max-h-[340px] lg:max-h-[390px] w-auto h-auto object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.14)] relative z-20 select-none" 
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>

        {/* Desktop / Tablet Floating Side Arrows Centered Exactly On Border Lines */}
        <button 
          type="button"
          onClick={handlePrev} 
          aria-label="Previous Product"
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.12)] border border-gray-200 text-gray-700 hover:text-[#FF7A00] hover:border-[#FF7A00] items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          type="button"
          onClick={handleNext} 
          aria-label="Next Product"
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.12)] border border-gray-200 text-gray-700 hover:text-[#FF7A00] hover:border-[#FF7A00] items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

        {/* Mobile Navigation Controls (Below Card on Small Screens) */}
        <div className="flex sm:hidden items-center justify-between mt-5 px-2">
          <button
            type="button"
            onClick={handlePrev}
            className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 text-[12px] font-bold flex items-center gap-1 shadow-xs active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>
          <div className="flex items-center gap-1.5">
            {productsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => selectProduct(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-6 h-2 bg-[#FF7A00]'
                    : 'w-2 h-2 bg-gray-300'
                }`}
                aria-label={`Go to product ${idx + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 text-[12px] font-bold flex items-center gap-1 shadow-xs active:scale-95"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Technical Specifications Tabs */}
      <div className="bg-white border-t border-gray-200/80 py-16 relative z-20">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
          
          <div className="flex gap-8 lg:gap-12 border-b border-gray-200 mb-10 overflow-x-auto hide-scrollbar w-full justify-center">
            {['description', 'applications', 'directions'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-[12px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors relative ${
                  activeTab === tab ? 'text-[#FF7A00]' : 'text-gray-400 hover:text-[#1A1A2E]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF7A00]"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="w-full">
            {activeTab === 'description' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto shadow-xs">
                  <table className="w-full text-left text-[13px] lg:text-[14px] min-w-[540px]">
                    <tbody>
                      {currentProduct.desc.split('\n').map((line, i) => {
                        const parts = line.split(':');
                        if (parts.length < 2) {
                          return (
                            <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-orange-50/20 transition-colors">
                              <td colSpan="2" className="px-6 py-4 text-gray-700 font-medium">
                                <span className="text-[#FF7A00] mr-2 font-bold">•</span> {line}
                              </td>
                            </tr>
                          );
                        }
                        return (
                          <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-orange-50/20 transition-colors">
                            <th className="px-6 py-4 font-bold text-gray-900 w-1/3 bg-gray-50/70 border-r border-gray-100 align-top">
                              {parts[0].trim()}
                            </th>
                            <td className="px-6 py-4 text-gray-600 font-medium align-top">
                              {parts.slice(1).join(':').trim()}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'applications' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto shadow-xs">
                  <table className="w-full text-left text-[13px] lg:text-[14px] min-w-[540px]">
                    <tbody>
                      {currentProduct.applications.map((app, index) => {
                        const parts = app.split(':');
                        if (parts.length < 2) {
                          return (
                            <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-orange-50/20 transition-colors">
                              <td colSpan="2" className="px-6 py-4 text-gray-700 font-medium">
                                <span className="text-[#FF7A00] mr-2 font-bold">•</span> {app}
                              </td>
                            </tr>
                          );
                        }
                        return (
                          <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-orange-50/20 transition-colors">
                            <th className="px-6 py-4 font-bold text-gray-900 w-1/3 bg-gray-50/70 border-r border-gray-100 align-top">
                              {parts[0].trim()}
                            </th>
                            <td className="px-6 py-4 text-gray-600 font-medium align-top">
                              {parts.slice(1).join(':').trim()}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'directions' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto shadow-xs">
                  <table className="w-full text-left text-[13px] lg:text-[14px] min-w-[540px]">
                    <tbody>
                      {currentProduct.directions.map((dir, index) => {
                        const parts = dir.split(':');
                        if (parts.length < 2) {
                          return (
                            <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-orange-50/20 transition-colors">
                              <td colSpan="2" className="px-6 py-4 text-gray-700 font-medium">
                                <span className="text-[#FF7A00] mr-2 font-bold">•</span> {dir}
                              </td>
                            </tr>
                          );
                        }
                        return (
                          <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-orange-50/20 transition-colors">
                            <th className="px-6 py-4 font-bold text-gray-900 w-1/3 bg-gray-50/70 border-r border-gray-100 align-top">
                              {parts[0].trim()}
                            </th>
                            <td className="px-6 py-4 text-gray-600 font-medium align-top">
                              {parts.slice(1).join(':').trim()}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </div>

      {/* ========================================================
          FAQ SECTION (Product Page)
          ======================================================== */}
      <section id="faq" className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-14">
        <div className="max-w-[1200px] w-full mx-auto bg-white rounded-2xl p-6 sm:p-10 lg:p-14 border border-gray-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-[12px] font-bold text-[#FF7A00] uppercase tracking-widest block mb-1.5">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A2E] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[13px] sm:text-[14.5px] text-gray-500 mt-2 max-w-2xl mx-auto">
              Everything you need to know about Credofix instant bonding adhesives, applications, and usage tips.
            </p>
          </div>

          <div className="flex flex-col border-t border-gray-100">
            {productFaqs.map((faq, index) => (
              <ProductFAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
