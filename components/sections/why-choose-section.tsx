"use client"
import { motion } from "framer-motion"
import { BarChart, CheckCircle2, Cloud, Cpu, Database, Globe, Smartphone, Zap } from "lucide-react"

export const WhyChooseSection = () => {
  const USP_POINTS = [
    {
      title: "US-Market Standards",
      text: "Quality that matches Silicon Valley at a fraction of the cost.",
    },
    {
      title: "Fast & Scalable",
      text: "Agile development cycles ensuring rapid delivery and future-proof code.",
    },
    {
      title: "24/7 Support",
      text: "Dedicated project managers available round the clock for seamless updates.",
    },
  ]

  const DETAILED_FEATURES = [
    "Cloud Deployment (AWS, GCP, Azure)",
    "Lead Generation Automation",
    "eCommerce Store Setup (Shopify/Custom)",
    "App Store Optimization (ASO)",
    "Product Photography AI Enhancement",
    "Security & Bug Fixing Support",
  ]

  return (
    <section id="about" className="py-15 md:py-28 relative overflow-hidden bg-dark-950">
      <div className="absolute right-10 bg-yellow-200/10 top-0 w-1/2 h-full bg-brand-500/5 blur-[150px]" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl [font-family:var(--font-pixel)] text-white mb-8 md:mb-12 leading-tight md:tracking-tight tracking-widest">
              Why Global Brands Trust{" "}
              <span className="text-brand-500 border-b-4 border-brand-500/30 text-yellow-300">Inityo</span>
            </h2>
            <div className="space-y-8 md:space-y-10">
              {USP_POINTS.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="mt-1 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center group-hover:border-brand-500 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-brand-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className=" md:text-lg  text-white mb-2 group-hover:text-brand-200 transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-xs md:text-sm">{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 md:p-8 bg-linear-to-r from-dark-900 to-transparent rounded-xl border border-yellow-100/20 backdrop-blur-sm">
              <h5 className="text-white [font-family:var(--font-pixel)] mb-6 flex items-center gap-3 text-xs">
                <Zap className="w-5 h-5 text-brand-400  text-yellow-300" /> Additional Capabilities
              </h5>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {DETAILED_FEATURES.map((f) => (
                  <span
                    key={f}
                    className="text-xs  text-gray-300 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 hover:border-brand-500/30 hover:text-white transition-all cursor-default"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-tr from-brand-900/20 to-transparent rounded-full blur-3xl" />

            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-dark-900 border-4 border-brand-500 flex items-center justify-center z-20 shadow-[0_0_60px_rgba(132,204,22,0.3)]"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-yellow-300 tracking-tighter">I</div>
                  <div className="text-[8px] md:text-[10px] text-brand-400 font-bold uppercase tracking-widest">
                    Core
                  </div>
                </div>
              </motion.div>

              {[
                { icon: Cpu, label: "AI", angle: 0, delay: 0 },
                { icon: Globe, label: "Web", angle: 60, delay: 1 },
                { icon: Smartphone, label: "App", angle: 120, delay: 2 },
                { icon: BarChart, label: "SEO", angle: 180, delay: 3 },
                { icon: Database, label: "Data", angle: 240, delay: 4 },
                { icon: Cloud, label: "Cloud", angle: 300, delay: 5 },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: -node.delay * 2,
                  }}
                >
                  <motion.div
                    className="absolute -top-28 md:-top-40 left-0 flex flex-col items-center gap-2"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: -node.delay * 2,
                    }}
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-dark-800 rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl hover:border-brand-500 transition-colors">
                      <node.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-400" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-gray-400 bg-dark-950 px-2 py-1 rounded border border-white/5">
                      {node.label}
                    </span>
                  </motion.div>

                  <div className="absolute top-0 left-0 h-28 md:h-40 w-[1] bg-linear-to-b from-brand-500/20 to-transparent origin-bottom rotate-180" />
                </motion.div>
              ))}

              <div className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full border border-white/5" />
              <div className="absolute w-[320px] h-80 md:w-[450px] md:h-[450px] rounded-full border border-dashed border-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
