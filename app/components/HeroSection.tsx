"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const rotatingWords = ["Velocity", "Momentum", "Growth", "Impact"]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (!mounted) return

    const currentWord = rotatingWords[currentWordIndex]
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (currentText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, 60)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 800)
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 40)
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, isTyping, currentWordIndex, mounted])

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-gutter relative">
        <div className="max-w-content mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-20 bg-luxury-gold/20 rounded mb-6"></div>
            <div className="h-6 bg-luxury-gold/10 rounded mb-8 max-w-2xl mx-auto"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-12 w-32 bg-luxury-gold/20 rounded"></div>
              <div className="h-12 w-32 bg-luxury-gold/10 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-gutter relative pb-0">
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="hero-glassmorphism"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}
          >
            <span className="text-luxury-charcoal">Turn Vision into </span>
            <span className="gradient-text">Velocity</span>
          </motion.h1>

          {/* Rotating Keyword Loop */}
          <div className="text-2xl md:text-3xl mb-8" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
            <span className="text-luxury-charcoal">Turn Vision into </span>
            <span className={`gradient-text typewriter`}>{currentText}</span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-luxury-charcoal mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Velkara is the evolution of Go-To-Market — blending strategic execution, AI-powered automation, and
            full-cycle growth experience design into one unified framework.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/contact" className="btn-primary-enhanced">
              Get Your Free GTM Audit
              <span className="arrow-icon">→</span>
            </Link>

            <Link href="/services" className="btn-secondary-enhanced">
              Explore Our Services
            </Link>
          </motion.div>

          {/* Animated Chevron */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex justify-center"
          >
            <ChevronDownIcon className="h-8 w-8 text-luxury-gold chevron-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
