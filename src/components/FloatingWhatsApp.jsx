import { FaWhatsapp } from 'react-icons/fa6';

export default function FloatingWhatsApp() {
  const phoneNumber = "919672444677";
  const defaultMessage = encodeURIComponent("Hello Dungar Chemicals, I would like to inquire about your products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50 group">
      {/* Floating Button (Static, No Movement, Orange Background with White WhatsApp Icon) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dungar Chemicals on WhatsApp"
        className="relative w-13 h-13 sm:w-14 sm:h-14 bg-[#FF7A00] hover:bg-[#ea6f00] text-white rounded-full flex items-center justify-center transition-colors duration-200"
      >
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />

        {/* Hover Tooltip (Desktop) */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#1A1A2E] text-white text-[12px] font-semibold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:flex items-center gap-1.5">
          <span>Chat on WhatsApp</span>
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#1A1A2E]" />
        </span>
      </a>
    </aside>
  );
}
