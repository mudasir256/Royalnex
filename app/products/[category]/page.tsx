'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiGrid, FiList, FiArrowLeft } from 'react-icons/fi'
import { getProductsByCategory } from '@/lib/products'

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.replace(/-/g, ' ').toUpperCase()
  const products = getProductsByCategory(params.category)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-royal-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider mb-4">SHOP</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{categoryName}</h1>
          <div className="flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-royal-gold-400">HOME</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-royal-gold-400">OUR PRODUCTS</Link>
            <span>/</span>
            <span>{categoryName}</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
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

