"use client"

import { motion, useInView } from "framer-motion"
import { MessageSquare, Target, Code, Rocket, BarChart } from "lucide-react"
import { useRef } from "react"

const steps = [
  { icon: MessageSquare, title: "Discovery", description: "Understanding your vision and requirements" },
  { icon: Target, title: "Planning", description: "Strategic roadmap with clear milestones" },
  { icon: Code, title: "Development", description: "Building with cutting-edge technology" },
  { icon: Rocket, title: "Launch", description: "Deploy to production seamlessly" },
  { icon: BarChart, title: "Growth", description: "Optimize and scale continuously" },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section id="process" className="py-20 md:py-24 bg-black" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl [font-family:var(--font-pixel)] mb-4">How We Work</h2>
          <p className=" text-neutral-400 text-sm max-w-2xl mx-auto">
            A streamlined process designed for speed and quality.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* STATIC gradient line (Yellow → Blue) */}
          <div className="absolute left-8 md:left-1/2 inset-y-0 flex justify-center pointer-events-none">
            <div
              className="w-1 bg-linear-to-b from-yellow-300 via-blue-400/50 to-blue-500/20"
            ></div>
          </div>

          {/* ANIMATED fill line */}
          <motion.div
            className="absolute left-8 md:left-1/2 -translate-x-1/2 w-1 bg-linear-to-b from-yellow-300 to-blue-400"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="space-y-12 md:space-y-20 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center 
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-10 pl-20 md:pl-0`}
                >
                  {/* CARD */}
                  <motion.div
                    className="flex-1 w-full md:w-auto md:px-16"
                    whileHover={{ x: isEven ? 5 : -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className="p-5 rounded-2xl bg-card border border-yellow-400/20 
                      hover:border-yellow-400/60 transition-all duration-500 relative overflow-hidden"
                    >
                      {/* Glow hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-yellow-300/10 via-transparent to-transparent transition-opacity duration-500"
                      />

                      {/* Content */}
                      <div className="relative z-10 flex items-start gap-4">
                        <motion.div
                          className="w-12 h-12 rounded-xl bg-yellow-300/10 
                            flex items-center justify-center shrink-0 
                            group-hover:bg-yellow-300/20 transition-colors duration-300"
                          whileHover={{ scale: 1.1, rotate: 8 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>

                        <div>
                          <h3 className="text-lg font-semibold mb-1 text-yellow-100">{step.title}</h3>
                          <p className="text-xs text-neutral-400">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* NUMBER BADGE */}
                  <motion.div
                    className="absolute 
                    left-2 md:left-1/2 
                    md:-translate-x-1/2 
                    w-12 h-12 md:w-16 md:h-16 
                    rounded-full bg-background 
                    border-4 border-yellow-400 
                    flex items-center justify-center 
                    shadow-lg z-20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                  >
                    <span className="text-white font-bold text-base md:text-lg">{index + 1}</span>
                  </motion.div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
