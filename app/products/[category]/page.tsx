'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiGrid, FiList, FiArrowLeft } from 'react-icons/fi'
import { getProductsByCategory } from '@/lib/products'

const categoryDescriptions: Record<string, string> = {
  'soccer-balls': 'Our soccer balls are hand-stitched or machine-stitched for training, match, and recreational use. Available in official sizes with custom branding for clubs and retailers.',
  'rugby-balls': 'Rugby balls built for durability and grip in all conditions. We supply size 4 and size 5 for training and match play, with options for custom colors and logos.',
  'volleyballs': 'Indoor and outdoor volleyballs for clubs, schools, and leagues. High-quality construction and consistent bounce for reliable performance.',
  'handballs': 'Team handball and recreational handballs for professional and amateur use. Multiple sizes and designs available for bulk and custom orders.',
  'futsal': 'Futsal balls designed for indoor and hard-surface play. Reduced bounce and superior control for the fast-paced game.',
  'sports-wear': 'Soccer, basketball, cricket, rugby, volleyball, and more. Jerseys, shorts, and full kits in sublimated and standard fabrics, with custom designs and sizes.',
  'goalkeeper-gloves': 'Goalkeeper gloves for all levels — from training to professional. Various cuts, palm types, and sizes with optional branding.',
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.replace(/-/g, ' ').toUpperCase()
  const products = getProductsByCategory(params.category)
  const description = categoryDescriptions[params.category] || `Browse our ${categoryName} range. All items are available for bulk orders and custom branding.`

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-royal-blue-700 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">SHOP</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{categoryName}</h1>
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base mb-4">
            <Link href="/" className="hover:text-royal-gold-400">HOME</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-royal-gold-400">OUR PRODUCTS</Link>
            <span>/</span>
            <span>{categoryName}</span>
          </div>
        </div>
      </section>

      {/* Category intro + Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <Link href="/products" className="flex items-center gap-2 text-royal-blue-600 hover:text-royal-blue-700">
              <FiArrowLeft /> Back to Products
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Show:</span>
              <select className="border border-gray-300 rounded px-3 py-1">
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
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${params.category}/product-${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
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
                  <p className="text-gray-600 text-sm">{product.size}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

