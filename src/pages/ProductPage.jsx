import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star, Shield, Droplet, Clock, ArrowRight, Download, MessageCircle } from 'lucide-react';
import actualProductImg from '../assets/product.png';
import gelGlueImg from '../assets/credofix-gel-glue.PNG';
import rapidGlueImg from '../assets/credofix-rapid-glue.PNG';
import activatorSprayImg from '../assets/activator-spray.PNG';

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
      subtitle: "GEL GLUE",
      grade: "Premium Adhesive Solution by Dungar Chemicals",
      desc: "Anti-Blooming Formula: Dries crystal clear with zero white residue, ensuring clean and aesthetic joints.\nAll-Weather Performance: Delivers consistent, ultra-strong bonding across summer, winter, and high-humidity conditions.\nHigh-Viscosity Gel: Non-drip formula designed for maximum precision and superior gap-filling strength.",
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
      img: gelGlueImg,
      themeGlow: "bg-[#FF1840]",
      accentText: "text-[#FF1840]",
      primaryBtn: "bg-[#FF1840] hover:bg-slate-900",
      sizes: ['250g', '125g', '50g', '20g'],
      rating: 5.0,
      reviews: 128
    },
    {
      id: 2,
      name: "Credofix",
      subtitle: "RAPID GLUE",
      grade: "Premium Adhesive Solution by Dungar Chemicals",
      desc: "Ultra-Fast Curing: Low-viscosity formula engineered for instant bonding in seconds.\nHigh Penetration Strength: Flows easily into micro-gaps and close-fitting joints for a tight, rigid seal.\nAnti-Blooming Formula: Dries crystal clear with zero white residue, ensuring invisible, clean finishes.\nAll-Weather Reliability: Delivers stable and peak bonding strength across summer, winter, and high-humidity seasons.",
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
      img: rapidGlueImg,
      themeGlow: "bg-[#FF6B35]",
      accentText: "text-[#FF1840]",
      primaryBtn: "bg-[#FF1840] hover:bg-slate-900",
      sizes: ['50g', '20g'],
      rating: 4.8,
      reviews: 96
    },
    {
      id: 3,
      name: "Credofix",
      subtitle: "ACTIVATOR SPRAY",
      grade: "Instant Adhesive Accelerator by Dungar Chemicals",
      desc: "Instant 2-Second Bonding: Rapidly accelerates curing time when used with Cyanoacrylate (Gel & Rapid Glues) for immediate structural hold.\nNon-Yellowing & Clean Finish: Prevents joint discoloration and blooming, leaving a clear, professional bond line.\nNo-Sag / Vertical Application: Perfect for overhead or vertical surface joining without dripping or runs.\nGap-Filling Power: Enhances bonding strength on porous, rough, or uneven materials where glues cure slowly.",
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
      img: activatorSprayImg,
      themeGlow: "bg-[#1A1A2E]",
      accentText: "text-[#FF1840]",
      primaryBtn: "bg-[#FF1840] hover:bg-slate-900",
      sizes: ['100ml'],
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
    <div className="w-full bg-[#FAFAFA] text-[#2C2424] pt-2 lg:pt-4 pb-8">
      
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
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-12 relative">
        
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-2 right-0 md:right-2 z-30 flex justify-between pointer-events-none">
          <button 
            onClick={handlePrev} 
            className="pointer-events-auto flex items-center justify-center text-gray-300 hover:text-black hover:-translate-x-1 transition-all duration-300"
          >
            <ChevronLeft className="w-8 h-8 lg:w-12 lg:h-12" />
          </button>
          <button 
            onClick={handleNext} 
            className="pointer-events-auto flex items-center justify-center text-gray-300 hover:text-black hover:translate-x-1 transition-all duration-300"
          >
            <ChevronRight className="w-8 h-8 lg:w-12 lg:h-12" />
          </button>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-200 flex flex-col-reverse lg:flex-row items-stretch gap-8 lg:gap-16 relative overflow-hidden">
          
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
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-full">
                  {currentProduct.grade}
                </span>
              </div>
              
              <h1 className="text-2xl lg:text-4xl font-black text-black mb-1 tracking-tight leading-[1.1]">
                {currentProduct.name} <br />
                <span className={currentProduct.accentText}>{currentProduct.subtitle}</span>
              </h1>

              {/* Size Selector */}
              <div className="mt-4 mb-2">
                <h3 className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.sizes.map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-sm text-[11px] font-black transition-all duration-300 ${
                        selectedSize === size 
                          ? 'bg-[#1A1A2E] text-white shadow-sm' 
                          : 'bg-white text-gray-500 border border-gray-200 hover:border-[#1A1A2E] hover:text-[#1A1A2E]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-[12px] lg:text-[13px] text-gray-500 my-4 leading-relaxed max-w-lg font-medium space-y-2">
                {currentProduct.desc.split('\n').map((line, i) => (
                  <p key={i} className="flex items-start">
                    <span className="text-[#FF1840] mr-2 text-[14px] leading-tight">•</span> 
                    <span>{line}</span>
                  </p>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/919672444677" target="_blank" rel="noreferrer" className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-5 rounded-sm font-bold text-[12px] transition-colors shadow-md flex items-center justify-center gap-2 uppercase tracking-widest">
                  WhatsApp Chat <MessageCircle className="w-4 h-4" />
                </a>
                <button className={`flex-1 ${currentProduct.primaryBtn} text-white py-3 px-5 rounded-sm font-bold text-[12px] transition-colors shadow-md flex items-center justify-center gap-2 uppercase tracking-widest`}>
                  Enquire Now <ArrowRight className="w-4 h-4" />
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
              className="w-full lg:w-1/2 flex items-center justify-center relative bg-[#EAE8E3] rounded-3xl p-8 lg:p-12"
            >
              <motion.img 
                animate={{ 
                  scale: getScaleForSize(selectedSize)
                }}
                transition={{ 
                  scale: { type: "spring", stiffness: 200, damping: 20 }
                }}
                src={currentProduct.img} 
                alt={currentProduct.name} 
                className="max-w-[280px] lg:max-w-[400px] max-h-full object-contain mix-blend-multiply relative z-20" 
              />
            </motion.div>
          </AnimatePresence>
          
        </div>
      </div>

      {/* Technical Specifications Tabs */}
      <div className="bg-white border-t border-gray-100 py-20 relative z-20">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
          
          <div className="flex gap-8 lg:gap-12 border-b border-gray-100 mb-10 overflow-x-auto hide-scrollbar w-full justify-center">
            {['description', 'applications', 'directions'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-[12px] font-black uppercase tracking-widest whitespace-nowrap transition-colors relative ${
                  activeTab === tab ? 'text-[#FF1840]' : 'text-gray-400 hover:text-black'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF1840]"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="w-full">
            {activeTab === 'description' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left text-[13px] lg:text-[14px]">
                    <tbody>
                      {currentProduct.desc.split('\n').map((line, i) => {
                        const parts = line.split(':');
                        if (parts.length < 2) {
                          return (
                            <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                              <td colSpan="2" className="px-6 py-4 text-gray-700 font-medium">
                                <span className="text-[#FF1840] mr-2 font-bold">•</span> {line}
                              </td>
                            </tr>
                          );
                        }
                        return (
                          <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                            <th className="px-6 py-4 font-bold text-gray-900 w-1/3 bg-gray-50/50 border-r border-gray-100 align-top">
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
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left text-[13px] lg:text-[14px]">
                    <tbody>
                      {currentProduct.applications.map((app, index) => {
                        const parts = app.split(':');
                        if (parts.length < 2) {
                          return (
                            <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                              <td colSpan="2" className="px-6 py-4 text-gray-700 font-medium">
                                <span className="text-[#FF1840] mr-2 font-bold">•</span> {app}
                              </td>
                            </tr>
                          );
                        }
                        return (
                          <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                            <th className="px-6 py-4 font-bold text-gray-900 w-1/3 bg-gray-50/50 border-r border-gray-100 align-top">
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
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left text-[13px] lg:text-[14px]">
                    <tbody>
                      {currentProduct.directions.map((dir, index) => {
                        const parts = dir.split(':');
                        if (parts.length < 2) {
                          return (
                            <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                              <td colSpan="2" className="px-6 py-4 text-gray-700 font-medium">
                                <span className="text-[#FF1840] mr-2 font-bold">•</span> {dir}
                              </td>
                            </tr>
                          );
                        }
                        return (
                          <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                            <th className="px-6 py-4 font-bold text-gray-900 w-1/3 bg-gray-50/50 border-r border-gray-100 align-top">
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

    </div>
  );
}
