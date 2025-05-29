'use client'

import { motion } from 'framer-motion'
import { Target, TrendingUp, Users, Zap } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Social Media Ad Campaigns',
    description: 'Strategic social media advertising that reaches your target audience and drives meaningful engagement across all platforms.',
    features: ['Multi-platform campaigns', 'Audience targeting', 'A/B testing', 'Performance analytics']
  },
  {
    icon: TrendingUp,
    title: 'Optimizing Exposure & Results',
    description: 'Data-driven optimization strategies that maximize your reach and convert prospects into loyal customers.',
    features: ['Conversion optimization', 'ROI maximization', 'Performance tracking', 'Strategic insights']
  },
  {
    icon: Target,
    title: 'Tracking Sales & Leads',
    description: 'Comprehensive tracking systems that monitor every touchpoint in your customer journey for maximum visibility.',
    features: ['Lead attribution', 'Sales funnel analysis', 'Customer journey mapping', 'Real-time reporting']
  },
  {
    icon: Zap,
    title: 'Effective Digital Ad Design',
    description: 'Compelling creative designs that capture attention and drive action across all digital advertising platforms.',
    features: ['Creative strategy', 'Visual storytelling', 'Brand consistency', 'Performance-focused design']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to scale your business 
            and maximize your return on investment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-mint-500/20 rounded-2xl flex items-center justify-center mr-4">
                  <service.icon size={32} className="text-mint-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-mint-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-mint-500 font-semibold hover:text-mint-400 transition-colors duration-200"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 