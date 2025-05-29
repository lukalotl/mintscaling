'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center geometric-bg pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <Image
                src="/assets/mintscaling_stacked.png"
                alt="Mintscaling"
                width={300}
                height={200}
                className="h-48 w-auto"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Transforming your digital presence with cutting-edge marketing strategies. 
              We scale your business through data-driven campaigns and innovative design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-mint-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-mint-600 transition-colors duration-200"
              >
                Get Started <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors duration-200"
              >
                <Play size={20} /> Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Geometric Design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Floating geometric shapes */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-10 right-10 w-20 h-20 bg-mint-500/20 rounded-lg backdrop-blur-sm"
              />
              
              <motion.div
                animate={{ 
                  rotate: -360,
                  y: [0, -20, 0]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-20 left-10 w-16 h-16 bg-mint-500/30 rounded-full backdrop-blur-sm"
              />
              
              <motion.div
                animate={{ 
                  rotate: 180,
                  x: [0, 20, 0]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-mint-500/20 to-mint-700/20 rounded-2xl backdrop-blur-sm"
              />
              
              {/* Central focus element */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-48 h-48 bg-gradient-to-br from-mint-500 to-mint-700 rounded-3xl glass-effect flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">100%</div>
                    <div className="text-sm text-mint-100">Growth Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 