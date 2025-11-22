"use client"

import type React from "react"

import { motion, useMotionValue } from "framer-motion"
import { Cpu, Shield, Zap, Lock, Globe, Server } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

// Hook for mouse tracking 3D tilt effect
function useTiltEffect() {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  function onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * -10 // Max -10 to 10 deg
    const rotateYValue = ((x - centerX) / centerX) * 10 // Max -10 to 10 deg

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  function onMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return { rotateX, rotateY, onMouseMove, onMouseLeave }
}

export function FeaturesSection() {
  return (
    <section className="py-5 lg:py-10 bg-black text-white overflow-hidden relative">
      {/* Background Ambient Noise/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-3xl lg:text-4xl [font-family:var(--font-pixel)] mb-6 tracking-wider bg-clip-text text-transparent bg-linear-to-b from-yellow-300 to-white/60">
            Unleash Your Potential
          </h2>
          <p className="text-sm md:text-md text-zinc-400 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Experience the next generation of digital workflow. Built for speed, security, and intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto perspective-1000">
          <FeatureCard
            title="AI-Powered Automation"
            description="Neural networks that adapt to your workflow in real-time."
            icon={Cpu}
            imageQuery="abstract neural network artificial intelligence glowing nodes 3d render neon blue"
            accentColor="cyan"
            WorkflowComponent={<AIWorkflow />}
            delay={0}
          />
          <FeatureCard
            title="Fortress Security"
            description="Bank-grade encryption with active threat scanning."
            icon={Shield}
            imageQuery="cyber security digital shield fortress lock hexagonal grid 3d render gold"
            accentColor="amber"
            WorkflowComponent={<SecurityWorkflow />}
            delay={0.2}
          />
          <FeatureCard
            title="Hypersonic Speed"
            description="Global edge network delivering sub-millisecond latency."
            icon={Zap}
            imageQuery="warp speed light tunnel high velocity motion blur abstract 3d render purple"
            accentColor="violet"
            WorkflowComponent={<SpeedWorkflow />}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  title,
  description,
  icon: Icon,
  imageQuery,
  accentColor,
  WorkflowComponent,
  delay,
}: {
  title: string
  description: string
  icon: any
  imageQuery: string
  accentColor: "cyan" | "amber" | "violet"
  WorkflowComponent: React.ReactNode
  delay: number
}) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTiltEffect()
  const [isHovered, setIsHovered] = useState(false)

  const colorMap = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)]",
    amber: "group-hover:border-amber-500/50 group-hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]",
    violet: "group-hover:border-violet-500/50 group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)]",
  }

  const iconColorMap = {
    cyan: "text-cyan-400",
    amber: "text-amber-400",
    violet: "text-violet-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={(e) => {
        onMouseLeave()
        setIsHovered(false)
      }}
      onMouseEnter={() => setIsHovered(true)}
      className={`relative group h-[400px] w-80 rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden transition-colors duration-500 ${colorMap[accentColor]}`}
    >
      {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
        <Image
          src={`/.jpg?height=800&width=600&query=${encodeURIComponent(imageQuery)}`}
          alt={title}
          fill
          className="object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/90 via-zinc-950/80 to-zinc-950/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 ${iconColorMap[accentColor]}`}
          >
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl  tracking-tight">{title}</h3>
        </div>

        {/* Workflow Animation Area */}
        <div className="flex-1 w-full relative rounded-xl border border-white/5 bg-black/20 backdrop-blur-3xl overflow-hidden mb-6 group-hover:border-white/20 transition-colors duration-500">
          {WorkflowComponent}
        </div>

        {/* Content */}
        <div>
          <p className="text-zinc-300  text-sm leading-relaxed font-light tracking-wide mb-4">{description}</p>
          <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
            <span>Learn more</span>
            <motion.span className="ml-2" animate={{ x: isHovered ? 5 : 0 }}>
              →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// 1. AI Workflow Animation Component
function AIWorkflow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full p-4">
        {/* Glowing nodes network */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            initial={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 100 - 50,
              opacity: 0.4,
            }}
            animate={{
              x: [null, Math.random() * 240, Math.random() * 240],
              y: [null, Math.random() * 140, Math.random() * 140],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}

        {/* Central AI Brain */}
        <motion.div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-full border-2 border-cyan-500/30 flex items-center justify-center bg-cyan-900/20 backdrop-blur-md relative z-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Cpu className="w-8 h-8 text-cyan-400" />
          </motion.div>
          {/* Pulsing Rings */}
          <motion.div
            className="absolute w-16 h-16 rounded-full border border-cyan-500/50"
            animate={{ scale: [1, 2], opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute w-16 h-16 rounded-full border border-cyan-500/30"
            animate={{ scale: [1, 2.5], opacity: [1, 0] }}
            transition={{ duration: 2, delay: 0.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        {/* Connecting Lines SVG Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <motion.path
            d="M50,50 Q150,100 250,50"
            stroke="cyan"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <motion.path
            d="M50,150 Q150,100 250,150"
            stroke="cyan"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          />
        </svg>
      </div>
    </div>
  )
}

// 2. Security Workflow Animation Component
function SecurityWorkflow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Shield Container */}
      <div className="relative w-32 h-40">
        {/* Scanning Bar */}
        <motion.div
          className="absolute left-0 right-0 h-1 bg-amber-400 z-20 shadow-[0_0_20px_rgba(245,158,11,0.8)]"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Shield Icon */}
        <Shield className="w-full h-full text-amber-500/20" strokeWidth={1} />

        {/* Locked State */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, times: [0.4, 0.5, 0.9, 1] }}
        >
          <div className="bg-amber-500/20 p-4 rounded-full backdrop-blur-sm border border-amber-500/50">
            <Lock className="w-8 h-8 text-amber-400" />
          </div>
        </motion.div>

        {/* Threat Particles being blocked */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full"
            initial={{ x: -50, y: Math.random() * 100, opacity: 0 }}
            animate={{
              x: 60,
              y: 60,
              opacity: [0, 1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.8,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// 3. Speed Workflow Animation Component
function SpeedWorkflow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-violet-950/30">
      {/* Speed Lines */}
        {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-violet-400/50"
          style={{
            width: Math.random() * 100 + 50,
            top: Math.random() * 100 + "%",
            left: -100,
          }}
          animate={{
            x: ["0%", "400%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Server Icons moving fast */}
      <div className="flex gap-8 items-center z-10">
        <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY }}>
          <Server className="w-12 h-12 text-violet-500/50" />
        </motion.div>

        {/* Data Packet */}
        <motion.div
          className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_white]"
          animate={{ x: [-50, 50] }}
          transition={{ duration: 0.4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "circInOut" }}
        />

        <motion.div
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
        >
          <Globe className="w-12 h-12 text-violet-500/50" />
        </motion.div>
      </div>

      {/* Energy Burst Overlay */}
      <motion.div
        className="absolute inset-0 bg-violet-500/10 mix-blend-overlay"
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
      />
    </div>
  )
}
