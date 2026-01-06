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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h2>
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
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-royal-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FiMapPin className="text-royal-blue-600 text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Address</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Sialkot, Pakistan<br />
                      International Sports Goods Manufacturer
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-royal-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FiPhone className="text-royal-blue-600 text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+92 323 7078473</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-royal-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FiMail className="text-royal-blue-600 text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">info@royalnexsports.com</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-8 sm:mt-12 bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">WHAT HAPPENS AFTER I PLACE AN ORDER?</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      When your order is placed on the website, you will see a "Thank You" page. This is confirmation 
                      that your order has successfully been placed. Your order is then sent over a secure connection 
                      to the Royalnex Sports support department. You will receive an email confirmation once your 
                      order has been received by us.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">WHAT IF I DON'T GET AN ORDER CONFIRMATION EMAIL?</h4>
                    <p className="text-gray-600 text-sm">
                      If you don't receive a confirmation email, please check your spam folder or contact us directly 
                      through our contact form or WhatsApp.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">DO YOU OFFER BULK DISCOUNTS?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, we offer competitive pricing for bulk orders. Please contact us with your requirements 
                      for a custom quote.
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

