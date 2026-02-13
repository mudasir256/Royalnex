'use client'

import Link from 'next/link'
import Logo from './Logo'
import { 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiMail, 
  FiPhone, 
  FiLinkedin, 
  FiYoutube 
} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6">
      <div className="mx-auto max-w-[1600px] rounded-2xl overflow-hidden bg-gray-900 text-white shadow-xl">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <Logo className="text-white" />
            </div>
            <div className="flex-1 w-full md:w-auto max-w-md">
              <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2 justify-center md:justify-start">
                <FiMail /> NEWSLETTER SUBSCRIPTION
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Get updates on new products, bulk offers, and industry news. No spam.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-royal-gold-500 text-sm sm:text-base"
                />
                <button className="bg-royal-blue-600 hover:bg-royal-blue-700 px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base whitespace-nowrap">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">ROYALNEX SPORTS</h3>
            <p className="text-gray-400 mb-3 text-sm sm:text-base leading-relaxed">
              Royalnex Sports Industries is a Sialkot-based manufacturer and exporter of sports balls, sportswear, casual wear, and gloves. 
              We serve retailers, clubs, and academies in 100+ countries with OEM & ODM solutions, competitive pricing, and reliable delivery.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mb-4">We typically respond to inquiries within 24 hours.</p>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a href="#" className="w-10 h-10 bg-royal-blue-600 rounded-lg flex items-center justify-center hover:bg-royal-blue-700 transition-colors">
                <FiFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-royal-blue-600 rounded-lg flex items-center justify-center hover:bg-royal-blue-700 transition-colors">
                <FiInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-royal-blue-600 rounded-lg flex items-center justify-center hover:bg-royal-blue-700 transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-royal-blue-600 rounded-lg flex items-center justify-center hover:bg-royal-blue-700 transition-colors">
                <FiLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-royal-blue-600 rounded-lg flex items-center justify-center hover:bg-royal-blue-700 transition-colors">
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">CATEGORIES</h3>
            <div className="space-y-2">
              <Link href="/products/soccer-balls" className="block bg-gray-800 hover:bg-royal-blue-600 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base text-center sm:text-left">
                SPORTS BALL
              </Link>
              <Link href="/products/sports-wear" className="block bg-gray-800 hover:bg-royal-blue-600 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base text-center sm:text-left">
                SPORTS WEAR
              </Link>
              <Link href="/products/casual-wear" className="block bg-gray-800 hover:bg-royal-blue-600 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base text-center sm:text-left">
                CASUAL WEAR
              </Link>
              <Link href="/products/gloves" className="block bg-gray-800 hover:bg-royal-blue-600 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base text-center sm:text-left">
                GLOVES
              </Link>
            </div>
            <div className="mt-4 space-y-1 text-gray-400 text-xs sm:text-sm">
              <Link href="/products/soccer-balls" className="block hover:text-white">Soccer ball</Link>
              <Link href="/products/basketball" className="block hover:text-white">Basketball</Link>
              <Link href="/products/volleyball" className="block hover:text-white">Volleyball</Link>
              <Link href="/products/rugby-balls" className="block hover:text-white">Rugby ball</Link>
              <Link href="/products/futsal" className="block hover:text-white">Futsal ball</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">CONTACT US</h3>
            <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <FiMail className="text-royal-gold-500 flex-shrink-0" />
                <a href="mailto:info@royalnexsports.com" className="hover:text-white transition-colors">info@royalnexsports.com</a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-royal-gold-500 flex-shrink-0" />
                <a href="tel:+923237078473" className="hover:text-white transition-colors">+92 323 7078473</a>
              </li>
              <li className="text-sm mt-4 leading-relaxed">
                Sialkot, Pakistan<br />
                <span className="text-gray-500">World-renowned hub for sports goods manufacturing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 py-4 sm:py-6">
          <p className="text-center text-gray-400 text-xs sm:text-sm px-4">
            Copyright © 2025 Royalnex Sports Industries - All Rights Reserved
          </p>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer

