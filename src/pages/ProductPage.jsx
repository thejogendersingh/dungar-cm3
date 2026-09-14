import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star, Shield, Droplet, Clock, ArrowRight, Download, MessageCircle } from 'lucide-react';
import actualProductImg from '../assets/product.png';
import gelGlueImg from '../assets/credofix-gel-glue.PNG';
import rapidGlueImg from '../assets/credofix-rapid-glue.PNG';
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
            <p className="pb-6 text-gray-600 text-[13.5px] sm:text-[14px] leading-relaxed max-w-3xl">
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
      themeGlow: "bg-[#FF7A00]",
      accentText: "text-[#FF7A00]",
      primaryBtn: "bg-[#FF7A00] hover:bg-[#1A1A2E]",
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
      themeGlow: "bg-[#FF7A00]",
      accentText: "text-[#FF7A00]",
      primaryBtn: "bg-[#FF7A00] hover:bg-[#1A1A2E]",
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
      themeGlow: "bg-[#FF7A00]",
      accentText: "text-[#FF7A00]",
      primaryBtn: "bg-[#FF7A00] hover:bg-[#1A1A2E]",
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
    <div className="w-full bg-[#F8F9FA] text-[#1A1A2E] pt-2 lg:pt-4 pb-12">
      
      {/* Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-3 relative z-10">
        <div className="flex items-center text-[11px] uppercase tracking-widest font-bold text-gray-400">
          <a href="/" className="hover:text-[#FF7A00] transition-colors">Home</a>
          <span className="mx-2 text-gray-300">/</span>
          <a href="/#products" className="hover:text-[#FF7A00] transition-colors">Products</a>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-[#FF7A00]">{currentProduct.name} {currentProduct.subtitle}</span>
        </div>
      </div>

      {/* Ultra Premium Interactive Showcase */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-12 relative">
        
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-2 right-0 md:right-2 z-30 flex justify-between pointer-events-none">
          <button 
            onClick={handlePrev} 
            className="pointer-events-auto flex items-center justify-center text-gray-400 hover:text-[#FF7A00] hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-8 h-8 lg:w-12 lg:h-12" />
          </button>
          <button 
            onClick={handleNext} 
            className="pointer-events-auto flex items-center justify-center text-gray-400 hover:text-[#FF7A00] hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-8 h-8 lg:w-12 lg:h-12" />
          </button>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-2xl p-6 md:p-10 lg:p-12 shadow-sm border border-gray-200/90 flex flex-col-reverse lg:flex-row items-stretch gap-8 lg:gap-16 relative overflow-hidden">
          
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
                <span className="px-3 py-1 bg-orange-50 border border-orange-200/70 text-[#FF7A00] text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded-full">
                  {currentProduct.grade}
                </span>
              </div>
              
              <h1 className="text-2xl lg:text-4xl font-bold text-[#1A1A2E] mb-1 tracking-tight leading-[1.1]">
                {currentProduct.name} <br />
                <span className="text-[#FF7A00]">{currentProduct.subtitle}</span>
              </h1>

              {/* Size Selector */}
              <div className="mt-4 mb-2">
                <h3 className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.sizes.map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all duration-300 ${
                        selectedSize === size 
                          ? 'bg-[#1A1A2E] text-white shadow-sm border border-[#1A1A2E]' 
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-[#FF7A00] hover:text-[#FF7A00]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-[13px] lg:text-[14px] text-gray-500 my-4 leading-relaxed max-w-lg font-medium space-y-2">
                {currentProduct.desc.split('\n').map((line, i) => (
                  <p key={i} className="flex items-start">
                    <span className="text-[#FF7A00] mr-2 text-[14px] leading-tight font-bold">•</span> 
                    <span>{line}</span>
                  </p>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="https://wa.me/919672444677" target="_blank" rel="noreferrer" className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-5 rounded-lg font-bold text-[12px] transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2 uppercase tracking-widest">
                  WhatsApp Chat <MessageCircle className="w-4 h-4" />
                </a>
                <button className="flex-1 bg-[#1A1A2E] hover:bg-[#FF7A00] text-white py-3.5 px-5 rounded-lg font-bold text-[12px] transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 uppercase tracking-widest">
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
              className="w-full lg:w-1/2 flex items-center justify-center relative bg-gradient-to-br from-gray-50/60 via-white to-orange-50/25 rounded-2xl border border-gray-100 p-8 lg:p-12 overflow-hidden"
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
                className="max-w-[280px] lg:max-w-[380px] max-h-full object-contain mix-blend-multiply relative z-20" 
              />
            </motion.div>
          </AnimatePresence>
          
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
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                  <table className="w-full text-left text-[13px] lg:text-[14px]">
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
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                  <table className="w-full text-left text-[13px] lg:text-[14px]">
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
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                  <table className="w-full text-left text-[13px] lg:text-[14px]">
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
      <section id="faq" className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-gray-200 shadow-sm">
          
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[11px] sm:text-[12px] font-bold text-[#FF7A00] uppercase tracking-widest block mb-1.5">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A2E] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[13px] sm:text-[14px] text-gray-500 mt-2 max-w-xl mx-auto">
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
