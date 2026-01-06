'use client'

import React, { useState, useEffect, useRef } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-royal-blue-700 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
          <p className="font-medium text-center sm:text-left">HIGH QUALITY OEM & ODM SPORTS GOODS SUPPLIER</p>
          <Link href="/contact" className="hover:text-royal-gold-400 transition-colors whitespace-nowrap">CONTACT US</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center" ref={dropdownRef}>
            <Link href="/" className="text-gray-800 hover:text-royal-blue-600 font-medium transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-royal-blue-600 font-medium transition-colors">
              ABOUT
            </Link>
            
            {/* Sports Ball Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-800 hover:text-royal-blue-600 font-medium flex items-center gap-1 transition-colors"
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
                className="text-gray-800 hover:text-royal-blue-600 font-medium flex items-center gap-1 transition-colors"
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
                className="text-gray-800 hover:text-royal-blue-600 font-medium flex items-center gap-1 transition-colors"
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
                className="text-gray-800 hover:text-royal-blue-600 font-medium flex items-center gap-1 transition-colors"
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
            <Link
              href="/contact"
              className="bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4" ref={mobileMenuRef}>
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-800 font-medium" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
              <Link href="/about" className="text-gray-800 font-medium" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
              
              {/* Sports Ball Dropdown */}
              <div>
                <button 
                  className="text-gray-800 font-medium flex items-center justify-between w-full text-left py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    handleMobileDropdownToggle('mobile-sports-ball')
                  }}
                >
                  <span>SPORTS BALL</span>
                  <FiChevronDown className={`transition-transform ${mobileActiveDropdown === 'mobile-sports-ball' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveDropdown === 'mobile-sports-ball' && (
                  <div className="ml-4 mt-2 space-y-2 animate-in slide-in-from-top-2">
                    {sportsBallItems.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="block text-gray-600 py-1"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setMobileActiveDropdown(null)
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Sports Wear Dropdown */}
              <div>
                <button 
                  className="text-gray-800 font-medium flex items-center justify-between w-full text-left py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    handleMobileDropdownToggle('mobile-sports-wear')
                  }}
                >
                  <span>SPORTS WEAR</span>
                  <FiChevronDown className={`transition-transform ${mobileActiveDropdown === 'mobile-sports-wear' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveDropdown === 'mobile-sports-wear' && (
                  <div className="ml-4 mt-2 space-y-2 animate-in slide-in-from-top-2">
                    {sportsWearItems.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="block text-gray-600 py-1"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setMobileActiveDropdown(null)
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Casual Wear Dropdown */}
              <div>
                <button 
                  className="text-gray-800 font-medium flex items-center justify-between w-full text-left py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    handleMobileDropdownToggle('mobile-casual-wear')
                  }}
                >
                  <span>CASUAL WEAR</span>
                  <FiChevronDown className={`transition-transform ${mobileActiveDropdown === 'mobile-casual-wear' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveDropdown === 'mobile-casual-wear' && (
                  <div className="ml-4 mt-2 space-y-2 animate-in slide-in-from-top-2">
                    {casualWearItems.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="block text-gray-600 py-1"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setMobileActiveDropdown(null)
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Gloves Dropdown */}
              <div>
                <button 
                  className="text-gray-800 font-medium flex items-center justify-between w-full text-left py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    handleMobileDropdownToggle('mobile-gloves')
                  }}
                >
                  <span>GLOVES</span>
                  <FiChevronDown className={`transition-transform ${mobileActiveDropdown === 'mobile-gloves' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveDropdown === 'mobile-gloves' && (
                  <div className="ml-4 mt-2 space-y-2 animate-in slide-in-from-top-2">
                    {glovesItems.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="block text-gray-600 py-1"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setMobileActiveDropdown(null)
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Us Button at the end of mobile menu */}
              <div className="pt-4 border-t mt-4">
                <Link 
                  href="/contact" 
                  className="block w-full bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setMobileActiveDropdown(null)
                  }}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

