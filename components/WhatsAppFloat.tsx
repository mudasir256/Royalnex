'use client'

import { FiMessageCircle } from 'react-icons/fi'

const WhatsAppFloat = () => {
  // WhatsApp number: 03237078473 (Pakistan format: 923237078473)
  return (
    <a
      href="https://wa.me/923237078473"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg z-50 transition-all hover:scale-110"
      aria-label="Contact CEO on WhatsApp"
    >
      <FiMessageCircle className="text-white text-2xl" />
    </a>
  )
}

export default WhatsAppFloat

