import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star, Shield, Droplet, Clock, ArrowRight, Download } from 'lucide-react';
import actualProductImg from '../assets/product.png';

export default function ProductPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('50g');
  const [activeTab, setActiveTab] = useState('description');
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productsList = [
    {
      id: 1,
      name: "Credofix",
      subtitle: "Gel Glue",
      grade: "Premium Grade",
      desc: "High strength, clear finish gel adhesive. Perfect for quick repairs, edge banding, and applications requiring fast curing and precise control.",
      img: actualProductImg,
      themeGlow: "bg-[#D97706]",
      accentText: "text-[#B45309]",
      primaryBtn: "bg-slate-900 hover:bg-amber-500 hover:text-slate-900",
      sizes: ['50g', '100g', '250g', '500g'],
      rating: 5.0,
      reviews: 128
    },
    {
      id: 2,
      name: "Credofix",
      subtitle: "Rapid Glue",
      grade: "Specialist Grade",
      desc: "Instant bonding rapid adhesive. Multi-surface formulation for immediate hold and waterproof finish across various industrial applications.",
      img: actualProductImg,
      themeGlow: "bg-[#1E3A8A]",
      accentText: "text-[#1E3A8A]",
      primaryBtn: "bg-slate-900 hover:bg-amber-500 hover:text-slate-900",
      sizes: ['250g', '500g'],
      rating: 4.8,
      reviews: 96
    },
    {
      id: 3,
      name: "Credofix",
      subtitle: "Activator",
      grade: "Industrial Grade",
      desc: "Professional grade cyanoacrylate accelerator. Ensures no-residue instant curing for all cyanoacrylate adhesives in high-speed manufacturing.",
      img: actualProductImg,
      themeGlow: "bg-[#0F172A]",
      accentText: "text-[#334155]",
      primaryBtn: "bg-slate-900 hover:bg-amber-500 hover:text-slate-900",
      sizes: ['500ml'],
      rating: 4.9,
      reviews: 215
    }
  ];

  const currentProduct = productsList[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % productsList.length);
    const nextSizes = productsList[(currentIndex + 1) % productsList.length].sizes;
    setSelectedSize(nextSizes[0]);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + productsList.length) % productsList.length);
    const prevSizes = productsList[(currentIndex - 1 + productsList.length) % productsList.length].sizes;
    setSelectedSize(prevSizes[0]);
  };

  const getScaleForSize = (size) => {
    if (size === '50g') return 0.75;
    if (size === '100g') return 0.85;
    if (size === '250g') return 1.0;
    if (size === '500g' || size === '500ml') return 1.15;
    return 1;
  };

  const slideVariants = {
    initial: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    animate: { 
      x: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.3 } } 
    },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.2 } })
  };

  const imageVariants = {
    initial: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0, rotate: dir > 0 ? 10 : -10 }),
    animate: { 
      x: 0, opacity: 1, rotate: 0, 
      transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.1 } 
    },
    exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0, rotate: dir > 0 ? -10 : 10, transition: { duration: 0.2 } })
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-[#2C2424] min-h-screen pt-[60px] lg:pt-[70px]">
      
      {/* Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-2 relative z-10">
        <div className="flex items-center text-[11px] uppercase tracking-widest font-bold text-gray-400">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <span className="mx-2 text-gray-300">/</span>
          <a href="/#products" className="hover:text-black transition-colors">Products</a>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-black">{currentProduct.name}</span>
        </div>
      </div>

      {/* Ultra Premium Interactive Showcase */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-16 relative">
        
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 right-2 md:right-4 z-30 flex justify-between pointer-events-none">
          <button 
            onClick={handlePrev} 
            className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-black hover:bg-gray-50 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 pr-1" />
          </button>
          <button 
            onClick={handleNext} 
            className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-black hover:bg-gray-50 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 pl-1" />
          </button>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-[32px] lg:rounded-[48px] p-8 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.04)] border border-gray-100/50 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden">
          
          <AnimatePresence custom={direction} mode="wait">
            
            {/* Left: Product Info */}
            <motion.div 
              key={`info-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full lg:w-1/2 flex flex-col justify-center relative z-20"
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] md:text-[10px] font-black uppercase tracking-widest rounded-full">
                  {currentProduct.grade}
                </span>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[11px] md:text-[11px] text-gray-500 ml-1 font-bold">{currentProduct.rating} ({currentProduct.reviews})</span>
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-black text-black mb-1 tracking-tight leading-[1.1]">
                {currentProduct.name} <br />
                <span className={currentProduct.accentText}>{currentProduct.subtitle}</span>
              </h1>
              
              <p className="text-[14px] lg:text-[15px] text-gray-500 my-5 leading-relaxed max-w-md font-medium">
                {currentProduct.desc}
              </p>

              {/* Size Selector */}
              <div className="mb-6">
                <h3 className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Select Volume</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.sizes.map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full text-[12px] font-black transition-all duration-300 ${
                        selectedSize === size 
                          ? 'bg-black text-white shadow-md scale-105' 
                          : 'bg-gray-50 text-gray-500 border border-gray-200 hover:border-black hover:text-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className={`flex-1 ${currentProduct.primaryBtn} text-white py-3 px-6 rounded-[14px] font-bold text-[13px] transition-colors shadow-lg flex items-center justify-center gap-2 uppercase tracking-widest`}>
                  Request Quote <ArrowRight className="w-4 h-4" />
                </button>
                <button className="flex-1 bg-white hover:bg-gray-50 text-black border border-gray-200 py-3 px-6 rounded-[14px] font-bold text-[13px] transition-colors flex items-center justify-center gap-2 uppercase tracking-widest">
                  Tech Data <Download className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence custom={direction} mode="wait">
            {/* Right: Premium Image Showcase */}
            <motion.div 
              key={`img-${currentIndex}-${selectedSize}`}
              custom={direction}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[400px] lg:min-h-[600px] z-10"
            >
              {/* Dynamic Theme Glow */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] ${currentProduct.themeGlow} rounded-full blur-[120px] opacity-10 pointer-events-none`}></div>
              
              {/* Rotating Background Decor (optional aesthetic) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px] border border-gray-200/50 rounded-full border-dashed opacity-50"
              />

              <motion.img 
                animate={{ 
                  y: [0, -20, 0],
                  scale: getScaleForSize(selectedSize)
                }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  scale: { type: "spring", stiffness: 200, damping: 20 }
                }}
                src={currentProduct.img} 
                alt={currentProduct.name} 
                className="w-full max-w-[280px] lg:max-w-[400px] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)] relative z-20" 
              />
            </motion.div>
          </AnimatePresence>
          
        </div>
      </div>

      {/* Technical Specifications Tabs */}
      <div className="bg-white border-t border-gray-100 py-20 relative z-20">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
          
          <div className="flex gap-12 border-b border-gray-100 mb-12 overflow-x-auto hide-scrollbar w-full justify-center">
            {['description', 'specifications', 'application'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-[14px] font-black uppercase tracking-widest whitespace-nowrap transition-colors relative ${
                  activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-black"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="w-full text-center">
            {activeTab === 'description' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-gray-600 leading-relaxed font-medium text-[16px] lg:text-[18px]">
                <p className="mb-6">
                  {currentProduct.name} is meticulously formulated for professionals who demand the absolute best in bonding strength and reliability. It is specifically engineered to provide exceptional resistance and durability.
                </p>
                <p>
                  Whether you are working with hardwood, softwood, MDF, or plywood, it ensures a bond that is often stronger than the wood itself. Superior cross-linking technology guarantees long-lasting performance.
                </p>
              </motion.div>
            )}
            
            {activeTab === 'specifications' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full">
                <table className="w-full text-left text-[15px] text-gray-600 font-medium bg-gray-50 rounded-2xl overflow-hidden">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <th className="py-5 px-6 font-black text-black w-1/3">Grade</th>
                      <td className="py-5 px-6">{currentProduct.grade} Certified</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-5 px-6 font-black text-black">Appearance</th>
                      <td className="py-5 px-6">Milky White Emulsion</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-5 px-6 font-black text-black">Viscosity</th>
                      <td className="py-5 px-6">Medium to High</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-5 px-6 font-black text-black">Setting Time</th>
                      <td className="py-5 px-6">4-6 Hours (Fully cures in 24 hours)</td>
                    </tr>
                    <tr>
                      <th className="py-5 px-6 font-black text-black">Shelf Life</th>
                      <td className="py-5 px-6">12 Months in cool, dry place</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}

            {activeTab === 'application' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-gray-600 leading-relaxed font-medium text-[16px] text-left mx-auto max-w-2xl">
                <ul className="list-disc pl-5 space-y-4">
                  <li>Ensure surfaces to be bonded are clean, dry, and free from dust or grease.</li>
                  <li>Apply an even coat of adhesive to one or both surfaces depending on the porosity of the wood.</li>
                  <li>Press the surfaces together while the adhesive is still wet.</li>
                  <li>Clamp the bonded pieces for 4-6 hours to ensure maximum strength.</li>
                  <li>Wipe off any excess glue with a damp cloth immediately.</li>
                </ul>
              </motion.div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
