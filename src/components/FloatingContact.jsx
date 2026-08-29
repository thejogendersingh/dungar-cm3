import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-50 flex flex-col gap-2">
      
      {/* Call Tab */}
      <div className="translate-x-[140px] hover:translate-x-0 transition-transform duration-400 ease-out flex shadow-premium">
        <a 
          href="tel:+918000567117"
          className="flex items-center w-[190px] h-[52px] bg-[#111827] text-white rounded-l-[8px] group hover:bg-[#ff6a13] transition-colors duration-300 overflow-hidden"
        >
          <div className="shrink-0 w-[50px] h-full flex items-center justify-center relative bg-black/10 group-hover:bg-black/20 transition-colors">
            <Phone size={20} strokeWidth={2.5} className="group-hover:scale-110 transition-transform duration-300" />
            {/* Divider line */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-white/20"></div>
          </div>
          <span className="font-bold text-[14px] whitespace-nowrap pl-4 tracking-wide">
            +91 80005 67117
          </span>
        </a>
      </div>

      {/* WhatsApp Tab */}
      <div className="translate-x-[140px] hover:translate-x-0 transition-transform duration-400 ease-out flex shadow-premium">
        <a 
          href="https://wa.me/918000567117" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center w-[190px] h-[52px] bg-[#25D366] text-white rounded-l-[8px] group hover:bg-[#20b958] transition-colors duration-300 overflow-hidden"
        >
          <div className="shrink-0 w-[50px] h-full flex items-center justify-center relative bg-black/10 group-hover:bg-black/20 transition-colors">
            <MessageCircle size={22} strokeWidth={2.5} className="group-hover:scale-110 transition-transform duration-300" />
            {/* Divider line */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-white/20"></div>
          </div>
          <span className="font-bold text-[14px] whitespace-nowrap pl-4 tracking-wide">
            WhatsApp Us
          </span>
        </a>
      </div>

    </div>
  );
}
