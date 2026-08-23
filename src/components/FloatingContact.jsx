import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3">
      {/* Call Button */}
      <motion.a
        href="tel:+918000567117"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-surface-dark text-white p-3 rounded-full shadow-lg hover:shadow-surface-dark/40 transition-shadow duration-300 flex items-center justify-center"
      >
        <Phone size={24} />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918000567117"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-[#25D366]/40 transition-shadow duration-300 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
}
