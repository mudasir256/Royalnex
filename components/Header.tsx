'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import Link from 'next/link'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Navbar background: white initially, blue theme on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const sportsBallItems = [
    'Soccer Balls',
    'Handballs',
    'Volleyballs',
    'Rugby Balls',
    'Futsal',
  ]

  const sportsWearItems = [
    'Basketball Uniforms',
    'Baseball Uniforms',
    'Cricket Uniforms',
    'Futsal Uniforms',
    'Rugby Uniforms',
    'Soccer Uniforms',
    'Volleyball Uniforms',
  ]

  const casualWearItems = [
    'Caps & Hats',
    'Casual Pants / Trousers',
    'Casual Shorts',
    'Hoodies',
    'Jogger Pants',
    'Polo Shirts',
    'Sweatshirts',
    'T-Shirts',
    'Track Pants',
    'Zipper Jackets',
  ]

  const glovesItems = [
    'Cycling Gloves',
    'Driving Gloves',
    'Full-Finger Gloves',
    'Goalkeeper Gloves',
    'Gym Gloves / Fitness Gloves',
    'Baseball Gloves',
    'Running Gloves',
    'Weightlifting Gloves',
    'Winter Gloves / Thermal Gloves',
  ]

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const handleMobileDropdownToggle = (menu: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === menu ? null : menu)
  }

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeDropdown])

  const navBg = isScrolled ? 'bg-royal-blue-600 shadow-lg' : 'bg-white'
  const linkClass = isScrolled
    ? 'text-white/90 hover:text-white font-medium transition-colors'
    : 'text-gray-800 hover:text-royal-blue-600 font-medium transition-colors'
  const dropdownBtnClass = isScrolled
    ? 'text-white/90 hover:text-white font-medium flex items-center gap-1 transition-colors'
    : 'text-gray-800 hover:text-royal-blue-600 font-medium flex items-center gap-1 transition-colors'
  const ctaClass = isScrolled
    ? 'bg-white hover:bg-gray-100 text-royal-blue-600 font-semibold px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base'
    : 'bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base'
  const mobileLinkClass = isScrolled ? 'text-white font-medium' : 'text-gray-800 font-medium'
  const mobileBtnClass = isScrolled ? 'text-white' : 'text-gray-800'

  return (
    <motion.header
      className="sticky top-0 z-50 px-4 md:px-6 lg:px-8 pt-4"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Main Navigation - contained box with margin and rounded corners */}
      <nav
        className={`mx-auto max-w-[1600px] rounded-xl ${navBg} transition-colors duration-300 px-4 py-3 sm:py-4`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center" ref={dropdownRef}>
            <Link href="/" className={linkClass}>
              HOME
            </Link>
            <Link href="/about" className={linkClass}>
              ABOUT
            </Link>
            
            {/* Sports Ball Dropdown */}
            <div className="relative">
              <button 
                className={dropdownBtnClass}
                onClick={() => handleDropdownToggle('sports-ball')}
              >
                SPORTS BALL <FiChevronDown className={`text-xs transition-transform ${activeDropdown === 'sports-ball' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'sports-ball' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 z-50">
                  {sportsBallItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-royal-blue-50 hover:text-royal-blue-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                        {item}
                      </Link>
                    ))}
                </div>
              )}
            </div>

            {/* Sports Wear Dropdown */}
            <div className="relative">
              <button 
                className={dropdownBtnClass}
                onClick={() => handleDropdownToggle('sports-wear')}
              >
                SPORTS WEAR <FiChevronDown className={`text-xs transition-transform ${activeDropdown === 'sports-wear' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'sports-wear' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 z-50">
                  {sportsWearItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-royal-blue-50 hover:text-royal-blue-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                        {item}
                      </Link>
                    ))}
                </div>
              )}
            </div>

            {/* Casual Wear Dropdown */}
            <div className="relative">
              <button 
                className={dropdownBtnClass}
                onClick={() => handleDropdownToggle('casual-wear')}
              >
                CASUAL WEAR <FiChevronDown className={`text-xs transition-transform ${activeDropdown === 'casual-wear' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'casual-wear' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 z-50">
                  {casualWearItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-royal-blue-50 hover:text-royal-blue-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Gloves Dropdown */}
            <div className="relative">
              <button 
                className={dropdownBtnClass}
                onClick={() => handleDropdownToggle('gloves')}
              >
                GLOVES <FiChevronDown className={`text-xs transition-transform ${activeDropdown === 'gloves' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'gloves' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 z-50 max-h-96 overflow-y-auto">
                  {glovesItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-royal-blue-50 hover:text-royal-blue-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact Us Button - Desktop Only */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className={ctaClass}>
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${mobileBtnClass}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full-screen overlay with open/close animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            ref={mobileMenuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-[60] flex flex-col"
            aria-modal
            role="dialog"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-royal-blue-900/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden
            />
            {/* Top bar: logo + close */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex items-center justify-between px-4 pt-4 pb-2"
            >
              <Link href="/" className="flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
                <Logo />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors"
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </motion.div>
            {/* Rounded floating panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex-1 mx-4 mt-2 mb-6 overflow-y-auto rounded-3xl bg-white/95 shadow-xl backdrop-blur-sm"
            >
            <div className="px-6 py-6">
              <div className="flex flex-col gap-1">
                <Link href="/" className="py-4 text-gray-800 font-medium text-lg border-b border-gray-100 hover:text-royal-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
                <Link href="/about" className="py-4 text-gray-800 font-medium text-lg border-b border-gray-100 hover:text-royal-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>

                {/* Sports Ball Dropdown */}
                <div className="border-b border-gray-100">
                  <button
                    className="w-full py-4 text-left text-gray-800 font-medium text-lg hover:text-royal-blue-600 transition-colors flex items-center justify-between"
                    onClick={(e) => { e.preventDefault(); handleMobileDropdownToggle('mobile-sports-ball') }}
                  >
                    <span>SPORTS BALL</span>
                    <FiChevronDown className={`transition-transform ${mobileActiveDropdown === 'mobile-sports-ball' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                  {mobileActiveDropdown === 'mobile-sports-ball' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-3 space-y-2">
                      {sportsBallItems.map((item, idx) => (
                        <Link key={idx} href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block py-2 text-gray-600 hover:text-royal-blue-600" onClick={() => { setMobileMenuOpen(false); setMobileActiveDropdown(null) }}>{item}</Link>
                      ))}
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>

                {/* Sports Wear Dropdown */}
                <div className="border-b border-gray-100">
                  <button
                    className="w-full py-4 text-left text-gray-800 font-medium text-lg hover:text-royal-blue-600 transition-colors flex items-center justify-between"
                    onClick={(e) => { e.preventDefault(); handleMobileDropdownToggle('mobile-sports-wear') }}
                  >
                    <span>SPORTS WEAR</span>
                    <FiChevronDown className={`transition-transform ${mobileActiveDropdown === 'mobile-sports-wear' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                  {mobileActiveDropdown === 'mobile-sports-wear' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-3 space-y-2">
                      {sportsWearItems.map((item, idx) => (
                        <Link key={idx} href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block py-2 text-gray-600 hover:text-royal-blue-600" onClick={() => { setMobileMenuOpen(false); setMobileActiveDropdown(null) }}>{item}</Link>
                      ))}
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>

                {/* Casual Wear Dropdown */}
                <div className="border-b border-gray-100">
                  <button
                    className="w-full py-4 text-left text-gray-800 font-medium text-lg hover:text-royal-blue-600 transition-colors flex items-center justify-between"
                    onClick={(e) => { e.preventDefault(); handleMobileDropdownToggle('mobile-casual-wear') }}
                  >
                    <span>CASUAL WEAR</span>
                    <FiChevronDown className={`transition-transform ${mobileActiveDropdown === 'mobile-casual-wear' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                  {mobileActiveDropdown === 'mobile-casual-wear' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-3 space-y-2">
                      {casualWearItems.map((item, idx) => (
                        <Link key={idx} href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block py-2 text-gray-600 hover:text-royal-blue-600" onClick={() => { setMobileMenuOpen(false); setMobileActiveDropdown(null) }}>{item}</Link>
                      ))}
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>

                {/* Gloves Dropdown */}
                <div className="border-b border-gray-100">
                  <button
                    className="w-full py-4 text-left text-gray-800 font-medium text-lg hover:text-royal-blue-600 transition-colors flex items-center justify-between"
                    onClick={(e) => { e.preventDefault(); handleMobileDropdownToggle('mobile-gloves') }}
                  >
                    <span>GLOVES</span>
                    <FiChevronDown className={`transition-transform ${mobileActiveDropdown === 'mobile-gloves' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                  {mobileActiveDropdown === 'mobile-gloves' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-3 space-y-2">
                      {glovesItems.map((item, idx) => (
                        <Link key={idx} href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block py-2 text-gray-600 hover:text-royal-blue-600" onClick={() => { setMobileMenuOpen(false); setMobileActiveDropdown(null) }}>{item}</Link>
                      ))}
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>
              </div>

              {/* CTA - pill gradient (theme) */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="block w-full py-3.5 rounded-full bg-gradient-to-r from-royal-blue-500 to-royal-blue-700 text-white font-semibold text-center text-lg shadow-lg hover:opacity-95 transition-opacity"
                  onClick={() => { setMobileMenuOpen(false); setMobileActiveDropdown(null) }}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

