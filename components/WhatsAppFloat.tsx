'use client'

import { motion } from 'framer-motion'
import { FiMessageCircle } from 'react-icons/fi'

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/923237078473"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg z-50"
      aria-label="Contact CEO on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiMessageCircle className="text-white text-2xl" />
    </motion.a>
  )
}

export default WhatsAppFloat

