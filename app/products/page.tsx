'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiGrid, FiList } from 'react-icons/fi'
import { getProductsByCategory } from '@/lib/products'

export default function Products() {
  // Get products from all categories (include category for correct links)
  const allProducts = [
    ...getProductsByCategory('soccer-balls').slice(0, 2).map((p) => ({ ...p, category: 'soccer-balls' as const })),
    ...getProductsByCategory('rugby-balls').slice(0, 1).map((p) => ({ ...p, category: 'rugby-balls' as const })),
    ...getProductsByCategory('volleyballs').slice(0, 1).map((p) => ({ ...p, category: 'volleyballs' as const })),
    ...getProductsByCategory('sports-wear').slice(0, 1).map((p) => ({ ...p, category: 'sports-wear' as const })),
    ...getProductsByCategory('goalkeeper-gloves').slice(0, 1).map((p) => ({ ...p, category: 'goalkeeper-gloves' as const })),
  ]
  const categories = [
    { name: 'SOCCER BALLS', slug: 'soccer-balls' },
    { name: 'HANDBALLS', slug: 'handballs' },
    { name: 'VOLLEYBALLS', slug: 'volleyballs' },
    { name: 'RUGBY BALLS', slug: 'rugby-balls' },
    { name: 'GOALKEEPER GLOVES', slug: 'goalkeeper-gloves' },
    { name: 'FUTSAL', slug: 'futsal' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-royal-blue-700 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">SHOP</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">OUR PRODUCTS</h1>
          <p className="text-royal-blue-100 text-sm sm:text-base max-w-2xl mx-auto mb-4">
            Explore our range of sports balls, sportswear, casual wear, and gloves. All products are available for bulk orders, 
            custom branding, and worldwide delivery. Click a category above or browse the selection below.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <span>HOME</span>
            <span>/</span>
            <span>OUR PRODUCTS</span>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="bg-white border-b sticky top-[72px] sm:top-20 z-40 overflow-x-auto">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 py-3 sm:py-4">
            {categories.map((category, idx) => (
              <Link
                key={idx}
                href={`/products/${category.slug}`}
                className="text-gray-700 hover:text-royal-blue-600 font-medium transition-colors border-b-2 border-transparent hover:border-royal-blue-600 pb-2 text-xs sm:text-sm whitespace-nowrap"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <p className="text-gray-600 text-sm sm:text-base">Showing all products</p>
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-gray-600 text-sm sm:text-base hidden sm:inline">Show:</span>
              <select className="border border-gray-300 rounded px-2 sm:px-3 py-1 text-sm">
                <option>9</option>
                <option>12</option>
                <option>18</option>
                <option>24</option>
              </select>
              <div className="flex gap-2">
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                  <FiGrid />
                </button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                  <FiList />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {allProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square relative bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">{product.type}</p>
                  <p className="text-gray-600 text-sm mb-4">{product.size}</p>
                  <Link
                    href={`/products/${product.category}/product-${product.id}`}
                    className="inline-block bg-royal-blue-600 hover:bg-royal-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

