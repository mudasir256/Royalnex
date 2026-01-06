import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Royalnex Sports Industries - Premium Sports Equipment Manufacturer',
  description: 'Leading manufacturer and supplier of high-quality sports goods including soccer balls, handballs, volleyballs, rugby balls, futsal, and goalkeeper gloves. International sports equipment supplier.',
  keywords: 'sports equipment, soccer balls, sports manufacturing, international sports supplier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}

