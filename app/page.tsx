'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiAward,
  FiTruck,
  FiDollarSign,
  FiClock,
  FiGlobe,
  FiEdit3,
  FiPackage,
  FiCheckCircle,
  FiSend,
  FiMessageCircle,
  FiStar,
  FiShield,
  FiSettings,
  FiTrendingUp,
  FiMail,
  FiPlay,
} from 'react-icons/fi'
import HeroSlider from '@/components/HeroSlider'
import { FadeInUp, FadeInUpStagger, AnimatedItem } from '@/components/AnimatedSection'
import { getProductsByCategory } from '@/lib/products'

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

  const trustedByRegions = ['USA', 'UK', 'Europe', 'Middle East', 'Asia', 'Australia', 'Africa']
  const featuredProducts = [
    ...getProductsByCategory('soccer-balls').slice(0, 3).map((p) => ({ ...p, category: 'soccer-balls' })),
    ...getProductsByCategory('sports-wear').slice(0, 1).map((p) => ({ ...p, category: 'sports-wear' })),
    ...getProductsByCategory('rugby-balls').slice(0, 1).map((p) => ({ ...p, category: 'rugby-balls' })),
    ...getProductsByCategory('volleyballs').slice(0, 1).map((p) => ({ ...p, category: 'volleyballs' })),
  ]

  const processSteps = [
    { icon: FiEdit3, title: 'Design & Sample', desc: 'We work with you on design and provide samples for approval.' },
    { icon: FiPackage, title: 'Manufacturing', desc: 'Production in our Sialkot facility with strict quality control.' },
    { icon: FiCheckCircle, title: 'Quality Check', desc: 'Every product is inspected to meet international standards.' },
    { icon: FiSend, title: 'Worldwide Delivery', desc: 'Reliable shipping to retailers and clubs across the globe.' },
  ]

  const testimonials = [
    { quote: 'Outstanding quality and on-time delivery. Royalnex has been our go-to supplier for team uniforms.', name: 'John M.', role: 'Sports Retailer', location: 'USA' },
    { quote: 'Best soccer balls we have sourced. The craftsmanship and consistency are exceptional.', name: 'Ahmed K.', role: 'Club Manager', location: 'Middle East' },
    { quote: 'Professional team, competitive pricing, and they understand bulk order requirements.', name: 'Sarah L.', role: 'Academy Director', location: 'Europe' },
  ]

  const certifications = [
    { label: 'FIFA Quality', short: 'FIFA' },
    { label: 'ISO Certified', short: 'ISO' },
    { label: 'OEKO-TEX', short: 'OEKO' },
  ]

  const whyChooseUs = [
    { icon: FiSettings, title: 'OEM & ODM', desc: 'Full customization from design to packaging. We support private label and custom specifications for retailers and brands.' },
    { icon: FiShield, title: 'Sialkot heritage', desc: 'Based in Sialkot, Pakistan — the world\'s hub for sports goods. Decades of local expertise and supply chain advantage.' },
    { icon: FiEdit3, title: 'Customization', desc: 'Samples and bulk orders tailored to your needs. Multiple sizes, colors, and materials for balls, wear, and gloves.' },
    { icon: FiTrendingUp, title: 'Flexible MOQ', desc: 'We work with both small and large orders. Competitive pricing and reliable lead times for every scale.' },
  ]

  const exploreBySport = [
    { name: 'Soccer', image: '/ball.jpg', link: '/products/soccer-balls' },
    { name: 'Rugby', image: '/Rugdy1.jpg', link: '/products/rugby-balls' },
    { name: 'Volleyball', image: '/vallybal.jpg', link: '/products/volleyballs' },
    { name: 'Handball', image: '/1058721.jpg', link: '/products/handballs' },
    { name: 'Futsal', image: '/0026148_wilson-bela-team-v2-padel-2.jpeg', link: '/products/futsal' },
    { name: 'Goalkeeper', image: '/Sports-Accessories-600x420.webp', link: '/products/goalkeeper-gloves' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <HeroSlider />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center py-12 sm:py-20">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.2 },
              },
            }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-royal-gold-400 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4"
            >
              SHOP
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              AUTHENTIC SPORTS GOODS
              <br />
              <span className="text-royal-gold-400">MADE FOR CHAMPIONS</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            >
              Gear Up Your Team with Style and Performance. Every piece of sports Goods at Royalnex Sports is crafted for comfort, durability, and peak performance.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/products"
                className="inline-block bg-royal-gold-500 hover:bg-royal-gold-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg text-sm sm:text-base"
              >
                <motion.span
                  className="block"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  EXPLORE OUR COLLECTION TODAY
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <div className="text-royal-gold-500 mb-2 sm:mb-3 flex justify-center">
                  <div className="text-2xl sm:text-3xl">{feature.icon}</div>
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted By / Global Reach */}
      <section className="py-8 sm:py-10 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeInUp className="text-center mb-6">
            <p className="text-royal-blue-600 text-xs sm:text-sm uppercase tracking-wider mb-2">GLOBAL REACH</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Trusted by retailers & clubs worldwide</h2>
          </FadeInUp>
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {trustedByRegions.map((region, idx) => (
              <motion.span
                key={region}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 text-gray-600 font-medium px-4 py-2 rounded-full bg-gray-50 border border-gray-100"
              >
                <FiGlobe className="text-royal-blue-500 text-sm" /> {region}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeInUp className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Sports is a tradition shared by the entire world
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              As a leading manufacturer, we are vanguards of this tradition through our craftsmanship and innovative technology
            </p>
          </FadeInUp>
          
          <FadeInUpStagger className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <AnimatedItem key={idx} className="text-center">
                <motion.div
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-royal-blue-600 mb-2 sm:mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">{stat.label}</p>
              </AnimatedItem>
            ))}
          </FadeInUpStagger>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeInUp className="text-center mb-10 sm:mb-14">
            <p className="text-royal-blue-600 text-xs sm:text-sm uppercase tracking-wider mb-2">WHY ROYALNEX</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Why partner with us</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We combine tradition with technology to deliver what your business needs.</p>
          </FadeInUp>
          <FadeInUpStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <AnimatedItem key={idx}>
                  <motion.div
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-royal-blue-100 text-royal-blue-600 flex items-center justify-center mb-4">
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                </AnimatedItem>
              )
            })}
          </FadeInUpStagger>
        </div>
      </section>

      {/* Explore by Sport */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeInUp className="text-center mb-8 sm:mb-12">
            <p className="text-royal-blue-600 text-xs sm:text-sm uppercase tracking-wider mb-2">BROWSE BY SPORT</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Explore by sport</h2>
          </FadeInUp>
          <FadeInUpStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {exploreBySport.map((sport, idx) => (
              <AnimatedItem key={sport.name}>
                <Link href={sport.link}>
                  <motion.div
                    className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={sport.image}
                      alt={sport.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-white font-bold text-sm sm:text-base">{sport.name}</span>
                      <span className="block text-white/80 text-xs mt-0.5">View products →</span>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedItem>
            ))}
          </FadeInUpStagger>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeInUp className="text-center mb-8 sm:mb-12">
            <p className="text-royal-blue-600 text-xs sm:text-sm uppercase tracking-wider mb-2">BESTSELLERS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Handpicked quality products loved by clubs and retailers globally.</p>
          </FadeInUp>
          <FadeInUpStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <AnimatedItem key={`${product.category}-${product.id}`}>
                <Link href={`/products/${product.category}/product-${product.id}`} className="block group">
                  <motion.div
                    className="bg-white rounded-xl shadow-md overflow-hidden h-full"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-square relative bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1 line-clamp-2 text-sm sm:text-base">{product.name}</h3>
                      <p className="text-gray-500 text-xs">{product.type} · {product.size}</p>
                      <span className="inline-flex items-center gap-1 text-royal-blue-600 text-sm font-medium mt-2">
                        View product <FiArrowRight className="text-xs" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedItem>
            ))}
          </FadeInUpStagger>
          <FadeInUp className="text-center mt-8">
            <Link href="/products">
              <motion.span
                className="inline-block bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View all products
              </motion.span>
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeInUp className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <div>
              <p className="text-royal-blue-600 text-xs sm:text-sm uppercase tracking-wider mb-2">COLLECTION</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">OUR PRODUCTS</h2>
            </div>
            <Link href="/products" className="flex items-center gap-2 text-sm sm:text-base">
              <motion.span
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                VIEW ALL COLLECTION <FiArrowRight />
              </motion.span>
            </Link>
          </FadeInUp>

          <FadeInUpStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {productCategories.map((category, idx) => (
              <AnimatedItem key={idx}>
                <Link href={category.link} className="block group">
                  <motion.div
                    className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="aspect-[4/3] relative bg-gray-100 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                  </motion.div>
                </Link>
              </AnimatedItem>
            ))}
          </FadeInUpStagger>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeInUp className="text-center mb-10 sm:mb-14">
            <p className="text-royal-blue-600 text-xs sm:text-sm uppercase tracking-wider mb-2">HOW WE WORK</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Process</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">From design to delivery, we ensure quality at every step.</p>
          </FadeInUp>
          <FadeInUpStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon
              return (
                <AnimatedItem key={idx}>
                  <motion.div
                    className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 h-full"
                    whileHover={{ y: -4, boxShadow: '0 20px 40px -15px rgba(0,85,230,0.12)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-royal-blue-100 text-royal-blue-600 mb-4">
                      <StepIcon className="text-2xl" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </motion.div>
                </AnimatedItem>
              )
            })}
          </FadeInUpStagger>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeInUp className="text-center mb-10 sm:mb-14">
            <p className="text-royal-blue-600 text-xs sm:text-sm uppercase tracking-wider mb-2">TESTIMONIALS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          </FadeInUp>
          <FadeInUpStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, idx) => (
              <AnimatedItem key={idx}>
                <motion.div
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FiStar key={i} className="text-royal-gold-500 fill-royal-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role} · {t.location}</p>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </FadeInUpStagger>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-8 sm:py-10 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeInUp className="flex flex-wrap justify-center items-center gap-6 sm:gap-12">
            <p className="text-gray-600 font-medium">Quality standards we meet:</p>
            {certifications.map((c, idx) => (
              <motion.span
                key={c.short}
                className="px-5 py-2 rounded-full bg-royal-blue-50 text-royal-blue-700 font-semibold text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                {c.label}
              </motion.span>
            ))}
          </FadeInUp>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-royal-blue-700 to-royal-blue-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Need a custom quote or bulk order?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Get in touch with our team. We respond within 24 hours and offer competitive pricing for retailers and clubs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <motion.span
                  className="inline-flex items-center gap-2 bg-white text-royal-blue-700 font-semibold px-6 py-3 rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact us
                </motion.span>
              </Link>
              <a href="https://wa.me/923237078473" target="_blank" rel="noopener noreferrer">
                <motion.span
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiMessageCircle className="text-xl" /> WhatsApp
                </motion.span>
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeInUp className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-royal-blue-100 text-royal-blue-600 flex items-center justify-center">
                <FiMail className="text-2xl" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Stay in the loop</h2>
            <p className="text-gray-600 mb-6">Get updates on new products, offers, and industry news. No spam.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-royal-blue-500"
              />
              <motion.button
                type="submit"
                className="bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold px-6 py-3 rounded-lg whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </FadeInUp>
        </div>
      </section>

      {/* Our Facility / Manufacturing strip */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/tuv-rheinland-recreation-and-sports-equipment.jpg"
            alt="Manufacturing"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-royal-blue-900/75" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeInUp>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm text-white mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <FiPlay className="text-3xl ml-1" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Manufacturing excellence in Sialkot
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
              Our facility combines skilled craftsmanship with modern technology to produce sports goods that meet international standards.
            </p>
            <Link href="/about">
              <motion.span
                className="inline-block bg-white text-royal-blue-700 font-semibold px-6 py-3 rounded-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn about us
              </motion.span>
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <FadeInUp className="relative order-2 lg:order-1" delay={0.1}>
              <div className="aspect-[4/3] relative bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src="/sports-products-500x500.webp"
                  alt="Sports Products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeInUp>
            <FadeInUp className="order-1 lg:order-2" delay={0.2}>
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
              <Link href="/about" className="inline-block">
                <motion.span
                  className="inline-block bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ABOUT
                </motion.span>
              </Link>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  )
}

