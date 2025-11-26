"use client"

import { motion } from "framer-motion"
import { TextFlip } from "../ui/textflip"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-15 md:pt-20 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(120)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-blue-600 rounded-full blur-[0.5px]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2 + Math.random() * 0.5,
              scale: 0.4 + Math.random() * 0.8,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2 + Math.random() * 0.5,
              scale: 0.4 + Math.random() * 0.8,
            }}
            transition={{
              duration: 7 + Math.random() * 7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-12%] left-[-10%] w-[42%] h-[42%] bg-yellow-300/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-12%] w-[45%] h-[45%] bg-amber-500/15 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-muted-foreground mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Accepting new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl tracking-tight mb-6 leading-relaxed [font-family:var(--font-pixel)]"
          >
            We build scalable <br />
            <TextFlip
              words={["AI Solutions", "Web Platforms", "Mobile Apps", "Automations"]}
              className="ml-2 text-2xl md:text-5xl"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs md:text-sm text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Inityo is a full-stack digital agency delivering AI-powered, automated, and scalable
            solutions tailored for the US market. Stop configuring, start innovating.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-yellow-300 via-amber-400 to-yellow-500 px-10 font-semibold text-slate-900 shadow-[0_30px_60px_rgba(250,204,21,0.35)] transition-all duration-300 w-65 sm:w-auto hover:shadow-[0_40px_70px_rgba(250,204,21,0.45)]">
              <span className="mr-2">Book a 15 min call</span>
              <ArrowRight className="w-4 h-4 text-slate-900 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
          >
            {["US-Market Standards", "Agile Development", "24/7 Support"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                <span className="[font-family:var(--font-pixel)] text-xs md:text-md">{item}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
    </section>
  )
}
