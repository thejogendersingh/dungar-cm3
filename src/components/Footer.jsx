export default function Footer() {
  return (
    <footer className="bg-text-primary text-white pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Main Footer Content: 4 Columns on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex flex-col mb-6 group">
              <span className="font-display text-[20px] md:text-[22px] font-bold text-white tracking-tight">
                Dungar Chemicals
              </span>
              <span className="text-[8px] md:text-[9px] text-white/50 uppercase tracking-[0.25em] mt-0.5 font-semibold">
                Premium Adhesive
              </span>
            </a>
            <p className="text-[14px] text-white/60 leading-relaxed max-w-[280px]">
              Precision-engineered adhesive solutions. Built for industrial reliability and everyday repair.
            </p>
          </div>

          {/* Column 2: Products */}
          <div className="lg:col-span-1 lg:pl-8">
            <h4 className="text-accent-copper font-bold mb-6 text-[10px] uppercase tracking-[0.16em]">Products</h4>
            <ul className="space-y-4 text-[14px] text-white/70 font-medium">
              <li><a href="#products" className="hover:text-white transition-colors">Credofix Gel Glue 125g</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Credofix Gel Glue 250g</a></li>
              <li><a href="#applications" className="hover:text-white transition-colors">Material Applications</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-1">
            <h4 className="text-accent-copper font-bold mb-6 text-[10px] uppercase tracking-[0.16em]">Company</h4>
            <ul className="space-y-4 text-[14px] text-white/70 font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">Brand Story</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Manufacturing Principles</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Business Enquiries</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-accent-copper font-bold mb-6 text-[10px] uppercase tracking-[0.16em]">Contact</h4>
            <ul className="space-y-5 text-[14px] text-white/70 font-medium">
              <li>
                <a href="mailto:sales@credofix.in" className="hover:text-white transition-colors block">sales@credofix.in</a>
              </li>
              <li>
                <a href="tel:+918000567117" className="hover:text-white transition-colors block">+91 80005 67117</a>
              </li>
              <li className="text-white/50 leading-relaxed pt-2">
                Hanumangarh, Rajasthan<br/>India
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright & Legal */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-white/40 font-medium font-body">
          <p>&copy; {new Date().getFullYear()} Dungar Chemicals. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
