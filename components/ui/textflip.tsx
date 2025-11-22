"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface TextFlipProps {
  words: string[]
  className?: string
}

export function TextFlip({ words, className }: TextFlipProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className={`inline-grid place-items-center overflow-hidden h-[1.2em] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="block bg-linear-to-r from-yellow-300 via-amber-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_6px_18px_rgba(250,204,21,0.45)]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
