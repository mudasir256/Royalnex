'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiAward, FiTruck, FiDollarSign, FiClock } from 'react-icons/fi'
import HeroSlider from '@/components/HeroSlider'

export default function Home() {
  const features = [
    {
      icon: <FiAward className="text-3xl" />,
      title: 'PREMIUM QUALITY',
      description: 'Top of the line sport products',
    },
    {
      icon: <FiClock className="text-3xl" />,
      title: '24/7 SUPPORT',
      description: 'At your service anytime you need',
    },
    {
      icon: <FiDollarSign className="text-3xl" />,
      title: 'BEST PRICES',
      description: 'Unmatched quality at affordable rate',
    },
    {
      icon: <FiTruck className="text-3xl" />,
      title: 'RAPID DELIVERY',
      description: 'Fast Delivery on all orders',
    },
  ]

  const productCategories = [
    {
      name: 'SPORTS BALL',
      image: '/ball.jpg',
      link: '/products/soccer-balls',
      description: 'Premium quality sports balls for all sports',
    },
    {
      name: 'SPORTS WEAR',
      image: '/Aqua_Black_Lines_Sublimation_Soccer_Uniform_Jersey_Custom_Team_Soccer_Jersey_Shirt_3_zmoogs-600x600-1.jpg',
      link: '/products/sports-wear',
      description: 'Professional sports uniforms and apparel',
    },
    {
      name: 'CASUAL WEAR',
      image: '/sports.jpg',
      link: '/products/casual-wear',
      description: 'Comfortable casual sports clothing',
    },
    {
      name: 'GLOVES',
      image: '/Sports-Accessories-600x420.webp',
      link: '/products/goalkeeper-gloves',
      description: 'High-performance sports gloves',
    },
  ]

  const stats = [
    { number: '5,000,000+', label: 'Units produced per year' },
    { number: '100+', label: 'Customers across the world' },
    { number: '3,000+', label: 'Employees' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <HeroSlider />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center py-12 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-royal-gold-400 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">SHOP</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              AUTHENTIC SPORTS GOODS
              <br />
              <span className="text-royal-gold-400">MADE FOR CHAMPIONS</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Gear Up Your Team with Style and Performance. Every piece of sports Goods at Royalnex Sports is crafted for comfort, durability, and peak performance.
            </p>
            <Link
              href="/products"
              className="inline-block bg-royal-gold-500 hover:bg-royal-gold-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              EXPLORE OUR COLLECTION TODAY
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-royal-gold-500 mb-2 sm:mb-3 flex justify-center">
                  <div className="text-2xl sm:text-3xl">{feature.icon}</div>
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Sports is a tradition shared by the entire world
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              As a leading manufacturer, we are vanguards of this tradition through our craftsmanship and innovative technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-royal-blue-600 mb-2 sm:mb-4">{stat.number}</div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <div>
              <p className="text-royal-blue-600 text-xs sm:text-sm uppercase tracking-wider mb-2">COLLECTION</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">OUR PRODUCTS</h2>
            </div>
            <Link
              href="/products"
              className="bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm sm:text-base"
            >
              VIEW ALL COLLECTION <FiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {productCategories.map((category, idx) => (
              <Link
                key={idx}
                href={category.link}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-royal-blue-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      COLLECTIONS <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] relative bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src="/sports-products-500x500.webp"
                  alt="Sports Products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-royal-blue-600 text-xs sm:text-sm uppercase tracking-wider mb-2">WHAT WE DO</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                MANUFACTURER & SUPPLIER OF SPORTS GOODS IN SUPER QUALITY
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-3 sm:mb-4">
                We introduce ourselves as manufacturers and exporters of a complete range of sports goods in super quality here in Pakistan. We offer our most excellent services to cater to your valuable requirements.
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">
                We are situated in Sialkot, Pakistan — a city renowned worldwide for producing top-quality sports goods. As global manufacturers and exporters, we take pride in maintaining high standards and customer satisfaction.
              </p>
              <Link
                href="/about"
                className="inline-block bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
              >
                ABOUT
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

