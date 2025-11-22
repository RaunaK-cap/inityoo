"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Complete e-commerce solution with AI recommendations and analytics.',
    image: '/modern-ecommerce-dashboard.png',
    metrics: '300% increase in conversions',
  },
  {
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description: 'HIPAA-compliant telemedicine platform for iOS and Android.',
    image: '/healthcare-mobile-app.png',
    metrics: '50K+ active users',
  },
  {
    title: 'AI Automation Suite',
    category: 'AI Integration',
    description: 'Custom AI tools for workflow automation and data processing.',
    image: '/ai-automation-dashboard.jpg',
    metrics: '80% time saved',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Enterprise analytics platform with real-time data visualization.',
    image: '/saas-analytics-dashboard.png',
    metrics: '$2M+ ARR',
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Real results from real clients. See how we've helped businesses transform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-chart-5/20 opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-foreground opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                </div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-xs font-medium text-accent mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="text-sm font-semibold text-foreground">{project.metrics}</div>
                    <Button variant="ghost" size="sm" className="group/btn p-0 h-auto font-medium hover:bg-transparent hover:text-accent">
                      View Case Study
                      <ArrowUpRight className="ml-1 w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
