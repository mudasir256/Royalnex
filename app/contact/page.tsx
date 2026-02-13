import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-royal-blue-700 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">GET IN TOUCH</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">CONTACT US</h1>
          <p className="text-royal-blue-100 text-sm sm:text-base max-w-2xl mx-auto mb-4">
            Have a question about our products, pricing, or custom orders? We&apos;re here to help. 
            Reach out via the form below, email, or WhatsApp — we typically respond within 24 hours.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <span>HOME</span>
            <span>/</span>
            <span>CONTACT</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Tell us your requirements, MOQ, or ask for a quote. We&apos;ll get back to you as soon as possible.</p>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-blue-600 text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-blue-600 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-blue-600 text-sm sm:text-base"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-blue-600 text-sm sm:text-base"
                    placeholder="Your Message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <FiSend /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h2>
              <p className="text-gray-600 text-sm mb-4">We respond to inquiries within 24 hours (business days). For fastest response, use WhatsApp.</p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-royal-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FiMapPin className="text-royal-blue-600 text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Address</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Sialkot, Pakistan<br />
                      <span className="text-gray-500">World-renowned hub for sports goods manufacturing</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-royal-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FiPhone className="text-royal-blue-600 text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Phone / WhatsApp</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a href="tel:+923237078473" className="hover:text-royal-blue-600">+92 323 7078473</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-royal-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FiMail className="text-royal-blue-600 text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a href="mailto:info@royalnexsports.com" className="hover:text-royal-blue-600">info@royalnexsports.com</a>
                    </p>
                  </div>
                </div>
                <div className="bg-royal-blue-50 border border-royal-blue-100 rounded-lg p-3 text-sm text-gray-700">
                  <strong>Office hours (PKT):</strong> Mon–Sat, 9:00 AM – 6:00 PM. Inquiries outside these hours are answered the next business day.
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-8 sm:mt-12 bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">What happens after I send an inquiry?</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      We will acknowledge your message and send a detailed response (quote, MOQ, or product info) typically within 24 hours. 
                      For large or custom orders we may schedule a call or video meeting.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Do you offer samples?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes. Sample orders are available for most product lines. Contact us with the product type and your requirements; we&apos;ll provide sample pricing and lead time.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">What is your minimum order quantity (MOQ)?</h4>
                    <p className="text-gray-600 text-sm">
                      MOQ varies by product (e.g. balls, jerseys, gloves). We try to be flexible for new customers. Share your quantity and we&apos;ll confirm MOQ and pricing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Do you do customization and private label?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes. We offer OEM and ODM: custom colors, logos, packaging, and branding. Send us your design or requirements and we&apos;ll provide a quote.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">How do you ship and what payment methods do you accept?</h4>
                    <p className="text-gray-600 text-sm">
                      We ship worldwide by sea and air. Payment terms (T/T, L/C, etc.) and shipping options are discussed per order. We work with reliable freight partners for safe delivery.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Do you offer bulk discounts?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes. We offer competitive pricing for bulk and repeat orders. Contact us with your quantity and product mix for a custom quote.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

