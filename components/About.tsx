'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Users, Zap } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Zap, value: '250%', label: 'Average ROI' },
  { icon: Clock, value: '24/7', label: 'Support' },
  { icon: Award, value: '98%', label: 'Success Rate' }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Mintscaling</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We are a cutting-edge digital marketing agency specializing in scaling businesses 
              through innovative advertising strategies and data-driven optimization.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our team combines creative excellence with technical expertise to deliver 
              campaigns that not only look great but drive real, measurable results. 
              From social media advertising to comprehensive lead tracking, we provide 
              the tools and strategies your business needs to thrive in the digital landscape.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-mint-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-mint-600 transition-colors duration-200">
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-mint-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-mint-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              <span className="gradient-text">Our Mission</span>
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              To empower businesses with innovative digital marketing solutions that drive 
              sustainable growth, maximize ROI, and create lasting connections between 
              brands and their audiences in an ever-evolving digital landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 