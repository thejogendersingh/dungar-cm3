import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Call Button */}
      <div className="relative group flex items-center">
        <span className="absolute right-full mr-3 whitespace-nowrap bg-white text-text-primary text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-[4px] shadow-premium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          Call Us
        </span>
        <motion.a
          href="tel:+918000567117"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#111827] text-white p-2.5 rounded-full shadow-lg hover:shadow-premium transition-shadow duration-300 flex items-center justify-center w-10 h-10"
        >
          <Phone size={18} strokeWidth={2.5} />
        </motion.a>
      </div>

      {/* WhatsApp Button */}
      <div className="relative group flex items-center">
        <span className="absolute right-full mr-3 whitespace-nowrap bg-white text-text-primary text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-[4px] shadow-premium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          WhatsApp
        </span>
        <motion.a
          href="https://wa.me/918000567117"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] text-white p-2.5 rounded-full shadow-lg hover:shadow-premium transition-shadow duration-300 flex items-center justify-center w-10 h-10"
        >
          <MessageCircle size={20} strokeWidth={2.5} />
        </motion.a>
      </div>
    </div>
  );
}
