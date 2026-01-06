'use client'

import React from 'react'
import { FiStar, FiGlobe, FiAward, FiUsers, FiTarget } from 'react-icons/fi'

export default function About() {
  const whyChooseUs = [
    {
      Icon: FiStar,
      title: 'OVER 20 YEARS OF EXPERTISE IN SPORTS MANUFACTURING',
    },
    {
      Icon: FiAward,
      title: 'HIGH-QUALITY MATERIALS AND CRAFTSMANSHIP',
    },
    {
      Icon: FiTarget,
      title: 'CUSTOM ORDERS AVAILABLE TO MEET UNIQUE REQUIREMENTS',
    },
    {
      Icon: FiGlobe,
      title: 'STRONG GLOBAL PRESENCE, ESPECIALLY IN THE USA',
    },
    {
      Icon: FiUsers,
      title: 'COMPETITIVE PRICING & TIMELY DELIVERY',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 py-12 sm:py-20">
          <p className="text-royal-gold-400 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">ABOUT US</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">ABOUT</h1>
          <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-base">
            <span>HOME</span>
            <span>/</span>
            <span>ABOUT</span>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-royal-blue-600 text-xs sm:text-sm uppercase tracking-wider mb-2">ABOUT</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">WELCOME TO ROYALNEX SPORTS</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4">
              Established in 2003, Royalnex Sports Industries has been a trusted name in the sports industry, 
              specializing in the production of high-quality sports balls and sportswear. With a commitment to 
              innovation and excellence, we have grown into an internationally recognized manufacturer, serving 
              retailers, clubs, and academies worldwide, particularly in the USA.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Vision */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-royal-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">OUR VISION</h3>
              <p className="text-gray-600 leading-relaxed">
                At Royalnex Sports, we aim to be a global leader in sports manufacturing by delivering premium-quality 
                products that enhance performance, comfort, and durability. We believe that sports unite people, and 
                our mission is to provide athletes with the best gear to help them perform at their peak.
              </p>
            </div>

            {/* Our Leadership */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-royal-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">OUR LEADERSHIP</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our success is driven by a strong leadership team with decades of experience in the industry:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="font-semibold">• CEO - Muhammad Usman Mashallah</li>
                <li className="font-semibold">• Managing Director - Syed Mudasir Hussain</li>
              </ul>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Their expertise and dedication have enabled Royalnex Sports to maintain exceptional standards in both 
                production and customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-royal-blue-600 text-sm uppercase tracking-wider mb-2">WHY US</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">WHY CHOOSE ROYALNEX SPORTS?</h2>
              <div className="space-y-6">
                {whyChooseUs.map((item, idx) => {
                  const Icon = item.Icon
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="text-royal-blue-600 flex-shrink-0">
                        <Icon className="text-4xl" />
                      </div>
                      <p className="text-gray-700 text-lg font-medium">{item.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-royal-blue-100 to-royal-blue-200 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl opacity-20">🏆</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-royal-blue-100 to-royal-blue-200 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl opacity-20">⚽</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">OUR PRODUCT</h2>
              <p className="text-xl text-gray-600 mb-8">We Specialize in Manufacturing:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">1. SOCCER BALLS</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Designed for professional, training, and recreational use</li>
                    <li>• Made with high-quality materials for durability and performance</li>
                    <li>• Crafted for lasting play and top-tier performance, designed in official Size 5 for match-level precision</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">2. SPORTSWEAR</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Notably, soccer uniforms made from 100% polyester, Dri-Fit, sublimated fabric</li>
                    <li>• Available in multiple sizes (S, M, L, XL) and a variety of colors</li>
                    <li>• Engineered for comfort, flexibility, and long-lasting wear</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              At Royalnex Sports, every design is crafted with precision, offering the perfect blend of quality and comfort. 
              Each product sets a new benchmark in craftsmanship, combining modern technology with premium materials. From 
              professional athletes to rising talents, our collection is tailored to support every level of play. Engineered 
              to meet international standards, our footballs and sportswear elevate performance on and off the field. 
              Reliability, style, and durability – these are the hallmarks of our brand. Every piece from Royalnex Sports 
              is created with a single vision: to redefine the game and become a symbol of victory.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

