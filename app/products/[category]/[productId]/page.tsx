'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft, FiShoppingCart } from 'react-icons/fi'
import { getProductsByCategory } from '@/lib/products'

export default function ProductDetail({ 
  params 
}: { 
  params: { category: string; productId: string } 
}) {
  const categoryName = params.category.replace(/-/g, ' ').toUpperCase()
  const products = getProductsByCategory(params.category)
  const productId = parseInt(params.productId.replace('product-', '')) || 1
  const product = products[productId - 1] || products[0]
  const relatedProducts = products.filter((p, idx) => idx !== productId - 1).slice(0, 4)
  
  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-royal-blue-600 hover:text-royal-blue-700">HOME</Link>
            <span>/</span>
            <Link href="/products" className="text-royal-blue-600 hover:text-royal-blue-700">PRODUCTS</Link>
            <span>/</span>
            <Link href={`/products/${params.category}`} className="text-royal-blue-600 hover:text-royal-blue-700">
              {categoryName}
            </Link>
            <span>/</span>
            <span className="text-gray-600">Product Details</span>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Link 
            href={`/products/${params.category}`}
            className="inline-flex items-center gap-2 text-royal-blue-600 hover:text-royal-blue-700 mb-8"
          >
            <FiArrowLeft /> Back to {categoryName}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Product Image */}
            <div>
              <div className="aspect-square relative bg-gray-100 rounded-xl overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {[product, ...relatedProducts.slice(0, 3)].map((p, idx) => (
                  <div key={idx} className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 25vw, 12.5vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="mb-6">
                <h3 className="text-sm text-gray-500 mb-2">SPECIFICATIONS</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-semibold w-40 mb-1 sm:mb-0">Type:</span>
                    <span>{product.type}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-semibold w-40 mb-1 sm:mb-0">Size:</span>
                    <span>{product.size}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-semibold w-40 mb-1 sm:mb-0">Panel Configuration:</span>
                    <span>4 Panel Conventional</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-semibold w-40 mb-1 sm:mb-0">Design Series:</span>
                    <span>{product.type}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-semibold w-40 mb-1 sm:mb-0">Casing Material:</span>
                    <span>High Abrasion resistant. Vulcanized/cured rubber. Specially formulated rubber compound for extra softness and grip feel.</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-semibold w-40 mb-1 sm:mb-0">Lining:</span>
                    <span>High density inter-wining poly-cotton fabrics</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-semibold w-40 mb-1 sm:mb-0">Bladder:</span>
                    <span>Latex bladder for better air retention</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm text-gray-500 mb-2">DESCRIPTION</h3>
                <p className="text-gray-700">
                  {product.name} is a training quality product. It meets or exceeds international requirements/standards. 
                  Crafted with precision and premium materials for optimal performance. This {product.type.toLowerCase()} 
                  product is designed for professional, training, and recreational use.
                </p>
              </div>

              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <FiShoppingCart /> Enquire Product
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/products/${params.category}/product-${p.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square relative bg-gray-100">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{p.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{p.type}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

