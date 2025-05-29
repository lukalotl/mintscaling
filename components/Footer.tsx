'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, ArrowUp } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <Image
                src="/assets/mintscaling.png"
                alt="Mintscaling"
                width={160}
                height={35}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Scaling your business through innovative digital marketing strategies 
              and data-driven optimization.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>352•397•7284</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>kian@mintscaling.com</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Social Media Ad Campaigns</li>
              <li>Optimizing Exposure & Results</li>
              <li>Tracking Sales & Leads</li>
              <li>Effective Digital Ad Design</li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-mint-500 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-mint-500 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-mint-500 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-mint-500 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Mintscaling. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-mint-500/20 text-mint-500 p-3 rounded-full hover:bg-mint-500/30 transition-colors duration-200"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
} 